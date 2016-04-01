/* */ 
(function(process) {
  var Multipart = require('multipart-stream');
  var duplexify = require('duplexify');
  var stream = require('stream');
  var Path = require('path');
  var collect = require('./collect');
  var common = require('./common');
  var randomString = common.randomString;
  module.exports = v2mpTree;
  function v2mpTree(opts) {
    opts = opts || {};
    opts.boundary = opts.boundary || randomString();
    var r = new stream.PassThrough({objectMode: true});
    var w = new stream.PassThrough({objectMode: true});
    var out = duplexify.obj(w, r);
    out.boundary = opts.boundary;
    collect(w, function(err, files) {
      if (err) {
        r.emit('error', err);
        return;
      }
      try {
        var mp = streamForCollection(opts.boundary, files);
        out.multipartHdr = "Content-Type: multipart/mixed; boundary=" + mp.boundary;
        if (opts.writeHeader) {
          r.write(out.multipartHdr + "\r\n");
          r.write("\r\n");
        }
        mp.pipe(r);
      } catch (e) {
        r.emit('error', e);
      }
    });
    return out;
  }
  function streamForCollection(boundary, files) {
    var parts = [];
    files.paths.sort();
    for (var i = 0; i < files.paths.length; i++) {
      var n = files.paths[i];
      var s = streamForPath(files, n);
      if (!s)
        continue;
      parts.push({
        body: s,
        headers: headersForFile(files.named[n])
      });
    }
    for (var i = 0; i < files.unnamed.length; i++) {
      var f = files.unnamed[i];
      var s = streamForWrapped(files, f);
      if (!s)
        continue;
      parts.push({
        body: s,
        headers: headersForFile(f)
      });
    }
    if (parts.length == 0) {
      var s = streamForString("--" + boundary + "--\r\n");
      s.boundary = boundary;
      return s;
    }
    var mp = new Multipart(boundary);
    for (var i = 0; i < parts.length; i++) {
      mp.addPart(parts[i]);
    }
    return mp;
  }
  function streamForString(str) {
    var s = new stream.PassThrough();
    s.end(str);
    return s;
  }
  function streamForPath(files, path) {
    var o = files.named[path];
    if (!o) {
      throw new Error("no object for path. lib error.");
    }
    if (!o.file) {
      return;
    }
    if (o.done)
      return null;
    o.done = true;
    return streamForWrapped(files, o);
  }
  function streamForWrapped(files, f) {
    if (f.file.isDirectory()) {
      return multipartForDir(files, f);
    }
    return f.file.contents;
  }
  function multipartForDir(files, dir) {
    dir.boundary = randomString();
    if (!dir.children || dir.children.length < 1) {
      return streamForString("--" + dir.boundary + "--\r\n");
    }
    var mp = new Multipart(dir.boundary);
    for (var i = 0; i < dir.children.length; i++) {
      var child = dir.children[i];
      if (!child.file) {
        throw new Error("child has no file. lib error");
      }
      var s = streamForPath(files, child.file.path);
      mp.addPart({
        body: s,
        headers: headersForFile(child)
      });
    }
    return mp;
  }
  function headersForFile(o) {
    var fpath = common.cleanPath(o.file.path, o.file.base);
    var h = {};
    h['Content-Disposition'] = 'file; filename="' + fpath + '"';
    if (o.file.isDirectory()) {
      h['Content-Type'] = 'multipart/mixed; boundary=' + o.boundary;
    } else {
      h['Content-Type'] = 'application/octet-stream';
    }
    return h;
  }
})(require('process'));
