/* */ 
(function(Buffer) {
  'use strict';
  var _ = require('lodash');
  var $ = require('./util/preconditions');
  var errors = require('./errors/index');
  var Base58Check = require('./encoding/base58check');
  var Networks = require('./networks');
  var Hash = require('./crypto/hash');
  var JSUtil = require('./util/js');
  var PublicKey = require('./publickey');
  function Address(data, network, type) {
    if (!(this instanceof Address)) {
      return new Address(data, network, type);
    }
    if (_.isArray(data) && _.isNumber(network)) {
      return Address.createMultisig(data, network, type);
    }
    if (data instanceof Address) {
      return data;
    }
    $.checkArgument(data, 'First argument is required, please include address data.', 'guide/address.html');
    if (network && !Networks.get(network)) {
      throw new TypeError('Second argument must be "livenet" or "testnet".');
    }
    if (type && (type !== Address.PayToPublicKeyHash && type !== Address.PayToScriptHash)) {
      throw new TypeError('Third argument must be "pubkeyhash" or "scripthash".');
    }
    var info = this._classifyArguments(data, network, type);
    info.network = info.network || Networks.get(network) || Networks.defaultNetwork;
    info.type = info.type || type || Address.PayToPublicKeyHash;
    JSUtil.defineImmutable(this, {
      hashBuffer: info.hashBuffer,
      network: info.network,
      type: info.type
    });
    return this;
  }
  Address.prototype._classifyArguments = function(data, network, type) {
    if ((data instanceof Buffer || data instanceof Uint8Array) && data.length === 20) {
      return Address._transformHash(data);
    } else if ((data instanceof Buffer || data instanceof Uint8Array) && data.length === 21) {
      return Address._transformBuffer(data, network, type);
    } else if (data instanceof PublicKey) {
      return Address._transformPublicKey(data);
    } else if (data instanceof Script) {
      return Address._transformScript(data, network);
    } else if (typeof(data) === 'string') {
      return Address._transformString(data, network, type);
    } else if (_.isObject(data)) {
      return Address._transformObject(data);
    } else {
      throw new TypeError('First argument is an unrecognized data format.');
    }
  };
  Address.PayToPublicKeyHash = 'pubkeyhash';
  Address.PayToScriptHash = 'scripthash';
  Address._transformHash = function(hash) {
    var info = {};
    if (!(hash instanceof Buffer) && !(hash instanceof Uint8Array)) {
      throw new TypeError('Address supplied is not a buffer.');
    }
    if (hash.length !== 20) {
      throw new TypeError('Address hashbuffers must be exactly 20 bytes.');
    }
    info.hashBuffer = hash;
    return info;
  };
  Address._transformObject = function(data) {
    $.checkArgument(data.hash || data.hashBuffer, 'Must provide a `hash` or `hashBuffer` property');
    $.checkArgument(data.type, 'Must provide a `type` property');
    return {
      hashBuffer: data.hash ? new Buffer(data.hash, 'hex') : data.hashBuffer,
      network: Networks.get(data.network) || Networks.defaultNetwork,
      type: data.type
    };
  };
  Address._classifyFromVersion = function(buffer) {
    var version = {};
    var pubkeyhashNetwork = Networks.get(buffer[0], 'pubkeyhash');
    var scripthashNetwork = Networks.get(buffer[0], 'scripthash');
    if (pubkeyhashNetwork) {
      version.network = pubkeyhashNetwork;
      version.type = Address.PayToPublicKeyHash;
    } else if (scripthashNetwork) {
      version.network = scripthashNetwork;
      version.type = Address.PayToScriptHash;
    }
    return version;
  };
  Address._transformBuffer = function(buffer, network, type) {
    var info = {};
    if (!(buffer instanceof Buffer) && !(buffer instanceof Uint8Array)) {
      throw new TypeError('Address supplied is not a buffer.');
    }
    if (buffer.length !== 1 + 20) {
      throw new TypeError('Address buffers must be exactly 21 bytes.');
    }
    network = Networks.get(network);
    var bufferVersion = Address._classifyFromVersion(buffer);
    if (!bufferVersion.network || (network && network !== bufferVersion.network)) {
      throw new TypeError('Address has mismatched network type.');
    }
    if (!bufferVersion.type || (type && type !== bufferVersion.type)) {
      throw new TypeError('Address has mismatched type.');
    }
    info.hashBuffer = buffer.slice(1);
    info.network = bufferVersion.network;
    info.type = bufferVersion.type;
    return info;
  };
  Address._transformPublicKey = function(pubkey) {
    var info = {};
    if (!(pubkey instanceof PublicKey)) {
      throw new TypeError('Address must be an instance of PublicKey.');
    }
    info.hashBuffer = Hash.sha256ripemd160(pubkey.toBuffer());
    info.type = Address.PayToPublicKeyHash;
    return info;
  };
  Address._transformScript = function(script, network) {
    $.checkArgument(script instanceof Script, 'script must be a Script instance');
    var info = script.getAddressInfo(network);
    if (!info) {
      throw new errors.Script.CantDeriveAddress(script);
    }
    return info;
  };
  Address.createMultisig = function(publicKeys, threshold, network) {
    network = network || publicKeys[0].network || Networks.defaultNetwork;
    return Address.payingTo(Script.buildMultisigOut(publicKeys, threshold), network);
  };
  Address._transformString = function(data, network, type) {
    if (typeof(data) !== 'string') {
      throw new TypeError('data parameter supplied is not a string.');
    }
    data = data.trim();
    var addressBuffer = Base58Check.decode(data);
    var info = Address._transformBuffer(addressBuffer, network, type);
    return info;
  };
  Address.fromPublicKey = function(data, network) {
    var info = Address._transformPublicKey(data);
    network = network || Networks.defaultNetwork;
    return new Address(info.hashBuffer, network, info.type);
  };
  Address.fromPublicKeyHash = function(hash, network) {
    var info = Address._transformHash(hash);
    return new Address(info.hashBuffer, network, Address.PayToPublicKeyHash);
  };
  Address.fromScriptHash = function(hash, network) {
    $.checkArgument(hash, 'hash parameter is required');
    var info = Address._transformHash(hash);
    return new Address(info.hashBuffer, network, Address.PayToScriptHash);
  };
  Address.payingTo = function(script, network) {
    $.checkArgument(script, 'script is required');
    $.checkArgument(script instanceof Script, 'script must be instance of Script');
    return Address.fromScriptHash(Hash.sha256ripemd160(script.toBuffer()), network);
  };
  Address.fromScript = function(script, network) {
    $.checkArgument(script instanceof Script, 'script must be a Script instance');
    var info = Address._transformScript(script, network);
    return new Address(info.hashBuffer, network, info.type);
  };
  Address.fromBuffer = function(buffer, network, type) {
    var info = Address._transformBuffer(buffer, network, type);
    return new Address(info.hashBuffer, info.network, info.type);
  };
  Address.fromString = function(str, network, type) {
    var info = Address._transformString(str, network, type);
    return new Address(info.hashBuffer, info.network, info.type);
  };
  Address.fromObject = function fromObject(obj) {
    $.checkState(JSUtil.isHexa(obj.hash), 'Unexpected hash property, "' + obj.hash + '", expected to be hex.');
    var hashBuffer = new Buffer(obj.hash, 'hex');
    return new Address(hashBuffer, obj.network, obj.type);
  };
  Address.getValidationError = function(data, network, type) {
    var error;
    try {
      new Address(data, network, type);
    } catch (e) {
      error = e;
    }
    return error;
  };
  Address.isValid = function(data, network, type) {
    return !Address.getValidationError(data, network, type);
  };
  Address.prototype.isPayToPublicKeyHash = function() {
    return this.type === Address.PayToPublicKeyHash;
  };
  Address.prototype.isPayToScriptHash = function() {
    return this.type === Address.PayToScriptHash;
  };
  Address.prototype.toBuffer = function() {
    var version = new Buffer([this.network[this.type]]);
    var buf = Buffer.concat([version, this.hashBuffer]);
    return buf;
  };
  Address.prototype.toObject = Address.prototype.toJSON = function toObject() {
    return {
      hash: this.hashBuffer.toString('hex'),
      type: this.type,
      network: this.network.toString()
    };
  };
  Address.prototype.toString = function() {
    return Base58Check.encode(this.toBuffer());
  };
  Address.prototype.inspect = function() {
    return '<Address: ' + this.toString() + ', type: ' + this.type + ', network: ' + this.network + '>';
  };
  module.exports = Address;
  var Script = require('./script/index');
})(require('buffer').Buffer);
