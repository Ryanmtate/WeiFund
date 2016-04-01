/* */ 
var Path = require('path');
module.exports = collect;
function collect(stream, cb) {
  var files = {
    paths: [],
    named: {},
    unnamed: []
  };
  function get(name) {
    if (!files.named[name]) {
      files.named[name] = {children: []};
    }
    return files.named[name];
  }
  stream.on('data', function(file) {
    if (cb === null) {
      stream.on('data', function() {});
      return;
    }
    if (file.path) {
      var fo = get(file.path);
      fo.file = file;
      var po = get(Path.dirname(file.path));
      if (fo !== po)
        po.children.push(fo);
      files.paths.push(file.path);
    } else {
      files.unnamed.push({
        file: file,
        children: []
      });
    }
  });
  stream.on('error', function(err) {
    cb && cb(err);
    cb = null;
  });
  stream.on('end', function() {
    cb && cb(null, files);
    cb = null;
  });
}
