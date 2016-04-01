/* */ 
(function(Buffer) {
  'use strict';
  var BN = require('./bn');
  var Point = require('./point');
  var Signature = require('./signature');
  var PublicKey = require('../publickey');
  var Random = require('./random');
  var Hash = require('./hash');
  var BufferUtil = require('../util/buffer');
  var _ = require('lodash');
  var $ = require('../util/preconditions');
  var ECDSA = function ECDSA(obj) {
    if (!(this instanceof ECDSA)) {
      return new ECDSA(obj);
    }
    if (obj) {
      this.set(obj);
    }
  };
  ECDSA.prototype.set = function(obj) {
    this.hashbuf = obj.hashbuf || this.hashbuf;
    this.endian = obj.endian || this.endian;
    this.privkey = obj.privkey || this.privkey;
    this.pubkey = obj.pubkey || (this.privkey ? this.privkey.publicKey : this.pubkey);
    this.sig = obj.sig || this.sig;
    this.k = obj.k || this.k;
    this.verified = obj.verified || this.verified;
    return this;
  };
  ECDSA.prototype.privkey2pubkey = function() {
    this.pubkey = this.privkey.toPublicKey();
  };
  ECDSA.prototype.calci = function() {
    for (var i = 0; i < 4; i++) {
      this.sig.i = i;
      var Qprime;
      try {
        Qprime = this.toPublicKey();
      } catch (e) {
        console.error(e);
        continue;
      }
      if (Qprime.point.eq(this.pubkey.point)) {
        this.sig.compressed = this.pubkey.compressed;
        return this;
      }
    }
    this.sig.i = undefined;
    throw new Error('Unable to find valid recovery factor');
  };
  ECDSA.fromString = function(str) {
    var obj = JSON.parse(str);
    return new ECDSA(obj);
  };
  ECDSA.prototype.randomK = function() {
    var N = Point.getN();
    var k;
    do {
      k = BN.fromBuffer(Random.getRandomBuffer(32));
    } while (!(k.lt(N) && k.gt(BN.Zero)));
    this.k = k;
    return this;
  };
  ECDSA.prototype.deterministicK = function(badrs) {
    if (_.isUndefined(badrs)) {
      badrs = 0;
    }
    var v = new Buffer(32);
    v.fill(0x01);
    var k = new Buffer(32);
    k.fill(0x00);
    var x = this.privkey.bn.toBuffer({size: 32});
    k = Hash.sha256hmac(Buffer.concat([v, new Buffer([0x00]), x, this.hashbuf]), k);
    v = Hash.sha256hmac(v, k);
    k = Hash.sha256hmac(Buffer.concat([v, new Buffer([0x01]), x, this.hashbuf]), k);
    v = Hash.sha256hmac(v, k);
    v = Hash.sha256hmac(v, k);
    var T = BN.fromBuffer(v);
    var N = Point.getN();
    for (var i = 0; i < badrs || !(T.lt(N) && T.gt(BN.Zero)); i++) {
      k = Hash.sha256hmac(Buffer.concat([v, new Buffer([0x00])]), k);
      v = Hash.sha256hmac(v, k);
      v = Hash.sha256hmac(v, k);
      T = BN.fromBuffer(v);
    }
    this.k = T;
    return this;
  };
  ECDSA.prototype.toPublicKey = function() {
    var i = this.sig.i;
    $.checkArgument(i === 0 || i === 1 || i === 2 || i === 3, new Error('i must be equal to 0, 1, 2, or 3'));
    var e = BN.fromBuffer(this.hashbuf);
    var r = this.sig.r;
    var s = this.sig.s;
    var isYOdd = i & 1;
    var isSecondKey = i >> 1;
    var n = Point.getN();
    var G = Point.getG();
    var x = isSecondKey ? r.add(n) : r;
    var R = Point.fromX(isYOdd, x);
    var nR = R.mul(n);
    if (!nR.isInfinity()) {
      throw new Error('nR is not a valid curve point');
    }
    var eNeg = e.neg().mod(n);
    var rInv = r.invm(n);
    var Q = R.mul(s).add(G.mul(eNeg)).mul(rInv);
    var pubkey = PublicKey.fromPoint(Q, this.sig.compressed);
    return pubkey;
  };
  ECDSA.prototype.sigError = function() {
    if (!BufferUtil.isBuffer(this.hashbuf) || this.hashbuf.length !== 32) {
      return 'hashbuf must be a 32 byte buffer';
    }
    var r = this.sig.r;
    var s = this.sig.s;
    if (!(r.gt(BN.Zero) && r.lt(Point.getN())) || !(s.gt(BN.Zero) && s.lt(Point.getN()))) {
      return 'r and s not in range';
    }
    var e = BN.fromBuffer(this.hashbuf, this.endian ? {endian: this.endian} : undefined);
    var n = Point.getN();
    var sinv = s.invm(n);
    var u1 = sinv.mul(e).mod(n);
    var u2 = sinv.mul(r).mod(n);
    var p = Point.getG().mulAdd(u1, this.pubkey.point, u2);
    if (p.isInfinity()) {
      return 'p is infinity';
    }
    if (p.getX().mod(n).cmp(r) !== 0) {
      return 'Invalid signature';
    } else {
      return false;
    }
  };
  ECDSA.toLowS = function(s) {
    if (s.gt(BN.fromBuffer(new Buffer('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0', 'hex')))) {
      s = Point.getN().sub(s);
    }
    return s;
  };
  ECDSA.prototype._findSignature = function(d, e) {
    var N = Point.getN();
    var G = Point.getG();
    var badrs = 0;
    var k,
        Q,
        r,
        s;
    do {
      if (!this.k || badrs > 0) {
        this.deterministicK(badrs);
      }
      badrs++;
      k = this.k;
      Q = G.mul(k);
      r = Q.x.mod(N);
      s = k.invm(N).mul(e.add(d.mul(r))).mod(N);
    } while (r.cmp(BN.Zero) <= 0 || s.cmp(BN.Zero) <= 0);
    s = ECDSA.toLowS(s);
    return {
      s: s,
      r: r
    };
  };
  ECDSA.prototype.sign = function() {
    var hashbuf = this.hashbuf;
    var privkey = this.privkey;
    var d = privkey.bn;
    $.checkState(hashbuf && privkey && d, new Error('invalid parameters'));
    $.checkState(BufferUtil.isBuffer(hashbuf) && hashbuf.length === 32, new Error('hashbuf must be a 32 byte buffer'));
    var e = BN.fromBuffer(hashbuf, this.endian ? {endian: this.endian} : undefined);
    var obj = this._findSignature(d, e);
    obj.compressed = this.pubkey.compressed;
    this.sig = new Signature(obj);
    return this;
  };
  ECDSA.prototype.signRandomK = function() {
    this.randomK();
    return this.sign();
  };
  ECDSA.prototype.toString = function() {
    var obj = {};
    if (this.hashbuf) {
      obj.hashbuf = this.hashbuf.toString('hex');
    }
    if (this.privkey) {
      obj.privkey = this.privkey.toString();
    }
    if (this.pubkey) {
      obj.pubkey = this.pubkey.toString();
    }
    if (this.sig) {
      obj.sig = this.sig.toString();
    }
    if (this.k) {
      obj.k = this.k.toString();
    }
    return JSON.stringify(obj);
  };
  ECDSA.prototype.verify = function() {
    if (!this.sigError()) {
      this.verified = true;
    } else {
      this.verified = false;
    }
    return this;
  };
  ECDSA.sign = function(hashbuf, privkey, endian) {
    return ECDSA().set({
      hashbuf: hashbuf,
      endian: endian,
      privkey: privkey
    }).sign().sig;
  };
  ECDSA.verify = function(hashbuf, sig, pubkey, endian) {
    return ECDSA().set({
      hashbuf: hashbuf,
      endian: endian,
      sig: sig,
      pubkey: pubkey
    }).verify().verified;
  };
  module.exports = ECDSA;
})(require('buffer').Buffer);
