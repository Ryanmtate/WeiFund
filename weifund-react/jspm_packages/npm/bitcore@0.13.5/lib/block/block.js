/* */ 
(function(Buffer) {
  'use strict';
  var _ = require('lodash');
  var BlockHeader = require('./blockheader');
  var BN = require('../crypto/bn');
  var BufferUtil = require('../util/buffer');
  var BufferReader = require('../encoding/bufferreader');
  var BufferWriter = require('../encoding/bufferwriter');
  var Hash = require('../crypto/hash');
  var Transaction = require('../transaction/index');
  var $ = require('../util/preconditions');
  function Block(arg) {
    if (!(this instanceof Block)) {
      return new Block(arg);
    }
    _.extend(this, Block._from(arg));
    return this;
  }
  Block.MAX_BLOCK_SIZE = 1000000;
  Block._from = function _from(arg) {
    var info = {};
    if (BufferUtil.isBuffer(arg)) {
      info = Block._fromBufferReader(BufferReader(arg));
    } else if (_.isObject(arg)) {
      info = Block._fromObject(arg);
    } else {
      throw new TypeError('Unrecognized argument for Block');
    }
    return info;
  };
  Block._fromObject = function _fromObject(data) {
    var transactions = [];
    data.transactions.forEach(function(tx) {
      if (tx instanceof Transaction) {
        transactions.push(tx);
      } else {
        transactions.push(Transaction().fromObject(tx));
      }
    });
    var info = {
      header: BlockHeader.fromObject(data.header),
      transactions: transactions
    };
    return info;
  };
  Block.fromObject = function fromObject(obj) {
    var info = Block._fromObject(obj);
    return new Block(info);
  };
  Block._fromBufferReader = function _fromBufferReader(br) {
    var info = {};
    $.checkState(!br.finished(), 'No block data received');
    info.header = BlockHeader.fromBufferReader(br);
    var transactions = br.readVarintNum();
    info.transactions = [];
    for (var i = 0; i < transactions; i++) {
      info.transactions.push(Transaction().fromBufferReader(br));
    }
    return info;
  };
  Block.fromBufferReader = function fromBufferReader(br) {
    $.checkArgument(br, 'br is required');
    var info = Block._fromBufferReader(br);
    return new Block(info);
  };
  Block.fromBuffer = function fromBuffer(buf) {
    return Block.fromBufferReader(new BufferReader(buf));
  };
  Block.fromString = function fromString(str) {
    var buf = new Buffer(str, 'hex');
    return Block.fromBuffer(buf);
  };
  Block.fromRawBlock = function fromRawBlock(data) {
    if (!BufferUtil.isBuffer(data)) {
      data = new Buffer(data, 'binary');
    }
    var br = BufferReader(data);
    br.pos = Block.Values.START_OF_BLOCK;
    var info = Block._fromBufferReader(br);
    return new Block(info);
  };
  Block.prototype.toObject = Block.prototype.toJSON = function toObject() {
    var transactions = [];
    this.transactions.forEach(function(tx) {
      transactions.push(tx.toObject());
    });
    return {
      header: this.header.toObject(),
      transactions: transactions
    };
  };
  Block.prototype.toBuffer = function toBuffer() {
    return this.toBufferWriter().concat();
  };
  Block.prototype.toString = function toString() {
    return this.toBuffer().toString('hex');
  };
  Block.prototype.toBufferWriter = function toBufferWriter(bw) {
    if (!bw) {
      bw = new BufferWriter();
    }
    bw.write(this.header.toBuffer());
    bw.writeVarintNum(this.transactions.length);
    for (var i = 0; i < this.transactions.length; i++) {
      this.transactions[i].toBufferWriter(bw);
    }
    return bw;
  };
  Block.prototype.getTransactionHashes = function getTransactionHashes() {
    var hashes = [];
    if (this.transactions.length === 0) {
      return [Block.Values.NULL_HASH];
    }
    for (var t = 0; t < this.transactions.length; t++) {
      hashes.push(this.transactions[t]._getHash());
    }
    return hashes;
  };
  Block.prototype.getMerkleTree = function getMerkleTree() {
    var tree = this.getTransactionHashes();
    var j = 0;
    for (var size = this.transactions.length; size > 1; size = Math.floor((size + 1) / 2)) {
      for (var i = 0; i < size; i += 2) {
        var i2 = Math.min(i + 1, size - 1);
        var buf = Buffer.concat([tree[j + i], tree[j + i2]]);
        tree.push(Hash.sha256sha256(buf));
      }
      j += size;
    }
    return tree;
  };
  Block.prototype.getMerkleRoot = function getMerkleRoot() {
    var tree = this.getMerkleTree();
    return tree[tree.length - 1];
  };
  Block.prototype.validMerkleRoot = function validMerkleRoot() {
    var h = new BN(this.header.merkleRoot.toString('hex'), 'hex');
    var c = new BN(this.getMerkleRoot().toString('hex'), 'hex');
    if (h.cmp(c) !== 0) {
      return false;
    }
    return true;
  };
  Block.prototype._getHash = function() {
    return this.header._getHash();
  };
  var idProperty = {
    configurable: false,
    enumerable: true,
    get: function() {
      if (!this._id) {
        this._id = this.header.id;
      }
      return this._id;
    },
    set: _.noop
  };
  Object.defineProperty(Block.prototype, 'id', idProperty);
  Object.defineProperty(Block.prototype, 'hash', idProperty);
  Block.prototype.inspect = function inspect() {
    return '<Block ' + this.id + '>';
  };
  Block.Values = {
    START_OF_BLOCK: 8,
    NULL_HASH: new Buffer('0000000000000000000000000000000000000000000000000000000000000000', 'hex')
  };
  module.exports = Block;
})(require('buffer').Buffer);
