/* */ 
(function(Buffer) {
  'use strict';
  var _ = require('lodash');
  var BufferUtil = require('./util/buffer');
  var JSUtil = require('./util/js');
  var networks = [];
  var networkMaps = {};
  function Network() {}
  Network.prototype.toString = function toString() {
    return this.name;
  };
  function get(arg, keys) {
    if (~networks.indexOf(arg)) {
      return arg;
    }
    if (keys) {
      if (!_.isArray(keys)) {
        keys = [keys];
      }
      var containsArg = function(key) {
        return networks[index][key] === arg;
      };
      for (var index in networks) {
        if (_.any(keys, containsArg)) {
          return networks[index];
        }
      }
      return undefined;
    }
    return networkMaps[arg];
  }
  function addNetwork(data) {
    var network = new Network();
    JSUtil.defineImmutable(network, {
      name: data.name,
      alias: data.alias,
      pubkeyhash: data.pubkeyhash,
      privatekey: data.privatekey,
      scripthash: data.scripthash,
      xpubkey: data.xpubkey,
      xprivkey: data.xprivkey,
      networkMagic: BufferUtil.integerAsBuffer(data.networkMagic),
      port: data.port,
      dnsSeeds: data.dnsSeeds
    });
    _.each(network, function(value) {
      if (!_.isUndefined(value) && !_.isObject(value)) {
        networkMaps[value] = network;
      }
    });
    networks.push(network);
    return network;
  }
  function removeNetwork(network) {
    for (var i = 0; i < networks.length; i++) {
      if (networks[i] === network) {
        networks.splice(i, 1);
      }
    }
    for (var key in networkMaps) {
      if (networkMaps[key] === network) {
        delete networkMaps[key];
      }
    }
  }
  addNetwork({
    name: 'livenet',
    alias: 'mainnet',
    pubkeyhash: 0x00,
    privatekey: 0x80,
    scripthash: 0x05,
    xpubkey: 0x0488b21e,
    xprivkey: 0x0488ade4,
    networkMagic: 0xf9beb4d9,
    port: 8333,
    dnsSeeds: ['seed.bitcoin.sipa.be', 'dnsseed.bluematt.me', 'dnsseed.bitcoin.dashjr.org', 'seed.bitcoinstats.com', 'seed.bitnodes.io', 'bitseed.xf2.org']
  });
  addNetwork({
    name: 'testnet',
    alias: 'testnet',
    pubkeyhash: 0x6f,
    privatekey: 0xef,
    scripthash: 0xc4,
    xpubkey: 0x043587cf,
    xprivkey: 0x04358394,
    networkMagic: 0x0b110907,
    port: 18333,
    dnsSeeds: ['testnet-seed.bitcoin.petertodd.org', 'testnet-seed.bluematt.me', 'testnet-seed.alexykot.me', 'testnet-seed.bitcoin.schildbach.de']
  });
  var livenet = get('livenet');
  var testnet = get('testnet');
  module.exports = {
    add: addNetwork,
    remove: removeNetwork,
    defaultNetwork: livenet,
    livenet: livenet,
    mainnet: livenet,
    testnet: testnet,
    get: get
  };
})(require('buffer').Buffer);
