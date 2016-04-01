/* */ 
'use strict';
var buffer = require('buffer');
var chai = require('chai');
var should = chai.should();
var bitcore = require('../../index');
var Script = bitcore.Script;
var Transaction = bitcore.Transaction;
var sighash = Transaction.sighash;
var vectors_sighash = require('../data/sighash.json!systemjs-json');
describe('sighash', function() {
  vectors_sighash.forEach(function(vector, i) {
    if (i === 0) {
      return;
    }
    it('test vector from bitcoind #' + i + ' (' + vector[4].substring(0, 16) + ')', function() {
      var txbuf = new buffer.Buffer(vector[0], 'hex');
      var scriptbuf = new buffer.Buffer(vector[1], 'hex');
      var subscript = Script(scriptbuf);
      var nin = vector[2];
      var nhashtype = vector[3];
      var sighashbuf = new buffer.Buffer(vector[4], 'hex');
      var tx = new Transaction(txbuf);
      tx.uncheckedSerialize().should.equal(txbuf.toString('hex'));
      sighash.sighash(tx, nhashtype, nin, subscript).toString('hex').should.equal(sighashbuf.toString('hex'));
    });
  });
});
