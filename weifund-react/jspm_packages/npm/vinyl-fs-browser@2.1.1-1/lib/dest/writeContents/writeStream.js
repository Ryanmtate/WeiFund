/* */ 
(function(process) {
  'use strict';
  var streamFile = require('../../src/getContents/streamFile');
  var fs = process.browser ? require('fs') : require('graceful-fs');
  function writeStream(writePath, file, cb) {
    var opt = {
      mode: file.stat.mode,
      flag: file.flag
    };
    var outStream = fs.createWriteStream(writePath, opt);
    file.contents.once('error', complete);
    outStream.once('error', complete);
    outStream.once('finish', success);
    file.contents.pipe(outStream);
    function success() {
      streamFile(file, {}, complete);
    }
    function complete(err) {
      file.contents.removeListener('error', cb);
      outStream.removeListener('error', cb);
      outStream.removeListener('finish', success);
      cb(err);
    }
  }
  module.exports = writeStream;
})(require('process'));
