/* */ 
(function(Buffer) {
  'use strict';
  var BN = require('bn.js');
  var $ = require('../util/preconditions');
  var _ = require('lodash');
  var reversebuf = function(buf) {
    var buf2 = new Buffer(buf.length);
    for (var i = 0; i < buf.length; i++) {
      buf2[i] = buf[buf.length - 1 - i];
    }
    return buf2;
  };
  BN.Zero = new BN(0);
  BN.One = new BN(1);
  BN.Minus1 = new BN(-1);
  BN.fromNumber = function(n) {
    $.checkArgument(_.isNumber(n));
    return new BN(n);
  };
  BN.fromString = function(str, base) {
    $.checkArgument(_.isString(str));
    return new BN(str, base);
  };
  BN.fromBuffer = function(buf, opts) {
    if (typeof opts !== 'undefined' && opts.endian === 'little') {
      buf = reversebuf(buf);
    }
    var hex = buf.toString('hex');
    var bn = new BN(hex, 16);
    return bn;
  };
  BN.fromSM = function(buf, opts) {
    var ret;
    if (buf.length === 0) {
      return BN.fromBuffer(new Buffer([0]));
    }
    var endian = 'big';
    if (opts) {
      endian = opts.endian;
    }
    if (endian === 'little') {
      buf = reversebuf(buf);
    }
    if (buf[0] & 0x80) {
      buf[0] = buf[0] & 0x7f;
      ret = BN.fromBuffer(buf);
      ret.neg().copy(ret);
    } else {
      ret = BN.fromBuffer(buf);
    }
    return ret;
  };
  BN.prototype.toNumber = function() {
    return parseInt(this.toString(10), 10);
  };
  BN.prototype.toBuffer = function(opts) {
    var buf,
        hex;
    if (opts && opts.size) {
      hex = this.toString(16, 2);
      var natlen = hex.length / 2;
      buf = new Buffer(hex, 'hex');
      if (natlen === opts.size) {
        buf = buf;
      } else if (natlen > opts.size) {
        buf = BN.trim(buf, natlen);
      } else if (natlen < opts.size) {
        buf = BN.pad(buf, natlen, opts.size);
      }
    } else {
      hex = this.toString(16, 2);
      buf = new Buffer(hex, 'hex');
    }
    if (typeof opts !== 'undefined' && opts.endian === 'little') {
      buf = reversebuf(buf);
    }
    return buf;
  };
  BN.prototype.toSMBigEndian = function() {
    var buf;
    if (this.cmp(BN.Zero) === -1) {
      buf = this.neg().toBuffer();
      if (buf[0] & 0x80) {
        buf = Buffer.concat([new Buffer([0x80]), buf]);
      } else {
        buf[0] = buf[0] | 0x80;
      }
    } else {
      buf = this.toBuffer();
      if (buf[0] & 0x80) {
        buf = Buffer.concat([new Buffer([0x00]), buf]);
      }
    }
    if (buf.length === 1 & buf[0] === 0) {
      buf = new Buffer([]);
    }
    return buf;
  };
  BN.prototype.toSM = function(opts) {
    var endian = opts ? opts.endian : 'big';
    var buf = this.toSMBigEndian();
    if (endian === 'little') {
      buf = reversebuf(buf);
    }
    return buf;
  };
  BN.fromScriptNumBuffer = function(buf, fRequireMinimal, size) {
    var nMaxNumSize = size || 4;
    $.checkArgument(buf.length <= nMaxNumSize, new Error('script number overflow'));
    if (fRequireMinimal && buf.length > 0) {
      if ((buf[buf.length - 1] & 0x7f) === 0) {
        if (buf.length <= 1 || (buf[buf.length - 2] & 0x80) === 0) {
          throw new Error('non-minimally encoded script number');
        }
      }
    }
    return BN.fromSM(buf, {endian: 'little'});
  };
  BN.prototype.toScriptNumBuffer = function() {
    return this.toSM({endian: 'little'});
  };
  BN.prototype.gt = function(b) {
    return this.cmp(b) > 0;
  };
  BN.prototype.gte = function(b) {
    return this.cmp(b) >= 0;
  };
  BN.prototype.lt = function(b) {
    return this.cmp(b) < 0;
  };
  BN.trim = function(buf, natlen) {
    return buf.slice(natlen - buf.length, buf.length);
  };
  BN.pad = function(buf, natlen, size) {
    var rbuf = new Buffer(size);
    for (var i = 0; i < buf.length; i++) {
      rbuf[rbuf.length - 1 - i] = buf[buf.length - 1 - i];
    }
    for (i = 0; i < size - natlen; i++) {
      rbuf[i] = 0;
    }
    return rbuf;
  };
  module.exports = BN;
})(require('buffer').Buffer);
