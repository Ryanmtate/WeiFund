/* */ 
(function(process) {
  'use strict';
  var through2 = require('through2');
  var sourcemaps = process.browser ? null : require('gulp-sourcemaps');
  var duplexify = require('duplexify');
  var prepareWrite = require('../prepareWrite');
  var writeContents = require('./writeContents/index');
  function dest(outFolder, opt) {
    if (!opt) {
      opt = {};
    }
    function saveFile(file, enc, cb) {
      prepareWrite(outFolder, file, opt, function(err, writePath) {
        if (err) {
          return cb(err);
        }
        writeContents(writePath, file, cb);
      });
    }
    var saveStream = through2.obj(saveFile);
    if (!opt.sourcemaps) {
      return saveStream;
    }
    var mapStream = sourcemaps.write(opt.sourcemaps.path, opt.sourcemaps);
    var outputStream = duplexify.obj(mapStream, saveStream);
    mapStream.pipe(saveStream);
    return outputStream;
  }
  module.exports = dest;
})(require('process'));
