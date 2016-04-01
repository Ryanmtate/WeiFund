/* */ 
'use strict';
var through2 = require('through2');
var readDir = require('./readDir');
var bufferFile = require('./bufferFile');
var streamFile = require('./streamFile');
function getContents(opt) {
  return through2.obj(function(file, enc, cb) {
    if (file.isDirectory()) {
      return readDir(file, opt, cb);
    }
    if (opt.buffer !== false) {
      return bufferFile(file, opt, cb);
    }
    return streamFile(file, opt, cb);
  });
}
module.exports = getContents;
