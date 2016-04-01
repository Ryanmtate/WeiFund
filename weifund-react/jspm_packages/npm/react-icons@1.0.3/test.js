/* */ 
var fs = require('fs');
var glob = require('glob');
var regex = /\sfill="\#([^"]*)"/gi;
glob(__dirname + '/icons/*/*.svg', function(err, files) {
  console.log(files);
  files.forEach(function(file) {
    var xml = fs.readFileSync(file, 'utf8');
    var newContent = xml.replace(regex, '');
    fs.writeFileSync(file, newContent, 'utf8');
  });
});
