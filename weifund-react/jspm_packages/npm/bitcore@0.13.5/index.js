/* */ 
(function(Buffer) {
  'use strict';
  var bitcore = module.exports;
  bitcore.version = 'v' + require('./package.json!systemjs-json').version;
  bitcore.versionGuard = function(version) {
    if (version !== undefined) {
      var message = 'More than one instance of bitcore found with versions: ' + bitcore.version + ' and ' + version + '. Please make sure to require bitcore and check that submodules do' + ' not also include their own bitcore dependency.';
      throw new Error(message);
    }
  };
  bitcore.versionGuard(global._bitcore);
  global._bitcore = bitcore.version;
  bitcore.crypto = {};
  bitcore.crypto.BN = require('./lib/crypto/bn');
  bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
  bitcore.crypto.Hash = require('./lib/crypto/hash');
  bitcore.crypto.Random = require('./lib/crypto/random');
  bitcore.crypto.Point = require('./lib/crypto/point');
  bitcore.crypto.Signature = require('./lib/crypto/signature');
  bitcore.encoding = {};
  bitcore.encoding.Base58 = require('./lib/encoding/base58');
  bitcore.encoding.Base58Check = require('./lib/encoding/base58check');
  bitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
  bitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
  bitcore.encoding.Varint = require('./lib/encoding/varint');
  bitcore.util = {};
  bitcore.util.buffer = require('./lib/util/buffer');
  bitcore.util.js = require('./lib/util/js');
  bitcore.util.preconditions = require('./lib/util/preconditions');
  bitcore.errors = require('./lib/errors/index');
  bitcore.Address = require('./lib/address');
  bitcore.Block = require('./lib/block/index');
  bitcore.MerkleBlock = require('./lib/block/merkleblock');
  bitcore.BlockHeader = require('./lib/block/blockheader');
  bitcore.HDPrivateKey = require('./lib/hdprivatekey');
  bitcore.HDPublicKey = require('./lib/hdpublickey');
  bitcore.Networks = require('./lib/networks');
  bitcore.Opcode = require('./lib/opcode');
  bitcore.PrivateKey = require('./lib/privatekey');
  bitcore.PublicKey = require('./lib/publickey');
  bitcore.Script = require('./lib/script/index');
  bitcore.Transaction = require('./lib/transaction/index');
  bitcore.URI = require('./lib/uri');
  bitcore.Unit = require('./lib/unit');
  bitcore.deps = {};
  bitcore.deps.bnjs = require('bn.js');
  bitcore.deps.bs58 = require('bs58');
  bitcore.deps.Buffer = Buffer;
  bitcore.deps.elliptic = require('elliptic');
  bitcore.deps._ = require('lodash');
  bitcore._HDKeyCache = require('./lib/hdkeycache');
  bitcore.Transaction.sighash = require('./lib/transaction/sighash');
})(require('buffer').Buffer);
