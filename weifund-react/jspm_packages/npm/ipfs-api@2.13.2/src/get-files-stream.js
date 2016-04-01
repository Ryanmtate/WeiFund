/* */ 
(function(Buffer) {
  'use strict';
  const File = require('vinyl');
  const vinylfs = require('vinyl-fs-browser');
  const vmps = require('vinyl-multipart-stream');
  const stream = require('stream');
  const Merge = require('merge-stream');
  exports = module.exports = getFilesStream;
  function getFilesStream(files, opts) {
    if (!files)
      return null;
    const adder = new Merge();
    const single = new stream.PassThrough({objectMode: true});
    adder.add(single);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (typeof(file) === 'string') {
        const srcOpts = {
          buffer: false,
          stripBOM: false,
          followSymlinks: opts.followSymlinks != null ? opts.followSymlinks : true
        };
        adder.add(vinylfs.src(file, srcOpts));
        if (opts.recursive) {
          adder.add(vinylfs.src(file + '/**/*', srcOpts));
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
    const f = {
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
      const s = new stream.PassThrough();
      return c.pipe(s);
    }
    throw new Error('vinyl will not accept: ' + c);
  }
})(require('buffer').Buffer);
