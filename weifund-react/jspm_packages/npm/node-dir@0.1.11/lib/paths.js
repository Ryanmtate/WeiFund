/* */ 
var fs = require('fs'),
    path = require('path');
exports.files = function files(dir, type, callback, ignoreType) {
  var pending,
      results = {
        files: [],
        dirs: []
      };
  var done = function() {
    if (ignoreType || type === 'all') {
      callback(null, results);
    } else {
      callback(null, results[type + 's']);
    }
  };
  var getStatHandler = function(statPath) {
    return function(err, stat) {
      if (err)
        return callback(err);
      if (stat && stat.isDirectory() && stat.mode !== 17115) {
        if (type !== 'file') {
          results.dirs.push(statPath);
        }
        files(statPath, type, function(err, res) {
          if (err)
            return callback(err);
          if (type === 'all') {
            results.files = results.files.concat(res.files);
            results.dirs = results.dirs.concat(res.dirs);
          } else if (type === 'file') {
            results.files = results.files.concat(res.files);
          } else {
            results.dirs = results.dirs.concat(res.dirs);
          }
          if (!--pending)
            done();
        }, true);
      } else {
        if (type !== 'dir') {
          results.files.push(statPath);
        }
        if (!--pending)
          done();
      }
    };
  };
  if (typeof type !== 'string') {
    ignoreType = callback;
    callback = type;
    type = 'file';
  }
  fs.stat(dir, function(err, stat) {
    if (err)
      return callback(err);
    if (stat && stat.mode === 17115)
      return done();
    fs.readdir(dir, function(err, list) {
      if (err)
        return callback(err);
      pending = list.length;
      if (!pending)
        return done();
      for (var file,
          i = 0,
          l = list.length; i < l; i++) {
        file = path.join(dir, list[i]);
        fs.stat(file, getStatHandler(file));
      }
    });
  });
};
exports.paths = function paths(dir, combine, callback) {
  var type;
  if (typeof combine === 'function') {
    callback = combine;
    combine = false;
  }
  exports.files(dir, 'all', function(err, results) {
    if (err)
      return callback(err);
    if (combine) {
      callback(null, results.files.concat(results.dirs));
    } else {
      callback(null, results);
    }
  });
};
exports.subdirs = function subdirs(dir, callback) {
  exports.files(dir, 'dir', function(err, subdirs) {
    if (err)
      return callback(err);
    callback(null, subdirs);
  });
};
