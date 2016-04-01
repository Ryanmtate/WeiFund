/* */ 
(function(Buffer) {
  'use strict';
  var _ = require('lodash');
  var BlockHeader = require('./blockheader');
  var BufferUtil = require('../util/buffer');
  var BufferReader = require('../encoding/bufferreader');
  var BufferWriter = require('../encoding/bufferwriter');
  var Hash = require('../crypto/hash');
  var JSUtil = require('../util/js');
  var Transaction = require('../transaction/index');
  var $ = require('../util/preconditions');
  function MerkleBlock(arg) {
    if (!(this instanceof MerkleBlock)) {
      return new MerkleBlock(arg);
    }
    var info = {};
    if (BufferUtil.isBuffer(arg)) {
      info = MerkleBlock._fromBufferReader(BufferReader(arg));
    } else if (_.isObject(arg)) {
      var header;
      if (arg.header instanceof BlockHeader) {
        header = arg.header;
      } else {
        header = BlockHeader.fromObject(arg.header);
      }
      info = {
        header: header,
        numTransactions: arg.numTransactions,
        hashes: arg.hashes,
        flags: arg.flags
      };
    } else {
      throw new TypeError('Unrecognized argument for MerkleBlock');
    }
    _.extend(this, info);
    this._flagBitsUsed = 0;
    this._hashesUsed = 0;
    return this;
  }
  MerkleBlock.fromBuffer = function fromBuffer(buf) {
    return MerkleBlock.fromBufferReader(BufferReader(buf));
  };
  MerkleBlock.fromBufferReader = function fromBufferReader(br) {
    return new MerkleBlock(MerkleBlock._fromBufferReader(br));
  };
  MerkleBlock.prototype.toBuffer = function toBuffer() {
    return this.toBufferWriter().concat();
  };
  MerkleBlock.prototype.toBufferWriter = function toBufferWriter(bw) {
    if (!bw) {
      bw = new BufferWriter();
    }
    bw.write(this.header.toBuffer());
    bw.writeUInt32LE(this.numTransactions);
    bw.writeVarintNum(this.hashes.length);
    for (var i = 0; i < this.hashes.length; i++) {
      bw.write(new Buffer(this.hashes[i], 'hex'));
    }
    bw.writeVarintNum(this.flags.length);
    for (i = 0; i < this.flags.length; i++) {
      bw.writeUInt8(this.flags[i]);
    }
    return bw;
  };
  MerkleBlock.prototype.toObject = MerkleBlock.prototype.toJSON = function toObject() {
    return {
      header: this.header.toObject(),
      numTransactions: this.numTransactions,
      hashes: this.hashes,
      flags: this.flags
    };
  };
  MerkleBlock.prototype.validMerkleTree = function validMerkleTree() {
    $.checkState(_.isArray(this.flags), 'MerkleBlock flags is not an array');
    $.checkState(_.isArray(this.hashes), 'MerkleBlock hashes is not an array');
    if (this.hashes.length > this.numTransactions) {
      return false;
    }
    if (this.flags.length * 8 < this.hashes.length) {
      return false;
    }
    var height = this._calcTreeHeight();
    var opts = {
      hashesUsed: 0,
      flagBitsUsed: 0
    };
    var root = this._traverseMerkleTree(height, 0, opts);
    if (opts.hashesUsed !== this.hashes.length) {
      return false;
    }
    return BufferUtil.equals(root, this.header.merkleRoot);
  };
  MerkleBlock.prototype._traverseMerkleTree = function traverseMerkleTree(depth, pos, opts) {
    opts = opts || {};
    opts.txs = opts.txs || [];
    opts.flagBitsUsed = opts.flagBitsUsed || 0;
    opts.hashesUsed = opts.hashesUsed || 0;
    if (opts.flagBitsUsed > this.flags.length * 8) {
      return null;
    }
    var isParentOfMatch = (this.flags[opts.flagBitsUsed >> 3] >>> (opts.flagBitsUsed++ & 7)) & 1;
    if (depth === 0 || !isParentOfMatch) {
      if (opts.hashesUsed >= this.hashes.length) {
        return null;
      }
      var hash = this.hashes[opts.hashesUsed++];
      if (depth === 0 && isParentOfMatch) {
        opts.txs.push(hash);
      }
      return new Buffer(hash, 'hex');
    } else {
      var left = this._traverseMerkleTree(depth - 1, pos * 2, opts);
      var right = left;
      if (pos * 2 + 1 < this._calcTreeWidth(depth - 1)) {
        right = this._traverseMerkleTree(depth - 1, pos * 2 + 1, opts);
      }
      return Hash.sha256sha256(new Buffer.concat([left, right]));
    }
  };
  MerkleBlock.prototype._calcTreeWidth = function calcTreeWidth(height) {
    return (this.numTransactions + (1 << height) - 1) >> height;
  };
  MerkleBlock.prototype._calcTreeHeight = function calcTreeHeight() {
    var height = 0;
    while (this._calcTreeWidth(height) > 1) {
      height++;
    }
    return height;
  };
  MerkleBlock.prototype.hasTransaction = function hasTransaction(tx) {
    $.checkArgument(!_.isUndefined(tx), 'tx cannot be undefined');
    $.checkArgument(tx instanceof Transaction || typeof tx === 'string', 'Invalid tx given, tx must be a "string" or "Transaction"');
    var hash = tx;
    if (tx instanceof Transaction) {
      hash = BufferUtil.reverse(new Buffer(tx.id, 'hex')).toString('hex');
    }
    var txs = [];
    var height = this._calcTreeHeight();
    this._traverseMerkleTree(height, 0, {txs: txs});
    return txs.indexOf(hash) !== -1;
  };
  MerkleBlock._fromBufferReader = function _fromBufferReader(br) {
    $.checkState(!br.finished(), 'No merkleblock data received');
    var info = {};
    info.header = BlockHeader.fromBufferReader(br);
    info.numTransactions = br.readUInt32LE();
    var numHashes = br.readVarintNum();
    info.hashes = [];
    for (var i = 0; i < numHashes; i++) {
      info.hashes.push(br.read(32).toString('hex'));
    }
    var numFlags = br.readVarintNum();
    info.flags = [];
    for (i = 0; i < numFlags; i++) {
      info.flags.push(br.readUInt8());
    }
    return info;
  };
  MerkleBlock.fromObject = function fromObject(obj) {
    return new MerkleBlock(obj);
  };
  module.exports = MerkleBlock;
})(require('buffer').Buffer);
