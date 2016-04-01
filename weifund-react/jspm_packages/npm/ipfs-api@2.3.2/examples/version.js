/* */ 
'use strict';
var ipfs = require('../src/index')('localhost', 5001);
ipfs.commands(function(err, res) {
  if (err)
    throw err;
  console.log(res);
});
