/* */ 
(function(Buffer) {
  'use strict';
  var inherits = require('inherits');
  var $ = require('../../util/preconditions');
  var BufferUtil = require('../../util/buffer');
  var Input = require('./input');
  var Output = require('../output');
  var Sighash = require('../sighash');
  var Script = require('../../script/index');
  var Signature = require('../../crypto/signature');
  var TransactionSignature = require('../signature');
  function PublicKeyInput() {
    Input.apply(this, arguments);
  }
  inherits(PublicKeyInput, Input);
  PublicKeyInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype) {
    $.checkState(this.output instanceof Output);
    sigtype = sigtype || Signature.SIGHASH_ALL;
    var publicKey = privateKey.toPublicKey();
    if (publicKey.toString() === this.output.script.getPublicKey().toString('hex')) {
      return [new TransactionSignature({
        publicKey: publicKey,
        prevTxId: this.prevTxId,
        outputIndex: this.outputIndex,
        inputIndex: index,
        signature: Sighash.sign(transaction, privateKey, sigtype, index, this.output.script),
        sigtype: sigtype
      })];
    }
    return [];
  };
  PublicKeyInput.prototype.addSignature = function(transaction, signature) {
    $.checkState(this.isValidSignature(transaction, signature), 'Signature is invalid');
    this.setScript(Script.buildPublicKeyIn(signature.signature.toDER(), signature.sigtype));
    return this;
  };
  PublicKeyInput.prototype.clearSignatures = function() {
    this.setScript(Script.empty());
    return this;
  };
  PublicKeyInput.prototype.isFullySigned = function() {
    return this.script.isPublicKeyIn();
  };
  PublicKeyInput.SCRIPT_MAX_SIZE = 73;
  PublicKeyInput.prototype._estimateSize = function() {
    return PublicKeyInput.SCRIPT_MAX_SIZE;
  };
  module.exports = PublicKeyInput;
})(require('buffer').Buffer);
