/* */ 
'use strict';
var through2 = require('through2');
var fs = require('fs');
var path = require('path');
function resolveSymlinks() {
  return through2.obj(resolveFile);
}
function resolveFile(globFile, enc, cb) {
  fs.lstat(globFile.path, function(err, stat) {
    if (err) {
      return cb(err);
    }
    globFile.stat = stat;
    if (!stat.isSymbolicLink()) {
      return cb(null, globFile);
    }
    fs.realpath(globFile.path, function(err, filePath) {
      if (err) {
        return cb(err);
      }
      globFile.base = path.dirname(filePath);
      globFile.path = filePath;
      resolveFile(globFile, enc, cb);
    });
  });
}
module.exports = resolveSymlinks;
