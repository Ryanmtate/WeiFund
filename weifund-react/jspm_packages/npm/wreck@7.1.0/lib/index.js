/* */ 
(function(Buffer, process) {
  'use strict';
  const Events = require('events');
  const Url = require('url');
  const Http = require('http');
  const Https = require('https');
  const Stream = require('stream');
  const Hoek = require('hoek');
  const Boom = require('boom');
  const Payload = require('./payload');
  const Recorder = require('./recorder');
  const Tap = require('./tap');
  const internals = {
    jsonRegex: /^application\/[a-z.+-]*json$/,
    shallowOptions: ['agent', 'payload', 'downstreamRes', 'beforeRedirect', 'redirected']
  };
  internals.Client = function(defaults) {
    Events.EventEmitter.call(this);
    this.agents = {
      https: new Https.Agent({maxSockets: Infinity}),
      http: new Http.Agent({maxSockets: Infinity}),
      httpsAllowUnauthorized: new Https.Agent({
        maxSockets: Infinity,
        rejectUnauthorized: false
      })
    };
    this._defaults = defaults || {};
  };
  Hoek.inherits(internals.Client, Events.EventEmitter);
  internals.Client.prototype.defaults = function(options) {
    options = Hoek.applyToDefaultsWithShallow(options, this._defaults, internals.shallowOptions);
    return new internals.Client(options);
  };
  internals.resolveUrl = function(baseUrl, path) {
    if (!path) {
      return baseUrl;
    }
    const parsedBase = Url.parse(baseUrl);
    const parsedPath = Url.parse(path);
    parsedBase.pathname = parsedBase.pathname + parsedPath.pathname;
    parsedBase.pathname = parsedBase.pathname.replace(/[/]{2,}/g, '/');
    parsedBase.search = parsedPath.search;
    return Url.format(parsedBase);
  };
  internals.Client.prototype.request = function(method, url, options, callback, _trace) {
    options = Hoek.applyToDefaultsWithShallow(this._defaults, options || {}, internals.shallowOptions);
    Hoek.assert(options.payload === null || options.payload === undefined || typeof options.payload === 'string' || options.payload instanceof Stream || Buffer.isBuffer(options.payload), 'options.payload must be a string, a Buffer, or a Stream');
    Hoek.assert((options.agent === undefined || options.agent === null) || (typeof options.rejectUnauthorized !== 'boolean'), 'options.agent cannot be set to an Agent at the same time as options.rejectUnauthorized is set');
    Hoek.assert(options.beforeRedirect === undefined || options.beforeRedirect === null || typeof options.beforeRedirect === 'function', 'options.beforeRedirect must be a function');
    Hoek.assert(options.redirected === undefined || options.redirected === null || typeof options.redirected === 'function', 'options.redirected must be a function');
    if (options.baseUrl) {
      url = internals.resolveUrl(options.baseUrl, url);
      delete options.baseUrl;
    }
    const uri = Url.parse(url);
    if (options.socketPath) {
      uri.socketPath = options.socketPath;
      delete options.socketPath;
    }
    uri.method = method.toUpperCase();
    uri.headers = options.headers || {};
    const hasContentLength = Object.keys(uri.headers).some((key) => {
      return key.toLowerCase() === 'content-length';
    });
    const payloadSupported = (uri.method !== 'GET' && uri.method !== 'HEAD' && options.payload !== null && options.payload !== undefined);
    if (payloadSupported && (typeof options.payload === 'string' || Buffer.isBuffer(options.payload)) && (!hasContentLength)) {
      uri.headers = Hoek.clone(uri.headers);
      uri.headers['content-length'] = Buffer.isBuffer(options.payload) ? options.payload.length : Buffer.byteLength(options.payload);
    }
    let redirects = (options.hasOwnProperty('redirects') ? options.redirects : false);
    _trace = (_trace || []);
    _trace.push({
      method: uri.method,
      url: url
    });
    const client = (uri.protocol === 'https:' ? Https : Http);
    if (options.rejectUnauthorized !== undefined && uri.protocol === 'https:') {
      uri.agent = options.rejectUnauthorized ? this.agents.https : this.agents.httpsAllowUnauthorized;
    } else if (options.agent || options.agent === false) {
      uri.agent = options.agent;
    } else {
      uri.agent = uri.protocol === 'https:' ? this.agents.https : this.agents.http;
    }
    if (options.secureProtocol !== undefined) {
      uri.secureProtocol = options.secureProtocol;
    }
    const start = Date.now();
    const req = client.request(uri);
    let shadow = null;
    let onResponse;
    let onError;
    let timeoutId;
    const finish = (err, res) => {
      if (!callback || err) {
        req.abort();
      }
      req.removeListener('response', onResponse);
      req.removeListener('error', onError);
      req.on('error', Hoek.ignore);
      clearTimeout(timeoutId);
      this.emit('response', err, req, res, start, uri);
      if (callback) {
        return callback(err, res);
      }
    };
    const finishOnce = Hoek.once(finish);
    onError = (err) => {
      err.trace = _trace;
      return finishOnce(Boom.badGateway('Client request error', err));
    };
    req.once('error', onError);
    onResponse = (res) => {
      const statusCode = res.statusCode;
      if (redirects === false || [301, 302, 307, 308].indexOf(statusCode) === -1) {
        return finishOnce(null, res);
      }
      const redirectMethod = (statusCode === 301 || statusCode === 302 ? 'GET' : uri.method);
      let location = res.headers.location;
      res.destroy();
      if (redirects === 0) {
        return finishOnce(Boom.badGateway('Maximum redirections reached', _trace));
      }
      if (!location) {
        return finishOnce(Boom.badGateway('Received redirection without location', _trace));
      }
      if (!/^https?:/i.test(location)) {
        location = Url.resolve(uri.href, location);
      }
      const redirectOptions = Hoek.cloneWithShallow(options, internals.shallowOptions);
      redirectOptions.payload = shadow || options.payload;
      redirectOptions.redirects = --redirects;
      if (options.beforeRedirect) {
        options.beforeRedirect(redirectMethod, statusCode, location, redirectOptions);
      }
      const redirectReq = this.request(redirectMethod, location, redirectOptions, finishOnce, _trace);
      if (options.redirected) {
        options.redirected(statusCode, location, redirectReq);
      }
    };
    req.once('response', onResponse);
    if (options.timeout) {
      timeoutId = setTimeout(() => {
        return finishOnce(Boom.gatewayTimeout('Client request timeout'));
      }, options.timeout);
      delete options.timeout;
    }
    if (payloadSupported) {
      if (options.payload instanceof Stream) {
        let stream = options.payload;
        if (redirects) {
          const collector = new Tap();
          collector.once('finish', () => {
            shadow = collector.collect();
          });
          stream = options.payload.pipe(collector);
        }
        stream.pipe(req);
        return;
      }
      req.write(options.payload);
    }
    const _abort = req.abort;
    let aborted = false;
    req.abort = () => {
      if (!aborted && !req.res && !req.socket) {
        process.nextTick(() => {
          const error = new Error('socket hang up');
          error.code = 'ECONNRESET';
          finishOnce(error);
        });
      }
      aborted = true;
      return _abort.call(req);
    };
    req.end();
    return req;
  };
  internals.Client.prototype.read = function(res, options, callback) {
    options = Hoek.applyToDefaultsWithShallow(options || {}, this._defaults, internals.shallowOptions);
    const clientTimeout = options.timeout;
    let clientTimeoutId = null;
    const finish = (err, buffer) => {
      clearTimeout(clientTimeoutId);
      reader.removeListener('error', onReaderError);
      reader.removeListener('finish', onReaderFinish);
      res.removeListener('error', onResError);
      res.removeListener('close', onResClose);
      res.on('error', Hoek.ignore);
      if (err || !options.json) {
        return callback(err, buffer);
      }
      let result;
      if (buffer.length === 0) {
        return callback(null, null);
      }
      if (options.json === 'force') {
        result = internals.tryParseBuffer(buffer);
        return callback(result.err, result.json);
      }
      const contentType = (res.headers && res.headers['content-type']) || '';
      const mime = contentType.split(';')[0].trim().toLowerCase();
      if (!internals.jsonRegex.test(mime)) {
        return callback(null, buffer);
      }
      result = internals.tryParseBuffer(buffer);
      return callback(result.err, result.json);
    };
    const finishOnce = Hoek.once(finish);
    if (clientTimeout && clientTimeout > 0) {
      clientTimeoutId = setTimeout(() => {
        finishOnce(Boom.clientTimeout());
      }, clientTimeout);
    }
    const onResError = (err) => {
      return finishOnce(Boom.internal('Payload stream error', err));
    };
    const onResClose = () => {
      return finishOnce(Boom.internal('Payload stream closed prematurely'));
    };
    res.once('error', onResError);
    res.once('close', onResClose);
    const reader = new Recorder({maxBytes: options.maxBytes});
    const onReaderError = (err) => {
      if (res.destroy) {
        res.destroy();
      }
      return finishOnce(err);
    };
    reader.once('error', onReaderError);
    const onReaderFinish = () => {
      return finishOnce(null, reader.collect());
    };
    reader.once('finish', onReaderFinish);
    res.pipe(reader);
  };
  internals.Client.prototype.toReadableStream = function(payload, encoding) {
    return new Payload(payload, encoding);
  };
  internals.Client.prototype.parseCacheControl = function(field) {
    const regex = /(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g;
    const header = {};
    const error = field.replace(regex, ($0, $1, $2, $3) => {
      const value = $2 || $3;
      header[$1] = value ? value.toLowerCase() : true;
      return '';
    });
    if (header['max-age']) {
      try {
        const maxAge = parseInt(header['max-age'], 10);
        if (isNaN(maxAge)) {
          return null;
        }
        header['max-age'] = maxAge;
      } catch (err) {}
    }
    return (error ? null : header);
  };
  internals.Client.prototype.get = function(uri, options, callback) {
    return this._shortcutWrap('GET', uri, options, callback);
  };
  internals.Client.prototype.post = function(uri, options, callback) {
    return this._shortcutWrap('POST', uri, options, callback);
  };
  internals.Client.prototype.patch = function(uri, options, callback) {
    return this._shortcutWrap('PATCH', uri, options, callback);
  };
  internals.Client.prototype.put = function(uri, options, callback) {
    return this._shortcutWrap('PUT', uri, options, callback);
  };
  internals.Client.prototype.delete = function(uri, options, callback) {
    return this._shortcutWrap('DELETE', uri, options, callback);
  };
  internals.Client.prototype._shortcutWrap = function(method, uri) {
    const options = (typeof arguments[2] === 'function' ? {} : arguments[2]);
    const callback = (typeof arguments[2] === 'function' ? arguments[2] : arguments[3]);
    return this._shortcut(method, uri, options, callback);
  };
  internals.Client.prototype._shortcut = function(method, uri, options, callback) {
    return this.request(method, uri, options, (err, res) => {
      if (err) {
        return callback(err);
      }
      this.read(res, options, (err, payload) => {
        return callback(err, res, payload);
      });
    });
  };
  internals.tryParseBuffer = function(buffer) {
    const result = {
      json: null,
      err: null
    };
    try {
      const json = JSON.parse(buffer.toString());
      result.json = json;
    } catch (err) {
      result.err = err;
    }
    return result;
  };
  module.exports = new internals.Client();
})(require('buffer').Buffer, require('process'));
