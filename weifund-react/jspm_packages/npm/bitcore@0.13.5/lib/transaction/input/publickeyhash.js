/* */ 
(function(Buffer) {
  'use strict';
  var inherits = require('inherits');
  var $ = require('../../util/preconditions');
  var BufferUtil = require('../../util/buffer');
  var Hash = require('../../crypto/hash');
  var Input = require('./input');
  var Output = require('../output');
  var Sighash = require('../sighash');
  var Script = require('../../script/index');
  var Signature = require('../../crypto/signature');
  var TransactionSignature = require('../signature');
  function PublicKeyHashInput() {
    Input.apply(this, arguments);
  }
  inherits(PublicKeyHashInput, Input);
  PublicKeyHashInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData) {
    $.checkState(this.output instanceof Output);
    hashData = hashData || Hash.sha256ripemd160(privateKey.publicKey.toBuffer());
    sigtype = sigtype || Signature.SIGHASH_ALL;
    if (BufferUtil.equals(hashData, this.output.script.getPublicKeyHash())) {
      return [new TransactionSignature({
        publicKey: privateKey.publicKey,
        prevTxId: this.prevTxId,
        outputIndex: this.outputIndex,
        inputIndex: index,
        signature: Sighash.sign(transaction, privateKey, sigtype, index, this.output.script),
        sigtype: sigtype
      })];
    }
    return [];
  };
  PublicKeyHashInput.prototype.addSignature = function(transaction, signature) {
    $.checkState(this.isValidSignature(transaction, signature), 'Signature is invalid');
    this.setScript(Script.buildPublicKeyHashIn(signature.publicKey, signature.signature.toDER(), signature.sigtype));
    return this;
  };
  PublicKeyHashInput.prototype.clearSignatures = function() {
    this.setScript(Script.empty());
    return this;
  };
  PublicKeyHashInput.prototype.isFullySigned = function() {
    return this.script.isPublicKeyHashIn();
  };
  PublicKeyHashInput.SCRIPT_MAX_SIZE = 73 + 34;
  PublicKeyHashInput.prototype._estimateSize = function() {
    return PublicKeyHashInput.SCRIPT_MAX_SIZE;
  };
  module.exports = PublicKeyHashInput;
})(require('buffer').Buffer);
