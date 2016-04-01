/* */ 
(function(Buffer) {
  'use strict';
  var Address = require('../address');
  var BufferReader = require('../encoding/bufferreader');
  var BufferWriter = require('../encoding/bufferwriter');
  var Hash = require('../crypto/hash');
  var Opcode = require('../opcode');
  var PublicKey = require('../publickey');
  var Signature = require('../crypto/signature');
  var Networks = require('../networks');
  var $ = require('../util/preconditions');
  var _ = require('lodash');
  var errors = require('../errors/index');
  var buffer = require('buffer');
  var BufferUtil = require('../util/buffer');
  var JSUtil = require('../util/js');
  var Script = function Script(from) {
    if (!(this instanceof Script)) {
      return new Script(from);
    }
    this.chunks = [];
    if (BufferUtil.isBuffer(from)) {
      return Script.fromBuffer(from);
    } else if (from instanceof Address) {
      return Script.fromAddress(from);
    } else if (from instanceof Script) {
      return Script.fromBuffer(from.toBuffer());
    } else if (typeof from === 'string') {
      return Script.fromString(from);
    } else if (typeof from !== 'undefined') {
      this.set(from);
    }
  };
  Script.prototype.set = function(obj) {
    this.chunks = obj.chunks || this.chunks;
    return this;
  };
  Script.fromBuffer = function(buffer) {
    var script = new Script();
    script.chunks = [];
    var br = new BufferReader(buffer);
    while (!br.finished()) {
      try {
        var opcodenum = br.readUInt8();
        var len,
            buf;
        if (opcodenum > 0 && opcodenum < Opcode.OP_PUSHDATA1) {
          len = opcodenum;
          script.chunks.push({
            buf: br.read(len),
            len: len,
            opcodenum: opcodenum
          });
        } else if (opcodenum === Opcode.OP_PUSHDATA1) {
          len = br.readUInt8();
          buf = br.read(len);
          script.chunks.push({
            buf: buf,
            len: len,
            opcodenum: opcodenum
          });
        } else if (opcodenum === Opcode.OP_PUSHDATA2) {
          len = br.readUInt16LE();
          buf = br.read(len);
          script.chunks.push({
            buf: buf,
            len: len,
            opcodenum: opcodenum
          });
        } else if (opcodenum === Opcode.OP_PUSHDATA4) {
          len = br.readUInt32LE();
          buf = br.read(len);
          script.chunks.push({
            buf: buf,
            len: len,
            opcodenum: opcodenum
          });
        } else {
          script.chunks.push({opcodenum: opcodenum});
        }
      } catch (e) {
        if (e instanceof RangeError) {
          throw new errors.Script.InvalidBuffer(buffer.toString('hex'));
        }
        throw e;
      }
    }
    return script;
  };
  Script.prototype.toBuffer = function() {
    var bw = new BufferWriter();
    for (var i = 0; i < this.chunks.length; i++) {
      var chunk = this.chunks[i];
      var opcodenum = chunk.opcodenum;
      bw.writeUInt8(chunk.opcodenum);
      if (chunk.buf) {
        if (opcodenum < Opcode.OP_PUSHDATA1) {
          bw.write(chunk.buf);
        } else if (opcodenum === Opcode.OP_PUSHDATA1) {
          bw.writeUInt8(chunk.len);
          bw.write(chunk.buf);
        } else if (opcodenum === Opcode.OP_PUSHDATA2) {
          bw.writeUInt16LE(chunk.len);
          bw.write(chunk.buf);
        } else if (opcodenum === Opcode.OP_PUSHDATA4) {
          bw.writeUInt32LE(chunk.len);
          bw.write(chunk.buf);
        }
      }
    }
    return bw.concat();
  };
  Script.fromASM = function(str) {
    var script = new Script();
    script.chunks = [];
    var tokens = str.split(' ');
    var i = 0;
    while (i < tokens.length) {
      var token = tokens[i];
      var opcode = Opcode(token);
      var opcodenum = opcode.toNumber();
      if (_.isUndefined(opcodenum)) {
        var buf = new Buffer(tokens[i], 'hex');
        script.chunks.push({
          buf: buf,
          len: buf.length,
          opcodenum: buf.length
        });
        i = i + 1;
      } else if (opcodenum === Opcode.OP_PUSHDATA1 || opcodenum === Opcode.OP_PUSHDATA2 || opcodenum === Opcode.OP_PUSHDATA4) {
        script.chunks.push({
          buf: new Buffer(tokens[i + 2], 'hex'),
          len: parseInt(tokens[i + 1]),
          opcodenum: opcodenum
        });
        i = i + 3;
      } else {
        script.chunks.push({opcodenum: opcodenum});
        i = i + 1;
      }
    }
    return script;
  };
  Script.fromHex = function(str) {
    return new Script(new buffer.Buffer(str, 'hex'));
  };
  Script.fromString = function(str) {
    if (JSUtil.isHexa(str) || str.length === 0) {
      return new Script(new buffer.Buffer(str, 'hex'));
    }
    var script = new Script();
    script.chunks = [];
    var tokens = str.split(' ');
    var i = 0;
    while (i < tokens.length) {
      var token = tokens[i];
      var opcode = Opcode(token);
      var opcodenum = opcode.toNumber();
      if (_.isUndefined(opcodenum)) {
        opcodenum = parseInt(token);
        if (opcodenum > 0 && opcodenum < Opcode.OP_PUSHDATA1) {
          script.chunks.push({
            buf: new Buffer(tokens[i + 1].slice(2), 'hex'),
            len: opcodenum,
            opcodenum: opcodenum
          });
          i = i + 2;
        } else {
          throw new Error('Invalid script: ' + JSON.stringify(str));
        }
      } else if (opcodenum === Opcode.OP_PUSHDATA1 || opcodenum === Opcode.OP_PUSHDATA2 || opcodenum === Opcode.OP_PUSHDATA4) {
        if (tokens[i + 2].slice(0, 2) !== '0x') {
          throw new Error('Pushdata data must start with 0x');
        }
        script.chunks.push({
          buf: new Buffer(tokens[i + 2].slice(2), 'hex'),
          len: parseInt(tokens[i + 1]),
          opcodenum: opcodenum
        });
        i = i + 3;
      } else {
        script.chunks.push({opcodenum: opcodenum});
        i = i + 1;
      }
    }
    return script;
  };
  Script.prototype._chunkToString = function(chunk, type) {
    var opcodenum = chunk.opcodenum;
    var asm = (type === 'asm');
    var str = '';
    if (!chunk.buf) {
      if (typeof Opcode.reverseMap[opcodenum] !== 'undefined') {
        str = str + ' ' + Opcode(opcodenum).toString();
      } else {
        var numstr = opcodenum.toString(16);
        if (numstr.length % 2 !== 0) {
          numstr = '0' + numstr;
        }
        if (asm) {
          str = str + ' ' + numstr;
        } else {
          str = str + ' ' + '0x' + numstr;
        }
      }
    } else {
      if (opcodenum === Opcode.OP_PUSHDATA1 || opcodenum === Opcode.OP_PUSHDATA2 || opcodenum === Opcode.OP_PUSHDATA4) {
        str = str + ' ' + Opcode(opcodenum).toString();
      }
      if (chunk.len > 0) {
        if (asm) {
          str = str + ' ' + chunk.buf.toString('hex');
        } else {
          str = str + ' ' + chunk.len + ' ' + '0x' + chunk.buf.toString('hex');
        }
      }
    }
    return str;
  };
  Script.prototype.toASM = function() {
    var str = '';
    for (var i = 0; i < this.chunks.length; i++) {
      var chunk = this.chunks[i];
      str += this._chunkToString(chunk, 'asm');
    }
    return str.substr(1);
  };
  Script.prototype.toString = function() {
    var str = '';
    for (var i = 0; i < this.chunks.length; i++) {
      var chunk = this.chunks[i];
      str += this._chunkToString(chunk);
    }
    return str.substr(1);
  };
  Script.prototype.toHex = function() {
    return this.toBuffer().toString('hex');
  };
  Script.prototype.inspect = function() {
    return '<Script: ' + this.toString() + '>';
  };
  Script.prototype.isPublicKeyHashOut = function() {
    return !!(this.chunks.length === 5 && this.chunks[0].opcodenum === Opcode.OP_DUP && this.chunks[1].opcodenum === Opcode.OP_HASH160 && this.chunks[2].buf && this.chunks[2].buf.length === 20 && this.chunks[3].opcodenum === Opcode.OP_EQUALVERIFY && this.chunks[4].opcodenum === Opcode.OP_CHECKSIG);
  };
  Script.prototype.isPublicKeyHashIn = function() {
    if (this.chunks.length === 2) {
      var signatureBuf = this.chunks[0].buf;
      var pubkeyBuf = this.chunks[1].buf;
      if (signatureBuf && signatureBuf.length && signatureBuf[0] === 0x30 && pubkeyBuf && pubkeyBuf.length) {
        var version = pubkeyBuf[0];
        if ((version === 0x04 || version === 0x06 || version === 0x07) && pubkeyBuf.length === 65) {
          return true;
        } else if ((version === 0x03 || version === 0x02) && pubkeyBuf.length === 33) {
          return true;
        }
      }
    }
    return false;
  };
  Script.prototype.getPublicKey = function() {
    $.checkState(this.isPublicKeyOut(), 'Can\'t retreive PublicKey from a non-PK output');
    return this.chunks[0].buf;
  };
  Script.prototype.getPublicKeyHash = function() {
    $.checkState(this.isPublicKeyHashOut(), 'Can\'t retrieve PublicKeyHash from a non-PKH output');
    return this.chunks[2].buf;
  };
  Script.prototype.isPublicKeyOut = function() {
    if (this.chunks.length === 2 && this.chunks[0].buf && this.chunks[0].buf.length && this.chunks[1].opcodenum === Opcode.OP_CHECKSIG) {
      var pubkeyBuf = this.chunks[0].buf;
      var version = pubkeyBuf[0];
      var isVersion = false;
      if ((version === 0x04 || version === 0x06 || version === 0x07) && pubkeyBuf.length === 65) {
        isVersion = true;
      } else if ((version === 0x03 || version === 0x02) && pubkeyBuf.length === 33) {
        isVersion = true;
      }
      if (isVersion) {
        return PublicKey.isValid(pubkeyBuf);
      }
    }
    return false;
  };
  Script.prototype.isPublicKeyIn = function() {
    if (this.chunks.length === 1) {
      var signatureBuf = this.chunks[0].buf;
      if (signatureBuf && signatureBuf.length && signatureBuf[0] === 0x30) {
        return true;
      }
    }
    return false;
  };
  Script.prototype.isScriptHashOut = function() {
    var buf = this.toBuffer();
    return (buf.length === 23 && buf[0] === Opcode.OP_HASH160 && buf[1] === 0x14 && buf[buf.length - 1] === Opcode.OP_EQUAL);
  };
  Script.prototype.isScriptHashIn = function() {
    if (this.chunks.length <= 1) {
      return false;
    }
    var redeemChunk = this.chunks[this.chunks.length - 1];
    var redeemBuf = redeemChunk.buf;
    if (!redeemBuf) {
      return false;
    }
    var redeemScript;
    try {
      redeemScript = Script.fromBuffer(redeemBuf);
    } catch (e) {
      if (e instanceof errors.Script.InvalidBuffer) {
        return false;
      }
      throw e;
    }
    var type = redeemScript.classify();
    return type !== Script.types.UNKNOWN;
  };
  Script.prototype.isMultisigOut = function() {
    return (this.chunks.length > 3 && Opcode.isSmallIntOp(this.chunks[0].opcodenum) && this.chunks.slice(1, this.chunks.length - 2).every(function(obj) {
      return obj.buf && BufferUtil.isBuffer(obj.buf);
    }) && Opcode.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) && this.chunks[this.chunks.length - 1].opcodenum === Opcode.OP_CHECKMULTISIG);
  };
  Script.prototype.isMultisigIn = function() {
    return this.chunks.length >= 2 && this.chunks[0].opcodenum === 0 && this.chunks.slice(1, this.chunks.length).every(function(obj) {
      return obj.buf && BufferUtil.isBuffer(obj.buf) && Signature.isTxDER(obj.buf);
    });
  };
  Script.prototype.isDataOut = function() {
    return this.chunks.length >= 1 && this.chunks[0].opcodenum === Opcode.OP_RETURN && (this.chunks.length === 1 || (this.chunks.length === 2 && this.chunks[1].buf && this.chunks[1].buf.length <= Script.OP_RETURN_STANDARD_SIZE && this.chunks[1].length === this.chunks.len));
  };
  Script.prototype.getData = function() {
    if (this.isDataOut() || this.isScriptHashOut()) {
      if (_.isUndefined(this.chunks[1])) {
        return new Buffer(0);
      } else {
        return new Buffer(this.chunks[1].buf);
      }
    }
    if (this.isPublicKeyHashOut()) {
      return new Buffer(this.chunks[2].buf);
    }
    throw new Error('Unrecognized script type to get data from');
  };
  Script.prototype.isPushOnly = function() {
    return _.every(this.chunks, function(chunk) {
      return chunk.opcodenum <= Opcode.OP_16;
    });
  };
  Script.types = {};
  Script.types.UNKNOWN = 'Unknown';
  Script.types.PUBKEY_OUT = 'Pay to public key';
  Script.types.PUBKEY_IN = 'Spend from public key';
  Script.types.PUBKEYHASH_OUT = 'Pay to public key hash';
  Script.types.PUBKEYHASH_IN = 'Spend from public key hash';
  Script.types.SCRIPTHASH_OUT = 'Pay to script hash';
  Script.types.SCRIPTHASH_IN = 'Spend from script hash';
  Script.types.MULTISIG_OUT = 'Pay to multisig';
  Script.types.MULTISIG_IN = 'Spend from multisig';
  Script.types.DATA_OUT = 'Data push';
  Script.OP_RETURN_STANDARD_SIZE = 80;
  Script.identifiers = {};
  Script.identifiers.PUBKEY_OUT = Script.prototype.isPublicKeyOut;
  Script.identifiers.PUBKEY_IN = Script.prototype.isPublicKeyIn;
  Script.identifiers.PUBKEYHASH_OUT = Script.prototype.isPublicKeyHashOut;
  Script.identifiers.PUBKEYHASH_IN = Script.prototype.isPublicKeyHashIn;
  Script.identifiers.MULTISIG_OUT = Script.prototype.isMultisigOut;
  Script.identifiers.MULTISIG_IN = Script.prototype.isMultisigIn;
  Script.identifiers.SCRIPTHASH_OUT = Script.prototype.isScriptHashOut;
  Script.identifiers.SCRIPTHASH_IN = Script.prototype.isScriptHashIn;
  Script.identifiers.DATA_OUT = Script.prototype.isDataOut;
  Script.prototype.classify = function() {
    for (var type in Script.identifiers) {
      if (Script.identifiers[type].bind(this)()) {
        return Script.types[type];
      }
    }
    return Script.types.UNKNOWN;
  };
  Script.prototype.isStandard = function() {
    return this.classify() !== Script.types.UNKNOWN;
  };
  Script.prototype.prepend = function(obj) {
    this._addByType(obj, true);
    return this;
  };
  Script.prototype.equals = function(script) {
    $.checkState(script instanceof Script, 'Must provide another script');
    if (this.chunks.length !== script.chunks.length) {
      return false;
    }
    var i;
    for (i = 0; i < this.chunks.length; i++) {
      if (BufferUtil.isBuffer(this.chunks[i].buf) && !BufferUtil.isBuffer(script.chunks[i].buf)) {
        return false;
      }
      if (BufferUtil.isBuffer(this.chunks[i].buf) && !BufferUtil.equals(this.chunks[i].buf, script.chunks[i].buf)) {
        return false;
      } else if (this.chunks[i].opcodenum !== script.chunks[i].opcodenum) {
        return false;
      }
    }
    return true;
  };
  Script.prototype.add = function(obj) {
    this._addByType(obj, false);
    return this;
  };
  Script.prototype._addByType = function(obj, prepend) {
    if (typeof obj === 'string') {
      this._addOpcode(obj, prepend);
    } else if (typeof obj === 'number') {
      this._addOpcode(obj, prepend);
    } else if (obj instanceof Opcode) {
      this._addOpcode(obj, prepend);
    } else if (BufferUtil.isBuffer(obj)) {
      this._addBuffer(obj, prepend);
    } else if (obj instanceof Script) {
      this.chunks = this.chunks.concat(obj.chunks);
    } else if (typeof obj === 'object') {
      this._insertAtPosition(obj, prepend);
    } else {
      throw new Error('Invalid script chunk');
    }
  };
  Script.prototype._insertAtPosition = function(op, prepend) {
    if (prepend) {
      this.chunks.unshift(op);
    } else {
      this.chunks.push(op);
    }
  };
  Script.prototype._addOpcode = function(opcode, prepend) {
    var op;
    if (typeof opcode === 'number') {
      op = opcode;
    } else if (opcode instanceof Opcode) {
      op = opcode.toNumber();
    } else {
      op = Opcode(opcode).toNumber();
    }
    this._insertAtPosition({opcodenum: op}, prepend);
    return this;
  };
  Script.prototype._addBuffer = function(buf, prepend) {
    var opcodenum;
    var len = buf.length;
    if (len >= 0 && len < Opcode.OP_PUSHDATA1) {
      opcodenum = len;
    } else if (len < Math.pow(2, 8)) {
      opcodenum = Opcode.OP_PUSHDATA1;
    } else if (len < Math.pow(2, 16)) {
      opcodenum = Opcode.OP_PUSHDATA2;
    } else if (len < Math.pow(2, 32)) {
      opcodenum = Opcode.OP_PUSHDATA4;
    } else {
      throw new Error('You can\'t push that much data');
    }
    this._insertAtPosition({
      buf: buf,
      len: len,
      opcodenum: opcodenum
    }, prepend);
    return this;
  };
  Script.prototype.removeCodeseparators = function() {
    var chunks = [];
    for (var i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].opcodenum !== Opcode.OP_CODESEPARATOR) {
        chunks.push(this.chunks[i]);
      }
    }
    this.chunks = chunks;
    return this;
  };
  Script.buildMultisigOut = function(publicKeys, threshold, opts) {
    $.checkArgument(threshold <= publicKeys.length, 'Number of required signatures must be less than or equal to the number of public keys');
    opts = opts || {};
    var script = new Script();
    script.add(Opcode.smallInt(threshold));
    publicKeys = _.map(publicKeys, PublicKey);
    var sorted = publicKeys;
    if (!opts.noSorting) {
      sorted = _.sortBy(publicKeys, function(publicKey) {
        return publicKey.toString('hex');
      });
    }
    for (var i = 0; i < sorted.length; i++) {
      var publicKey = sorted[i];
      script.add(publicKey.toBuffer());
    }
    script.add(Opcode.smallInt(publicKeys.length));
    script.add(Opcode.OP_CHECKMULTISIG);
    return script;
  };
  Script.buildP2SHMultisigIn = function(pubkeys, threshold, signatures, opts) {
    $.checkArgument(_.isArray(pubkeys));
    $.checkArgument(_.isNumber(threshold));
    $.checkArgument(_.isArray(signatures));
    opts = opts || {};
    var s = new Script();
    s.add(Opcode.OP_0);
    _.each(signatures, function(signature) {
      $.checkArgument(BufferUtil.isBuffer(signature), 'Signatures must be an array of Buffers');
      s.add(signature);
    });
    s.add((opts.cachedMultisig || Script.buildMultisigOut(pubkeys, threshold, opts)).toBuffer());
    return s;
  };
  Script.buildPublicKeyHashOut = function(to) {
    $.checkArgument(!_.isUndefined(to));
    $.checkArgument(to instanceof PublicKey || to instanceof Address || _.isString(to));
    if (to instanceof PublicKey) {
      to = to.toAddress();
    } else if (_.isString(to)) {
      to = new Address(to);
    }
    var s = new Script();
    s.add(Opcode.OP_DUP).add(Opcode.OP_HASH160).add(to.hashBuffer).add(Opcode.OP_EQUALVERIFY).add(Opcode.OP_CHECKSIG);
    s._network = to.network;
    return s;
  };
  Script.buildPublicKeyOut = function(pubkey) {
    $.checkArgument(pubkey instanceof PublicKey);
    var s = new Script();
    s.add(pubkey.toBuffer()).add(Opcode.OP_CHECKSIG);
    return s;
  };
  Script.buildDataOut = function(data, encoding) {
    $.checkArgument(_.isUndefined(data) || _.isString(data) || BufferUtil.isBuffer(data));
    if (_.isString(data)) {
      data = new Buffer(data, encoding);
    }
    var s = new Script();
    s.add(Opcode.OP_RETURN);
    if (!_.isUndefined(data)) {
      s.add(data);
    }
    return s;
  };
  Script.buildScriptHashOut = function(script) {
    $.checkArgument(script instanceof Script || (script instanceof Address && script.isPayToScriptHash()));
    var s = new Script();
    s.add(Opcode.OP_HASH160).add(script instanceof Address ? script.hashBuffer : Hash.sha256ripemd160(script.toBuffer())).add(Opcode.OP_EQUAL);
    s._network = script._network || script.network;
    return s;
  };
  Script.buildPublicKeyIn = function(signature, sigtype) {
    $.checkArgument(signature instanceof Signature || BufferUtil.isBuffer(signature));
    $.checkArgument(_.isUndefined(sigtype) || _.isNumber(sigtype));
    if (signature instanceof Signature) {
      signature = signature.toBuffer();
    }
    var script = new Script();
    script.add(BufferUtil.concat([signature, BufferUtil.integerAsSingleByteBuffer(sigtype || Signature.SIGHASH_ALL)]));
    return script;
  };
  Script.buildPublicKeyHashIn = function(publicKey, signature, sigtype) {
    $.checkArgument(signature instanceof Signature || BufferUtil.isBuffer(signature));
    $.checkArgument(_.isUndefined(sigtype) || _.isNumber(sigtype));
    if (signature instanceof Signature) {
      signature = signature.toBuffer();
    }
    var script = new Script().add(BufferUtil.concat([signature, BufferUtil.integerAsSingleByteBuffer(sigtype || Signature.SIGHASH_ALL)])).add(new PublicKey(publicKey).toBuffer());
    return script;
  };
  Script.empty = function() {
    return new Script();
  };
  Script.prototype.toScriptHashOut = function() {
    return Script.buildScriptHashOut(this);
  };
  Script.fromAddress = function(address) {
    address = Address(address);
    if (address.isPayToScriptHash()) {
      return Script.buildScriptHashOut(address);
    } else if (address.isPayToPublicKeyHash()) {
      return Script.buildPublicKeyHashOut(address);
    }
    throw new errors.Script.UnrecognizedAddress(address);
  };
  Script.prototype.getAddressInfo = function(opts) {
    if (this._isInput) {
      return this._getInputAddressInfo();
    } else if (this._isOutput) {
      return this._getOutputAddressInfo();
    } else {
      var info = this._getOutputAddressInfo();
      if (!info) {
        return this._getInputAddressInfo();
      }
      return info;
    }
  };
  Script.prototype._getOutputAddressInfo = function() {
    var info = {};
    if (this.isScriptHashOut()) {
      info.hashBuffer = this.getData();
      info.type = Address.PayToScriptHash;
    } else if (this.isPublicKeyHashOut()) {
      info.hashBuffer = this.getData();
      info.type = Address.PayToPublicKeyHash;
    } else {
      return false;
    }
    return info;
  };
  Script.prototype._getInputAddressInfo = function() {
    var info = {};
    if (this.isPublicKeyHashIn()) {
      info.hashBuffer = Hash.sha256ripemd160(this.chunks[1].buf);
      info.type = Address.PayToPublicKeyHash;
    } else if (this.isScriptHashIn()) {
      info.hashBuffer = Hash.sha256ripemd160(this.chunks[this.chunks.length - 1].buf);
      info.type = Address.PayToScriptHash;
    } else {
      return false;
    }
    return info;
  };
  Script.prototype.toAddress = function(network) {
    var info = this.getAddressInfo();
    if (!info) {
      return false;
    }
    info.network = Networks.get(network) || this._network || Networks.defaultNetwork;
    return new Address(info);
  };
  Script.prototype.findAndDelete = function(script) {
    var buf = script.toBuffer();
    var hex = buf.toString('hex');
    for (var i = 0; i < this.chunks.length; i++) {
      var script2 = Script({chunks: [this.chunks[i]]});
      var buf2 = script2.toBuffer();
      var hex2 = buf2.toString('hex');
      if (hex === hex2) {
        this.chunks.splice(i, 1);
      }
    }
    return this;
  };
  Script.prototype.checkMinimalPush = function(i) {
    var chunk = this.chunks[i];
    var buf = chunk.buf;
    var opcodenum = chunk.opcodenum;
    if (!buf) {
      return true;
    }
    if (buf.length === 0) {
      return opcodenum === Opcode.OP_0;
    } else if (buf.length === 1 && buf[0] >= 1 && buf[0] <= 16) {
      return opcodenum === Opcode.OP_1 + (buf[0] - 1);
    } else if (buf.length === 1 && buf[0] === 0x81) {
      return opcodenum === Opcode.OP_1NEGATE;
    } else if (buf.length <= 75) {
      return opcodenum === buf.length;
    } else if (buf.length <= 255) {
      return opcodenum === Opcode.OP_PUSHDATA1;
    } else if (buf.length <= 65535) {
      return opcodenum === Opcode.OP_PUSHDATA2;
    }
    return true;
  };
  Script.prototype._decodeOP_N = function(opcode) {
    if (opcode === Opcode.OP_0) {
      return 0;
    } else if (opcode >= Opcode.OP_1 && opcode <= Opcode.OP_16) {
      return opcode - (Opcode.OP_1 - 1);
    } else {
      throw new Error('Invalid opcode: ' + JSON.stringify(opcode));
    }
  };
  Script.prototype.getSignatureOperationsCount = function(accurate) {
    accurate = (_.isUndefined(accurate) ? true : accurate);
    var self = this;
    var n = 0;
    var lastOpcode = Opcode.OP_INVALIDOPCODE;
    _.each(self.chunks, function getChunk(chunk) {
      var opcode = chunk.opcodenum;
      if (opcode == Opcode.OP_CHECKSIG || opcode == Opcode.OP_CHECKSIGVERIFY) {
        n++;
      } else if (opcode == Opcode.OP_CHECKMULTISIG || opcode == Opcode.OP_CHECKMULTISIGVERIFY) {
        if (accurate && lastOpcode >= Opcode.OP_1 && lastOpcode <= Opcode.OP_16) {
          n += self._decodeOP_N(lastOpcode);
        } else {
          n += 20;
        }
      }
      lastOpcode = opcode;
    });
    return n;
  };
  module.exports = Script;
})(require('buffer').Buffer);
