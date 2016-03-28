var Promise = require('bluebird');
var solc = require('solc');
var fs = Promise.promisifyAll(require('fs'));
var jsonfile = require('jsonfile');
var path = require('path');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var async = require('async');
var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');

var ContractDirectory = path.normalize(__dirname)+'/client/contracts'
var SolidityDirectory = ContractDirectory+'/solidity';
var solJSDirectory = ContractDirectory+'/sol-js';
var compiledDirectory = ContractDirectory+'/compiled';


var ContractGenerator = new Object();

fs.readdirAsync(SolidityDirectory).then((contracts) => {
  // console.log('Compiling contracts and saving .sol.js files in contract folder. one second...');
  async.forEach(contracts, (contract, cb) => {
    fs.readFileAsync(SolidityDirectory+'/'+contract, 'utf8').then((source) => {
      var compiled = solc.compile(source, 1);
      if(!compiled.contracts){ throw compiled }
      async.forEach(Object.keys(compiled.contracts), (C, cb) => {
        var abi = JSON.parse(compiled.contracts[C].interface);
        var binary = compiled.contracts[C].bytecode;

        web3.eth.contract(abi).new({from : web3.eth.coinbase, data : binary, gas : 3141592}, (error, deployed) => {
          if(error){throw error;}
          if(!deployed.address){
            console.log(`Deploying ${C}... transaction hash: ${deployed.transactionHash}`);
          } else {
            console.log(`Deployed ${C} at address: ${deployed.address}`);
            ContractGenerator[C] = {
              abi : abi,
              binary : binary,
              address : deployed.address
            };
            cb();
          }
        });
      }, (error) => {
        if(error){throw error;}

        cb();
      });
    }).catch((error) => {
      throw error;
    });
  }, (error) => {
    if(error) throw error;
    PuddingGenerator.save(ContractGenerator, solJSDirectory);
    console.log(`.sol.js saved to directory: ${solJSDirectory}`);

    jsonfile.writeFileSync(compiledDirectory+'/contracts.json', ContractGenerator);
    console.log(`contracts.json saved to directory: ${compiledDirectory}`);
  });
}).catch((error) => {
  console.log(error);
});
