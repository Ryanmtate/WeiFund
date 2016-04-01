/* */ 
(function(Buffer) {
  'use strict';
  var BN = require('./crypto/bn');
  var Point = require('./crypto/point');
  var Hash = require('./crypto/hash');
  var JSUtil = require('./util/js');
  var Network = require('./networks');
  var _ = require('lodash');
  var $ = require('./util/preconditions');
  function PublicKey(data, extra) {
    if (!(this instanceof PublicKey)) {
      return new PublicKey(data, extra);
    }
    $.checkArgument(data, 'First argument is required, please include public key data.');
    if (data instanceof PublicKey) {
      return data;
    }
    extra = extra || {};
    var info = this._classifyArgs(data, extra);
    info.point.validate();
    JSUtil.defineImmutable(this, {
      point: info.point,
      compressed: info.compressed,
      network: info.network || Network.defaultNetwork
    });
    return this;
  }
  ;
  PublicKey.prototype._classifyArgs = function(data, extra) {
    var info = {compressed: _.isUndefined(extra.compressed) || extra.compressed};
    if (data instanceof Point) {
      info.point = data;
    } else if (data.x && data.y) {
      info = PublicKey._transformObject(data);
    } else if (typeof(data) === 'string') {
      info = PublicKey._transformDER(new Buffer(data, 'hex'));
    } else if (PublicKey._isBuffer(data)) {
      info = PublicKey._transformDER(data);
    } else if (PublicKey._isPrivateKey(data)) {
      info = PublicKey._transformPrivateKey(data);
    } else {
      throw new TypeError('First argument is an unrecognized data format.');
    }
    if (!info.network) {
      info.network = _.isUndefined(extra.network) ? undefined : Network.get(extra.network);
    }
    return info;
  };
  PublicKey._isPrivateKey = function(param) {
    var PrivateKey = require('./privatekey');
    return param instanceof PrivateKey;
  };
  PublicKey._isBuffer = function(param) {
    return (param instanceof Buffer) || (param instanceof Uint8Array);
  };
  PublicKey._transformPrivateKey = function(privkey) {
    $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey');
    var info = {};
    info.point = Point.getG().mul(privkey.bn);
    info.compressed = privkey.compressed;
    info.network = privkey.network;
    return info;
  };
  PublicKey._transformDER = function(buf, strict) {
    $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key');
    var info = {};
    strict = _.isUndefined(strict) ? true : strict;
    var x;
    var y;
    var xbuf;
    var ybuf;
    if (buf[0] === 0x04 || (!strict && (buf[0] === 0x06 || buf[0] === 0x07))) {
      xbuf = buf.slice(1, 33);
      ybuf = buf.slice(33, 65);
      if (xbuf.length !== 32 || ybuf.length !== 32 || buf.length !== 65) {
        throw new TypeError('Length of x and y must be 32 bytes');
      }
      x = new BN(xbuf);
      y = new BN(ybuf);
      info.point = new Point(x, y);
      info.compressed = false;
    } else if (buf[0] === 0x03) {
      xbuf = buf.slice(1);
      x = new BN(xbuf);
      info = PublicKey._transformX(true, x);
      info.compressed = true;
    } else if (buf[0] === 0x02) {
      xbuf = buf.slice(1);
      x = new BN(xbuf);
      info = PublicKey._transformX(false, x);
      info.compressed = true;
    } else {
      throw new TypeError('Invalid DER format public key');
    }
    return info;
  };
  PublicKey._transformX = function(odd, x) {
    $.checkArgument(typeof odd === 'boolean', 'Must specify whether y is odd or not (true or false)');
    var info = {};
    info.point = Point.fromX(odd, x);
    return info;
  };
  PublicKey._transformObject = function(json) {
    var x = new BN(json.x, 'hex');
    var y = new BN(json.y, 'hex');
    var point = new Point(x, y);
    return new PublicKey(point, {compressed: json.compressed});
  };
  PublicKey.fromPrivateKey = function(privkey) {
    $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey');
    var info = PublicKey._transformPrivateKey(privkey);
    return new PublicKey(info.point, {
      compressed: info.compressed,
      network: info.network
    });
  };
  PublicKey.fromDER = PublicKey.fromBuffer = function(buf, strict) {
    $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key');
    var info = PublicKey._transformDER(buf, strict);
    return new PublicKey(info.point, {compressed: info.compressed});
  };
  PublicKey.fromPoint = function(point, compressed) {
    $.checkArgument(point instanceof Point, 'First argument must be an instance of Point.');
    return new PublicKey(point, {compressed: compressed});
  };
  PublicKey.fromString = function(str, encoding) {
    var buf = new Buffer(str, encoding || 'hex');
    var info = PublicKey._transformDER(buf);
    return new PublicKey(info.point, {compressed: info.compressed});
  };
  PublicKey.fromX = function(odd, x) {
    var info = PublicKey._transformX(odd, x);
    return new PublicKey(info.point, {compressed: info.compressed});
  };
  PublicKey.getValidationError = function(data) {
    var error;
    try {
      new PublicKey(data);
    } catch (e) {
      error = e;
    }
    return error;
  };
  PublicKey.isValid = function(data) {
    return !PublicKey.getValidationError(data);
  };
  PublicKey.prototype.toObject = PublicKey.prototype.toJSON = function toObject() {
    return {
      x: this.point.getX().toString('hex', 2),
      y: this.point.getY().toString('hex', 2),
      compressed: this.compressed
    };
  };
  PublicKey.prototype.toBuffer = PublicKey.prototype.toDER = function() {
    var x = this.point.getX();
    var y = this.point.getY();
    var xbuf = x.toBuffer({size: 32});
    var ybuf = y.toBuffer({size: 32});
    var prefix;
    if (!this.compressed) {
      prefix = new Buffer([0x04]);
      return Buffer.concat([prefix, xbuf, ybuf]);
    } else {
      var odd = ybuf[ybuf.length - 1] % 2;
      if (odd) {
        prefix = new Buffer([0x03]);
      } else {
        prefix = new Buffer([0x02]);
      }
      return Buffer.concat([prefix, xbuf]);
    }
  };
  PublicKey.prototype._getID = function _getID() {
    return Hash.sha256ripemd160(this.toBuffer());
  };
  PublicKey.prototype.toAddress = function(network) {
    var Address = require('./address');
    return Address.fromPublicKey(this, network || this.network);
  };
  PublicKey.prototype.toString = function() {
    return this.toDER().toString('hex');
  };
  PublicKey.prototype.inspect = function() {
    return '<PublicKey: ' + this.toString() + (this.compressed ? '' : ', uncompressed') + '>';
  };
  module.exports = PublicKey;
})(require('buffer').Buffer);
