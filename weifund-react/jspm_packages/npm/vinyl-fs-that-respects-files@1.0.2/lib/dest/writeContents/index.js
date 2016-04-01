/* */ 
'use strict';
var fs = require('fs');
var writeDir = require('./writeDir');
var writeStream = require('./writeStream');
var writeBuffer = require('./writeBuffer');
function writeContents(writePath, file, cb) {
  if (file.isDirectory()) {
    return writeDir(writePath, file, written);
  }
  if (file.isStream()) {
    return writeStream(writePath, file, written);
  }
  if (file.isBuffer()) {
    return writeBuffer(writePath, file, written);
  }
  if (file.isNull()) {
    return complete();
  }
  function complete(err) {
    cb(err, file);
  }
  function written(err) {
    if (isErrorFatal(err)) {
      return complete(err);
    }
    if (!file.stat || typeof file.stat.mode !== 'number') {
      return complete();
    }
    fs.stat(writePath, function(err, st) {
      if (err) {
        return complete(err);
      }
      var currentMode = (st.mode & parseInt('0777', 8));
      var expectedMode = (file.stat.mode & parseInt('0777', 8));
      if (currentMode === expectedMode) {
        return complete();
      }
      fs.chmod(writePath, expectedMode, complete);
    });
  }
  function isErrorFatal(err) {
    if (!err) {
      return false;
    } else if (err.code === 'EEXIST' && file.flag === 'wx') {
      return false;
    }
    return true;
  }
}
module.exports = writeContents;
