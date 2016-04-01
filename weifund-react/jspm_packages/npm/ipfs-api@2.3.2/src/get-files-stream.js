/* */ 
(function(Buffer) {
  var File = require('vinyl');
  var vinylfs = require('vinyl-fs-browser');
  var vmps = require('vinyl-multipart-stream');
  var stream = require('stream');
  var Merge = require('merge-stream');
  exports = module.exports = getFilesStream;
  function getFilesStream(files, opts) {
    if (!files)
      return null;
    if (!Array.isArray(files))
      files = [files];
    var adder = new Merge();
    var single = new stream.PassThrough({objectMode: true});
    adder.add(single);
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (typeof(file) === 'string') {
        adder.add(vinylfs.src(file, {buffer: false}));
        if (opts.r || opts.recursive) {
          adder.add(vinylfs.src(file + '/**/*', {buffer: false}));
        }
      } else {
        single.push(vinylFile(file));
      }
    }
    single.end();
    return adder.pipe(vmps());
  }
  function vinylFile(file) {
    if (file instanceof File) {
      return file;
    }
    var f = {
      cwd: '/',
      base: '/',
      path: ''
    };
    if (file.contents && file.path) {
      f.path = file.path;
      f.cwd = file.cwd || f.cwd;
      f.base = file.base || f.base;
      f.contents = file.contents;
    } else {
      f.contents = file;
    }
    f.contents = vinylContentsSafe(f.contents);
    return new File(f);
  }
  function vinylContentsSafe(c) {
    if (Buffer.isBuffer(c))
      return c;
    if (typeof(c) === 'string')
      return c;
    if (c instanceof stream.Stream)
      return c;
    if (typeof(c.pipe) === 'function') {
      var s = new stream.PassThrough();
      return c.pipe(s);
    }
    throw new Error('vinyl will not accept: ' + c);
  }
})(require('buffer').Buffer);
