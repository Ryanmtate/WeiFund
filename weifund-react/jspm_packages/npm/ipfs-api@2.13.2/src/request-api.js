/* */ 
'use strict';
const Wreck = require('wreck');
const Qs = require('qs');
const ndjson = require('ndjson');
const getFilesStream = require('./get-files-stream');
const isNode = !global.window;
function parseChunkedJson(res, cb) {
  const parsed = [];
  res.pipe(ndjson.parse()).on('data', parsed.push.bind(parsed)).on('end', () => cb(null, parsed));
}
function onRes(buffer, cb) {
  return (err, res) => {
    if (err) {
      return cb(err);
    }
    const stream = !!res.headers['x-stream-output'];
    const chunkedObjects = !!res.headers['x-chunked-output'];
    const isJson = res.headers['content-type'] && res.headers['content-type'].indexOf('application/json') === 0;
    if (res.statusCode >= 400 || !res.statusCode) {
      const error = new Error(`Server responded with ${res.statusCode}`);
      return Wreck.read(res, {json: true}, (err, payload) => {
        if (err) {
          return cb(err);
        }
        if (payload) {
          error.code = payload.Code;
          error.message = payload.Message;
        }
        cb(error);
      });
    }
    if (stream && !buffer)
      return cb(null, res);
    if (chunkedObjects) {
      if (isJson)
        return parseChunkedJson(res, cb);
      return Wreck.read(res, null, cb);
    }
    Wreck.read(res, {json: isJson}, cb);
  };
}
function requestAPI(config, path, args, qs, files, buffer, cb) {
  qs = qs || {};
  if (Array.isArray(path))
    path = path.join('/');
  if (args && !Array.isArray(args))
    args = [args];
  if (args)
    qs.arg = args;
  if (files && !Array.isArray(files))
    files = [files];
  if (qs.r) {
    qs.recursive = qs.r;
    delete qs.r;
  }
  if (!isNode && qs.recursive && path === 'add') {
    return cb(new Error('Recursive uploads are not supported in the browser'));
  }
  qs['stream-channels'] = true;
  let stream;
  if (files) {
    stream = getFilesStream(files, qs);
  }
  delete qs.followSymlinks;
  const port = config.port ? `:${config.port}` : '';
  const opts = {
    method: files ? 'POST' : 'GET',
    uri: `${config.protocol}://${config.host}${port}${config['api-path']}${path}?${Qs.stringify(qs, {arrayFormat: 'repeat'})}`,
    headers: {}
  };
  if (isNode) {
    opts.headers['User-Agent'] = config['user-agent'];
  }
  if (files) {
    if (!stream.boundary) {
      return cb(new Error('No boundary in multipart stream'));
    }
    opts.headers['Content-Type'] = `multipart/form-data; boundary=${stream.boundary}`;
    opts.downstreamRes = stream;
    opts.payload = stream;
  }
  return Wreck.request(opts.method, opts.uri, opts, onRes(buffer, cb));
}
exports = module.exports = function getRequestAPI(config) {
  return function(path, args, qs, files, buffer, cb) {
    if (typeof buffer === 'function') {
      cb = buffer;
      buffer = false;
    }
    if (typeof cb !== 'function' && typeof Promise !== 'undefined') {
      return new Promise(function(resolve, reject) {
        requestAPI(config, path, args, qs, files, buffer, function(err, res) {
          if (err)
            return reject(err);
          resolve(res);
        });
      });
    }
    return requestAPI(config, path, args, qs, files, buffer, cb);
  };
};
