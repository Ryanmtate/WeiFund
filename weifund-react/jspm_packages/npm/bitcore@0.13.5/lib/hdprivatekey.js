/* */ 
(function(Buffer) {
  'use strict';
  var assert = require('assert');
  var buffer = require('buffer');
  var _ = require('lodash');
  var $ = require('./util/preconditions');
  var BN = require('./crypto/bn');
  var Base58 = require('./encoding/base58');
  var Base58Check = require('./encoding/base58check');
  var Hash = require('./crypto/hash');
  var Network = require('./networks');
  var HDKeyCache = require('./hdkeycache');
  var Point = require('./crypto/point');
  var PrivateKey = require('./privatekey');
  var Random = require('./crypto/random');
  var errors = require('./errors/index');
  var hdErrors = errors.HDPrivateKey;
  var BufferUtil = require('./util/buffer');
  var JSUtil = require('./util/js');
  var MINIMUM_ENTROPY_BITS = 128;
  var BITS_TO_BYTES = 1 / 8;
  var MAXIMUM_ENTROPY_BITS = 512;
  function HDPrivateKey(arg) {
    if (arg instanceof HDPrivateKey) {
      return arg;
    }
    if (!(this instanceof HDPrivateKey)) {
      return new HDPrivateKey(arg);
    }
    if (!arg) {
      return this._generateRandomly();
    }
    if (Network.get(arg)) {
      return this._generateRandomly(arg);
    } else if (_.isString(arg) || BufferUtil.isBuffer(arg)) {
      if (HDPrivateKey.isValidSerialized(arg)) {
        this._buildFromSerialized(arg);
      } else if (JSUtil.isValidJSON(arg)) {
        this._buildFromJSON(arg);
      } else if (BufferUtil.isBuffer(arg) && HDPrivateKey.isValidSerialized(arg.toString())) {
        this._buildFromSerialized(arg.toString());
      } else {
        throw HDPrivateKey.getSerializedError(arg);
      }
    } else if (_.isObject(arg)) {
      this._buildFromObject(arg);
    } else {
      throw new hdErrors.UnrecognizedArgument(arg);
    }
  }
  HDPrivateKey.isValidPath = function(arg, hardened) {
    if (_.isString(arg)) {
      var indexes = HDPrivateKey._getDerivationIndexes(arg);
      return indexes !== null && _.all(indexes, HDPrivateKey.isValidPath);
    }
    if (_.isNumber(arg)) {
      if (arg < HDPrivateKey.Hardened && hardened === true) {
        arg += HDPrivateKey.Hardened;
      }
      return arg >= 0 && arg < HDPrivateKey.MaxIndex;
    }
    return false;
  };
  HDPrivateKey._getDerivationIndexes = function(path) {
    var steps = path.split('/');
    if (_.contains(HDPrivateKey.RootElementAlias, path)) {
      return [];
    }
    if (!_.contains(HDPrivateKey.RootElementAlias, steps[0])) {
      return null;
    }
    var indexes = steps.slice(1).map(function(step) {
      var isHardened = step.slice(-1) === '\'';
      if (isHardened) {
        step = step.slice(0, -1);
      }
      if (!step || step[0] === '-') {
        return NaN;
      }
      var index = +step;
      if (isHardened) {
        index += HDPrivateKey.Hardened;
      }
      return index;
    });
    return _.any(indexes, isNaN) ? null : indexes;
  };
  HDPrivateKey.prototype.derive = function(arg, hardened) {
    if (_.isNumber(arg)) {
      return this._deriveWithNumber(arg, hardened);
    } else if (_.isString(arg)) {
      return this._deriveFromString(arg);
    } else {
      throw new hdErrors.InvalidDerivationArgument(arg);
    }
  };
  HDPrivateKey.prototype._deriveWithNumber = function(index, hardened) {
    if (!HDPrivateKey.isValidPath(index, hardened)) {
      throw new hdErrors.InvalidPath(index);
    }
    hardened = index >= HDPrivateKey.Hardened ? true : hardened;
    if (index < HDPrivateKey.Hardened && hardened === true) {
      index += HDPrivateKey.Hardened;
    }
    var cached = HDKeyCache.get(this.xprivkey, index, hardened);
    if (cached) {
      return cached;
    }
    var indexBuffer = BufferUtil.integerAsBuffer(index);
    var data;
    if (hardened) {
      data = BufferUtil.concat([new buffer.Buffer([0]), this.privateKey.toBuffer(), indexBuffer]);
    } else {
      data = BufferUtil.concat([this.publicKey.toBuffer(), indexBuffer]);
    }
    var hash = Hash.sha512hmac(data, this._buffers.chainCode);
    var leftPart = BN.fromBuffer(hash.slice(0, 32), {size: 32});
    var chainCode = hash.slice(32, 64);
    var privateKey = leftPart.add(this.privateKey.toBigNumber()).mod(Point.getN()).toBuffer({size: 32});
    var derived = new HDPrivateKey({
      network: this.network,
      depth: this.depth + 1,
      parentFingerPrint: this.fingerPrint,
      childIndex: index,
      chainCode: chainCode,
      privateKey: privateKey
    });
    HDKeyCache.set(this.xprivkey, index, hardened, derived);
    return derived;
  };
  HDPrivateKey.prototype._deriveFromString = function(path) {
    if (!HDPrivateKey.isValidPath(path)) {
      throw new hdErrors.InvalidPath(path);
    }
    var indexes = HDPrivateKey._getDerivationIndexes(path);
    var derived = indexes.reduce(function(prev, index) {
      return prev._deriveWithNumber(index);
    }, this);
    return derived;
  };
  HDPrivateKey.isValidSerialized = function(data, network) {
    return !HDPrivateKey.getSerializedError(data, network);
  };
  HDPrivateKey.getSerializedError = function(data, network) {
    if (!(_.isString(data) || BufferUtil.isBuffer(data))) {
      return new hdErrors.UnrecognizedArgument('Expected string or buffer');
    }
    if (!Base58.validCharacters(data)) {
      return new errors.InvalidB58Char('(unknown)', data);
    }
    try {
      data = Base58Check.decode(data);
    } catch (e) {
      return new errors.InvalidB58Checksum(data);
    }
    if (data.length !== HDPrivateKey.DataLength) {
      return new hdErrors.InvalidLength(data);
    }
    if (!_.isUndefined(network)) {
      var error = HDPrivateKey._validateNetwork(data, network);
      if (error) {
        return error;
      }
    }
    return null;
  };
  HDPrivateKey._validateNetwork = function(data, networkArg) {
    var network = Network.get(networkArg);
    if (!network) {
      return new errors.InvalidNetworkArgument(networkArg);
    }
    var version = data.slice(0, 4);
    if (BufferUtil.integerFromBuffer(version) !== network.xprivkey) {
      return new errors.InvalidNetwork(version);
    }
    return null;
  };
  HDPrivateKey.fromString = function(arg) {
    $.checkArgument(_.isString(arg), 'No valid string was provided');
    return new HDPrivateKey(arg);
  };
  HDPrivateKey.fromObject = function(arg) {
    $.checkArgument(_.isObject(arg), 'No valid argument was provided');
    return new HDPrivateKey(arg);
  };
  HDPrivateKey.prototype._buildFromJSON = function(arg) {
    return this._buildFromObject(JSON.parse(arg));
  };
  HDPrivateKey.prototype._buildFromObject = function(arg) {
    var buffers = {
      version: arg.network ? BufferUtil.integerAsBuffer(Network.get(arg.network).xprivkey) : arg.version,
      depth: _.isNumber(arg.depth) ? BufferUtil.integerAsSingleByteBuffer(arg.depth) : arg.depth,
      parentFingerPrint: _.isNumber(arg.parentFingerPrint) ? BufferUtil.integerAsBuffer(arg.parentFingerPrint) : arg.parentFingerPrint,
      childIndex: _.isNumber(arg.childIndex) ? BufferUtil.integerAsBuffer(arg.childIndex) : arg.childIndex,
      chainCode: _.isString(arg.chainCode) ? BufferUtil.hexToBuffer(arg.chainCode) : arg.chainCode,
      privateKey: (_.isString(arg.privateKey) && JSUtil.isHexa(arg.privateKey)) ? BufferUtil.hexToBuffer(arg.privateKey) : arg.privateKey,
      checksum: arg.checksum ? (arg.checksum.length ? arg.checksum : BufferUtil.integerAsBuffer(arg.checksum)) : undefined
    };
    return this._buildFromBuffers(buffers);
  };
  HDPrivateKey.prototype._buildFromSerialized = function(arg) {
    var decoded = Base58Check.decode(arg);
    var buffers = {
      version: decoded.slice(HDPrivateKey.VersionStart, HDPrivateKey.VersionEnd),
      depth: decoded.slice(HDPrivateKey.DepthStart, HDPrivateKey.DepthEnd),
      parentFingerPrint: decoded.slice(HDPrivateKey.ParentFingerPrintStart, HDPrivateKey.ParentFingerPrintEnd),
      childIndex: decoded.slice(HDPrivateKey.ChildIndexStart, HDPrivateKey.ChildIndexEnd),
      chainCode: decoded.slice(HDPrivateKey.ChainCodeStart, HDPrivateKey.ChainCodeEnd),
      privateKey: decoded.slice(HDPrivateKey.PrivateKeyStart, HDPrivateKey.PrivateKeyEnd),
      checksum: decoded.slice(HDPrivateKey.ChecksumStart, HDPrivateKey.ChecksumEnd),
      xprivkey: arg
    };
    return this._buildFromBuffers(buffers);
  };
  HDPrivateKey.prototype._generateRandomly = function(network) {
    return HDPrivateKey.fromSeed(Random.getRandomBuffer(64), network);
  };
  HDPrivateKey.fromSeed = function(hexa, network) {
    if (JSUtil.isHexaString(hexa)) {
      hexa = BufferUtil.hexToBuffer(hexa);
    }
    if (!Buffer.isBuffer(hexa)) {
      throw new hdErrors.InvalidEntropyArgument(hexa);
    }
    if (hexa.length < MINIMUM_ENTROPY_BITS * BITS_TO_BYTES) {
      throw new hdErrors.InvalidEntropyArgument.NotEnoughEntropy(hexa);
    }
    if (hexa.length > MAXIMUM_ENTROPY_BITS * BITS_TO_BYTES) {
      throw new hdErrors.InvalidEntropyArgument.TooMuchEntropy(hexa);
    }
    var hash = Hash.sha512hmac(hexa, new buffer.Buffer('Bitcoin seed'));
    return new HDPrivateKey({
      network: Network.get(network) || Network.defaultNetwork,
      depth: 0,
      parentFingerPrint: 0,
      childIndex: 0,
      privateKey: hash.slice(0, 32),
      chainCode: hash.slice(32, 64)
    });
  };
  HDPrivateKey.prototype._calcHDPublicKey = function() {
    if (!this._hdPublicKey) {
      var HDPublicKey = require('./hdpublickey');
      this._hdPublicKey = new HDPublicKey(this);
    }
  };
  HDPrivateKey.prototype._buildFromBuffers = function(arg) {
    HDPrivateKey._validateBufferArguments(arg);
    JSUtil.defineImmutable(this, {_buffers: arg});
    var sequence = [arg.version, arg.depth, arg.parentFingerPrint, arg.childIndex, arg.chainCode, BufferUtil.emptyBuffer(1), arg.privateKey];
    var concat = buffer.Buffer.concat(sequence);
    if (!arg.checksum || !arg.checksum.length) {
      arg.checksum = Base58Check.checksum(concat);
    } else {
      if (arg.checksum.toString() !== Base58Check.checksum(concat).toString()) {
        throw new errors.InvalidB58Checksum(concat);
      }
    }
    var network = Network.get(BufferUtil.integerFromBuffer(arg.version));
    var xprivkey;
    xprivkey = Base58Check.encode(buffer.Buffer.concat(sequence));
    arg.xprivkey = new Buffer(xprivkey);
    var privateKey = new PrivateKey(BN.fromBuffer(arg.privateKey), network);
    var publicKey = privateKey.toPublicKey();
    var size = HDPrivateKey.ParentFingerPrintSize;
    var fingerPrint = Hash.sha256ripemd160(publicKey.toBuffer()).slice(0, size);
    JSUtil.defineImmutable(this, {
      xprivkey: xprivkey,
      network: network,
      depth: BufferUtil.integerFromSingleByteBuffer(arg.depth),
      privateKey: privateKey,
      publicKey: publicKey,
      fingerPrint: fingerPrint
    });
    this._hdPublicKey = null;
    Object.defineProperty(this, 'hdPublicKey', {
      configurable: false,
      enumerable: true,
      get: function() {
        this._calcHDPublicKey();
        return this._hdPublicKey;
      }
    });
    Object.defineProperty(this, 'xpubkey', {
      configurable: false,
      enumerable: true,
      get: function() {
        this._calcHDPublicKey();
        return this._hdPublicKey.xpubkey;
      }
    });
    return this;
  };
  HDPrivateKey._validateBufferArguments = function(arg) {
    var checkBuffer = function(name, size) {
      var buff = arg[name];
      assert(BufferUtil.isBuffer(buff), name + ' argument is not a buffer');
      assert(buff.length === size, name + ' has not the expected size: found ' + buff.length + ', expected ' + size);
    };
    checkBuffer('version', HDPrivateKey.VersionSize);
    checkBuffer('depth', HDPrivateKey.DepthSize);
    checkBuffer('parentFingerPrint', HDPrivateKey.ParentFingerPrintSize);
    checkBuffer('childIndex', HDPrivateKey.ChildIndexSize);
    checkBuffer('chainCode', HDPrivateKey.ChainCodeSize);
    checkBuffer('privateKey', HDPrivateKey.PrivateKeySize);
    if (arg.checksum && arg.checksum.length) {
      checkBuffer('checksum', HDPrivateKey.CheckSumSize);
    }
  };
  HDPrivateKey.prototype.toString = function() {
    return this.xprivkey;
  };
  HDPrivateKey.prototype.inspect = function() {
    return '<HDPrivateKey: ' + this.xprivkey + '>';
  };
  HDPrivateKey.prototype.toObject = HDPrivateKey.prototype.toJSON = function toObject() {
    return {
      network: Network.get(BufferUtil.integerFromBuffer(this._buffers.version), 'xprivkey').name,
      depth: BufferUtil.integerFromSingleByteBuffer(this._buffers.depth),
      fingerPrint: BufferUtil.integerFromBuffer(this.fingerPrint),
      parentFingerPrint: BufferUtil.integerFromBuffer(this._buffers.parentFingerPrint),
      childIndex: BufferUtil.integerFromBuffer(this._buffers.childIndex),
      chainCode: BufferUtil.bufferToHex(this._buffers.chainCode),
      privateKey: this.privateKey.toBuffer().toString('hex'),
      checksum: BufferUtil.integerFromBuffer(this._buffers.checksum),
      xprivkey: this.xprivkey
    };
  };
  HDPrivateKey.fromBuffer = function(arg) {
    return new HDPrivateKey(arg.toString());
  };
  HDPrivateKey.prototype.toBuffer = function() {
    return BufferUtil.copy(this._buffers.xprivkey);
  };
  HDPrivateKey.DefaultDepth = 0;
  HDPrivateKey.DefaultFingerprint = 0;
  HDPrivateKey.DefaultChildIndex = 0;
  HDPrivateKey.Hardened = 0x80000000;
  HDPrivateKey.MaxIndex = 2 * HDPrivateKey.Hardened;
  HDPrivateKey.RootElementAlias = ['m', 'M', 'm\'', 'M\''];
  HDPrivateKey.VersionSize = 4;
  HDPrivateKey.DepthSize = 1;
  HDPrivateKey.ParentFingerPrintSize = 4;
  HDPrivateKey.ChildIndexSize = 4;
  HDPrivateKey.ChainCodeSize = 32;
  HDPrivateKey.PrivateKeySize = 32;
  HDPrivateKey.CheckSumSize = 4;
  HDPrivateKey.DataLength = 78;
  HDPrivateKey.SerializedByteSize = 82;
  HDPrivateKey.VersionStart = 0;
  HDPrivateKey.VersionEnd = HDPrivateKey.VersionStart + HDPrivateKey.VersionSize;
  HDPrivateKey.DepthStart = HDPrivateKey.VersionEnd;
  HDPrivateKey.DepthEnd = HDPrivateKey.DepthStart + HDPrivateKey.DepthSize;
  HDPrivateKey.ParentFingerPrintStart = HDPrivateKey.DepthEnd;
  HDPrivateKey.ParentFingerPrintEnd = HDPrivateKey.ParentFingerPrintStart + HDPrivateKey.ParentFingerPrintSize;
  HDPrivateKey.ChildIndexStart = HDPrivateKey.ParentFingerPrintEnd;
  HDPrivateKey.ChildIndexEnd = HDPrivateKey.ChildIndexStart + HDPrivateKey.ChildIndexSize;
  HDPrivateKey.ChainCodeStart = HDPrivateKey.ChildIndexEnd;
  HDPrivateKey.ChainCodeEnd = HDPrivateKey.ChainCodeStart + HDPrivateKey.ChainCodeSize;
  HDPrivateKey.PrivateKeyStart = HDPrivateKey.ChainCodeEnd + 1;
  HDPrivateKey.PrivateKeyEnd = HDPrivateKey.PrivateKeyStart + HDPrivateKey.PrivateKeySize;
  HDPrivateKey.ChecksumStart = HDPrivateKey.PrivateKeyEnd;
  HDPrivateKey.ChecksumEnd = HDPrivateKey.ChecksumStart + HDPrivateKey.CheckSumSize;
  assert(HDPrivateKey.ChecksumEnd === HDPrivateKey.SerializedByteSize);
  module.exports = HDPrivateKey;
})(require('buffer').Buffer);
