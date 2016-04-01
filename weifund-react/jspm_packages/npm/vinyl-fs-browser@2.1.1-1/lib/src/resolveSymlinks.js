/* */ 
(function(process) {
  'use strict';
  var through2 = require('through2');
  var fs = process.browser ? require('fs') : require('graceful-fs');
  var path = require('path');
  function resolveSymlinks(options) {
    function resolveFile(globFile, enc, cb) {
      fs.lstat(globFile.path, function(err, stat) {
        if (err) {
          return cb(err);
        }
        globFile.stat = stat;
        if (!stat.isSymbolicLink() || !options.followSymlinks) {
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
    return through2.obj(resolveFile);
  }
  module.exports = resolveSymlinks;
})(require('process'));
