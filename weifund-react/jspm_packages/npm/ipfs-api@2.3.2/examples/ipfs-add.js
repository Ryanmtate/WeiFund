/* */ 
(function(process) {
  var ipfs = require('../src/index')('localhost', 5001);
  var files = process.argv.slice(2);
  ipfs.add(files, {recursive: true}, function(err, res) {
    if (err || !res)
      return console.log(err);
    for (var i = 0; i < res.length; i++) {
      console.log('added', res[i].Hash, res[i].Name);
    }
  });
})(require('process'));
