var Promise = require('bluebird');
var solc = require('solc');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var Web3 = require('web3');
var async = require('async');
var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');

var ContractsDirectory = path.normalize(__dirname)+'/client/contracts';


fs.readdirAsync(ContractsDirectory).then((contracts) => {
  async.forEach(contracts, (contract, cb) => {
    fs.readFileAsync(ContractsDirectory+'/'+contract, 'utf8').then((source) => {
      var compiled = solc.compile(source, 1);
      if(!compiled.contracts){ throw compiled }
      async.forEach(Object.keys(compiled.contracts), (C, cb) => {
        console.log(compiled.contracts[C].bytecode);
        cb();
      }, (error) => {
        if(error){throw error;}
      });
      cb();
    }).catch((error) => {
      throw error;
    });
  }, (error) => {
    if(error) throw error;
    console.log(true);
  });
}).catch((error) => {
  console.log(error);
});
