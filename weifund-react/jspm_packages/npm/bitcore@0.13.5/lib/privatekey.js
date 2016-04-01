/* */ 
(function(Buffer) {
  'use strict';
  var _ = require('lodash');
  var Address = require('./address');
  var Base58Check = require('./encoding/base58check');
  var BN = require('./crypto/bn');
  var JSUtil = require('./util/js');
  var Networks = require('./networks');
  var Point = require('./crypto/point');
  var PublicKey = require('./publickey');
  var Random = require('./crypto/random');
  var $ = require('./util/preconditions');
  function PrivateKey(data, network) {
    if (!(this instanceof PrivateKey)) {
      return new PrivateKey(data, network);
    }
    if (data instanceof PrivateKey) {
      return data;
    }
    var info = this._classifyArguments(data, network);
    if (!info.bn || info.bn.cmp(new BN(0)) === 0) {
      throw new TypeError('Number can not be equal to zero, undefined, null or false');
    }
    if (!info.bn.lt(Point.getN())) {
      throw new TypeError('Number must be less than N');
    }
    if (typeof(info.network) === 'undefined') {
      throw new TypeError('Must specify the network ("livenet" or "testnet")');
    }
    JSUtil.defineImmutable(this, {
      bn: info.bn,
      compressed: info.compressed,
      network: info.network
    });
    Object.defineProperty(this, 'publicKey', {
      configurable: false,
      enumerable: true,
      get: this.toPublicKey.bind(this)
    });
    return this;
  }
  ;
  PrivateKey.prototype._classifyArguments = function(data, network) {
    var info = {
      compressed: true,
      network: network ? Networks.get(network) : Networks.defaultNetwork
    };
    if (_.isUndefined(data) || _.isNull(data)) {
      info.bn = PrivateKey._getRandomBN();
    } else if (data instanceof BN) {
      info.bn = data;
    } else if (data instanceof Buffer || data instanceof Uint8Array) {
      info = PrivateKey._transformBuffer(data, network);
    } else if (data.bn && data.network) {
      info = PrivateKey._transformObject(data);
    } else if (!network && Networks.get(data)) {
      info.bn = PrivateKey._getRandomBN();
      info.network = Networks.get(data);
    } else if (typeof(data) === 'string') {
      if (JSUtil.isHexa(data)) {
        info.bn = new BN(new Buffer(data, 'hex'));
      } else {
        info = PrivateKey._transformWIF(data, network);
      }
    } else {
      throw new TypeError('First argument is an unrecognized data type.');
    }
    return info;
  };
  PrivateKey._getRandomBN = function() {
    var condition;
    var bn;
    do {
      var privbuf = Random.getRandomBuffer(32);
      bn = BN.fromBuffer(privbuf);
      condition = bn.lt(Point.getN());
    } while (!condition);
    return bn;
  };
  PrivateKey._transformBuffer = function(buf, network) {
    var info = {};
    if (buf.length === 32) {
      return PrivateKey._transformBNBuffer(buf, network);
    }
    info.network = Networks.get(buf[0], 'privatekey');
    if (!info.network) {
      throw new Error('Invalid network');
    }
    if (network && info.network !== Networks.get(network)) {
      throw new TypeError('Private key network mismatch');
    }
    if (buf.length === 1 + 32 + 1 && buf[1 + 32 + 1 - 1] === 1) {
      info.compressed = true;
    } else if (buf.length === 1 + 32) {
      info.compressed = false;
    } else {
      throw new Error('Length of buffer must be 33 (uncompressed) or 34 (compressed)');
    }
    info.bn = BN.fromBuffer(buf.slice(1, 32 + 1));
    return info;
  };
  PrivateKey._transformBNBuffer = function(buf, network) {
    var info = {};
    info.network = Networks.get(network) || Networks.defaultNetwork;
    info.bn = BN.fromBuffer(buf);
    info.compressed = false;
    return info;
  };
  PrivateKey._transformWIF = function(str, network) {
    return PrivateKey._transformBuffer(Base58Check.decode(str), network);
  };
  PrivateKey.fromBuffer = function(arg, network) {
    return new PrivateKey(arg, network);
  };
  PrivateKey._transformObject = function(json) {
    var bn = new BN(json.bn, 'hex');
    var network = Networks.get(json.network);
    return {
      bn: bn,
      network: network,
      compressed: json.compressed
    };
  };
  PrivateKey.fromString = PrivateKey.fromWIF = function(str) {
    $.checkArgument(_.isString(str), 'First argument is expected to be a string.');
    return new PrivateKey(str);
  };
  PrivateKey.fromObject = function(obj) {
    $.checkArgument(_.isObject(obj), 'First argument is expected to be an object.');
    return new PrivateKey(obj);
  };
  PrivateKey.fromRandom = function(network) {
    var bn = PrivateKey._getRandomBN();
    return new PrivateKey(bn, network);
  };
  PrivateKey.getValidationError = function(data, network) {
    var error;
    try {
      new PrivateKey(data, network);
    } catch (e) {
      error = e;
    }
    return error;
  };
  PrivateKey.isValid = function(data, network) {
    if (!data) {
      return false;
    }
    return !PrivateKey.getValidationError(data, network);
  };
  PrivateKey.prototype.toString = function() {
    return this.toBuffer().toString('hex');
  };
  PrivateKey.prototype.toWIF = function() {
    var network = this.network;
    var compressed = this.compressed;
    var buf;
    if (compressed) {
      buf = Buffer.concat([new Buffer([network.privatekey]), this.bn.toBuffer({size: 32}), new Buffer([0x01])]);
    } else {
      buf = Buffer.concat([new Buffer([network.privatekey]), this.bn.toBuffer({size: 32})]);
    }
    return Base58Check.encode(buf);
  };
  PrivateKey.prototype.toBigNumber = function() {
    return this.bn;
  };
  PrivateKey.prototype.toBuffer = function() {
    return this.bn.toBuffer();
  };
  PrivateKey.prototype.toPublicKey = function() {
    if (!this._pubkey) {
      this._pubkey = PublicKey.fromPrivateKey(this);
    }
    return this._pubkey;
  };
  PrivateKey.prototype.toAddress = function(network) {
    var pubkey = this.toPublicKey();
    return Address.fromPublicKey(pubkey, network || this.network);
  };
  PrivateKey.prototype.toObject = PrivateKey.prototype.toJSON = function toObject() {
    return {
      bn: this.bn.toString('hex'),
      compressed: this.compressed,
      network: this.network.toString()
    };
  };
  PrivateKey.prototype.inspect = function() {
    var uncompressed = !this.compressed ? ', uncompressed' : '';
    return '<PrivateKey: ' + this.toString() + ', network: ' + this.network + uncompressed + '>';
  };
  module.exports = PrivateKey;
})(require('buffer').Buffer);
