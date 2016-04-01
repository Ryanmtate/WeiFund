/* */ 
(function(Buffer, process) {
  'use strict';
  function Random() {}
  Random.getRandomBuffer = function(size) {
    if (process.browser)
      return Random.getRandomBufferBrowser(size);
    else
      return Random.getRandomBufferNode(size);
  };
  Random.getRandomBufferNode = function(size) {
    var crypto = require('crypto');
    return crypto.randomBytes(size);
  };
  Random.getRandomBufferBrowser = function(size) {
    if (!window.crypto && !window.msCrypto)
      throw new Error('window.crypto not available');
    if (window.crypto && window.crypto.getRandomValues)
      var crypto = window.crypto;
    else if (window.msCrypto && window.msCrypto.getRandomValues)
      var crypto = window.msCrypto;
    else
      throw new Error('window.crypto.getRandomValues not available');
    var bbuf = new Uint8Array(size);
    crypto.getRandomValues(bbuf);
    var buf = new Buffer(bbuf);
    return buf;
  };
  Random.getPseudoRandomBuffer = function(size) {
    var b32 = 0x100000000;
    var b = new Buffer(size);
    var r;
    for (var i = 0; i <= size; i++) {
      var j = Math.floor(i / 4);
      var k = i - j * 4;
      if (k === 0) {
        r = Math.random() * b32;
        b[i] = r & 0xff;
      } else {
        b[i] = (r = r >>> 8) & 0xff;
      }
    }
    return b;
  };
  module.exports = Random;
})(require('buffer').Buffer, require('process'));
