/* */ 
(function(Buffer) {
  'use strict';
  var buffer = require('buffer');
  var Signature = require('../crypto/signature');
  var Script = require('../script/index');
  var Output = require('./output');
  var BufferReader = require('../encoding/bufferreader');
  var BufferWriter = require('../encoding/bufferwriter');
  var BN = require('../crypto/bn');
  var Hash = require('../crypto/hash');
  var ECDSA = require('../crypto/ecdsa');
  var $ = require('../util/preconditions');
  var _ = require('lodash');
  var SIGHASH_SINGLE_BUG = '0000000000000000000000000000000000000000000000000000000000000001';
  var BITS_64_ON = 'ffffffffffffffff';
  var sighash = function sighash(transaction, sighashType, inputNumber, subscript) {
    var Transaction = require('./transaction');
    var Input = require('./input/index');
    var i;
    var txcopy = Transaction.shallowCopy(transaction);
    subscript = new Script(subscript);
    subscript.removeCodeseparators();
    for (i = 0; i < txcopy.inputs.length; i++) {
      txcopy.inputs[i] = new Input(txcopy.inputs[i]).setScript(Script.empty());
    }
    txcopy.inputs[inputNumber] = new Input(txcopy.inputs[inputNumber]).setScript(subscript);
    if ((sighashType & 31) === Signature.SIGHASH_NONE || (sighashType & 31) === Signature.SIGHASH_SINGLE) {
      for (i = 0; i < txcopy.inputs.length; i++) {
        if (i !== inputNumber) {
          txcopy.inputs[i].sequenceNumber = 0;
        }
      }
    }
    if ((sighashType & 31) === Signature.SIGHASH_NONE) {
      txcopy.outputs = [];
    } else if ((sighashType & 31) === Signature.SIGHASH_SINGLE) {
      if (inputNumber >= txcopy.outputs.length) {
        return new Buffer(SIGHASH_SINGLE_BUG, 'hex');
      }
      txcopy.outputs.length = inputNumber + 1;
      for (i = 0; i < inputNumber; i++) {
        txcopy.outputs[i] = new Output({
          satoshis: BN.fromBuffer(new buffer.Buffer(BITS_64_ON, 'hex')),
          script: Script.empty()
        });
      }
    }
    if (sighashType & Signature.SIGHASH_ANYONECANPAY) {
      txcopy.inputs = [txcopy.inputs[inputNumber]];
    }
    var buf = new BufferWriter().write(txcopy.toBuffer()).writeInt32LE(sighashType).toBuffer();
    var ret = Hash.sha256sha256(buf);
    ret = new BufferReader(ret).readReverse();
    return ret;
  };
  function sign(transaction, privateKey, sighashType, inputIndex, subscript) {
    var hashbuf = sighash(transaction, sighashType, inputIndex, subscript);
    var sig = ECDSA.sign(hashbuf, privateKey, 'little').set({nhashtype: sighashType});
    return sig;
  }
  function verify(transaction, signature, publicKey, inputIndex, subscript) {
    $.checkArgument(!_.isUndefined(transaction));
    $.checkArgument(!_.isUndefined(signature) && !_.isUndefined(signature.nhashtype));
    var hashbuf = sighash(transaction, signature.nhashtype, inputIndex, subscript);
    return ECDSA.verify(hashbuf, signature, publicKey, 'little');
  }
  module.exports = {
    sighash: sighash,
    sign: sign,
    verify: verify
  };
})(require('buffer').Buffer);
