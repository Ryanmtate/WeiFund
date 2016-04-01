/* */ 
"format cjs";
(function(Buffer, process) {
  (function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = f();
    } else if (typeof define === "function" && define.amd) {
      define([], f);
    } else {
      var g;
      if (typeof window !== "undefined") {
        g = window;
      } else if (typeof global !== "undefined") {
        g = global;
      } else if (typeof self !== "undefined") {
        g = self;
      } else {
        g = this;
      }
      g.ipfsAPI = f();
    }
  })(function() {
    var define,
        module,
        exports;
    return (function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a)
              return a(o, !0);
            if (i)
              return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {exports: {}};
          t[o][0].call(l.exports, function(e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    })({
      1: [function(require, module, exports) {}, {}],
      2: [function(require, module, exports) {
        var util = require('util');
        var pSlice = Array.prototype.slice;
        var hasOwn = Object.prototype.hasOwnProperty;
        var assert = module.exports = ok;
        assert.AssertionError = function AssertionError(options) {
          this.name = 'AssertionError';
          this.actual = options.actual;
          this.expected = options.expected;
          this.operator = options.operator;
          if (options.message) {
            this.message = options.message;
            this.generatedMessage = false;
          } else {
            this.message = getMessage(this);
            this.generatedMessage = true;
          }
          var stackStartFunction = options.stackStartFunction || fail;
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, stackStartFunction);
          } else {
            var err = new Error();
            if (err.stack) {
              var out = err.stack;
              var fn_name = stackStartFunction.name;
              var idx = out.indexOf('\n' + fn_name);
              if (idx >= 0) {
                var next_line = out.indexOf('\n', idx + 1);
                out = out.substring(next_line + 1);
              }
              this.stack = out;
            }
          }
        };
        util.inherits(assert.AssertionError, Error);
        function replacer(key, value) {
          if (util.isUndefined(value)) {
            return '' + value;
          }
          if (util.isNumber(value) && !isFinite(value)) {
            return value.toString();
          }
          if (util.isFunction(value) || util.isRegExp(value)) {
            return value.toString();
          }
          return value;
        }
        function truncate(s, n) {
          if (util.isString(s)) {
            return s.length < n ? s : s.slice(0, n);
          } else {
            return s;
          }
        }
        function getMessage(self) {
          return truncate(JSON.stringify(self.actual, replacer), 128) + ' ' + self.operator + ' ' + truncate(JSON.stringify(self.expected, replacer), 128);
        }
        function fail(actual, expected, message, operator, stackStartFunction) {
          throw new assert.AssertionError({
            message: message,
            actual: actual,
            expected: expected,
            operator: operator,
            stackStartFunction: stackStartFunction
          });
        }
        assert.fail = fail;
        function ok(value, message) {
          if (!value)
            fail(value, true, message, '==', assert.ok);
        }
        assert.ok = ok;
        assert.equal = function equal(actual, expected, message) {
          if (actual != expected)
            fail(actual, expected, message, '==', assert.equal);
        };
        assert.notEqual = function notEqual(actual, expected, message) {
          if (actual == expected) {
            fail(actual, expected, message, '!=', assert.notEqual);
          }
        };
        assert.deepEqual = function deepEqual(actual, expected, message) {
          if (!_deepEqual(actual, expected)) {
            fail(actual, expected, message, 'deepEqual', assert.deepEqual);
          }
        };
        function _deepEqual(actual, expected) {
          if (actual === expected) {
            return true;
          } else if (util.isBuffer(actual) && util.isBuffer(expected)) {
            if (actual.length != expected.length)
              return false;
            for (var i = 0; i < actual.length; i++) {
              if (actual[i] !== expected[i])
                return false;
            }
            return true;
          } else if (util.isDate(actual) && util.isDate(expected)) {
            return actual.getTime() === expected.getTime();
          } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
            return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
          } else if (!util.isObject(actual) && !util.isObject(expected)) {
            return actual == expected;
          } else {
            return objEquiv(actual, expected);
          }
        }
        function isArguments(object) {
          return Object.prototype.toString.call(object) == '[object Arguments]';
        }
        function objEquiv(a, b) {
          if (util.isNullOrUndefined(a) || util.isNullOrUndefined(b))
            return false;
          if (a.prototype !== b.prototype)
            return false;
          if (util.isPrimitive(a) || util.isPrimitive(b)) {
            return a === b;
          }
          var aIsArgs = isArguments(a),
              bIsArgs = isArguments(b);
          if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
            return false;
          if (aIsArgs) {
            a = pSlice.call(a);
            b = pSlice.call(b);
            return _deepEqual(a, b);
          }
          var ka = objectKeys(a),
              kb = objectKeys(b),
              key,
              i;
          if (ka.length != kb.length)
            return false;
          ka.sort();
          kb.sort();
          for (i = ka.length - 1; i >= 0; i--) {
            if (ka[i] != kb[i])
              return false;
          }
          for (i = ka.length - 1; i >= 0; i--) {
            key = ka[i];
            if (!_deepEqual(a[key], b[key]))
              return false;
          }
          return true;
        }
        assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
          if (_deepEqual(actual, expected)) {
            fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
          }
        };
        assert.strictEqual = function strictEqual(actual, expected, message) {
          if (actual !== expected) {
            fail(actual, expected, message, '===', assert.strictEqual);
          }
        };
        assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
          if (actual === expected) {
            fail(actual, expected, message, '!==', assert.notStrictEqual);
          }
        };
        function expectedException(actual, expected) {
          if (!actual || !expected) {
            return false;
          }
          if (Object.prototype.toString.call(expected) == '[object RegExp]') {
            return expected.test(actual);
          } else if (actual instanceof expected) {
            return true;
          } else if (expected.call({}, actual) === true) {
            return true;
          }
          return false;
        }
        function _throws(shouldThrow, block, expected, message) {
          var actual;
          if (util.isString(expected)) {
            message = expected;
            expected = null;
          }
          try {
            block();
          } catch (e) {
            actual = e;
          }
          message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
          if (shouldThrow && !actual) {
            fail(actual, expected, 'Missing expected exception' + message);
          }
          if (!shouldThrow && expectedException(actual, expected)) {
            fail(actual, expected, 'Got unwanted exception' + message);
          }
          if ((shouldThrow && actual && expected && !expectedException(actual, expected)) || (!shouldThrow && actual)) {
            throw actual;
          }
        }
        assert.throws = function(block, error, message) {
          _throws.apply(this, [true].concat(pSlice.call(arguments)));
        };
        assert.doesNotThrow = function(block, message) {
          _throws.apply(this, [false].concat(pSlice.call(arguments)));
        };
        assert.ifError = function(err) {
          if (err) {
            throw err;
          }
        };
        var objectKeys = Object.keys || function(obj) {
          var keys = [];
          for (var key in obj) {
            if (hasOwn.call(obj, key))
              keys.push(key);
          }
          return keys;
        };
      }, {"util/": 46}],
      3: [function(require, module, exports) {
        arguments[4][1][0].apply(exports, arguments);
      }, {"dup": 1}],
      4: [function(require, module, exports) {
        var base64 = require('base64-js');
        var ieee754 = require('ieee754');
        var isArray = require('is-array');
        exports.Buffer = Buffer;
        exports.SlowBuffer = SlowBuffer;
        exports.INSPECT_MAX_BYTES = 50;
        Buffer.poolSize = 8192;
        var rootParent = {};
        Buffer.TYPED_ARRAY_SUPPORT = (function() {
          function Bar() {}
          try {
            var arr = new Uint8Array(1);
            arr.foo = function() {
              return 42;
            };
            arr.constructor = Bar;
            return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
          } catch (e) {
            return false;
          }
        })();
        function kMaxLength() {
          return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
        }
        function Buffer(arg) {
          if (!(this instanceof Buffer)) {
            if (arguments.length > 1)
              return new Buffer(arg, arguments[1]);
            return new Buffer(arg);
          }
          this.length = 0;
          this.parent = undefined;
          if (typeof arg === 'number') {
            return fromNumber(this, arg);
          }
          if (typeof arg === 'string') {
            return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
          }
          return fromObject(this, arg);
        }
        function fromNumber(that, length) {
          that = allocate(that, length < 0 ? 0 : checked(length) | 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT) {
            for (var i = 0; i < length; i++) {
              that[i] = 0;
            }
          }
          return that;
        }
        function fromString(that, string, encoding) {
          if (typeof encoding !== 'string' || encoding === '')
            encoding = 'utf8';
          var length = byteLength(string, encoding) | 0;
          that = allocate(that, length);
          that.write(string, encoding);
          return that;
        }
        function fromObject(that, object) {
          if (Buffer.isBuffer(object))
            return fromBuffer(that, object);
          if (isArray(object))
            return fromArray(that, object);
          if (object == null) {
            throw new TypeError('must start with number, buffer, array or string');
          }
          if (typeof ArrayBuffer !== 'undefined') {
            if (object.buffer instanceof ArrayBuffer) {
              return fromTypedArray(that, object);
            }
            if (object instanceof ArrayBuffer) {
              return fromArrayBuffer(that, object);
            }
          }
          if (object.length)
            return fromArrayLike(that, object);
          return fromJsonObject(that, object);
        }
        function fromBuffer(that, buffer) {
          var length = checked(buffer.length) | 0;
          that = allocate(that, length);
          buffer.copy(that, 0, 0, length);
          return that;
        }
        function fromArray(that, array) {
          var length = checked(array.length) | 0;
          that = allocate(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }
        function fromTypedArray(that, array) {
          var length = checked(array.length) | 0;
          that = allocate(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }
        function fromArrayBuffer(that, array) {
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            array.byteLength;
            that = Buffer._augment(new Uint8Array(array));
          } else {
            that = fromTypedArray(that, new Uint8Array(array));
          }
          return that;
        }
        function fromArrayLike(that, array) {
          var length = checked(array.length) | 0;
          that = allocate(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }
        function fromJsonObject(that, object) {
          var array;
          var length = 0;
          if (object.type === 'Buffer' && isArray(object.data)) {
            array = object.data;
            length = checked(array.length) | 0;
          }
          that = allocate(that, length);
          for (var i = 0; i < length; i += 1) {
            that[i] = array[i] & 255;
          }
          return that;
        }
        function allocate(that, length) {
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            that = Buffer._augment(new Uint8Array(length));
          } else {
            that.length = length;
            that._isBuffer = true;
          }
          var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
          if (fromPool)
            that.parent = rootParent;
          return that;
        }
        function checked(length) {
          if (length >= kMaxLength()) {
            throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
          }
          return length | 0;
        }
        function SlowBuffer(subject, encoding) {
          if (!(this instanceof SlowBuffer))
            return new SlowBuffer(subject, encoding);
          var buf = new Buffer(subject, encoding);
          delete buf.parent;
          return buf;
        }
        Buffer.isBuffer = function isBuffer(b) {
          return !!(b != null && b._isBuffer);
        };
        Buffer.compare = function compare(a, b) {
          if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
            throw new TypeError('Arguments must be Buffers');
          }
          if (a === b)
            return 0;
          var x = a.length;
          var y = b.length;
          var i = 0;
          var len = Math.min(x, y);
          while (i < len) {
            if (a[i] !== b[i])
              break;
            ++i;
          }
          if (i !== len) {
            x = a[i];
            y = b[i];
          }
          if (x < y)
            return -1;
          if (y < x)
            return 1;
          return 0;
        };
        Buffer.isEncoding = function isEncoding(encoding) {
          switch (String(encoding).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'raw':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return true;
            default:
              return false;
          }
        };
        Buffer.concat = function concat(list, length) {
          if (!isArray(list))
            throw new TypeError('list argument must be an Array of Buffers.');
          if (list.length === 0) {
            return new Buffer(0);
          }
          var i;
          if (length === undefined) {
            length = 0;
            for (i = 0; i < list.length; i++) {
              length += list[i].length;
            }
          }
          var buf = new Buffer(length);
          var pos = 0;
          for (i = 0; i < list.length; i++) {
            var item = list[i];
            item.copy(buf, pos);
            pos += item.length;
          }
          return buf;
        };
        function byteLength(string, encoding) {
          if (typeof string !== 'string')
            string = '' + string;
          var len = string.length;
          if (len === 0)
            return 0;
          var loweredCase = false;
          for (; ; ) {
            switch (encoding) {
              case 'ascii':
              case 'binary':
              case 'raw':
              case 'raws':
                return len;
              case 'utf8':
              case 'utf-8':
                return utf8ToBytes(string).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return len * 2;
              case 'hex':
                return len >>> 1;
              case 'base64':
                return base64ToBytes(string).length;
              default:
                if (loweredCase)
                  return utf8ToBytes(string).length;
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer.byteLength = byteLength;
        Buffer.prototype.length = undefined;
        Buffer.prototype.parent = undefined;
        function slowToString(encoding, start, end) {
          var loweredCase = false;
          start = start | 0;
          end = end === undefined || end === Infinity ? this.length : end | 0;
          if (!encoding)
            encoding = 'utf8';
          if (start < 0)
            start = 0;
          if (end > this.length)
            end = this.length;
          if (end <= start)
            return '';
          while (true) {
            switch (encoding) {
              case 'hex':
                return hexSlice(this, start, end);
              case 'utf8':
              case 'utf-8':
                return utf8Slice(this, start, end);
              case 'ascii':
                return asciiSlice(this, start, end);
              case 'binary':
                return binarySlice(this, start, end);
              case 'base64':
                return base64Slice(this, start, end);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return utf16leSlice(this, start, end);
              default:
                if (loweredCase)
                  throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
            }
          }
        }
        Buffer.prototype.toString = function toString() {
          var length = this.length | 0;
          if (length === 0)
            return '';
          if (arguments.length === 0)
            return utf8Slice(this, 0, length);
          return slowToString.apply(this, arguments);
        };
        Buffer.prototype.equals = function equals(b) {
          if (!Buffer.isBuffer(b))
            throw new TypeError('Argument must be a Buffer');
          if (this === b)
            return true;
          return Buffer.compare(this, b) === 0;
        };
        Buffer.prototype.inspect = function inspect() {
          var str = '';
          var max = exports.INSPECT_MAX_BYTES;
          if (this.length > 0) {
            str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
            if (this.length > max)
              str += ' ... ';
          }
          return '<Buffer ' + str + '>';
        };
        Buffer.prototype.compare = function compare(b) {
          if (!Buffer.isBuffer(b))
            throw new TypeError('Argument must be a Buffer');
          if (this === b)
            return 0;
          return Buffer.compare(this, b);
        };
        Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
          if (byteOffset > 0x7fffffff)
            byteOffset = 0x7fffffff;
          else if (byteOffset < -0x80000000)
            byteOffset = -0x80000000;
          byteOffset >>= 0;
          if (this.length === 0)
            return -1;
          if (byteOffset >= this.length)
            return -1;
          if (byteOffset < 0)
            byteOffset = Math.max(this.length + byteOffset, 0);
          if (typeof val === 'string') {
            if (val.length === 0)
              return -1;
            return String.prototype.indexOf.call(this, val, byteOffset);
          }
          if (Buffer.isBuffer(val)) {
            return arrayIndexOf(this, val, byteOffset);
          }
          if (typeof val === 'number') {
            if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
              return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
            }
            return arrayIndexOf(this, [val], byteOffset);
          }
          function arrayIndexOf(arr, val, byteOffset) {
            var foundIndex = -1;
            for (var i = 0; byteOffset + i < arr.length; i++) {
              if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
                if (foundIndex === -1)
                  foundIndex = i;
                if (i - foundIndex + 1 === val.length)
                  return byteOffset + foundIndex;
              } else {
                foundIndex = -1;
              }
            }
            return -1;
          }
          throw new TypeError('val must be string, number or Buffer');
        };
        Buffer.prototype.get = function get(offset) {
          console.log('.get() is deprecated. Access using array indexes instead.');
          return this.readUInt8(offset);
        };
        Buffer.prototype.set = function set(v, offset) {
          console.log('.set() is deprecated. Access using array indexes instead.');
          return this.writeUInt8(v, offset);
        };
        function hexWrite(buf, string, offset, length) {
          offset = Number(offset) || 0;
          var remaining = buf.length - offset;
          if (!length) {
            length = remaining;
          } else {
            length = Number(length);
            if (length > remaining) {
              length = remaining;
            }
          }
          var strLen = string.length;
          if (strLen % 2 !== 0)
            throw new Error('Invalid hex string');
          if (length > strLen / 2) {
            length = strLen / 2;
          }
          for (var i = 0; i < length; i++) {
            var parsed = parseInt(string.substr(i * 2, 2), 16);
            if (isNaN(parsed))
              throw new Error('Invalid hex string');
            buf[offset + i] = parsed;
          }
          return i;
        }
        function utf8Write(buf, string, offset, length) {
          return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
        }
        function asciiWrite(buf, string, offset, length) {
          return blitBuffer(asciiToBytes(string), buf, offset, length);
        }
        function binaryWrite(buf, string, offset, length) {
          return asciiWrite(buf, string, offset, length);
        }
        function base64Write(buf, string, offset, length) {
          return blitBuffer(base64ToBytes(string), buf, offset, length);
        }
        function ucs2Write(buf, string, offset, length) {
          return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
        }
        Buffer.prototype.write = function write(string, offset, length, encoding) {
          if (offset === undefined) {
            encoding = 'utf8';
            length = this.length;
            offset = 0;
          } else if (length === undefined && typeof offset === 'string') {
            encoding = offset;
            length = this.length;
            offset = 0;
          } else if (isFinite(offset)) {
            offset = offset | 0;
            if (isFinite(length)) {
              length = length | 0;
              if (encoding === undefined)
                encoding = 'utf8';
            } else {
              encoding = length;
              length = undefined;
            }
          } else {
            var swap = encoding;
            encoding = offset;
            offset = length | 0;
            length = swap;
          }
          var remaining = this.length - offset;
          if (length === undefined || length > remaining)
            length = remaining;
          if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
            throw new RangeError('attempt to write outside buffer bounds');
          }
          if (!encoding)
            encoding = 'utf8';
          var loweredCase = false;
          for (; ; ) {
            switch (encoding) {
              case 'hex':
                return hexWrite(this, string, offset, length);
              case 'utf8':
              case 'utf-8':
                return utf8Write(this, string, offset, length);
              case 'ascii':
                return asciiWrite(this, string, offset, length);
              case 'binary':
                return binaryWrite(this, string, offset, length);
              case 'base64':
                return base64Write(this, string, offset, length);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, string, offset, length);
              default:
                if (loweredCase)
                  throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
            }
          }
        };
        Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        function base64Slice(buf, start, end) {
          if (start === 0 && end === buf.length) {
            return base64.fromByteArray(buf);
          } else {
            return base64.fromByteArray(buf.slice(start, end));
          }
        }
        function utf8Slice(buf, start, end) {
          var res = '';
          var tmp = '';
          end = Math.min(buf.length, end);
          for (var i = start; i < end; i++) {
            if (buf[i] <= 0x7F) {
              res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
              tmp = '';
            } else {
              tmp += '%' + buf[i].toString(16);
            }
          }
          return res + decodeUtf8Char(tmp);
        }
        function asciiSlice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);
          for (var i = start; i < end; i++) {
            ret += String.fromCharCode(buf[i] & 0x7F);
          }
          return ret;
        }
        function binarySlice(buf, start, end) {
          var ret = '';
          end = Math.min(buf.length, end);
          for (var i = start; i < end; i++) {
            ret += String.fromCharCode(buf[i]);
          }
          return ret;
        }
        function hexSlice(buf, start, end) {
          var len = buf.length;
          if (!start || start < 0)
            start = 0;
          if (!end || end < 0 || end > len)
            end = len;
          var out = '';
          for (var i = start; i < end; i++) {
            out += toHex(buf[i]);
          }
          return out;
        }
        function utf16leSlice(buf, start, end) {
          var bytes = buf.slice(start, end);
          var res = '';
          for (var i = 0; i < bytes.length; i += 2) {
            res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
          }
          return res;
        }
        Buffer.prototype.slice = function slice(start, end) {
          var len = this.length;
          start = ~~start;
          end = end === undefined ? len : ~~end;
          if (start < 0) {
            start += len;
            if (start < 0)
              start = 0;
          } else if (start > len) {
            start = len;
          }
          if (end < 0) {
            end += len;
            if (end < 0)
              end = 0;
          } else if (end > len) {
            end = len;
          }
          if (end < start)
            end = start;
          var newBuf;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            newBuf = Buffer._augment(this.subarray(start, end));
          } else {
            var sliceLen = end - start;
            newBuf = new Buffer(sliceLen, undefined);
            for (var i = 0; i < sliceLen; i++) {
              newBuf[i] = this[i + start];
            }
          }
          if (newBuf.length)
            newBuf.parent = this.parent || this;
          return newBuf;
        };
        function checkOffset(offset, ext, length) {
          if ((offset % 1) !== 0 || offset < 0)
            throw new RangeError('offset is not uint');
          if (offset + ext > length)
            throw new RangeError('Trying to access beyond buffer length');
        }
        Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert)
            checkOffset(offset, byteLength, this.length);
          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }
          return val;
        };
        Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert) {
            checkOffset(offset, byteLength, this.length);
          }
          var val = this[offset + --byteLength];
          var mul = 1;
          while (byteLength > 0 && (mul *= 0x100)) {
            val += this[offset + --byteLength] * mul;
          }
          return val;
        };
        Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 1, this.length);
          return this[offset];
        };
        Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 2, this.length);
          return this[offset] | (this[offset + 1] << 8);
        };
        Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 2, this.length);
          return (this[offset] << 8) | this[offset + 1];
        };
        Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
        };
        Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
        };
        Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert)
            checkOffset(offset, byteLength, this.length);
          var val = this[offset];
          var mul = 1;
          var i = 0;
          while (++i < byteLength && (mul *= 0x100)) {
            val += this[offset + i] * mul;
          }
          mul *= 0x80;
          if (val >= mul)
            val -= Math.pow(2, 8 * byteLength);
          return val;
        };
        Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert)
            checkOffset(offset, byteLength, this.length);
          var i = byteLength;
          var mul = 1;
          var val = this[offset + --i];
          while (i > 0 && (mul *= 0x100)) {
            val += this[offset + --i] * mul;
          }
          mul *= 0x80;
          if (val >= mul)
            val -= Math.pow(2, 8 * byteLength);
          return val;
        };
        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 1, this.length);
          if (!(this[offset] & 0x80))
            return (this[offset]);
          return ((0xff - this[offset] + 1) * -1);
        };
        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 2, this.length);
          var val = this[offset] | (this[offset + 1] << 8);
          return (val & 0x8000) ? val | 0xFFFF0000 : val;
        };
        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 2, this.length);
          var val = this[offset + 1] | (this[offset] << 8);
          return (val & 0x8000) ? val | 0xFFFF0000 : val;
        };
        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
        };
        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
        };
        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, true, 23, 4);
        };
        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 4, this.length);
          return ieee754.read(this, offset, false, 23, 4);
        };
        Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, true, 52, 8);
        };
        Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
          if (!noAssert)
            checkOffset(offset, 8, this.length);
          return ieee754.read(this, offset, false, 52, 8);
        };
        function checkInt(buf, value, offset, ext, max, min) {
          if (!Buffer.isBuffer(buf))
            throw new TypeError('buffer must be a Buffer instance');
          if (value > max || value < min)
            throw new RangeError('value is out of bounds');
          if (offset + ext > buf.length)
            throw new RangeError('index out of range');
        }
        Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert)
            checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
          var mul = 1;
          var i = 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          byteLength = byteLength | 0;
          if (!noAssert)
            checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
          var i = byteLength - 1;
          var mul = 1;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = (value / mul) & 0xFF;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 1, 0xff, 0);
          if (!Buffer.TYPED_ARRAY_SUPPORT)
            value = Math.floor(value);
          this[offset] = value;
          return offset + 1;
        };
        function objectWriteUInt16(buf, value, offset, littleEndian) {
          if (value < 0)
            value = 0xffff + value + 1;
          for (var i = 0,
              j = Math.min(buf.length - offset, 2); i < j; i++) {
            buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
          }
        }
        Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value;
            this[offset + 1] = (value >>> 8);
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };
        Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 2, 0xffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 8);
            this[offset + 1] = value;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };
        function objectWriteUInt32(buf, value, offset, littleEndian) {
          if (value < 0)
            value = 0xffffffff + value + 1;
          for (var i = 0,
              j = Math.min(buf.length - offset, 4); i < j; i++) {
            buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
          }
        }
        Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset + 3] = (value >>> 24);
            this[offset + 2] = (value >>> 16);
            this[offset + 1] = (value >>> 8);
            this[offset] = value;
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };
        Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0xffffffff, 0);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 24);
            this[offset + 1] = (value >>> 16);
            this[offset + 2] = (value >>> 8);
            this[offset + 3] = value;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };
        Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }
          var i = 0;
          var mul = 1;
          var sub = value < 0 ? 1 : 0;
          this[offset] = value & 0xFF;
          while (++i < byteLength && (mul *= 0x100)) {
            this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert) {
            var limit = Math.pow(2, 8 * byteLength - 1);
            checkInt(this, value, offset, byteLength, limit - 1, -limit);
          }
          var i = byteLength - 1;
          var mul = 1;
          var sub = value < 0 ? 1 : 0;
          this[offset + i] = value & 0xFF;
          while (--i >= 0 && (mul *= 0x100)) {
            this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
          }
          return offset + byteLength;
        };
        Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 1, 0x7f, -0x80);
          if (!Buffer.TYPED_ARRAY_SUPPORT)
            value = Math.floor(value);
          if (value < 0)
            value = 0xff + value + 1;
          this[offset] = value;
          return offset + 1;
        };
        Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value;
            this[offset + 1] = (value >>> 8);
          } else {
            objectWriteUInt16(this, value, offset, true);
          }
          return offset + 2;
        };
        Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 2, 0x7fff, -0x8000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 8);
            this[offset + 1] = value;
          } else {
            objectWriteUInt16(this, value, offset, false);
          }
          return offset + 2;
        };
        Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = value;
            this[offset + 1] = (value >>> 8);
            this[offset + 2] = (value >>> 16);
            this[offset + 3] = (value >>> 24);
          } else {
            objectWriteUInt32(this, value, offset, true);
          }
          return offset + 4;
        };
        Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
          value = +value;
          offset = offset | 0;
          if (!noAssert)
            checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
          if (value < 0)
            value = 0xffffffff + value + 1;
          if (Buffer.TYPED_ARRAY_SUPPORT) {
            this[offset] = (value >>> 24);
            this[offset + 1] = (value >>> 16);
            this[offset + 2] = (value >>> 8);
            this[offset + 3] = value;
          } else {
            objectWriteUInt32(this, value, offset, false);
          }
          return offset + 4;
        };
        function checkIEEE754(buf, value, offset, ext, max, min) {
          if (value > max || value < min)
            throw new RangeError('value is out of bounds');
          if (offset + ext > buf.length)
            throw new RangeError('index out of range');
          if (offset < 0)
            throw new RangeError('index out of range');
        }
        function writeFloat(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
          }
          ieee754.write(buf, value, offset, littleEndian, 23, 4);
          return offset + 4;
        }
        Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
          return writeFloat(this, value, offset, true, noAssert);
        };
        Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
          return writeFloat(this, value, offset, false, noAssert);
        };
        function writeDouble(buf, value, offset, littleEndian, noAssert) {
          if (!noAssert) {
            checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
          }
          ieee754.write(buf, value, offset, littleEndian, 52, 8);
          return offset + 8;
        }
        Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
          return writeDouble(this, value, offset, true, noAssert);
        };
        Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
          return writeDouble(this, value, offset, false, noAssert);
        };
        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
          if (!start)
            start = 0;
          if (!end && end !== 0)
            end = this.length;
          if (targetStart >= target.length)
            targetStart = target.length;
          if (!targetStart)
            targetStart = 0;
          if (end > 0 && end < start)
            end = start;
          if (end === start)
            return 0;
          if (target.length === 0 || this.length === 0)
            return 0;
          if (targetStart < 0) {
            throw new RangeError('targetStart out of bounds');
          }
          if (start < 0 || start >= this.length)
            throw new RangeError('sourceStart out of bounds');
          if (end < 0)
            throw new RangeError('sourceEnd out of bounds');
          if (end > this.length)
            end = this.length;
          if (target.length - targetStart < end - start) {
            end = target.length - targetStart + start;
          }
          var len = end - start;
          var i;
          if (this === target && start < targetStart && targetStart < end) {
            for (i = len - 1; i >= 0; i--) {
              target[i + targetStart] = this[i + start];
            }
          } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
            for (i = 0; i < len; i++) {
              target[i + targetStart] = this[i + start];
            }
          } else {
            target._set(this.subarray(start, start + len), targetStart);
          }
          return len;
        };
        Buffer.prototype.fill = function fill(value, start, end) {
          if (!value)
            value = 0;
          if (!start)
            start = 0;
          if (!end)
            end = this.length;
          if (end < start)
            throw new RangeError('end < start');
          if (end === start)
            return;
          if (this.length === 0)
            return;
          if (start < 0 || start >= this.length)
            throw new RangeError('start out of bounds');
          if (end < 0 || end > this.length)
            throw new RangeError('end out of bounds');
          var i;
          if (typeof value === 'number') {
            for (i = start; i < end; i++) {
              this[i] = value;
            }
          } else {
            var bytes = utf8ToBytes(value.toString());
            var len = bytes.length;
            for (i = start; i < end; i++) {
              this[i] = bytes[i % len];
            }
          }
          return this;
        };
        Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
          if (typeof Uint8Array !== 'undefined') {
            if (Buffer.TYPED_ARRAY_SUPPORT) {
              return (new Buffer(this)).buffer;
            } else {
              var buf = new Uint8Array(this.length);
              for (var i = 0,
                  len = buf.length; i < len; i += 1) {
                buf[i] = this[i];
              }
              return buf.buffer;
            }
          } else {
            throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
          }
        };
        var BP = Buffer.prototype;
        Buffer._augment = function _augment(arr) {
          arr.constructor = Buffer;
          arr._isBuffer = true;
          arr._set = arr.set;
          arr.get = BP.get;
          arr.set = BP.set;
          arr.write = BP.write;
          arr.toString = BP.toString;
          arr.toLocaleString = BP.toString;
          arr.toJSON = BP.toJSON;
          arr.equals = BP.equals;
          arr.compare = BP.compare;
          arr.indexOf = BP.indexOf;
          arr.copy = BP.copy;
          arr.slice = BP.slice;
          arr.readUIntLE = BP.readUIntLE;
          arr.readUIntBE = BP.readUIntBE;
          arr.readUInt8 = BP.readUInt8;
          arr.readUInt16LE = BP.readUInt16LE;
          arr.readUInt16BE = BP.readUInt16BE;
          arr.readUInt32LE = BP.readUInt32LE;
          arr.readUInt32BE = BP.readUInt32BE;
          arr.readIntLE = BP.readIntLE;
          arr.readIntBE = BP.readIntBE;
          arr.readInt8 = BP.readInt8;
          arr.readInt16LE = BP.readInt16LE;
          arr.readInt16BE = BP.readInt16BE;
          arr.readInt32LE = BP.readInt32LE;
          arr.readInt32BE = BP.readInt32BE;
          arr.readFloatLE = BP.readFloatLE;
          arr.readFloatBE = BP.readFloatBE;
          arr.readDoubleLE = BP.readDoubleLE;
          arr.readDoubleBE = BP.readDoubleBE;
          arr.writeUInt8 = BP.writeUInt8;
          arr.writeUIntLE = BP.writeUIntLE;
          arr.writeUIntBE = BP.writeUIntBE;
          arr.writeUInt16LE = BP.writeUInt16LE;
          arr.writeUInt16BE = BP.writeUInt16BE;
          arr.writeUInt32LE = BP.writeUInt32LE;
          arr.writeUInt32BE = BP.writeUInt32BE;
          arr.writeIntLE = BP.writeIntLE;
          arr.writeIntBE = BP.writeIntBE;
          arr.writeInt8 = BP.writeInt8;
          arr.writeInt16LE = BP.writeInt16LE;
          arr.writeInt16BE = BP.writeInt16BE;
          arr.writeInt32LE = BP.writeInt32LE;
          arr.writeInt32BE = BP.writeInt32BE;
          arr.writeFloatLE = BP.writeFloatLE;
          arr.writeFloatBE = BP.writeFloatBE;
          arr.writeDoubleLE = BP.writeDoubleLE;
          arr.writeDoubleBE = BP.writeDoubleBE;
          arr.fill = BP.fill;
          arr.inspect = BP.inspect;
          arr.toArrayBuffer = BP.toArrayBuffer;
          return arr;
        };
        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
        function base64clean(str) {
          str = stringtrim(str).replace(INVALID_BASE64_RE, '');
          if (str.length < 2)
            return '';
          while (str.length % 4 !== 0) {
            str = str + '=';
          }
          return str;
        }
        function stringtrim(str) {
          if (str.trim)
            return str.trim();
          return str.replace(/^\s+|\s+$/g, '');
        }
        function toHex(n) {
          if (n < 16)
            return '0' + n.toString(16);
          return n.toString(16);
        }
        function utf8ToBytes(string, units) {
          units = units || Infinity;
          var codePoint;
          var length = string.length;
          var leadSurrogate = null;
          var bytes = [];
          var i = 0;
          for (; i < length; i++) {
            codePoint = string.charCodeAt(i);
            if (codePoint > 0xD7FF && codePoint < 0xE000) {
              if (leadSurrogate) {
                if (codePoint < 0xDC00) {
                  if ((units -= 3) > -1)
                    bytes.push(0xEF, 0xBF, 0xBD);
                  leadSurrogate = codePoint;
                  continue;
                } else {
                  codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000;
                  leadSurrogate = null;
                }
              } else {
                if (codePoint > 0xDBFF) {
                  if ((units -= 3) > -1)
                    bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } else if (i + 1 === length) {
                  if ((units -= 3) > -1)
                    bytes.push(0xEF, 0xBF, 0xBD);
                  continue;
                } else {
                  leadSurrogate = codePoint;
                  continue;
                }
              }
            } else if (leadSurrogate) {
              if ((units -= 3) > -1)
                bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = null;
            }
            if (codePoint < 0x80) {
              if ((units -= 1) < 0)
                break;
              bytes.push(codePoint);
            } else if (codePoint < 0x800) {
              if ((units -= 2) < 0)
                break;
              bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x10000) {
              if ((units -= 3) < 0)
                break;
              bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else if (codePoint < 0x200000) {
              if ((units -= 4) < 0)
                break;
              bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
            } else {
              throw new Error('Invalid code point');
            }
          }
          return bytes;
        }
        function asciiToBytes(str) {
          var byteArray = [];
          for (var i = 0; i < str.length; i++) {
            byteArray.push(str.charCodeAt(i) & 0xFF);
          }
          return byteArray;
        }
        function utf16leToBytes(str, units) {
          var c,
              hi,
              lo;
          var byteArray = [];
          for (var i = 0; i < str.length; i++) {
            if ((units -= 2) < 0)
              break;
            c = str.charCodeAt(i);
            hi = c >> 8;
            lo = c % 256;
            byteArray.push(lo);
            byteArray.push(hi);
          }
          return byteArray;
        }
        function base64ToBytes(str) {
          return base64.toByteArray(base64clean(str));
        }
        function blitBuffer(src, dst, offset, length) {
          for (var i = 0; i < length; i++) {
            if ((i + offset >= dst.length) || (i >= src.length))
              break;
            dst[i + offset] = src[i];
          }
          return i;
        }
        function decodeUtf8Char(str) {
          try {
            return decodeURIComponent(str);
          } catch (err) {
            return String.fromCharCode(0xFFFD);
          }
        }
      }, {
        "base64-js": 5,
        "ieee754": 6,
        "is-array": 7
      }],
      5: [function(require, module, exports) {
        var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        ;
        (function(exports) {
          'use strict';
          var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
          var PLUS = '+'.charCodeAt(0);
          var SLASH = '/'.charCodeAt(0);
          var NUMBER = '0'.charCodeAt(0);
          var LOWER = 'a'.charCodeAt(0);
          var UPPER = 'A'.charCodeAt(0);
          var PLUS_URL_SAFE = '-'.charCodeAt(0);
          var SLASH_URL_SAFE = '_'.charCodeAt(0);
          function decode(elt) {
            var code = elt.charCodeAt(0);
            if (code === PLUS || code === PLUS_URL_SAFE)
              return 62;
            if (code === SLASH || code === SLASH_URL_SAFE)
              return 63;
            if (code < NUMBER)
              return -1;
            if (code < NUMBER + 10)
              return code - NUMBER + 26 + 26;
            if (code < UPPER + 26)
              return code - UPPER;
            if (code < LOWER + 26)
              return code - LOWER + 26;
          }
          function b64ToByteArray(b64) {
            var i,
                j,
                l,
                tmp,
                placeHolders,
                arr;
            if (b64.length % 4 > 0) {
              throw new Error('Invalid string. Length must be a multiple of 4');
            }
            var len = b64.length;
            placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
            arr = new Arr(b64.length * 3 / 4 - placeHolders);
            l = placeHolders > 0 ? b64.length - 4 : b64.length;
            var L = 0;
            function push(v) {
              arr[L++] = v;
            }
            for (i = 0, j = 0; i < l; i += 4, j += 3) {
              tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
              push((tmp & 0xFF0000) >> 16);
              push((tmp & 0xFF00) >> 8);
              push(tmp & 0xFF);
            }
            if (placeHolders === 2) {
              tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
              push(tmp & 0xFF);
            } else if (placeHolders === 1) {
              tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
              push((tmp >> 8) & 0xFF);
              push(tmp & 0xFF);
            }
            return arr;
          }
          function uint8ToBase64(uint8) {
            var i,
                extraBytes = uint8.length % 3,
                output = "",
                temp,
                length;
            function encode(num) {
              return lookup.charAt(num);
            }
            function tripletToBase64(num) {
              return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
            }
            for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
              temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
              output += tripletToBase64(temp);
            }
            switch (extraBytes) {
              case 1:
                temp = uint8[uint8.length - 1];
                output += encode(temp >> 2);
                output += encode((temp << 4) & 0x3F);
                output += '==';
                break;
              case 2:
                temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
                output += encode(temp >> 10);
                output += encode((temp >> 4) & 0x3F);
                output += encode((temp << 2) & 0x3F);
                output += '=';
                break;
            }
            return output;
          }
          exports.toByteArray = b64ToByteArray;
          exports.fromByteArray = uint8ToBase64;
        }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
      }, {}],
      6: [function(require, module, exports) {
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
          var e,
              m;
          var eLen = nBytes * 8 - mLen - 1;
          var eMax = (1 << eLen) - 1;
          var eBias = eMax >> 1;
          var nBits = -7;
          var i = isLE ? (nBytes - 1) : 0;
          var d = isLE ? -1 : 1;
          var s = buffer[offset + i];
          i += d;
          e = s & ((1 << (-nBits)) - 1);
          s >>= (-nBits);
          nBits += eLen;
          for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
          m = e & ((1 << (-nBits)) - 1);
          e >>= (-nBits);
          nBits += mLen;
          for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
          if (e === 0) {
            e = 1 - eBias;
          } else if (e === eMax) {
            return m ? NaN : ((s ? -1 : 1) * Infinity);
          } else {
            m = m + Math.pow(2, mLen);
            e = e - eBias;
          }
          return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        };
        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
          var e,
              m,
              c;
          var eLen = nBytes * 8 - mLen - 1;
          var eMax = (1 << eLen) - 1;
          var eBias = eMax >> 1;
          var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
          var i = isLE ? 0 : (nBytes - 1);
          var d = isLE ? 1 : -1;
          var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
          value = Math.abs(value);
          if (isNaN(value) || value === Infinity) {
            m = isNaN(value) ? 1 : 0;
            e = eMax;
          } else {
            e = Math.floor(Math.log(value) / Math.LN2);
            if (value * (c = Math.pow(2, -e)) < 1) {
              e--;
              c *= 2;
            }
            if (e + eBias >= 1) {
              value += rt / c;
            } else {
              value += rt * Math.pow(2, 1 - eBias);
            }
            if (value * c >= 2) {
              e++;
              c /= 2;
            }
            if (e + eBias >= eMax) {
              m = 0;
              e = eMax;
            } else if (e + eBias >= 1) {
              m = (value * c - 1) * Math.pow(2, mLen);
              e = e + eBias;
            } else {
              m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
              e = 0;
            }
          }
          for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
          e = (e << mLen) | m;
          eLen += mLen;
          for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
          buffer[offset + i - d] |= s * 128;
        };
      }, {}],
      7: [function(require, module, exports) {
        var isArray = Array.isArray;
        var str = Object.prototype.toString;
        module.exports = isArray || function(val) {
          return !!val && '[object Array]' == str.call(val);
        };
      }, {}],
      8: [function(require, module, exports) {
        module.exports = {
          "O_RDONLY": 0,
          "O_WRONLY": 1,
          "O_RDWR": 2,
          "S_IFMT": 61440,
          "S_IFREG": 32768,
          "S_IFDIR": 16384,
          "S_IFCHR": 8192,
          "S_IFBLK": 24576,
          "S_IFIFO": 4096,
          "S_IFLNK": 40960,
          "S_IFSOCK": 49152,
          "O_CREAT": 512,
          "O_EXCL": 2048,
          "O_NOCTTY": 131072,
          "O_TRUNC": 1024,
          "O_APPEND": 8,
          "O_DIRECTORY": 1048576,
          "O_NOFOLLOW": 256,
          "O_SYNC": 128,
          "O_SYMLINK": 2097152,
          "S_IRWXU": 448,
          "S_IRUSR": 256,
          "S_IWUSR": 128,
          "S_IXUSR": 64,
          "S_IRWXG": 56,
          "S_IRGRP": 32,
          "S_IWGRP": 16,
          "S_IXGRP": 8,
          "S_IRWXO": 7,
          "S_IROTH": 4,
          "S_IWOTH": 2,
          "S_IXOTH": 1,
          "E2BIG": 7,
          "EACCES": 13,
          "EADDRINUSE": 48,
          "EADDRNOTAVAIL": 49,
          "EAFNOSUPPORT": 47,
          "EAGAIN": 35,
          "EALREADY": 37,
          "EBADF": 9,
          "EBADMSG": 94,
          "EBUSY": 16,
          "ECANCELED": 89,
          "ECHILD": 10,
          "ECONNABORTED": 53,
          "ECONNREFUSED": 61,
          "ECONNRESET": 54,
          "EDEADLK": 11,
          "EDESTADDRREQ": 39,
          "EDOM": 33,
          "EDQUOT": 69,
          "EEXIST": 17,
          "EFAULT": 14,
          "EFBIG": 27,
          "EHOSTUNREACH": 65,
          "EIDRM": 90,
          "EILSEQ": 92,
          "EINPROGRESS": 36,
          "EINTR": 4,
          "EINVAL": 22,
          "EIO": 5,
          "EISCONN": 56,
          "EISDIR": 21,
          "ELOOP": 62,
          "EMFILE": 24,
          "EMLINK": 31,
          "EMSGSIZE": 40,
          "EMULTIHOP": 95,
          "ENAMETOOLONG": 63,
          "ENETDOWN": 50,
          "ENETRESET": 52,
          "ENETUNREACH": 51,
          "ENFILE": 23,
          "ENOBUFS": 55,
          "ENODATA": 96,
          "ENODEV": 19,
          "ENOENT": 2,
          "ENOEXEC": 8,
          "ENOLCK": 77,
          "ENOLINK": 97,
          "ENOMEM": 12,
          "ENOMSG": 91,
          "ENOPROTOOPT": 42,
          "ENOSPC": 28,
          "ENOSR": 98,
          "ENOSTR": 99,
          "ENOSYS": 78,
          "ENOTCONN": 57,
          "ENOTDIR": 20,
          "ENOTEMPTY": 66,
          "ENOTSOCK": 38,
          "ENOTSUP": 45,
          "ENOTTY": 25,
          "ENXIO": 6,
          "EOPNOTSUPP": 102,
          "EOVERFLOW": 84,
          "EPERM": 1,
          "EPIPE": 32,
          "EPROTO": 100,
          "EPROTONOSUPPORT": 43,
          "EPROTOTYPE": 41,
          "ERANGE": 34,
          "EROFS": 30,
          "ESPIPE": 29,
          "ESRCH": 3,
          "ESTALE": 70,
          "ETIME": 101,
          "ETIMEDOUT": 60,
          "ETXTBSY": 26,
          "EWOULDBLOCK": 35,
          "EXDEV": 18,
          "SIGHUP": 1,
          "SIGINT": 2,
          "SIGQUIT": 3,
          "SIGILL": 4,
          "SIGTRAP": 5,
          "SIGABRT": 6,
          "SIGIOT": 6,
          "SIGBUS": 10,
          "SIGFPE": 8,
          "SIGKILL": 9,
          "SIGUSR1": 30,
          "SIGSEGV": 11,
          "SIGUSR2": 31,
          "SIGPIPE": 13,
          "SIGALRM": 14,
          "SIGTERM": 15,
          "SIGCHLD": 20,
          "SIGCONT": 19,
          "SIGSTOP": 17,
          "SIGTSTP": 18,
          "SIGTTIN": 21,
          "SIGTTOU": 22,
          "SIGURG": 16,
          "SIGXCPU": 24,
          "SIGXFSZ": 25,
          "SIGVTALRM": 26,
          "SIGPROF": 27,
          "SIGWINCH": 28,
          "SIGIO": 23,
          "SIGSYS": 12,
          "SSL_OP_ALL": 2147486719,
          "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
          "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
          "SSL_OP_CISCO_ANYCONNECT": 32768,
          "SSL_OP_COOKIE_EXCHANGE": 8192,
          "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
          "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
          "SSL_OP_EPHEMERAL_RSA": 2097152,
          "SSL_OP_LEGACY_SERVER_CONNECT": 4,
          "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
          "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
          "SSL_OP_MSIE_SSLV2_RSA_PADDING": 64,
          "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
          "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
          "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
          "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
          "SSL_OP_NO_COMPRESSION": 131072,
          "SSL_OP_NO_QUERY_MTU": 4096,
          "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
          "SSL_OP_NO_SSLv2": 16777216,
          "SSL_OP_NO_SSLv3": 33554432,
          "SSL_OP_NO_TICKET": 16384,
          "SSL_OP_NO_TLSv1": 67108864,
          "SSL_OP_NO_TLSv1_1": 268435456,
          "SSL_OP_NO_TLSv1_2": 134217728,
          "SSL_OP_PKCS1_CHECK_1": 0,
          "SSL_OP_PKCS1_CHECK_2": 0,
          "SSL_OP_SINGLE_DH_USE": 1048576,
          "SSL_OP_SINGLE_ECDH_USE": 524288,
          "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
          "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 16,
          "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
          "SSL_OP_TLS_D5_BUG": 256,
          "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
          "NPN_ENABLED": 1
        };
      }, {}],
      9: [function(require, module, exports) {
        function EventEmitter() {
          this._events = this._events || {};
          this._maxListeners = this._maxListeners || undefined;
        }
        module.exports = EventEmitter;
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = undefined;
        EventEmitter.prototype._maxListeners = undefined;
        EventEmitter.defaultMaxListeners = 10;
        EventEmitter.prototype.setMaxListeners = function(n) {
          if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError('n must be a positive number');
          this._maxListeners = n;
          return this;
        };
        EventEmitter.prototype.emit = function(type) {
          var er,
              handler,
              len,
              args,
              i,
              listeners;
          if (!this._events)
            this._events = {};
          if (type === 'error') {
            if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
              er = arguments[1];
              if (er instanceof Error) {
                throw er;
              }
              throw TypeError('Uncaught, unspecified "error" event.');
            }
          }
          handler = this._events[type];
          if (isUndefined(handler))
            return false;
          if (isFunction(handler)) {
            switch (arguments.length) {
              case 1:
                handler.call(this);
                break;
              case 2:
                handler.call(this, arguments[1]);
                break;
              case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
              default:
                len = arguments.length;
                args = new Array(len - 1);
                for (i = 1; i < len; i++)
                  args[i - 1] = arguments[i];
                handler.apply(this, args);
            }
          } else if (isObject(handler)) {
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
              args[i - 1] = arguments[i];
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
              listeners[i].apply(this, args);
          }
          return true;
        };
        EventEmitter.prototype.addListener = function(type, listener) {
          var m;
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          if (!this._events)
            this._events = {};
          if (this._events.newListener)
            this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
          if (!this._events[type])
            this._events[type] = listener;
          else if (isObject(this._events[type]))
            this._events[type].push(listener);
          else
            this._events[type] = [this._events[type], listener];
          if (isObject(this._events[type]) && !this._events[type].warned) {
            var m;
            if (!isUndefined(this._maxListeners)) {
              m = this._maxListeners;
            } else {
              m = EventEmitter.defaultMaxListeners;
            }
            if (m && m > 0 && this._events[type].length > m) {
              this._events[type].warned = true;
              console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
              if (typeof console.trace === 'function') {
                console.trace();
              }
            }
          }
          return this;
        };
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.prototype.once = function(type, listener) {
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          var fired = false;
          function g() {
            this.removeListener(type, g);
            if (!fired) {
              fired = true;
              listener.apply(this, arguments);
            }
          }
          g.listener = listener;
          this.on(type, g);
          return this;
        };
        EventEmitter.prototype.removeListener = function(type, listener) {
          var list,
              position,
              length,
              i;
          if (!isFunction(listener))
            throw TypeError('listener must be a function');
          if (!this._events || !this._events[type])
            return this;
          list = this._events[type];
          length = list.length;
          position = -1;
          if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
              this.emit('removeListener', type, listener);
          } else if (isObject(list)) {
            for (i = length; i-- > 0; ) {
              if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
                position = i;
                break;
              }
            }
            if (position < 0)
              return this;
            if (list.length === 1) {
              list.length = 0;
              delete this._events[type];
            } else {
              list.splice(position, 1);
            }
            if (this._events.removeListener)
              this.emit('removeListener', type, listener);
          }
          return this;
        };
        EventEmitter.prototype.removeAllListeners = function(type) {
          var key,
              listeners;
          if (!this._events)
            return this;
          if (!this._events.removeListener) {
            if (arguments.length === 0)
              this._events = {};
            else if (this._events[type])
              delete this._events[type];
            return this;
          }
          if (arguments.length === 0) {
            for (key in this._events) {
              if (key === 'removeListener')
                continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = {};
            return this;
          }
          listeners = this._events[type];
          if (isFunction(listeners)) {
            this.removeListener(type, listeners);
          } else {
            while (listeners.length)
              this.removeListener(type, listeners[listeners.length - 1]);
          }
          delete this._events[type];
          return this;
        };
        EventEmitter.prototype.listeners = function(type) {
          var ret;
          if (!this._events || !this._events[type])
            ret = [];
          else if (isFunction(this._events[type]))
            ret = [this._events[type]];
          else
            ret = this._events[type].slice();
          return ret;
        };
        EventEmitter.listenerCount = function(emitter, type) {
          var ret;
          if (!emitter._events || !emitter._events[type])
            ret = 0;
          else if (isFunction(emitter._events[type]))
            ret = 1;
          else
            ret = emitter._events[type].length;
          return ret;
        };
        function isFunction(arg) {
          return typeof arg === 'function';
        }
        function isNumber(arg) {
          return typeof arg === 'number';
        }
        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        function isUndefined(arg) {
          return arg === void 0;
        }
      }, {}],
      10: [function(require, module, exports) {
        if (typeof Object.create === 'function') {
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }});
          };
        } else {
          module.exports = function inherits(ctor, superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          };
        }
      }, {}],
      11: [function(require, module, exports) {
        module.exports = Array.isArray || function(arr) {
          return Object.prototype.toString.call(arr) == '[object Array]';
        };
      }, {}],
      12: [function(require, module, exports) {
        exports.endianness = function() {
          return 'LE';
        };
        exports.hostname = function() {
          if (typeof location !== 'undefined') {
            return location.hostname;
          } else
            return '';
        };
        exports.loadavg = function() {
          return [];
        };
        exports.uptime = function() {
          return 0;
        };
        exports.freemem = function() {
          return Number.MAX_VALUE;
        };
        exports.totalmem = function() {
          return Number.MAX_VALUE;
        };
        exports.cpus = function() {
          return [];
        };
        exports.type = function() {
          return 'Browser';
        };
        exports.release = function() {
          if (typeof navigator !== 'undefined') {
            return navigator.appVersion;
          }
          return '';
        };
        exports.networkInterfaces = exports.getNetworkInterfaces = function() {
          return {};
        };
        exports.arch = function() {
          return 'javascript';
        };
        exports.platform = function() {
          return 'browser';
        };
        exports.tmpdir = exports.tmpDir = function() {
          return '/tmp';
        };
        exports.EOL = '\n';
      }, {}],
      13: [function(require, module, exports) {
        (function(process) {
          function normalizeArray(parts, allowAboveRoot) {
            var up = 0;
            for (var i = parts.length - 1; i >= 0; i--) {
              var last = parts[i];
              if (last === '.') {
                parts.splice(i, 1);
              } else if (last === '..') {
                parts.splice(i, 1);
                up++;
              } else if (up) {
                parts.splice(i, 1);
                up--;
              }
            }
            if (allowAboveRoot) {
              for (; up--; up) {
                parts.unshift('..');
              }
            }
            return parts;
          }
          var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          var splitPath = function(filename) {
            return splitPathRe.exec(filename).slice(1);
          };
          exports.resolve = function() {
            var resolvedPath = '',
                resolvedAbsolute = false;
            for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
              var path = (i >= 0) ? arguments[i] : process.cwd();
              if (typeof path !== 'string') {
                throw new TypeError('Arguments to path.resolve must be strings');
              } else if (!path) {
                continue;
              }
              resolvedPath = path + '/' + resolvedPath;
              resolvedAbsolute = path.charAt(0) === '/';
            }
            resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
              return !!p;
            }), !resolvedAbsolute).join('/');
            return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
          };
          exports.normalize = function(path) {
            var isAbsolute = exports.isAbsolute(path),
                trailingSlash = substr(path, -1) === '/';
            path = normalizeArray(filter(path.split('/'), function(p) {
              return !!p;
            }), !isAbsolute).join('/');
            if (!path && !isAbsolute) {
              path = '.';
            }
            if (path && trailingSlash) {
              path += '/';
            }
            return (isAbsolute ? '/' : '') + path;
          };
          exports.isAbsolute = function(path) {
            return path.charAt(0) === '/';
          };
          exports.join = function() {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(filter(paths, function(p, index) {
              if (typeof p !== 'string') {
                throw new TypeError('Arguments to path.join must be strings');
              }
              return p;
            }).join('/'));
          };
          exports.relative = function(from, to) {
            from = exports.resolve(from).substr(1);
            to = exports.resolve(to).substr(1);
            function trim(arr) {
              var start = 0;
              for (; start < arr.length; start++) {
                if (arr[start] !== '')
                  break;
              }
              var end = arr.length - 1;
              for (; end >= 0; end--) {
                if (arr[end] !== '')
                  break;
              }
              if (start > end)
                return [];
              return arr.slice(start, end - start + 1);
            }
            var fromParts = trim(from.split('/'));
            var toParts = trim(to.split('/'));
            var length = Math.min(fromParts.length, toParts.length);
            var samePartsLength = length;
            for (var i = 0; i < length; i++) {
              if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
              }
            }
            var outputParts = [];
            for (var i = samePartsLength; i < fromParts.length; i++) {
              outputParts.push('..');
            }
            outputParts = outputParts.concat(toParts.slice(samePartsLength));
            return outputParts.join('/');
          };
          exports.sep = '/';
          exports.delimiter = ':';
          exports.dirname = function(path) {
            var result = splitPath(path),
                root = result[0],
                dir = result[1];
            if (!root && !dir) {
              return '.';
            }
            if (dir) {
              dir = dir.substr(0, dir.length - 1);
            }
            return root + dir;
          };
          exports.basename = function(path, ext) {
            var f = splitPath(path)[2];
            if (ext && f.substr(-1 * ext.length) === ext) {
              f = f.substr(0, f.length - ext.length);
            }
            return f;
          };
          exports.extname = function(path) {
            return splitPath(path)[3];
          };
          function filter(xs, f) {
            if (xs.filter)
              return xs.filter(f);
            var res = [];
            for (var i = 0; i < xs.length; i++) {
              if (f(xs[i], i, xs))
                res.push(xs[i]);
            }
            return res;
          }
          var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
            return str.substr(start, len);
          } : function(str, start, len) {
            if (start < 0)
              start = str.length + start;
            return str.substr(start, len);
          };
          ;
        }).call(this, require('_process'));
      }, {"_process": 14}],
      14: [function(require, module, exports) {
        var process = module.exports = {};
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = setTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              currentQueue[queueIndex].run();
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          clearTimeout(timeout);
        }
        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
          }
        };
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = '';
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.binding = function(name) {
          throw new Error('process.binding is not supported');
        };
        process.cwd = function() {
          return '/';
        };
        process.chdir = function(dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
          return 0;
        };
      }, {}],
      15: [function(require, module, exports) {
        (function(global) {
          ;
          (function(root) {
            var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
            var freeModule = typeof module == 'object' && module && !module.nodeType && module;
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
              root = freeGlobal;
            }
            var punycode,
                maxInt = 2147483647,
                base = 36,
                tMin = 1,
                tMax = 26,
                skew = 38,
                damp = 700,
                initialBias = 72,
                initialN = 128,
                delimiter = '-',
                regexPunycode = /^xn--/,
                regexNonASCII = /[^\x20-\x7E]/,
                regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
                errors = {
                  'overflow': 'Overflow: input needs wider integers to process',
                  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                  'invalid-input': 'Invalid input'
                },
                baseMinusTMin = base - tMin,
                floor = Math.floor,
                stringFromCharCode = String.fromCharCode,
                key;
            function error(type) {
              throw RangeError(errors[type]);
            }
            function map(array, fn) {
              var length = array.length;
              var result = [];
              while (length--) {
                result[length] = fn(array[length]);
              }
              return result;
            }
            function mapDomain(string, fn) {
              var parts = string.split('@');
              var result = '';
              if (parts.length > 1) {
                result = parts[0] + '@';
                string = parts[1];
              }
              string = string.replace(regexSeparators, '\x2E');
              var labels = string.split('.');
              var encoded = map(labels, fn).join('.');
              return result + encoded;
            }
            function ucs2decode(string) {
              var output = [],
                  counter = 0,
                  length = string.length,
                  value,
                  extra;
              while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                  extra = string.charCodeAt(counter++);
                  if ((extra & 0xFC00) == 0xDC00) {
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                  } else {
                    output.push(value);
                    counter--;
                  }
                } else {
                  output.push(value);
                }
              }
              return output;
            }
            function ucs2encode(array) {
              return map(array, function(value) {
                var output = '';
                if (value > 0xFFFF) {
                  value -= 0x10000;
                  output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                  value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
                return output;
              }).join('');
            }
            function basicToDigit(codePoint) {
              if (codePoint - 48 < 10) {
                return codePoint - 22;
              }
              if (codePoint - 65 < 26) {
                return codePoint - 65;
              }
              if (codePoint - 97 < 26) {
                return codePoint - 97;
              }
              return base;
            }
            function digitToBasic(digit, flag) {
              return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
            }
            function adapt(delta, numPoints, firstTime) {
              var k = 0;
              delta = firstTime ? floor(delta / damp) : delta >> 1;
              delta += floor(delta / numPoints);
              for (; delta > baseMinusTMin * tMax >> 1; k += base) {
                delta = floor(delta / baseMinusTMin);
              }
              return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
            }
            function decode(input) {
              var output = [],
                  inputLength = input.length,
                  out,
                  i = 0,
                  n = initialN,
                  bias = initialBias,
                  basic,
                  j,
                  index,
                  oldi,
                  w,
                  k,
                  digit,
                  t,
                  baseMinusT;
              basic = input.lastIndexOf(delimiter);
              if (basic < 0) {
                basic = 0;
              }
              for (j = 0; j < basic; ++j) {
                if (input.charCodeAt(j) >= 0x80) {
                  error('not-basic');
                }
                output.push(input.charCodeAt(j));
              }
              for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
                for (oldi = i, w = 1, k = base; ; k += base) {
                  if (index >= inputLength) {
                    error('invalid-input');
                  }
                  digit = basicToDigit(input.charCodeAt(index++));
                  if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error('overflow');
                  }
                  i += digit * w;
                  t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                  if (digit < t) {
                    break;
                  }
                  baseMinusT = base - t;
                  if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                  }
                  w *= baseMinusT;
                }
                out = output.length + 1;
                bias = adapt(i - oldi, out, oldi == 0);
                if (floor(i / out) > maxInt - n) {
                  error('overflow');
                }
                n += floor(i / out);
                i %= out;
                output.splice(i++, 0, n);
              }
              return ucs2encode(output);
            }
            function encode(input) {
              var n,
                  delta,
                  handledCPCount,
                  basicLength,
                  bias,
                  j,
                  m,
                  q,
                  k,
                  t,
                  currentValue,
                  output = [],
                  inputLength,
                  handledCPCountPlusOne,
                  baseMinusT,
                  qMinusT;
              input = ucs2decode(input);
              inputLength = input.length;
              n = initialN;
              delta = 0;
              bias = initialBias;
              for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue < 0x80) {
                  output.push(stringFromCharCode(currentValue));
                }
              }
              handledCPCount = basicLength = output.length;
              if (basicLength) {
                output.push(delimiter);
              }
              while (handledCPCount < inputLength) {
                for (m = maxInt, j = 0; j < inputLength; ++j) {
                  currentValue = input[j];
                  if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                  }
                }
                handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                  error('overflow');
                }
                delta += (m - n) * handledCPCountPlusOne;
                n = m;
                for (j = 0; j < inputLength; ++j) {
                  currentValue = input[j];
                  if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                  }
                  if (currentValue == n) {
                    for (q = delta, k = base; ; k += base) {
                      t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                      if (q < t) {
                        break;
                      }
                      qMinusT = q - t;
                      baseMinusT = base - t;
                      output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                      q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                  }
                }
                ++delta;
                ++n;
              }
              return output.join('');
            }
            function toUnicode(input) {
              return mapDomain(input, function(string) {
                return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
              });
            }
            function toASCII(input) {
              return mapDomain(input, function(string) {
                return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
              });
            }
            punycode = {
              'version': '1.3.2',
              'ucs2': {
                'decode': ucs2decode,
                'encode': ucs2encode
              },
              'decode': decode,
              'encode': encode,
              'toASCII': toASCII,
              'toUnicode': toUnicode
            };
            if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
              define('punycode', function() {
                return punycode;
              });
            } else if (freeExports && freeModule) {
              if (module.exports == freeExports) {
                freeModule.exports = punycode;
              } else {
                for (key in punycode) {
                  punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                }
              }
            } else {
              root.punycode = punycode;
            }
          }(this));
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      16: [function(require, module, exports) {
        'use strict';
        function hasOwnProperty(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        }
        module.exports = function(qs, sep, eq, options) {
          sep = sep || '&';
          eq = eq || '=';
          var obj = {};
          if (typeof qs !== 'string' || qs.length === 0) {
            return obj;
          }
          var regexp = /\+/g;
          qs = qs.split(sep);
          var maxKeys = 1000;
          if (options && typeof options.maxKeys === 'number') {
            maxKeys = options.maxKeys;
          }
          var len = qs.length;
          if (maxKeys > 0 && len > maxKeys) {
            len = maxKeys;
          }
          for (var i = 0; i < len; ++i) {
            var x = qs[i].replace(regexp, '%20'),
                idx = x.indexOf(eq),
                kstr,
                vstr,
                k,
                v;
            if (idx >= 0) {
              kstr = x.substr(0, idx);
              vstr = x.substr(idx + 1);
            } else {
              kstr = x;
              vstr = '';
            }
            k = decodeURIComponent(kstr);
            v = decodeURIComponent(vstr);
            if (!hasOwnProperty(obj, k)) {
              obj[k] = v;
            } else if (isArray(obj[k])) {
              obj[k].push(v);
            } else {
              obj[k] = [obj[k], v];
            }
          }
          return obj;
        };
        var isArray = Array.isArray || function(xs) {
          return Object.prototype.toString.call(xs) === '[object Array]';
        };
      }, {}],
      17: [function(require, module, exports) {
        'use strict';
        var stringifyPrimitive = function(v) {
          switch (typeof v) {
            case 'string':
              return v;
            case 'boolean':
              return v ? 'true' : 'false';
            case 'number':
              return isFinite(v) ? v : '';
            default:
              return '';
          }
        };
        module.exports = function(obj, sep, eq, name) {
          sep = sep || '&';
          eq = eq || '=';
          if (obj === null) {
            obj = undefined;
          }
          if (typeof obj === 'object') {
            return map(objectKeys(obj), function(k) {
              var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
              if (isArray(obj[k])) {
                return map(obj[k], function(v) {
                  return ks + encodeURIComponent(stringifyPrimitive(v));
                }).join(sep);
              } else {
                return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
              }
            }).join(sep);
          }
          if (!name)
            return '';
          return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
        };
        var isArray = Array.isArray || function(xs) {
          return Object.prototype.toString.call(xs) === '[object Array]';
        };
        function map(xs, f) {
          if (xs.map)
            return xs.map(f);
          var res = [];
          for (var i = 0; i < xs.length; i++) {
            res.push(f(xs[i], i));
          }
          return res;
        }
        var objectKeys = Object.keys || function(obj) {
          var res = [];
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              res.push(key);
          }
          return res;
        };
      }, {}],
      18: [function(require, module, exports) {
        'use strict';
        exports.decode = exports.parse = require('./decode');
        exports.encode = exports.stringify = require('./encode');
      }, {
        "./decode": 16,
        "./encode": 17
      }],
      19: [function(require, module, exports) {
        module.exports = require('./lib/_stream_duplex');
      }, {"./lib/_stream_duplex.js": 20}],
      20: [function(require, module, exports) {
        'use strict';
        var objectKeys = Object.keys || function(obj) {
          var keys = [];
          for (var key in obj)
            keys.push(key);
          return keys;
        };
        module.exports = Duplex;
        var processNextTick = require('process-nextick-args');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        var Readable = require('./_stream_readable');
        var Writable = require('./_stream_writable');
        util.inherits(Duplex, Readable);
        var keys = objectKeys(Writable.prototype);
        for (var v = 0; v < keys.length; v++) {
          var method = keys[v];
          if (!Duplex.prototype[method])
            Duplex.prototype[method] = Writable.prototype[method];
        }
        function Duplex(options) {
          if (!(this instanceof Duplex))
            return new Duplex(options);
          Readable.call(this, options);
          Writable.call(this, options);
          if (options && options.readable === false)
            this.readable = false;
          if (options && options.writable === false)
            this.writable = false;
          this.allowHalfOpen = true;
          if (options && options.allowHalfOpen === false)
            this.allowHalfOpen = false;
          this.once('end', onend);
        }
        function onend() {
          if (this.allowHalfOpen || this._writableState.ended)
            return;
          processNextTick(onEndNT, this);
        }
        function onEndNT(self) {
          self.end();
        }
        function forEach(xs, f) {
          for (var i = 0,
              l = xs.length; i < l; i++) {
            f(xs[i], i);
          }
        }
      }, {
        "./_stream_readable": 22,
        "./_stream_writable": 24,
        "core-util-is": 25,
        "inherits": 10,
        "process-nextick-args": 26
      }],
      21: [function(require, module, exports) {
        'use strict';
        module.exports = PassThrough;
        var Transform = require('./_stream_transform');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        util.inherits(PassThrough, Transform);
        function PassThrough(options) {
          if (!(this instanceof PassThrough))
            return new PassThrough(options);
          Transform.call(this, options);
        }
        PassThrough.prototype._transform = function(chunk, encoding, cb) {
          cb(null, chunk);
        };
      }, {
        "./_stream_transform": 23,
        "core-util-is": 25,
        "inherits": 10
      }],
      22: [function(require, module, exports) {
        (function(process) {
          'use strict';
          module.exports = Readable;
          var processNextTick = require('process-nextick-args');
          var isArray = require('isarray');
          var Buffer = require('buffer').Buffer;
          Readable.ReadableState = ReadableState;
          var EE = require('events').EventEmitter;
          if (!EE.listenerCount)
            EE.listenerCount = function(emitter, type) {
              return emitter.listeners(type).length;
            };
          var Stream;
          (function() {
            try {
              Stream = require('st' + 'ream');
            } catch (_) {} finally {
              if (!Stream)
                Stream = require('events').EventEmitter;
            }
          }());
          var Buffer = require('buffer').Buffer;
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var debug = require('util');
          if (debug && debug.debuglog) {
            debug = debug.debuglog('stream');
          } else {
            debug = function() {};
          }
          var StringDecoder;
          util.inherits(Readable, Stream);
          function ReadableState(options, stream) {
            var Duplex = require('./_stream_duplex');
            options = options || {};
            this.objectMode = !!options.objectMode;
            if (stream instanceof Duplex)
              this.objectMode = this.objectMode || !!options.readableObjectMode;
            var hwm = options.highWaterMark;
            var defaultHwm = this.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
            this.highWaterMark = ~~this.highWaterMark;
            this.buffer = [];
            this.length = 0;
            this.pipes = null;
            this.pipesCount = 0;
            this.flowing = null;
            this.ended = false;
            this.endEmitted = false;
            this.reading = false;
            this.sync = true;
            this.needReadable = false;
            this.emittedReadable = false;
            this.readableListening = false;
            this.defaultEncoding = options.defaultEncoding || 'utf8';
            this.ranOut = false;
            this.awaitDrain = 0;
            this.readingMore = false;
            this.decoder = null;
            this.encoding = null;
            if (options.encoding) {
              if (!StringDecoder)
                StringDecoder = require('string_decoder').StringDecoder;
              this.decoder = new StringDecoder(options.encoding);
              this.encoding = options.encoding;
            }
          }
          function Readable(options) {
            var Duplex = require('./_stream_duplex');
            if (!(this instanceof Readable))
              return new Readable(options);
            this._readableState = new ReadableState(options, this);
            this.readable = true;
            if (options && typeof options.read === 'function')
              this._read = options.read;
            Stream.call(this);
          }
          Readable.prototype.push = function(chunk, encoding) {
            var state = this._readableState;
            if (!state.objectMode && typeof chunk === 'string') {
              encoding = encoding || state.defaultEncoding;
              if (encoding !== state.encoding) {
                chunk = new Buffer(chunk, encoding);
                encoding = '';
              }
            }
            return readableAddChunk(this, state, chunk, encoding, false);
          };
          Readable.prototype.unshift = function(chunk) {
            var state = this._readableState;
            return readableAddChunk(this, state, chunk, '', true);
          };
          Readable.prototype.isPaused = function() {
            return this._readableState.flowing === false;
          };
          function readableAddChunk(stream, state, chunk, encoding, addToFront) {
            var er = chunkInvalid(state, chunk);
            if (er) {
              stream.emit('error', er);
            } else if (chunk === null) {
              state.reading = false;
              onEofChunk(stream, state);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (state.ended && !addToFront) {
                var e = new Error('stream.push() after EOF');
                stream.emit('error', e);
              } else if (state.endEmitted && addToFront) {
                var e = new Error('stream.unshift() after end event');
                stream.emit('error', e);
              } else {
                if (state.decoder && !addToFront && !encoding)
                  chunk = state.decoder.write(chunk);
                if (!addToFront)
                  state.reading = false;
                if (state.flowing && state.length === 0 && !state.sync) {
                  stream.emit('data', chunk);
                  stream.read(0);
                } else {
                  state.length += state.objectMode ? 1 : chunk.length;
                  if (addToFront)
                    state.buffer.unshift(chunk);
                  else
                    state.buffer.push(chunk);
                  if (state.needReadable)
                    emitReadable(stream);
                }
                maybeReadMore(stream, state);
              }
            } else if (!addToFront) {
              state.reading = false;
            }
            return needMoreData(state);
          }
          function needMoreData(state) {
            return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
          }
          Readable.prototype.setEncoding = function(enc) {
            if (!StringDecoder)
              StringDecoder = require('string_decoder').StringDecoder;
            this._readableState.decoder = new StringDecoder(enc);
            this._readableState.encoding = enc;
            return this;
          };
          var MAX_HWM = 0x800000;
          function roundUpToNextPowerOf2(n) {
            if (n >= MAX_HWM) {
              n = MAX_HWM;
            } else {
              n--;
              for (var p = 1; p < 32; p <<= 1)
                n |= n >> p;
              n++;
            }
            return n;
          }
          function howMuchToRead(n, state) {
            if (state.length === 0 && state.ended)
              return 0;
            if (state.objectMode)
              return n === 0 ? 0 : 1;
            if (n === null || isNaN(n)) {
              if (state.flowing && state.buffer.length)
                return state.buffer[0].length;
              else
                return state.length;
            }
            if (n <= 0)
              return 0;
            if (n > state.highWaterMark)
              state.highWaterMark = roundUpToNextPowerOf2(n);
            if (n > state.length) {
              if (!state.ended) {
                state.needReadable = true;
                return 0;
              } else {
                return state.length;
              }
            }
            return n;
          }
          Readable.prototype.read = function(n) {
            debug('read', n);
            var state = this._readableState;
            var nOrig = n;
            if (typeof n !== 'number' || n > 0)
              state.emittedReadable = false;
            if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
              debug('read: emitReadable', state.length, state.ended);
              if (state.length === 0 && state.ended)
                endReadable(this);
              else
                emitReadable(this);
              return null;
            }
            n = howMuchToRead(n, state);
            if (n === 0 && state.ended) {
              if (state.length === 0)
                endReadable(this);
              return null;
            }
            var doRead = state.needReadable;
            debug('need readable', doRead);
            if (state.length === 0 || state.length - n < state.highWaterMark) {
              doRead = true;
              debug('length less than watermark', doRead);
            }
            if (state.ended || state.reading) {
              doRead = false;
              debug('reading or ended', doRead);
            }
            if (doRead) {
              debug('do read');
              state.reading = true;
              state.sync = true;
              if (state.length === 0)
                state.needReadable = true;
              this._read(state.highWaterMark);
              state.sync = false;
            }
            if (doRead && !state.reading)
              n = howMuchToRead(nOrig, state);
            var ret;
            if (n > 0)
              ret = fromList(n, state);
            else
              ret = null;
            if (ret === null) {
              state.needReadable = true;
              n = 0;
            }
            state.length -= n;
            if (state.length === 0 && !state.ended)
              state.needReadable = true;
            if (nOrig !== n && state.ended && state.length === 0)
              endReadable(this);
            if (ret !== null)
              this.emit('data', ret);
            return ret;
          };
          function chunkInvalid(state, chunk) {
            var er = null;
            if (!(Buffer.isBuffer(chunk)) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
              er = new TypeError('Invalid non-string/buffer chunk');
            }
            return er;
          }
          function onEofChunk(stream, state) {
            if (state.ended)
              return;
            if (state.decoder) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) {
                state.buffer.push(chunk);
                state.length += state.objectMode ? 1 : chunk.length;
              }
            }
            state.ended = true;
            emitReadable(stream);
          }
          function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = false;
            if (!state.emittedReadable) {
              debug('emitReadable', state.flowing);
              state.emittedReadable = true;
              if (state.sync)
                processNextTick(emitReadable_, stream);
              else
                emitReadable_(stream);
            }
          }
          function emitReadable_(stream) {
            debug('emit readable');
            stream.emit('readable');
            flow(stream);
          }
          function maybeReadMore(stream, state) {
            if (!state.readingMore) {
              state.readingMore = true;
              processNextTick(maybeReadMore_, stream, state);
            }
          }
          function maybeReadMore_(stream, state) {
            var len = state.length;
            while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
              debug('maybeReadMore read 0');
              stream.read(0);
              if (len === state.length)
                break;
              else
                len = state.length;
            }
            state.readingMore = false;
          }
          Readable.prototype._read = function(n) {
            this.emit('error', new Error('not implemented'));
          };
          Readable.prototype.pipe = function(dest, pipeOpts) {
            var src = this;
            var state = this._readableState;
            switch (state.pipesCount) {
              case 0:
                state.pipes = dest;
                break;
              case 1:
                state.pipes = [state.pipes, dest];
                break;
              default:
                state.pipes.push(dest);
                break;
            }
            state.pipesCount += 1;
            debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
            var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
            var endFn = doEnd ? onend : cleanup;
            if (state.endEmitted)
              processNextTick(endFn);
            else
              src.once('end', endFn);
            dest.on('unpipe', onunpipe);
            function onunpipe(readable) {
              debug('onunpipe');
              if (readable === src) {
                cleanup();
              }
            }
            function onend() {
              debug('onend');
              dest.end();
            }
            var ondrain = pipeOnDrain(src);
            dest.on('drain', ondrain);
            function cleanup() {
              debug('cleanup');
              dest.removeListener('close', onclose);
              dest.removeListener('finish', onfinish);
              dest.removeListener('drain', ondrain);
              dest.removeListener('error', onerror);
              dest.removeListener('unpipe', onunpipe);
              src.removeListener('end', onend);
              src.removeListener('end', cleanup);
              src.removeListener('data', ondata);
              if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
                ondrain();
            }
            src.on('data', ondata);
            function ondata(chunk) {
              debug('ondata');
              var ret = dest.write(chunk);
              if (false === ret) {
                debug('false write response, pause', src._readableState.awaitDrain);
                src._readableState.awaitDrain++;
                src.pause();
              }
            }
            function onerror(er) {
              debug('onerror', er);
              unpipe();
              dest.removeListener('error', onerror);
              if (EE.listenerCount(dest, 'error') === 0)
                dest.emit('error', er);
            }
            if (!dest._events || !dest._events.error)
              dest.on('error', onerror);
            else if (isArray(dest._events.error))
              dest._events.error.unshift(onerror);
            else
              dest._events.error = [onerror, dest._events.error];
            function onclose() {
              dest.removeListener('finish', onfinish);
              unpipe();
            }
            dest.once('close', onclose);
            function onfinish() {
              debug('onfinish');
              dest.removeListener('close', onclose);
              unpipe();
            }
            dest.once('finish', onfinish);
            function unpipe() {
              debug('unpipe');
              src.unpipe(dest);
            }
            dest.emit('pipe', src);
            if (!state.flowing) {
              debug('pipe resume');
              src.resume();
            }
            return dest;
          };
          function pipeOnDrain(src) {
            return function() {
              var state = src._readableState;
              debug('pipeOnDrain', state.awaitDrain);
              if (state.awaitDrain)
                state.awaitDrain--;
              if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
                state.flowing = true;
                flow(src);
              }
            };
          }
          Readable.prototype.unpipe = function(dest) {
            var state = this._readableState;
            if (state.pipesCount === 0)
              return this;
            if (state.pipesCount === 1) {
              if (dest && dest !== state.pipes)
                return this;
              if (!dest)
                dest = state.pipes;
              state.pipes = null;
              state.pipesCount = 0;
              state.flowing = false;
              if (dest)
                dest.emit('unpipe', this);
              return this;
            }
            if (!dest) {
              var dests = state.pipes;
              var len = state.pipesCount;
              state.pipes = null;
              state.pipesCount = 0;
              state.flowing = false;
              for (var i = 0; i < len; i++)
                dests[i].emit('unpipe', this);
              return this;
            }
            var i = indexOf(state.pipes, dest);
            if (i === -1)
              return this;
            state.pipes.splice(i, 1);
            state.pipesCount -= 1;
            if (state.pipesCount === 1)
              state.pipes = state.pipes[0];
            dest.emit('unpipe', this);
            return this;
          };
          Readable.prototype.on = function(ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);
            if (ev === 'data' && false !== this._readableState.flowing) {
              this.resume();
            }
            if (ev === 'readable' && this.readable) {
              var state = this._readableState;
              if (!state.readableListening) {
                state.readableListening = true;
                state.emittedReadable = false;
                state.needReadable = true;
                if (!state.reading) {
                  processNextTick(nReadingNextTick, this);
                } else if (state.length) {
                  emitReadable(this, state);
                }
              }
            }
            return res;
          };
          Readable.prototype.addListener = Readable.prototype.on;
          function nReadingNextTick(self) {
            debug('readable nexttick read 0');
            self.read(0);
          }
          Readable.prototype.resume = function() {
            var state = this._readableState;
            if (!state.flowing) {
              debug('resume');
              state.flowing = true;
              resume(this, state);
            }
            return this;
          };
          function resume(stream, state) {
            if (!state.resumeScheduled) {
              state.resumeScheduled = true;
              processNextTick(resume_, stream, state);
            }
          }
          function resume_(stream, state) {
            if (!state.reading) {
              debug('resume read 0');
              stream.read(0);
            }
            state.resumeScheduled = false;
            stream.emit('resume');
            flow(stream);
            if (state.flowing && !state.reading)
              stream.read(0);
          }
          Readable.prototype.pause = function() {
            debug('call pause flowing=%j', this._readableState.flowing);
            if (false !== this._readableState.flowing) {
              debug('pause');
              this._readableState.flowing = false;
              this.emit('pause');
            }
            return this;
          };
          function flow(stream) {
            var state = stream._readableState;
            debug('flow', state.flowing);
            if (state.flowing) {
              do {
                var chunk = stream.read();
              } while (null !== chunk && state.flowing);
            }
          }
          Readable.prototype.wrap = function(stream) {
            var state = this._readableState;
            var paused = false;
            var self = this;
            stream.on('end', function() {
              debug('wrapped end');
              if (state.decoder && !state.ended) {
                var chunk = state.decoder.end();
                if (chunk && chunk.length)
                  self.push(chunk);
              }
              self.push(null);
            });
            stream.on('data', function(chunk) {
              debug('wrapped data');
              if (state.decoder)
                chunk = state.decoder.write(chunk);
              if (state.objectMode && (chunk === null || chunk === undefined))
                return;
              else if (!state.objectMode && (!chunk || !chunk.length))
                return;
              var ret = self.push(chunk);
              if (!ret) {
                paused = true;
                stream.pause();
              }
            });
            for (var i in stream) {
              if (this[i] === undefined && typeof stream[i] === 'function') {
                this[i] = function(method) {
                  return function() {
                    return stream[method].apply(stream, arguments);
                  };
                }(i);
              }
            }
            var events = ['error', 'close', 'destroy', 'pause', 'resume'];
            forEach(events, function(ev) {
              stream.on(ev, self.emit.bind(self, ev));
            });
            self._read = function(n) {
              debug('wrapped _read', n);
              if (paused) {
                paused = false;
                stream.resume();
              }
            };
            return self;
          };
          Readable._fromList = fromList;
          function fromList(n, state) {
            var list = state.buffer;
            var length = state.length;
            var stringMode = !!state.decoder;
            var objectMode = !!state.objectMode;
            var ret;
            if (list.length === 0)
              return null;
            if (length === 0)
              ret = null;
            else if (objectMode)
              ret = list.shift();
            else if (!n || n >= length) {
              if (stringMode)
                ret = list.join('');
              else
                ret = Buffer.concat(list, length);
              list.length = 0;
            } else {
              if (n < list[0].length) {
                var buf = list[0];
                ret = buf.slice(0, n);
                list[0] = buf.slice(n);
              } else if (n === list[0].length) {
                ret = list.shift();
              } else {
                if (stringMode)
                  ret = '';
                else
                  ret = new Buffer(n);
                var c = 0;
                for (var i = 0,
                    l = list.length; i < l && c < n; i++) {
                  var buf = list[0];
                  var cpy = Math.min(n - c, buf.length);
                  if (stringMode)
                    ret += buf.slice(0, cpy);
                  else
                    buf.copy(ret, c, 0, cpy);
                  if (cpy < buf.length)
                    list[0] = buf.slice(cpy);
                  else
                    list.shift();
                  c += cpy;
                }
              }
            }
            return ret;
          }
          function endReadable(stream) {
            var state = stream._readableState;
            if (state.length > 0)
              throw new Error('endReadable called on non-empty stream');
            if (!state.endEmitted) {
              state.ended = true;
              processNextTick(endReadableNT, state, stream);
            }
          }
          function endReadableNT(state, stream) {
            if (!state.endEmitted && state.length === 0) {
              state.endEmitted = true;
              stream.readable = false;
              stream.emit('end');
            }
          }
          function forEach(xs, f) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              f(xs[i], i);
            }
          }
          function indexOf(xs, x) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              if (xs[i] === x)
                return i;
            }
            return -1;
          }
        }).call(this, require('_process'));
      }, {
        "./_stream_duplex": 20,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 25,
        "events": 9,
        "inherits": 10,
        "isarray": 11,
        "process-nextick-args": 26,
        "string_decoder/": 42,
        "util": 3
      }],
      23: [function(require, module, exports) {
        'use strict';
        module.exports = Transform;
        var Duplex = require('./_stream_duplex');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        util.inherits(Transform, Duplex);
        function TransformState(stream) {
          this.afterTransform = function(er, data) {
            return afterTransform(stream, er, data);
          };
          this.needTransform = false;
          this.transforming = false;
          this.writecb = null;
          this.writechunk = null;
        }
        function afterTransform(stream, er, data) {
          var ts = stream._transformState;
          ts.transforming = false;
          var cb = ts.writecb;
          if (!cb)
            return stream.emit('error', new Error('no writecb in Transform class'));
          ts.writechunk = null;
          ts.writecb = null;
          if (data !== null && data !== undefined)
            stream.push(data);
          if (cb)
            cb(er);
          var rs = stream._readableState;
          rs.reading = false;
          if (rs.needReadable || rs.length < rs.highWaterMark) {
            stream._read(rs.highWaterMark);
          }
        }
        function Transform(options) {
          if (!(this instanceof Transform))
            return new Transform(options);
          Duplex.call(this, options);
          this._transformState = new TransformState(this);
          var stream = this;
          this._readableState.needReadable = true;
          this._readableState.sync = false;
          if (options) {
            if (typeof options.transform === 'function')
              this._transform = options.transform;
            if (typeof options.flush === 'function')
              this._flush = options.flush;
          }
          this.once('prefinish', function() {
            if (typeof this._flush === 'function')
              this._flush(function(er) {
                done(stream, er);
              });
            else
              done(stream);
          });
        }
        Transform.prototype.push = function(chunk, encoding) {
          this._transformState.needTransform = false;
          return Duplex.prototype.push.call(this, chunk, encoding);
        };
        Transform.prototype._transform = function(chunk, encoding, cb) {
          throw new Error('not implemented');
        };
        Transform.prototype._write = function(chunk, encoding, cb) {
          var ts = this._transformState;
          ts.writecb = cb;
          ts.writechunk = chunk;
          ts.writeencoding = encoding;
          if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
              this._read(rs.highWaterMark);
          }
        };
        Transform.prototype._read = function(n) {
          var ts = this._transformState;
          if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
            ts.transforming = true;
            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
          } else {
            ts.needTransform = true;
          }
        };
        function done(stream, er) {
          if (er)
            return stream.emit('error', er);
          var ws = stream._writableState;
          var ts = stream._transformState;
          if (ws.length)
            throw new Error('calling transform done when ws.length != 0');
          if (ts.transforming)
            throw new Error('calling transform done when still transforming');
          return stream.push(null);
        }
      }, {
        "./_stream_duplex": 20,
        "core-util-is": 25,
        "inherits": 10
      }],
      24: [function(require, module, exports) {
        'use strict';
        module.exports = Writable;
        var processNextTick = require('process-nextick-args');
        var Buffer = require('buffer').Buffer;
        Writable.WritableState = WritableState;
        var util = require('core-util-is');
        util.inherits = require('inherits');
        var Stream;
        (function() {
          try {
            Stream = require('st' + 'ream');
          } catch (_) {} finally {
            if (!Stream)
              Stream = require('events').EventEmitter;
          }
        }());
        var Buffer = require('buffer').Buffer;
        util.inherits(Writable, Stream);
        function nop() {}
        function WriteReq(chunk, encoding, cb) {
          this.chunk = chunk;
          this.encoding = encoding;
          this.callback = cb;
          this.next = null;
        }
        function WritableState(options, stream) {
          var Duplex = require('./_stream_duplex');
          options = options || {};
          this.objectMode = !!options.objectMode;
          if (stream instanceof Duplex)
            this.objectMode = this.objectMode || !!options.writableObjectMode;
          var hwm = options.highWaterMark;
          var defaultHwm = this.objectMode ? 16 : 16 * 1024;
          this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
          this.highWaterMark = ~~this.highWaterMark;
          this.needDrain = false;
          this.ending = false;
          this.ended = false;
          this.finished = false;
          var noDecode = options.decodeStrings === false;
          this.decodeStrings = !noDecode;
          this.defaultEncoding = options.defaultEncoding || 'utf8';
          this.length = 0;
          this.writing = false;
          this.corked = 0;
          this.sync = true;
          this.bufferProcessing = false;
          this.onwrite = function(er) {
            onwrite(stream, er);
          };
          this.writecb = null;
          this.writelen = 0;
          this.bufferedRequest = null;
          this.lastBufferedRequest = null;
          this.pendingcb = 0;
          this.prefinished = false;
          this.errorEmitted = false;
        }
        WritableState.prototype.getBuffer = function writableStateGetBuffer() {
          var current = this.bufferedRequest;
          var out = [];
          while (current) {
            out.push(current);
            current = current.next;
          }
          return out;
        };
        (function() {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {get: require('util-deprecate')(function() {
                return this.getBuffer();
              }, '_writableState.buffer is deprecated. Use ' + '_writableState.getBuffer() instead.')});
          } catch (_) {}
        }());
        function Writable(options) {
          var Duplex = require('./_stream_duplex');
          if (!(this instanceof Writable) && !(this instanceof Duplex))
            return new Writable(options);
          this._writableState = new WritableState(options, this);
          this.writable = true;
          if (options) {
            if (typeof options.write === 'function')
              this._write = options.write;
            if (typeof options.writev === 'function')
              this._writev = options.writev;
          }
          Stream.call(this);
        }
        Writable.prototype.pipe = function() {
          this.emit('error', new Error('Cannot pipe. Not readable.'));
        };
        function writeAfterEnd(stream, cb) {
          var er = new Error('write after end');
          stream.emit('error', er);
          processNextTick(cb, er);
        }
        function validChunk(stream, state, chunk, cb) {
          var valid = true;
          if (!(Buffer.isBuffer(chunk)) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
            var er = new TypeError('Invalid non-string/buffer chunk');
            stream.emit('error', er);
            processNextTick(cb, er);
            valid = false;
          }
          return valid;
        }
        Writable.prototype.write = function(chunk, encoding, cb) {
          var state = this._writableState;
          var ret = false;
          if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }
          if (Buffer.isBuffer(chunk))
            encoding = 'buffer';
          else if (!encoding)
            encoding = state.defaultEncoding;
          if (typeof cb !== 'function')
            cb = nop;
          if (state.ended)
            writeAfterEnd(this, cb);
          else if (validChunk(this, state, chunk, cb)) {
            state.pendingcb++;
            ret = writeOrBuffer(this, state, chunk, encoding, cb);
          }
          return ret;
        };
        Writable.prototype.cork = function() {
          var state = this._writableState;
          state.corked++;
        };
        Writable.prototype.uncork = function() {
          var state = this._writableState;
          if (state.corked) {
            state.corked--;
            if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
              clearBuffer(this, state);
          }
        };
        Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
          if (typeof encoding === 'string')
            encoding = encoding.toLowerCase();
          if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1))
            throw new TypeError('Unknown encoding: ' + encoding);
          this._writableState.defaultEncoding = encoding;
        };
        function decodeChunk(state, chunk, encoding) {
          if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
            chunk = new Buffer(chunk, encoding);
          }
          return chunk;
        }
        function writeOrBuffer(stream, state, chunk, encoding, cb) {
          chunk = decodeChunk(state, chunk, encoding);
          if (Buffer.isBuffer(chunk))
            encoding = 'buffer';
          var len = state.objectMode ? 1 : chunk.length;
          state.length += len;
          var ret = state.length < state.highWaterMark;
          if (!ret)
            state.needDrain = true;
          if (state.writing || state.corked) {
            var last = state.lastBufferedRequest;
            state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
            if (last) {
              last.next = state.lastBufferedRequest;
            } else {
              state.bufferedRequest = state.lastBufferedRequest;
            }
          } else {
            doWrite(stream, state, false, len, chunk, encoding, cb);
          }
          return ret;
        }
        function doWrite(stream, state, writev, len, chunk, encoding, cb) {
          state.writelen = len;
          state.writecb = cb;
          state.writing = true;
          state.sync = true;
          if (writev)
            stream._writev(chunk, state.onwrite);
          else
            stream._write(chunk, encoding, state.onwrite);
          state.sync = false;
        }
        function onwriteError(stream, state, sync, er, cb) {
          --state.pendingcb;
          if (sync)
            processNextTick(cb, er);
          else
            cb(er);
          stream._writableState.errorEmitted = true;
          stream.emit('error', er);
        }
        function onwriteStateUpdate(state) {
          state.writing = false;
          state.writecb = null;
          state.length -= state.writelen;
          state.writelen = 0;
        }
        function onwrite(stream, er) {
          var state = stream._writableState;
          var sync = state.sync;
          var cb = state.writecb;
          onwriteStateUpdate(state);
          if (er)
            onwriteError(stream, state, sync, er, cb);
          else {
            var finished = needFinish(state);
            if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
              clearBuffer(stream, state);
            }
            if (sync) {
              processNextTick(afterWrite, stream, state, finished, cb);
            } else {
              afterWrite(stream, state, finished, cb);
            }
          }
        }
        function afterWrite(stream, state, finished, cb) {
          if (!finished)
            onwriteDrain(stream, state);
          state.pendingcb--;
          cb();
          finishMaybe(stream, state);
        }
        function onwriteDrain(stream, state) {
          if (state.length === 0 && state.needDrain) {
            state.needDrain = false;
            stream.emit('drain');
          }
        }
        function clearBuffer(stream, state) {
          state.bufferProcessing = true;
          var entry = state.bufferedRequest;
          if (stream._writev && entry && entry.next) {
            var buffer = [];
            var cbs = [];
            while (entry) {
              cbs.push(entry.callback);
              buffer.push(entry);
              entry = entry.next;
            }
            state.pendingcb++;
            state.lastBufferedRequest = null;
            doWrite(stream, state, true, state.length, buffer, '', function(err) {
              for (var i = 0; i < cbs.length; i++) {
                state.pendingcb--;
                cbs[i](err);
              }
            });
          } else {
            while (entry) {
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;
              doWrite(stream, state, false, len, chunk, encoding, cb);
              entry = entry.next;
              if (state.writing) {
                break;
              }
            }
            if (entry === null)
              state.lastBufferedRequest = null;
          }
          state.bufferedRequest = entry;
          state.bufferProcessing = false;
        }
        Writable.prototype._write = function(chunk, encoding, cb) {
          cb(new Error('not implemented'));
        };
        Writable.prototype._writev = null;
        Writable.prototype.end = function(chunk, encoding, cb) {
          var state = this._writableState;
          if (typeof chunk === 'function') {
            cb = chunk;
            chunk = null;
            encoding = null;
          } else if (typeof encoding === 'function') {
            cb = encoding;
            encoding = null;
          }
          if (chunk !== null && chunk !== undefined)
            this.write(chunk, encoding);
          if (state.corked) {
            state.corked = 1;
            this.uncork();
          }
          if (!state.ending && !state.finished)
            endWritable(this, state, cb);
        };
        function needFinish(state) {
          return (state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing);
        }
        function prefinish(stream, state) {
          if (!state.prefinished) {
            state.prefinished = true;
            stream.emit('prefinish');
          }
        }
        function finishMaybe(stream, state) {
          var need = needFinish(state);
          if (need) {
            if (state.pendingcb === 0) {
              prefinish(stream, state);
              state.finished = true;
              stream.emit('finish');
            } else {
              prefinish(stream, state);
            }
          }
          return need;
        }
        function endWritable(stream, state, cb) {
          state.ending = true;
          finishMaybe(stream, state);
          if (cb) {
            if (state.finished)
              processNextTick(cb);
            else
              stream.once('finish', cb);
          }
          state.ended = true;
        }
      }, {
        "./_stream_duplex": 20,
        "buffer": 4,
        "core-util-is": 25,
        "events": 9,
        "inherits": 10,
        "process-nextick-args": 26,
        "util-deprecate": 27
      }],
      25: [function(require, module, exports) {
        (function(Buffer) {
          function isArray(ar) {
            return Array.isArray(ar);
          }
          exports.isArray = isArray;
          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }
          exports.isBoolean = isBoolean;
          function isNull(arg) {
            return arg === null;
          }
          exports.isNull = isNull;
          function isNullOrUndefined(arg) {
            return arg == null;
          }
          exports.isNullOrUndefined = isNullOrUndefined;
          function isNumber(arg) {
            return typeof arg === 'number';
          }
          exports.isNumber = isNumber;
          function isString(arg) {
            return typeof arg === 'string';
          }
          exports.isString = isString;
          function isSymbol(arg) {
            return typeof arg === 'symbol';
          }
          exports.isSymbol = isSymbol;
          function isUndefined(arg) {
            return arg === void 0;
          }
          exports.isUndefined = isUndefined;
          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }
          exports.isRegExp = isRegExp;
          function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
          }
          exports.isObject = isObject;
          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }
          exports.isDate = isDate;
          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }
          exports.isError = isError;
          function isFunction(arg) {
            return typeof arg === 'function';
          }
          exports.isFunction = isFunction;
          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
          }
          exports.isPrimitive = isPrimitive;
          function isBuffer(arg) {
            return Buffer.isBuffer(arg);
          }
          exports.isBuffer = isBuffer;
          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }
        }).call(this, require('buffer').Buffer);
      }, {"buffer": 4}],
      26: [function(require, module, exports) {
        (function(process) {
          'use strict';
          module.exports = nextTick;
          function nextTick(fn) {
            var args = new Array(arguments.length - 1);
            var i = 0;
            while (i < arguments.length) {
              args[i++] = arguments[i];
            }
            process.nextTick(function afterTick() {
              fn.apply(null, args);
            });
          }
        }).call(this, require('_process'));
      }, {"_process": 14}],
      27: [function(require, module, exports) {
        (function(global) {
          module.exports = deprecate;
          function deprecate(fn, msg) {
            if (config('noDeprecation')) {
              return fn;
            }
            var warned = false;
            function deprecated() {
              if (!warned) {
                if (config('throwDeprecation')) {
                  throw new Error(msg);
                } else if (config('traceDeprecation')) {
                  console.trace(msg);
                } else {
                  console.warn(msg);
                }
                warned = true;
              }
              return fn.apply(this, arguments);
            }
            return deprecated;
          }
          function config(name) {
            if (!global.localStorage)
              return false;
            var val = global.localStorage[name];
            if (null == val)
              return false;
            return String(val).toLowerCase() === 'true';
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      28: [function(require, module, exports) {
        module.exports = require('./lib/_stream_passthrough');
      }, {"./lib/_stream_passthrough.js": 21}],
      29: [function(require, module, exports) {
        var Stream = (function() {
          try {
            return require('st' + 'ream');
          } catch (_) {}
        }());
        exports = module.exports = require('./lib/_stream_readable');
        exports.Stream = Stream || exports;
        exports.Readable = exports;
        exports.Writable = require('./lib/_stream_writable');
        exports.Duplex = require('./lib/_stream_duplex');
        exports.Transform = require('./lib/_stream_transform');
        exports.PassThrough = require('./lib/_stream_passthrough');
      }, {
        "./lib/_stream_duplex.js": 20,
        "./lib/_stream_passthrough.js": 21,
        "./lib/_stream_readable.js": 22,
        "./lib/_stream_transform.js": 23,
        "./lib/_stream_writable.js": 24
      }],
      30: [function(require, module, exports) {
        module.exports = require('./lib/_stream_transform');
      }, {"./lib/_stream_transform.js": 23}],
      31: [function(require, module, exports) {
        module.exports = require('./lib/_stream_writable');
      }, {"./lib/_stream_writable.js": 24}],
      32: [function(require, module, exports) {
        module.exports = Stream;
        var EE = require('events').EventEmitter;
        var inherits = require('inherits');
        inherits(Stream, EE);
        Stream.Readable = require('readable-stream/readable');
        Stream.Writable = require('readable-stream/writable');
        Stream.Duplex = require('readable-stream/duplex');
        Stream.Transform = require('readable-stream/transform');
        Stream.PassThrough = require('readable-stream/passthrough');
        Stream.Stream = Stream;
        function Stream() {
          EE.call(this);
        }
        Stream.prototype.pipe = function(dest, options) {
          var source = this;
          function ondata(chunk) {
            if (dest.writable) {
              if (false === dest.write(chunk) && source.pause) {
                source.pause();
              }
            }
          }
          source.on('data', ondata);
          function ondrain() {
            if (source.readable && source.resume) {
              source.resume();
            }
          }
          dest.on('drain', ondrain);
          if (!dest._isStdio && (!options || options.end !== false)) {
            source.on('end', onend);
            source.on('close', onclose);
          }
          var didOnEnd = false;
          function onend() {
            if (didOnEnd)
              return;
            didOnEnd = true;
            dest.end();
          }
          function onclose() {
            if (didOnEnd)
              return;
            didOnEnd = true;
            if (typeof dest.destroy === 'function')
              dest.destroy();
          }
          function onerror(er) {
            cleanup();
            if (EE.listenerCount(this, 'error') === 0) {
              throw er;
            }
          }
          source.on('error', onerror);
          dest.on('error', onerror);
          function cleanup() {
            source.removeListener('data', ondata);
            dest.removeListener('drain', ondrain);
            source.removeListener('end', onend);
            source.removeListener('close', onclose);
            source.removeListener('error', onerror);
            dest.removeListener('error', onerror);
            source.removeListener('end', cleanup);
            source.removeListener('close', cleanup);
            dest.removeListener('close', cleanup);
          }
          source.on('end', cleanup);
          source.on('close', cleanup);
          dest.on('close', cleanup);
          dest.emit('pipe', source);
          return dest;
        };
      }, {
        "events": 9,
        "inherits": 10,
        "readable-stream/duplex.js": 19,
        "readable-stream/passthrough.js": 28,
        "readable-stream/readable.js": 29,
        "readable-stream/transform.js": 30,
        "readable-stream/writable.js": 31
      }],
      33: [function(require, module, exports) {
        var ClientRequest = require('./lib/request');
        var extend = require('xtend');
        var statusCodes = require('builtin-status-codes');
        var url = require('url');
        var http = exports;
        http.request = function(opts, cb) {
          if (typeof opts === 'string')
            opts = url.parse(opts);
          else
            opts = extend(opts);
          var hostHostname = opts.host ? opts.host.split(':')[0] : null;
          var hostPort = opts.host ? parseInt(opts.host.split(':')[1], 10) : null;
          opts.method = opts.method || 'GET';
          opts.headers = opts.headers || {};
          opts.path = opts.path || '/';
          opts.protocol = opts.protocol || window.location.protocol;
          var defaultPort = (opts.hostname || hostHostname) ? (opts.protocol === 'https:' ? 443 : 80) : window.location.port;
          opts.hostname = opts.hostname || hostHostname || window.location.hostname;
          opts.port = opts.port || hostPort || defaultPort;
          var req = new ClientRequest(opts);
          if (cb)
            req.on('response', cb);
          return req;
        };
        http.get = function get(opts, cb) {
          var req = http.request(opts, cb);
          req.end();
          return req;
        };
        http.Agent = function() {};
        http.Agent.defaultMaxSockets = 4;
        http.STATUS_CODES = statusCodes;
        http.METHODS = ['CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REPORT', 'SEARCH', 'SUBSCRIBE', 'TRACE', 'UNLOCK', 'UNSUBSCRIBE'];
      }, {
        "./lib/request": 35,
        "builtin-status-codes": 37,
        "url": 44,
        "xtend": 47
      }],
      34: [function(require, module, exports) {
        exports.fetch = isFunction(window.fetch) && isFunction(window.ReadableByteStream);
        exports.blobConstructor = false;
        try {
          new Blob([new ArrayBuffer(1)]);
          exports.blobConstructor = true;
        } catch (e) {}
        var xhr = new window.XMLHttpRequest();
        xhr.open('GET', '/');
        function checkTypeSupport(type) {
          try {
            xhr.responseType = type;
            return xhr.responseType === type;
          } catch (e) {}
          return false;
        }
        var haveArrayBuffer = isFunction(window.ArrayBuffer);
        var haveSlice = haveArrayBuffer && isFunction(window.ArrayBuffer.prototype.slice);
        exports.arraybuffer = haveArrayBuffer && checkTypeSupport('arraybuffer');
        exports.msstream = haveSlice && checkTypeSupport('ms-stream');
        exports.mozchunkedarraybuffer = haveArrayBuffer && checkTypeSupport('moz-chunked-arraybuffer');
        exports.overrideMimeType = isFunction(xhr.overrideMimeType);
        exports.vbArray = isFunction(window.VBArray);
        function isFunction(value) {
          return typeof value === 'function';
        }
        xhr = null;
      }, {}],
      35: [function(require, module, exports) {
        (function(process, Buffer) {
          var capability = require('./capability');
          var foreach = require('foreach');
          var indexOf = require('indexof');
          var inherits = require('inherits');
          var keys = require('object-keys');
          var response = require('./response');
          var stream = require('stream');
          var IncomingMessage = response.IncomingMessage;
          var rStates = response.readyStates;
          function decideMode(preferBinary) {
            if (capability.fetch) {
              return 'fetch';
            } else if (capability.mozchunkedarraybuffer) {
              return 'moz-chunked-arraybuffer';
            } else if (capability.msstream) {
              return 'ms-stream';
            } else if (capability.arraybuffer && preferBinary) {
              return 'arraybuffer';
            } else if (capability.vbArray && preferBinary) {
              return 'text:vbarray';
            } else {
              return 'text';
            }
          }
          var ClientRequest = module.exports = function(opts) {
            var self = this;
            stream.Writable.call(self);
            self._opts = opts;
            self._url = opts.protocol + '//' + opts.hostname + ':' + opts.port + opts.path;
            self._body = [];
            self._headers = {};
            if (opts.auth)
              self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'));
            foreach(keys(opts.headers), function(name) {
              self.setHeader(name, opts.headers[name]);
            });
            var preferBinary;
            if (opts.mode === 'prefer-streaming') {
              preferBinary = false;
            } else if (opts.mode === 'prefer-fast') {
              preferBinary = true;
            } else if (!opts.mode || opts.mode === 'default') {
              preferBinary = !capability.overrideMimeType;
            } else {
              throw new Error('Invalid value for opts.mode');
            }
            self._mode = decideMode(preferBinary);
            self.on('finish', function() {
              self._onFinish();
            });
          };
          inherits(ClientRequest, stream.Writable);
          ClientRequest.prototype.setHeader = function(name, value) {
            var self = this;
            var lowerName = name.toLowerCase();
            if (indexOf(unsafeHeaders, lowerName) !== -1)
              return;
            self._headers[lowerName] = {
              name: name,
              value: value
            };
          };
          ClientRequest.prototype.getHeader = function(name) {
            var self = this;
            return self._headers[name.toLowerCase()].value;
          };
          ClientRequest.prototype.removeHeader = function(name) {
            var self = this;
            delete self._headers[name.toLowerCase()];
          };
          ClientRequest.prototype._onFinish = function() {
            var self = this;
            if (self._destroyed)
              return;
            var opts = self._opts;
            var headersObj = self._headers;
            var body;
            if (opts.method === 'POST' || opts.method === 'PUT') {
              if (capability.blobConstructor) {
                body = new window.Blob(self._body.map(function(buffer) {
                  return buffer.toArrayBuffer();
                }), {type: (headersObj['content-type'] || {}).value || ''});
              } else {
                body = Buffer.concat(self._body).toString();
              }
            }
            if (self._mode === 'fetch') {
              var headers = keys(headersObj).map(function(name) {
                return [headersObj[name].name, headersObj[name].value];
              });
              window.fetch(self._url, {
                method: self._opts.method,
                headers: headers,
                body: body,
                mode: 'cors',
                credentials: opts.withCredentials ? 'include' : 'same-origin'
              }).then(function(response) {
                self._fetchResponse = response;
                self._connect();
              }).then(undefined, function(reason) {
                self.emit('error', reason);
              });
            } else {
              var xhr = self._xhr = new window.XMLHttpRequest();
              try {
                xhr.open(self._opts.method, self._url, true);
              } catch (err) {
                process.nextTick(function() {
                  self.emit('error', err);
                });
                return;
              }
              if ('responseType' in xhr)
                xhr.responseType = self._mode.split(':')[0];
              if ('withCredentials' in xhr)
                xhr.withCredentials = !!opts.withCredentials;
              if (self._mode === 'text' && 'overrideMimeType' in xhr)
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              foreach(keys(headersObj), function(name) {
                xhr.setRequestHeader(headersObj[name].name, headersObj[name].value);
              });
              self._response = null;
              xhr.onreadystatechange = function() {
                switch (xhr.readyState) {
                  case rStates.LOADING:
                  case rStates.DONE:
                    self._onXHRProgress();
                    break;
                }
              };
              if (self._mode === 'moz-chunked-arraybuffer') {
                xhr.onprogress = function() {
                  self._onXHRProgress();
                };
              }
              xhr.onerror = function() {
                if (self._destroyed)
                  return;
                self.emit('error', new Error('XHR error'));
              };
              try {
                xhr.send(body);
              } catch (err) {
                process.nextTick(function() {
                  self.emit('error', err);
                });
                return;
              }
            }
          };
          function statusValid(xhr) {
            try {
              return (xhr.status !== null);
            } catch (e) {
              return false;
            }
          }
          ClientRequest.prototype._onXHRProgress = function() {
            var self = this;
            if (!statusValid(self._xhr) || self._destroyed)
              return;
            if (!self._response)
              self._connect();
            self._response._onXHRProgress();
          };
          ClientRequest.prototype._connect = function() {
            var self = this;
            if (self._destroyed)
              return;
            self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode);
            self.emit('response', self._response);
          };
          ClientRequest.prototype._write = function(chunk, encoding, cb) {
            var self = this;
            self._body.push(chunk);
            cb();
          };
          ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function() {
            var self = this;
            self._destroyed = true;
            if (self._response)
              self._response._destroyed = true;
            if (self._xhr)
              self._xhr.abort();
          };
          ClientRequest.prototype.end = function(data, encoding, cb) {
            var self = this;
            if (typeof data === 'function') {
              cb = data;
              data = undefined;
            }
            stream.Writable.prototype.end.call(self, data, encoding, cb);
          };
          ClientRequest.prototype.flushHeaders = function() {};
          ClientRequest.prototype.setTimeout = function() {};
          ClientRequest.prototype.setNoDelay = function() {};
          ClientRequest.prototype.setSocketKeepAlive = function() {};
          var unsafeHeaders = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'user-agent', 'via'];
        }).call(this, require('_process'), require('buffer').Buffer);
      }, {
        "./capability": 34,
        "./response": 36,
        "_process": 14,
        "buffer": 4,
        "foreach": 38,
        "indexof": 39,
        "inherits": 10,
        "object-keys": 40,
        "stream": 32
      }],
      36: [function(require, module, exports) {
        (function(process, Buffer) {
          var capability = require('./capability');
          var foreach = require('foreach');
          var inherits = require('inherits');
          var stream = require('stream');
          var rStates = exports.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4
          };
          var IncomingMessage = exports.IncomingMessage = function(xhr, response, mode) {
            var self = this;
            stream.Readable.call(self);
            self._mode = mode;
            self.headers = {};
            self.rawHeaders = [];
            self.trailers = {};
            self.rawTrailers = [];
            self.on('end', function() {
              process.nextTick(function() {
                self.emit('close');
              });
            });
            if (mode === 'fetch') {
              self._fetchResponse = response;
              self.statusCode = response.status;
              self.statusMessage = response.statusText;
              for (var header,
                  _i,
                  _it = response.headers[Symbol.iterator](); header = (_i = _it.next()).value, !_i.done; ) {
                self.headers[header[0].toLowerCase()] = header[1];
                self.rawHeaders.push(header[0], header[1]);
              }
              var reader = response.body.getReader();
              function read() {
                reader.read().then(function(result) {
                  if (self._destroyed)
                    return;
                  if (result.done) {
                    self.push(null);
                    return;
                  }
                  self.push(new Buffer(result.value));
                  read();
                });
              }
              read();
            } else {
              self._xhr = xhr;
              self._pos = 0;
              self.statusCode = xhr.status;
              self.statusMessage = xhr.statusText;
              var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
              foreach(headers, function(header) {
                var matches = header.match(/^([^:]+):\s*(.*)/);
                if (matches) {
                  var key = matches[1].toLowerCase();
                  if (self.headers[key] !== undefined)
                    self.headers[key] += ', ' + matches[2];
                  else
                    self.headers[key] = matches[2];
                  self.rawHeaders.push(matches[1], matches[2]);
                }
              });
              self._charset = 'x-user-defined';
              if (!capability.overrideMimeType) {
                var mimeType = self.rawHeaders['mime-type'];
                if (mimeType) {
                  var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
                  if (charsetMatch) {
                    self._charset = charsetMatch[1].toLowerCase();
                  }
                }
                if (!self._charset)
                  self._charset = 'utf-8';
              }
            }
          };
          inherits(IncomingMessage, stream.Readable);
          IncomingMessage.prototype._read = function() {};
          IncomingMessage.prototype._onXHRProgress = function() {
            var self = this;
            var xhr = self._xhr;
            var response = null;
            switch (self._mode) {
              case 'text:vbarray':
                if (xhr.readyState !== rStates.DONE)
                  break;
                try {
                  response = new window.VBArray(xhr.responseBody).toArray();
                } catch (e) {}
                if (response !== null) {
                  self.push(new Buffer(response));
                  break;
                }
              case 'text':
                try {
                  response = xhr.responseText;
                } catch (e) {
                  self._mode = 'text:vbarray';
                  break;
                }
                if (response.length > self._pos) {
                  var newData = response.substr(self._pos);
                  if (self._charset === 'x-user-defined') {
                    var buffer = new Buffer(newData.length);
                    for (var i = 0; i < newData.length; i++)
                      buffer[i] = newData.charCodeAt(i) & 0xff;
                    self.push(buffer);
                  } else {
                    self.push(newData, self._charset);
                  }
                  self._pos = response.length;
                }
                break;
              case 'arraybuffer':
                if (xhr.readyState !== rStates.DONE)
                  break;
                response = xhr.response;
                self.push(new Buffer(new Uint8Array(response)));
                break;
              case 'moz-chunked-arraybuffer':
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING || !response)
                  break;
                self.push(new Buffer(new Uint8Array(response)));
                break;
              case 'ms-stream':
                response = xhr.response;
                if (xhr.readyState !== rStates.LOADING)
                  break;
                var reader = new window.MSStreamReader();
                reader.onprogress = function() {
                  if (reader.result.byteLength > self._pos) {
                    self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))));
                    self._pos = reader.result.byteLength;
                  }
                };
                reader.onload = function() {
                  self.push(null);
                };
                reader.readAsArrayBuffer(response);
                break;
            }
            if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
              self.push(null);
            }
          };
        }).call(this, require('_process'), require('buffer').Buffer);
      }, {
        "./capability": 34,
        "_process": 14,
        "buffer": 4,
        "foreach": 38,
        "inherits": 10,
        "stream": 32
      }],
      37: [function(require, module, exports) {
        module.exports = {
          "100": "Continue",
          "101": "Switching Protocols",
          "102": "Processing",
          "200": "OK",
          "201": "Created",
          "202": "Accepted",
          "203": "Non-Authoritative Information",
          "204": "No Content",
          "205": "Reset Content",
          "206": "Partial Content",
          "207": "Multi-Status",
          "300": "Multiple Choices",
          "301": "Moved Permanently",
          "302": "Moved Temporarily",
          "303": "See Other",
          "304": "Not Modified",
          "305": "Use Proxy",
          "307": "Temporary Redirect",
          "308": "Permanent Redirect",
          "400": "Bad Request",
          "401": "Unauthorized",
          "402": "Payment Required",
          "403": "Forbidden",
          "404": "Not Found",
          "405": "Method Not Allowed",
          "406": "Not Acceptable",
          "407": "Proxy Authentication Required",
          "408": "Request Time-out",
          "409": "Conflict",
          "410": "Gone",
          "411": "Length Required",
          "412": "Precondition Failed",
          "413": "Request Entity Too Large",
          "414": "Request-URI Too Large",
          "415": "Unsupported Media Type",
          "416": "Requested Range Not Satisfiable",
          "417": "Expectation Failed",
          "418": "I'm a teapot",
          "422": "Unprocessable Entity",
          "423": "Locked",
          "424": "Failed Dependency",
          "425": "Unordered Collection",
          "426": "Upgrade Required",
          "428": "Precondition Required",
          "429": "Too Many Requests",
          "431": "Request Header Fields Too Large",
          "500": "Internal Server Error",
          "501": "Not Implemented",
          "502": "Bad Gateway",
          "503": "Service Unavailable",
          "504": "Gateway Time-out",
          "505": "HTTP Version Not Supported",
          "506": "Variant Also Negotiates",
          "507": "Insufficient Storage",
          "509": "Bandwidth Limit Exceeded",
          "510": "Not Extended",
          "511": "Network Authentication Required"
        };
      }, {}],
      38: [function(require, module, exports) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var toString = Object.prototype.toString;
        module.exports = function forEach(obj, fn, ctx) {
          if (toString.call(fn) !== '[object Function]') {
            throw new TypeError('iterator must be a function');
          }
          var l = obj.length;
          if (l === +l) {
            for (var i = 0; i < l; i++) {
              fn.call(ctx, obj[i], i, obj);
            }
          } else {
            for (var k in obj) {
              if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
              }
            }
          }
        };
      }, {}],
      39: [function(require, module, exports) {
        var indexOf = [].indexOf;
        module.exports = function(arr, obj) {
          if (indexOf)
            return arr.indexOf(obj);
          for (var i = 0; i < arr.length; ++i) {
            if (arr[i] === obj)
              return i;
          }
          return -1;
        };
      }, {}],
      40: [function(require, module, exports) {
        'use strict';
        var has = Object.prototype.hasOwnProperty;
        var toStr = Object.prototype.toString;
        var slice = Array.prototype.slice;
        var isArgs = require('./isArguments');
        var hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString');
        var hasProtoEnumBug = function() {}.propertyIsEnumerable('prototype');
        var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
        var keysShim = function keys(object) {
          var isObject = object !== null && typeof object === 'object';
          var isFunction = toStr.call(object) === '[object Function]';
          var isArguments = isArgs(object);
          var isString = isObject && toStr.call(object) === '[object String]';
          var theKeys = [];
          if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object');
          }
          var skipProto = hasProtoEnumBug && isFunction;
          if (isString && object.length > 0 && !has.call(object, 0)) {
            for (var i = 0; i < object.length; ++i) {
              theKeys.push(String(i));
            }
          }
          if (isArguments && object.length > 0) {
            for (var j = 0; j < object.length; ++j) {
              theKeys.push(String(j));
            }
          } else {
            for (var name in object) {
              if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                theKeys.push(String(name));
              }
            }
          }
          if (hasDontEnumBug) {
            var ctor = object.constructor;
            var skipConstructor = ctor && ctor.prototype === object;
            for (var k = 0; k < dontEnums.length; ++k) {
              if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                theKeys.push(dontEnums[k]);
              }
            }
          }
          return theKeys;
        };
        keysShim.shim = function shimObjectKeys() {
          if (!Object.keys) {
            Object.keys = keysShim;
          } else {
            var keysWorksWithArguments = (function() {
              return (Object.keys(arguments) || '').length === 2;
            }(1, 2));
            if (!keysWorksWithArguments) {
              var originalKeys = Object.keys;
              Object.keys = function keys(object) {
                if (isArgs(object)) {
                  return originalKeys(slice.call(object));
                } else {
                  return originalKeys(object);
                }
              };
            }
          }
          return Object.keys || keysShim;
        };
        module.exports = keysShim;
      }, {"./isArguments": 41}],
      41: [function(require, module, exports) {
        'use strict';
        var toStr = Object.prototype.toString;
        module.exports = function isArguments(value) {
          var str = toStr.call(value);
          var isArgs = str === '[object Arguments]';
          if (!isArgs) {
            isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
          }
          return isArgs;
        };
      }, {}],
      42: [function(require, module, exports) {
        var Buffer = require('buffer').Buffer;
        var isBufferEncoding = Buffer.isEncoding || function(encoding) {
          switch (encoding && encoding.toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            case 'raw':
              return true;
            default:
              return false;
          }
        };
        function assertEncoding(encoding) {
          if (encoding && !isBufferEncoding(encoding)) {
            throw new Error('Unknown encoding: ' + encoding);
          }
        }
        var StringDecoder = exports.StringDecoder = function(encoding) {
          this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
          assertEncoding(encoding);
          switch (this.encoding) {
            case 'utf8':
              this.surrogateSize = 3;
              break;
            case 'ucs2':
            case 'utf16le':
              this.surrogateSize = 2;
              this.detectIncompleteChar = utf16DetectIncompleteChar;
              break;
            case 'base64':
              this.surrogateSize = 3;
              this.detectIncompleteChar = base64DetectIncompleteChar;
              break;
            default:
              this.write = passThroughWrite;
              return;
          }
          this.charBuffer = new Buffer(6);
          this.charReceived = 0;
          this.charLength = 0;
        };
        StringDecoder.prototype.write = function(buffer) {
          var charStr = '';
          while (this.charLength) {
            var available = (buffer.length >= this.charLength - this.charReceived) ? this.charLength - this.charReceived : buffer.length;
            buffer.copy(this.charBuffer, this.charReceived, 0, available);
            this.charReceived += available;
            if (this.charReceived < this.charLength) {
              return '';
            }
            buffer = buffer.slice(available, buffer.length);
            charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
            var charCode = charStr.charCodeAt(charStr.length - 1);
            if (charCode >= 0xD800 && charCode <= 0xDBFF) {
              this.charLength += this.surrogateSize;
              charStr = '';
              continue;
            }
            this.charReceived = this.charLength = 0;
            if (buffer.length === 0) {
              return charStr;
            }
            break;
          }
          this.detectIncompleteChar(buffer);
          var end = buffer.length;
          if (this.charLength) {
            buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
            end -= this.charReceived;
          }
          charStr += buffer.toString(this.encoding, 0, end);
          var end = charStr.length - 1;
          var charCode = charStr.charCodeAt(end);
          if (charCode >= 0xD800 && charCode <= 0xDBFF) {
            var size = this.surrogateSize;
            this.charLength += size;
            this.charReceived += size;
            this.charBuffer.copy(this.charBuffer, size, 0, size);
            buffer.copy(this.charBuffer, 0, 0, size);
            return charStr.substring(0, end);
          }
          return charStr;
        };
        StringDecoder.prototype.detectIncompleteChar = function(buffer) {
          var i = (buffer.length >= 3) ? 3 : buffer.length;
          for (; i > 0; i--) {
            var c = buffer[buffer.length - i];
            if (i == 1 && c >> 5 == 0x06) {
              this.charLength = 2;
              break;
            }
            if (i <= 2 && c >> 4 == 0x0E) {
              this.charLength = 3;
              break;
            }
            if (i <= 3 && c >> 3 == 0x1E) {
              this.charLength = 4;
              break;
            }
          }
          this.charReceived = i;
        };
        StringDecoder.prototype.end = function(buffer) {
          var res = '';
          if (buffer && buffer.length)
            res = this.write(buffer);
          if (this.charReceived) {
            var cr = this.charReceived;
            var buf = this.charBuffer;
            var enc = this.encoding;
            res += buf.slice(0, cr).toString(enc);
          }
          return res;
        };
        function passThroughWrite(buffer) {
          return buffer.toString(this.encoding);
        }
        function utf16DetectIncompleteChar(buffer) {
          this.charReceived = buffer.length % 2;
          this.charLength = this.charReceived ? 2 : 0;
        }
        function base64DetectIncompleteChar(buffer) {
          this.charReceived = buffer.length % 3;
          this.charLength = this.charReceived ? 3 : 0;
        }
      }, {"buffer": 4}],
      43: [function(require, module, exports) {
        var nextTick = require('process/browser').nextTick;
        var apply = Function.prototype.apply;
        var slice = Array.prototype.slice;
        var immediateIds = {};
        var nextImmediateId = 0;
        exports.setTimeout = function() {
          return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
        };
        exports.setInterval = function() {
          return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
        };
        exports.clearTimeout = exports.clearInterval = function(timeout) {
          timeout.close();
        };
        function Timeout(id, clearFn) {
          this._id = id;
          this._clearFn = clearFn;
        }
        Timeout.prototype.unref = Timeout.prototype.ref = function() {};
        Timeout.prototype.close = function() {
          this._clearFn.call(window, this._id);
        };
        exports.enroll = function(item, msecs) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = msecs;
        };
        exports.unenroll = function(item) {
          clearTimeout(item._idleTimeoutId);
          item._idleTimeout = -1;
        };
        exports._unrefActive = exports.active = function(item) {
          clearTimeout(item._idleTimeoutId);
          var msecs = item._idleTimeout;
          if (msecs >= 0) {
            item._idleTimeoutId = setTimeout(function onTimeout() {
              if (item._onTimeout)
                item._onTimeout();
            }, msecs);
          }
        };
        exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
          var id = nextImmediateId++;
          var args = arguments.length < 2 ? false : slice.call(arguments, 1);
          immediateIds[id] = true;
          nextTick(function onNextTick() {
            if (immediateIds[id]) {
              if (args) {
                fn.apply(null, args);
              } else {
                fn.call(null);
              }
              exports.clearImmediate(id);
            }
          });
          return id;
        };
        exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
          delete immediateIds[id];
        };
      }, {"process/browser.js": 14}],
      44: [function(require, module, exports) {
        var punycode = require('punycode');
        exports.parse = urlParse;
        exports.resolve = urlResolve;
        exports.resolveObject = urlResolveObject;
        exports.format = urlFormat;
        exports.Url = Url;
        function Url() {
          this.protocol = null;
          this.slashes = null;
          this.auth = null;
          this.host = null;
          this.port = null;
          this.hostname = null;
          this.hash = null;
          this.search = null;
          this.query = null;
          this.pathname = null;
          this.path = null;
          this.href = null;
        }
        var protocolPattern = /^([a-z0-9.+-]+:)/i,
            portPattern = /:[0-9]*$/,
            delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
            unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
            autoEscape = ['\''].concat(unwise),
            nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
            hostEndingChars = ['/', '?', '#'],
            hostnameMaxLen = 255,
            hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
            hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            unsafeProtocol = {
              'javascript': true,
              'javascript:': true
            },
            hostlessProtocol = {
              'javascript': true,
              'javascript:': true
            },
            slashedProtocol = {
              'http': true,
              'https': true,
              'ftp': true,
              'gopher': true,
              'file': true,
              'http:': true,
              'https:': true,
              'ftp:': true,
              'gopher:': true,
              'file:': true
            },
            querystring = require('querystring');
        function urlParse(url, parseQueryString, slashesDenoteHost) {
          if (url && isObject(url) && url instanceof Url)
            return url;
          var u = new Url;
          u.parse(url, parseQueryString, slashesDenoteHost);
          return u;
        }
        Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
          if (!isString(url)) {
            throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
          }
          var rest = url;
          rest = rest.trim();
          var proto = protocolPattern.exec(rest);
          if (proto) {
            proto = proto[0];
            var lowerProto = proto.toLowerCase();
            this.protocol = lowerProto;
            rest = rest.substr(proto.length);
          }
          if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var slashes = rest.substr(0, 2) === '//';
            if (slashes && !(proto && hostlessProtocol[proto])) {
              rest = rest.substr(2);
              this.slashes = true;
            }
          }
          if (!hostlessProtocol[proto] && (slashes || (proto && !slashedProtocol[proto]))) {
            var hostEnd = -1;
            for (var i = 0; i < hostEndingChars.length; i++) {
              var hec = rest.indexOf(hostEndingChars[i]);
              if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                hostEnd = hec;
            }
            var auth,
                atSign;
            if (hostEnd === -1) {
              atSign = rest.lastIndexOf('@');
            } else {
              atSign = rest.lastIndexOf('@', hostEnd);
            }
            if (atSign !== -1) {
              auth = rest.slice(0, atSign);
              rest = rest.slice(atSign + 1);
              this.auth = decodeURIComponent(auth);
            }
            hostEnd = -1;
            for (var i = 0; i < nonHostChars.length; i++) {
              var hec = rest.indexOf(nonHostChars[i]);
              if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
                hostEnd = hec;
            }
            if (hostEnd === -1)
              hostEnd = rest.length;
            this.host = rest.slice(0, hostEnd);
            rest = rest.slice(hostEnd);
            this.parseHost();
            this.hostname = this.hostname || '';
            var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';
            if (!ipv6Hostname) {
              var hostparts = this.hostname.split(/\./);
              for (var i = 0,
                  l = hostparts.length; i < l; i++) {
                var part = hostparts[i];
                if (!part)
                  continue;
                if (!part.match(hostnamePartPattern)) {
                  var newpart = '';
                  for (var j = 0,
                      k = part.length; j < k; j++) {
                    if (part.charCodeAt(j) > 127) {
                      newpart += 'x';
                    } else {
                      newpart += part[j];
                    }
                  }
                  if (!newpart.match(hostnamePartPattern)) {
                    var validParts = hostparts.slice(0, i);
                    var notHost = hostparts.slice(i + 1);
                    var bit = part.match(hostnamePartStart);
                    if (bit) {
                      validParts.push(bit[1]);
                      notHost.unshift(bit[2]);
                    }
                    if (notHost.length) {
                      rest = '/' + notHost.join('.') + rest;
                    }
                    this.hostname = validParts.join('.');
                    break;
                  }
                }
              }
            }
            if (this.hostname.length > hostnameMaxLen) {
              this.hostname = '';
            } else {
              this.hostname = this.hostname.toLowerCase();
            }
            if (!ipv6Hostname) {
              var domainArray = this.hostname.split('.');
              var newOut = [];
              for (var i = 0; i < domainArray.length; ++i) {
                var s = domainArray[i];
                newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
              }
              this.hostname = newOut.join('.');
            }
            var p = this.port ? ':' + this.port : '';
            var h = this.hostname || '';
            this.host = h + p;
            this.href += this.host;
            if (ipv6Hostname) {
              this.hostname = this.hostname.substr(1, this.hostname.length - 2);
              if (rest[0] !== '/') {
                rest = '/' + rest;
              }
            }
          }
          if (!unsafeProtocol[lowerProto]) {
            for (var i = 0,
                l = autoEscape.length; i < l; i++) {
              var ae = autoEscape[i];
              var esc = encodeURIComponent(ae);
              if (esc === ae) {
                esc = escape(ae);
              }
              rest = rest.split(ae).join(esc);
            }
          }
          var hash = rest.indexOf('#');
          if (hash !== -1) {
            this.hash = rest.substr(hash);
            rest = rest.slice(0, hash);
          }
          var qm = rest.indexOf('?');
          if (qm !== -1) {
            this.search = rest.substr(qm);
            this.query = rest.substr(qm + 1);
            if (parseQueryString) {
              this.query = querystring.parse(this.query);
            }
            rest = rest.slice(0, qm);
          } else if (parseQueryString) {
            this.search = '';
            this.query = {};
          }
          if (rest)
            this.pathname = rest;
          if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
            this.pathname = '/';
          }
          if (this.pathname || this.search) {
            var p = this.pathname || '';
            var s = this.search || '';
            this.path = p + s;
          }
          this.href = this.format();
          return this;
        };
        function urlFormat(obj) {
          if (isString(obj))
            obj = urlParse(obj);
          if (!(obj instanceof Url))
            return Url.prototype.format.call(obj);
          return obj.format();
        }
        Url.prototype.format = function() {
          var auth = this.auth || '';
          if (auth) {
            auth = encodeURIComponent(auth);
            auth = auth.replace(/%3A/i, ':');
            auth += '@';
          }
          var protocol = this.protocol || '',
              pathname = this.pathname || '',
              hash = this.hash || '',
              host = false,
              query = '';
          if (this.host) {
            host = auth + this.host;
          } else if (this.hostname) {
            host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
            if (this.port) {
              host += ':' + this.port;
            }
          }
          if (this.query && isObject(this.query) && Object.keys(this.query).length) {
            query = querystring.stringify(this.query);
          }
          var search = this.search || (query && ('?' + query)) || '';
          if (protocol && protocol.substr(-1) !== ':')
            protocol += ':';
          if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
            host = '//' + (host || '');
            if (pathname && pathname.charAt(0) !== '/')
              pathname = '/' + pathname;
          } else if (!host) {
            host = '';
          }
          if (hash && hash.charAt(0) !== '#')
            hash = '#' + hash;
          if (search && search.charAt(0) !== '?')
            search = '?' + search;
          pathname = pathname.replace(/[?#]/g, function(match) {
            return encodeURIComponent(match);
          });
          search = search.replace('#', '%23');
          return protocol + host + pathname + search + hash;
        };
        function urlResolve(source, relative) {
          return urlParse(source, false, true).resolve(relative);
        }
        Url.prototype.resolve = function(relative) {
          return this.resolveObject(urlParse(relative, false, true)).format();
        };
        function urlResolveObject(source, relative) {
          if (!source)
            return relative;
          return urlParse(source, false, true).resolveObject(relative);
        }
        Url.prototype.resolveObject = function(relative) {
          if (isString(relative)) {
            var rel = new Url();
            rel.parse(relative, false, true);
            relative = rel;
          }
          var result = new Url();
          Object.keys(this).forEach(function(k) {
            result[k] = this[k];
          }, this);
          result.hash = relative.hash;
          if (relative.href === '') {
            result.href = result.format();
            return result;
          }
          if (relative.slashes && !relative.protocol) {
            Object.keys(relative).forEach(function(k) {
              if (k !== 'protocol')
                result[k] = relative[k];
            });
            if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
              result.path = result.pathname = '/';
            }
            result.href = result.format();
            return result;
          }
          if (relative.protocol && relative.protocol !== result.protocol) {
            if (!slashedProtocol[relative.protocol]) {
              Object.keys(relative).forEach(function(k) {
                result[k] = relative[k];
              });
              result.href = result.format();
              return result;
            }
            result.protocol = relative.protocol;
            if (!relative.host && !hostlessProtocol[relative.protocol]) {
              var relPath = (relative.pathname || '').split('/');
              while (relPath.length && !(relative.host = relPath.shift()))
                ;
              if (!relative.host)
                relative.host = '';
              if (!relative.hostname)
                relative.hostname = '';
              if (relPath[0] !== '')
                relPath.unshift('');
              if (relPath.length < 2)
                relPath.unshift('');
              result.pathname = relPath.join('/');
            } else {
              result.pathname = relative.pathname;
            }
            result.search = relative.search;
            result.query = relative.query;
            result.host = relative.host || '';
            result.auth = relative.auth;
            result.hostname = relative.hostname || relative.host;
            result.port = relative.port;
            if (result.pathname || result.search) {
              var p = result.pathname || '';
              var s = result.search || '';
              result.path = p + s;
            }
            result.slashes = result.slashes || relative.slashes;
            result.href = result.format();
            return result;
          }
          var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
              isRelAbs = (relative.host || relative.pathname && relative.pathname.charAt(0) === '/'),
              mustEndAbs = (isRelAbs || isSourceAbs || (result.host && relative.pathname)),
              removeAllDots = mustEndAbs,
              srcPath = result.pathname && result.pathname.split('/') || [],
              relPath = relative.pathname && relative.pathname.split('/') || [],
              psychotic = result.protocol && !slashedProtocol[result.protocol];
          if (psychotic) {
            result.hostname = '';
            result.port = null;
            if (result.host) {
              if (srcPath[0] === '')
                srcPath[0] = result.host;
              else
                srcPath.unshift(result.host);
            }
            result.host = '';
            if (relative.protocol) {
              relative.hostname = null;
              relative.port = null;
              if (relative.host) {
                if (relPath[0] === '')
                  relPath[0] = relative.host;
                else
                  relPath.unshift(relative.host);
              }
              relative.host = null;
            }
            mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
          }
          if (isRelAbs) {
            result.host = (relative.host || relative.host === '') ? relative.host : result.host;
            result.hostname = (relative.hostname || relative.hostname === '') ? relative.hostname : result.hostname;
            result.search = relative.search;
            result.query = relative.query;
            srcPath = relPath;
          } else if (relPath.length) {
            if (!srcPath)
              srcPath = [];
            srcPath.pop();
            srcPath = srcPath.concat(relPath);
            result.search = relative.search;
            result.query = relative.query;
          } else if (!isNullOrUndefined(relative.search)) {
            if (psychotic) {
              result.hostname = result.host = srcPath.shift();
              var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
              if (authInHost) {
                result.auth = authInHost.shift();
                result.host = result.hostname = authInHost.shift();
              }
            }
            result.search = relative.search;
            result.query = relative.query;
            if (!isNull(result.pathname) || !isNull(result.search)) {
              result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
            }
            result.href = result.format();
            return result;
          }
          if (!srcPath.length) {
            result.pathname = null;
            if (result.search) {
              result.path = '/' + result.search;
            } else {
              result.path = null;
            }
            result.href = result.format();
            return result;
          }
          var last = srcPath.slice(-1)[0];
          var hasTrailingSlash = ((result.host || relative.host) && (last === '.' || last === '..') || last === '');
          var up = 0;
          for (var i = srcPath.length; i >= 0; i--) {
            last = srcPath[i];
            if (last == '.') {
              srcPath.splice(i, 1);
            } else if (last === '..') {
              srcPath.splice(i, 1);
              up++;
            } else if (up) {
              srcPath.splice(i, 1);
              up--;
            }
          }
          if (!mustEndAbs && !removeAllDots) {
            for (; up--; up) {
              srcPath.unshift('..');
            }
          }
          if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
            srcPath.unshift('');
          }
          if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
            srcPath.push('');
          }
          var isAbsolute = srcPath[0] === '' || (srcPath[0] && srcPath[0].charAt(0) === '/');
          if (psychotic) {
            result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
            var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
            if (authInHost) {
              result.auth = authInHost.shift();
              result.host = result.hostname = authInHost.shift();
            }
          }
          mustEndAbs = mustEndAbs || (result.host && srcPath.length);
          if (mustEndAbs && !isAbsolute) {
            srcPath.unshift('');
          }
          if (!srcPath.length) {
            result.pathname = null;
            result.path = null;
          } else {
            result.pathname = srcPath.join('/');
          }
          if (!isNull(result.pathname) || !isNull(result.search)) {
            result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
          }
          result.auth = relative.auth || result.auth;
          result.slashes = result.slashes || relative.slashes;
          result.href = result.format();
          return result;
        };
        Url.prototype.parseHost = function() {
          var host = this.host;
          var port = portPattern.exec(host);
          if (port) {
            port = port[0];
            if (port !== ':') {
              this.port = port.substr(1);
            }
            host = host.substr(0, host.length - port.length);
          }
          if (host)
            this.hostname = host;
        };
        function isString(arg) {
          return typeof arg === "string";
        }
        function isObject(arg) {
          return typeof arg === 'object' && arg !== null;
        }
        function isNull(arg) {
          return arg === null;
        }
        function isNullOrUndefined(arg) {
          return arg == null;
        }
      }, {
        "punycode": 15,
        "querystring": 18
      }],
      45: [function(require, module, exports) {
        module.exports = function isBuffer(arg) {
          return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
        };
      }, {}],
      46: [function(require, module, exports) {
        (function(process, global) {
          var formatRegExp = /%[sdj%]/g;
          exports.format = function(f) {
            if (!isString(f)) {
              var objects = [];
              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }
              return objects.join(' ');
            }
            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function(x) {
              if (x === '%%')
                return '%';
              if (i >= len)
                return x;
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                default:
                  return x;
              }
            });
            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }
            return str;
          };
          exports.deprecate = function(fn, msg) {
            if (isUndefined(global.process)) {
              return function() {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }
            if (process.noDeprecation === true) {
              return fn;
            }
            var warned = false;
            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }
                warned = true;
              }
              return fn.apply(this, arguments);
            }
            return deprecated;
          };
          var debugs = {};
          var debugEnviron;
          exports.debuglog = function(set) {
            if (isUndefined(debugEnviron))
              debugEnviron = process.env.NODE_DEBUG || '';
            set = set.toUpperCase();
            if (!debugs[set]) {
              if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
                var pid = process.pid;
                debugs[set] = function() {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function() {};
              }
            }
            return debugs[set];
          };
          function inspect(obj, opts) {
            var ctx = {
              seen: [],
              stylize: stylizeNoColor
            };
            if (arguments.length >= 3)
              ctx.depth = arguments[2];
            if (arguments.length >= 4)
              ctx.colors = arguments[3];
            if (isBoolean(opts)) {
              ctx.showHidden = opts;
            } else if (opts) {
              exports._extend(ctx, opts);
            }
            if (isUndefined(ctx.showHidden))
              ctx.showHidden = false;
            if (isUndefined(ctx.depth))
              ctx.depth = 2;
            if (isUndefined(ctx.colors))
              ctx.colors = false;
            if (isUndefined(ctx.customInspect))
              ctx.customInspect = true;
            if (ctx.colors)
              ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }
          exports.inspect = inspect;
          inspect.colors = {
            'bold': [1, 22],
            'italic': [3, 23],
            'underline': [4, 24],
            'inverse': [7, 27],
            'white': [37, 39],
            'grey': [90, 39],
            'black': [30, 39],
            'blue': [34, 39],
            'cyan': [36, 39],
            'green': [32, 39],
            'magenta': [35, 39],
            'red': [31, 39],
            'yellow': [33, 39]
          };
          inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            'regexp': 'red'
          };
          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];
            if (style) {
              return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
            } else {
              return str;
            }
          }
          function stylizeNoColor(str, styleType) {
            return str;
          }
          function arrayToHash(array) {
            var hash = {};
            array.forEach(function(val, idx) {
              hash[val] = true;
            });
            return hash;
          }
          function formatValue(ctx, value, recurseTimes) {
            if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
              var ret = value.inspect(recurseTimes, ctx);
              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }
              return ret;
            }
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
              return primitive;
            }
            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);
            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            }
            if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
              return formatError(value);
            }
            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              }
              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }
              if (isError(value)) {
                return formatError(value);
              }
            }
            var base = '',
                array = false,
                braces = ['{', '}'];
            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            }
            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            }
            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            }
            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            }
            if (isError(value)) {
              base = ' ' + formatError(value);
            }
            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }
            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }
            ctx.seen.push(value);
            var output;
            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function(key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
              });
            }
            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
          }
          function formatPrimitive(ctx, value) {
            if (isUndefined(value))
              return ctx.stylize('undefined', 'undefined');
            if (isString(value)) {
              var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
              return ctx.stylize(simple, 'string');
            }
            if (isNumber(value))
              return ctx.stylize('' + value, 'number');
            if (isBoolean(value))
              return ctx.stylize('' + value, 'boolean');
            if (isNull(value))
              return ctx.stylize('null', 'null');
          }
          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }
          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0,
                l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
              } else {
                output.push('');
              }
            }
            keys.forEach(function(key) {
              if (!key.match(/^\d+$/)) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
              }
            });
            return output;
          }
          function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name,
                str,
                desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }
            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }
            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }
                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str.split('\n').map(function(line) {
                      return '  ' + line;
                    }).join('\n').substr(2);
                  } else {
                    str = '\n' + str.split('\n').map(function(line) {
                      return '   ' + line;
                    }).join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }
            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }
              name = JSON.stringify('' + key);
              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.substr(1, name.length - 2);
                name = ctx.stylize(name, 'name');
              } else {
                name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }
            return name + ': ' + str;
          }
          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0)
                numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);
            if (length > 60) {
              return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
            }
            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          }
          function isArray(ar) {
            return Array.isArray(ar);
          }
          exports.isArray = isArray;
          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }
          exports.isBoolean = isBoolean;
          function isNull(arg) {
            return arg === null;
          }
          exports.isNull = isNull;
          function isNullOrUndefined(arg) {
            return arg == null;
          }
          exports.isNullOrUndefined = isNullOrUndefined;
          function isNumber(arg) {
            return typeof arg === 'number';
          }
          exports.isNumber = isNumber;
          function isString(arg) {
            return typeof arg === 'string';
          }
          exports.isString = isString;
          function isSymbol(arg) {
            return typeof arg === 'symbol';
          }
          exports.isSymbol = isSymbol;
          function isUndefined(arg) {
            return arg === void 0;
          }
          exports.isUndefined = isUndefined;
          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }
          exports.isRegExp = isRegExp;
          function isObject(arg) {
            return typeof arg === 'object' && arg !== null;
          }
          exports.isObject = isObject;
          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }
          exports.isDate = isDate;
          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }
          exports.isError = isError;
          function isFunction(arg) {
            return typeof arg === 'function';
          }
          exports.isFunction = isFunction;
          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
          }
          exports.isPrimitive = isPrimitive;
          exports.isBuffer = require('./support/isBuffer');
          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }
          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          }
          exports.log = function() {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
          };
          exports.inherits = require('inherits');
          exports._extend = function(origin, add) {
            if (!add || !isObject(add))
              return origin;
            var keys = Object.keys(add);
            var i = keys.length;
            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }
            return origin;
          };
          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }
        }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "./support/isBuffer": 45,
        "_process": 14,
        "inherits": 10
      }],
      47: [function(require, module, exports) {
        module.exports = extend;
        function extend() {
          var target = {};
          for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (source.hasOwnProperty(key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        }
      }, {}],
      48: [function(require, module, exports) {
        'use strict';
        var PassThrough = require('readable-stream/passthrough');
        module.exports = function() {
          var sources = [];
          var output = new PassThrough({objectMode: true});
          output.setMaxListeners(0);
          output.add = add;
          output.isEmpty = isEmpty;
          output.on('unpipe', remove);
          Array.prototype.slice.call(arguments).forEach(add);
          return output;
          function add(source) {
            if (Array.isArray(source)) {
              source.forEach(add);
              return this;
            }
            sources.push(source);
            source.once('end', remove.bind(null, source));
            source.pipe(output, {end: false});
            return this;
          }
          function isEmpty() {
            return sources.length == 0;
          }
          function remove(source) {
            sources = sources.filter(function(it) {
              return it !== source;
            });
            if (!sources.length && output.readable) {
              output.end();
            }
          }
        };
      }, {"readable-stream/passthrough": 60}],
      49: [function(require, module, exports) {
        arguments[4][20][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 51,
        "./_stream_writable": 53,
        "core-util-is": 54,
        "dup": 20,
        "inherits": 55,
        "process-nextick-args": 57
      }],
      50: [function(require, module, exports) {
        arguments[4][21][0].apply(exports, arguments);
      }, {
        "./_stream_transform": 52,
        "core-util-is": 54,
        "dup": 21,
        "inherits": 55
      }],
      51: [function(require, module, exports) {
        arguments[4][22][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 49,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 54,
        "dup": 22,
        "events": 9,
        "inherits": 55,
        "isarray": 56,
        "process-nextick-args": 57,
        "string_decoder/": 58,
        "util": 3
      }],
      52: [function(require, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 49,
        "core-util-is": 54,
        "dup": 23,
        "inherits": 55
      }],
      53: [function(require, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 49,
        "buffer": 4,
        "core-util-is": 54,
        "dup": 24,
        "events": 9,
        "inherits": 55,
        "process-nextick-args": 57,
        "util-deprecate": 59
      }],
      54: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      55: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      56: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      57: [function(require, module, exports) {
        arguments[4][26][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 26
      }],
      58: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      59: [function(require, module, exports) {
        arguments[4][27][0].apply(exports, arguments);
      }, {"dup": 27}],
      60: [function(require, module, exports) {
        arguments[4][28][0].apply(exports, arguments);
      }, {
        "./lib/_stream_passthrough.js": 50,
        "dup": 28
      }],
      61: [function(require, module, exports) {
        (function(Buffer) {
          var map = require('lodash.map');
          var filter = require('lodash.filter');
          var log = console.log;
          var convert = require('./convert');
          var protocols = require('./protocols');
          var codec = module.exports = {
            stringToStringTuples: stringToStringTuples,
            stringTuplesToString: stringTuplesToString,
            tuplesToStringTuples: tuplesToStringTuples,
            stringTuplesToTuples: stringTuplesToTuples,
            bufferToTuples: bufferToTuples,
            tuplesToBuffer: tuplesToBuffer,
            bufferToString: bufferToString,
            stringToBuffer: stringToBuffer,
            fromString: fromString,
            fromBuffer: fromBuffer,
            validateBuffer: validateBuffer,
            isValidBuffer: isValidBuffer,
            cleanPath: cleanPath,
            ParseError: ParseError,
            protoFromTuple: protoFromTuple
          };
          function stringToStringTuples(str) {
            var tuples = [];
            var parts = str.split('/').slice(1);
            if (parts.length == 1 && parts[0] == '')
              return [];
            for (var p = 0; p < parts.length; p++) {
              var part = parts[p];
              var proto = protocols(part);
              if (proto.size == 0)
                return [part];
              p++;
              if (p >= parts.length)
                throw ParseError("invalid address: " + str);
              tuples.push([part, parts[p]]);
            }
            return tuples;
          }
          function stringTuplesToString(tuples) {
            var parts = [];
            map(tuples, function(tup) {
              var proto = protoFromTuple(tup);
              parts.push(proto.name);
              if (tup.length > 1)
                parts.push(tup[1]);
            });
            return "/" + parts.join("/");
          }
          function stringTuplesToTuples(tuples) {
            return map(tuples, function(tup) {
              var proto = protoFromTuple(tup);
              if (tup.length > 1)
                return [proto.code, convert.toBuffer(proto.code, tup[1])];
              return [proto.code];
            });
          }
          function tuplesToStringTuples(tuples) {
            return map(tuples, function(tup) {
              var proto = protoFromTuple(tup);
              if (tup.length > 1)
                return [proto.code, convert.toString(proto.code, tup[1])];
              return [proto.code];
            });
          }
          function tuplesToBuffer(tuples) {
            return fromBuffer(Buffer.concat(map(tuples, function(tup) {
              var proto = protoFromTuple(tup);
              var buf = new Buffer([proto.code]);
              if (tup.length > 1)
                buf = Buffer.concat([buf, tup[1]]);
              return buf;
            })));
          }
          function bufferToTuples(buf) {
            var tuples = [];
            for (var i = 0; i < buf.length; ) {
              var code = buf[i];
              var proto = protocols(code);
              if (!proto)
                throw ParseError("Invalid protocol code: " + code);
              var size = (proto.size / 8);
              var code = 0 + buf[i];
              var addr = buf.slice(i + 1, i + 1 + size);
              i += 1 + size;
              if (i > buf.length)
                throw ParseError("Invalid address buffer: " + buf.toString('hex'));
              tuples.push([code, addr]);
            }
            return tuples;
          }
          function bufferToString(buf) {
            var a = bufferToTuples(buf);
            var b = tuplesToStringTuples(a);
            return stringTuplesToString(b);
          }
          function stringToBuffer(str) {
            str = cleanPath(str);
            var a = stringToStringTuples(str);
            var b = stringTuplesToTuples(a);
            return tuplesToBuffer(b);
          }
          function fromString(str) {
            return stringToBuffer(str);
          }
          function fromBuffer(buf) {
            var err = validateBuffer(buf);
            if (err)
              throw err;
            return new Buffer(buf);
          }
          function validateBuffer(buf) {
            bufferToTuples(buf);
          }
          function isValidBuffer(buf) {
            try {
              validateBuffer(buf);
              return true;
            } catch (e) {
              return false;
            }
          }
          function cleanPath(str) {
            return '/' + filter(str.trim().split('/')).join('/');
          }
          function ParseError(str) {
            return new Error("Error parsing address: " + str);
          }
          function protoFromTuple(tup) {
            var proto = protocols(tup[0]);
            if (tup.length > 1 && proto.size == 0)
              throw ParseError("tuple has address but protocol size is 0");
            return proto;
          }
        }).call(this, require('buffer').Buffer);
      }, {
        "./convert": 62,
        "./protocols": 195,
        "buffer": 4,
        "lodash.filter": 66,
        "lodash.map": 130
      }],
      62: [function(require, module, exports) {
        (function(Buffer) {
          var ip = require('ip');
          var protocols = require('./protocols');
          module.exports = Convert;
          function Convert(proto, a) {
            if (a instanceof Buffer)
              return Convert.toString(proto, a);
            else
              return Convert.toBuffer(proto, a);
          }
          Convert.toString = function convertToString(proto, buf) {
            proto = protocols(proto);
            switch (proto.code) {
              case 4:
              case 41:
                return ip.toString(buf);
              case 6:
              case 17:
              case 33:
              case 132:
                return buf2port(buf);
            }
            return buf.toString('hex');
          };
          Convert.toBuffer = function convertToBuffer(proto, str) {
            proto = protocols(proto);
            switch (proto.code) {
              case 4:
              case 41:
                return ip.toBuffer(str);
              case 6:
              case 17:
              case 33:
              case 132:
                return port2buf(parseInt(str, 10));
            }
            return new Buffer(str, 'hex');
          };
          function port2buf(port) {
            var buf = new Buffer(2);
            buf.writeUInt16BE(port, 0);
            return buf;
          }
          function buf2port(buf) {
            return buf.readUInt16BE(0);
          }
        }).call(this, require('buffer').Buffer);
      }, {
        "./protocols": 195,
        "buffer": 4,
        "ip": 65
      }],
      63: [function(require, module, exports) {
        (function(Buffer) {
          var map = require('lodash.map');
          var extend = require('xtend');
          var codec = require('./codec');
          var bufeq = require('buffer-equal');
          var protocols = require('./protocols');
          var NotImplemented = new Error("Sorry, Not Implemented Yet.");
          module.exports = Multiaddr;
          function Multiaddr(addr) {
            if (!(this instanceof Multiaddr))
              return new Multiaddr(addr);
            if (!addr)
              addr = '';
            if (addr instanceof Buffer)
              this.buffer = codec.fromBuffer(addr);
            else if (typeof(addr) == 'string' || addr instanceof String)
              this.buffer = codec.fromString(addr);
            else if (addr.buffer && addr.protos && addr.protoCodes)
              this.buffer = codec.fromBuffer(addr.buffer);
            else
              throw new Error('addr must be a string, Buffer, or Multiaddr');
          }
          Multiaddr.prototype.toString = function toString() {
            return codec.bufferToString(this.buffer);
          };
          Multiaddr.prototype.toOptions = function toOptions() {
            var opts = {};
            var parsed = this.toString().split('/');
            opts.family = parsed[1] === 'ip4' ? 'ipv4' : 'ipv6';
            opts.host = parsed[2];
            opts.port = parsed[4];
            return opts;
          };
          Multiaddr.prototype.inspect = function inspect() {
            return "<Mutliaddr " + this.buffer.toString('hex') + " - " + codec.bufferToString(this.buffer) + ">";
          };
          Multiaddr.prototype.protos = function protos() {
            return map(this.protoCodes(), function(code) {
              return extend(protocols(code));
            });
          };
          Multiaddr.prototype.protos = function protos() {
            return map(this.protoCodes(), function(code) {
              return extend(protocols(code));
            });
          };
          Multiaddr.prototype.protoCodes = function protoCodes() {
            var codes = [];
            for (var i = 0; i < this.buffer.length; i++) {
              var code = 0 + this.buffer[i];
              var size = protocols(code).size / 8;
              i += size;
              codes.push(code);
            }
            return codes;
          };
          Multiaddr.prototype.protoNames = function protoNames() {
            return map(this.protos(), function(proto) {
              return proto.name;
            });
          };
          Multiaddr.prototype.tuples = function tuples() {
            return codec.bufferToTuples(this.buffer);
          };
          Multiaddr.prototype.stringTuples = function stringTuples() {
            var t = codec.bufferToTuples(this.buffer);
            return codec.tuplesToStringTuples(t);
          };
          Multiaddr.prototype.encapsulate = function encapsulate(addr) {
            addr = Multiaddr(addr);
            return Multiaddr(this.toString() + addr.toString());
          };
          Multiaddr.prototype.decapsulate = function decapsulate(addr) {
            addr = addr.toString();
            var s = this.toString();
            var i = s.lastIndexOf(addr);
            if (i < 0)
              throw new Error("Address " + this + " does not contain subaddress: " + addr);
            return Multiaddr(s.slice(0, i));
          };
          Multiaddr.prototype.equals = function equals(addr) {
            return bufeq(this.buffer, addr.buffer);
          };
          Multiaddr.prototype.nodeAddress = function nodeAddress() {
            if (!this.isThinWaistAddress())
              throw new Error('Multiaddr must be "thin waist" address for nodeAddress.');
            var codes = this.protoCodes();
            var parts = this.toString().split('/').slice(1);
            return {
              family: (codes[0] == 41) ? "IPv6" : "IPv4",
              address: parts[1],
              port: parts[3]
            };
          };
          Multiaddr.fromNodeAddress = function fromNodeAddress(addr, transport) {
            if (!addr)
              throw new Error('requires node address object');
            if (!transport)
              throw new Error('requires transport protocol');
            var ip = (addr.family == "IPv6") ? 'ip6' : 'ip4';
            return Multiaddr('/' + [ip, addr.address, transport, addr.port].join('/'));
          };
          Multiaddr.prototype.isThinWaistAddress = function isThinWaistAddress(addr) {
            var protos = (addr || this).protos();
            if (protos.length != 2)
              return false;
            if (protos[0].code != 4 && protos[0].code != 41)
              return false;
            if (protos[1].code != 6 && protos[1].code != 17)
              return false;
            return true;
          };
          Multiaddr.prototype.fromStupidString = function fromStupidString(str) {
            throw NotImplemented;
          };
          Multiaddr.protocols = protocols;
        }).call(this, require('buffer').Buffer);
      }, {
        "./codec": 61,
        "./protocols": 195,
        "buffer": 4,
        "buffer-equal": 64,
        "lodash.map": 130,
        "xtend": 194
      }],
      64: [function(require, module, exports) {
        var Buffer = require('buffer').Buffer;
        module.exports = function(a, b) {
          if (!Buffer.isBuffer(a))
            return undefined;
          if (!Buffer.isBuffer(b))
            return undefined;
          if (typeof a.equals === 'function')
            return a.equals(b);
          if (a.length !== b.length)
            return false;
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
              return false;
          }
          return true;
        };
      }, {"buffer": 4}],
      65: [function(require, module, exports) {
        var ip = exports,
            Buffer = require('buffer').Buffer,
            os = require('os');
        ip.toBuffer = function toBuffer(ip, buff, offset) {
          offset = ~~offset;
          var result;
          if (/^(\d{1,3}\.){3,3}\d{1,3}$/.test(ip)) {
            result = buff || new Buffer(offset + 4);
            ip.split(/\./g).map(function(byte) {
              result[offset++] = parseInt(byte, 10) & 0xff;
            });
          } else if (/^[a-f0-9:]+$/.test(ip)) {
            var s = ip.split(/::/g, 2),
                head = (s[0] || '').split(/:/g, 8),
                tail = (s[1] || '').split(/:/g, 8);
            if (tail.length === 0) {
              while (head.length < 8)
                head.push('0000');
            } else if (head.length === 0) {
              while (tail.length < 8)
                tail.unshift('0000');
            } else {
              while (head.length + tail.length < 8)
                head.push('0000');
            }
            result = buff || new Buffer(offset + 16);
            head.concat(tail).map(function(word) {
              word = parseInt(word, 16);
              result[offset++] = (word >> 8) & 0xff;
              result[offset++] = word & 0xff;
            });
          } else {
            throw Error('Invalid ip address: ' + ip);
          }
          return result;
        };
        ip.toString = function toString(buff, offset, length) {
          offset = ~~offset;
          length = length || (buff.length - offset);
          var result = [];
          if (length === 4) {
            for (var i = 0; i < length; i++) {
              result.push(buff[offset + i]);
            }
            result = result.join('.');
          } else if (length === 16) {
            for (var i = 0; i < length; i += 2) {
              result.push(buff.readUInt16BE(offset + i).toString(16));
            }
            result = result.join(':');
            result = result.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3');
            result = result.replace(/:{3,4}/, '::');
          }
          return result;
        };
        ip.fromPrefixLen = function fromPrefixLen(prefixlen, family) {
          if (prefixlen > 32) {
            family = 'ipv6';
          } else {
            family = _normalizeFamily(family);
          }
          var len = 4;
          if (family === 'ipv6') {
            len = 16;
          }
          var buff = new Buffer(len);
          for (var i = 0,
              n = buff.length; i < n; ++i) {
            var bits = 8;
            if (prefixlen < 8) {
              bits = prefixlen;
            }
            prefixlen -= bits;
            buff[i] = ~(0xff >> bits);
          }
          return ip.toString(buff);
        };
        ip.mask = function mask(addr, mask) {
          addr = ip.toBuffer(addr);
          mask = ip.toBuffer(mask);
          var result = new Buffer(Math.max(addr.length, mask.length));
          if (addr.length === mask.length) {
            for (var i = 0; i < addr.length; i++) {
              result[i] = addr[i] & mask[i];
            }
          } else if (mask.length === 4) {
            for (var i = 0; i < mask.length; i++) {
              result[i] = addr[addr.length - 4 + i] & mask[i];
            }
          } else {
            for (var i = 0; i < result.length - 6; i++) {
              result[i] = 0;
            }
            result[10] = 0xff;
            result[11] = 0xff;
            for (var i = 0; i < addr.length; i++) {
              result[i + 12] = addr[i] & mask[i + 12];
            }
          }
          return ip.toString(result);
        };
        ip.cidr = function cidr(cidrString) {
          var cidrParts = cidrString.split('/');
          if (cidrParts.length != 2)
            throw new Error('invalid CIDR subnet: ' + addr);
          var addr = cidrParts[0];
          var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
          return ip.mask(addr, mask);
        };
        ip.subnet = function subnet(addr, mask) {
          var networkAddress = ip.toLong(ip.mask(addr, mask));
          var maskBuffer = ip.toBuffer(mask);
          var maskLength = 0;
          for (var i = 0; i < maskBuffer.length; i++) {
            if (maskBuffer[i] == 0xff) {
              maskLength += 8;
            } else {
              var octet = maskBuffer[i] & 0xff;
              while (octet) {
                octet = (octet << 1) & 0xff;
                maskLength++;
              }
            }
          }
          var numberOfAddresses = Math.pow(2, 32 - maskLength);
          return {
            networkAddress: ip.fromLong(networkAddress),
            firstAddress: numberOfAddresses <= 2 ? ip.fromLong(networkAddress) : ip.fromLong(networkAddress + 1),
            lastAddress: numberOfAddresses <= 2 ? ip.fromLong(networkAddress + numberOfAddresses - 1) : ip.fromLong(networkAddress + numberOfAddresses - 2),
            broadcastAddress: ip.fromLong(networkAddress + numberOfAddresses - 1),
            subnetMask: mask,
            subnetMaskLength: maskLength,
            numHosts: numberOfAddresses <= 2 ? numberOfAddresses : numberOfAddresses - 2,
            length: numberOfAddresses
          };
        };
        ip.cidrSubnet = function cidrSubnet(cidrString) {
          var cidrParts = cidrString.split('/');
          if (cidrParts.length !== 2)
            throw new Error('invalid CIDR subnet: ' + addr);
          var addr = cidrParts[0];
          var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
          return ip.subnet(addr, mask);
        };
        ip.not = function not(addr) {
          var buff = ip.toBuffer(addr);
          for (var i = 0; i < buff.length; i++) {
            buff[i] = 0xff ^ buff[i];
          }
          return ip.toString(buff);
        };
        ip.or = function or(a, b) {
          a = ip.toBuffer(a);
          b = ip.toBuffer(b);
          if (a.length == b.length) {
            for (var i = 0; i < a.length; ++i) {
              a[i] |= b[i];
            }
            return ip.toString(a);
          } else {
            var buff = a;
            var other = b;
            if (b.length > a.length) {
              buff = b;
              other = a;
            }
            var offset = buff.length - other.length;
            for (var i = offset; i < buff.length; ++i) {
              buff[i] |= other[i - offset];
            }
            return ip.toString(buff);
          }
        };
        ip.isEqual = function isEqual(a, b) {
          a = ip.toBuffer(a);
          b = ip.toBuffer(b);
          if (a.length === b.length) {
            for (var i = 0; i < a.length; i++) {
              if (a[i] !== b[i])
                return false;
            }
            return true;
          }
          if (b.length === 4) {
            var t = b;
            b = a;
            a = t;
          }
          for (var i = 0; i < 10; i++) {
            if (b[i] !== 0)
              return false;
          }
          var word = b.readUInt16BE(10);
          if (word !== 0 && word !== 0xffff)
            return false;
          for (var i = 0; i < 4; i++) {
            if (a[i] !== b[i + 12])
              return false;
          }
          return true;
        };
        ip.isPrivate = function isPrivate(addr) {
          return addr.match(/^10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/) != null || addr.match(/^192\.168\.([0-9]{1,3})\.([0-9]{1,3})/) != null || addr.match(/^172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})/) != null || addr.match(/^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/) != null || addr.match(/^169\.254\.([0-9]{1,3})\.([0-9]{1,3})/) != null || addr.match(/^fc00:/) != null || addr.match(/^fe80:/) != null || addr.match(/^::1$/) != null || addr.match(/^::$/) != null;
        };
        ip.isPublic = function isPublic(addr) {
          return !ip.isPrivate(addr);
        };
        ip.isLoopback = function isLoopback(addr) {
          return /^127\.0\.0\.1$/.test(addr) || /^fe80::1$/.test(addr) || /^::1$/.test(addr) || /^::$/.test(addr);
        };
        ip.loopback = function loopback(family) {
          family = _normalizeFamily(family);
          if (family !== 'ipv4' && family !== 'ipv6') {
            throw new Error('family must be ipv4 or ipv6');
          }
          return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
        };
        ip.address = function address(name, family) {
          var interfaces = os.networkInterfaces(),
              all;
          family = _normalizeFamily(family);
          if (name && !~['public', 'private'].indexOf(name)) {
            return interfaces[name].filter(function(details) {
              details.family = details.family.toLowerCase();
              return details.family === family;
            })[0].address;
          }
          var all = Object.keys(interfaces).map(function(nic) {
            var addresses = interfaces[nic].filter(function(details) {
              details.family = details.family.toLowerCase();
              if (details.family !== family || ip.isLoopback(details.address)) {
                return false;
              } else if (!name) {
                return true;
              }
              return name === 'public' ? !ip.isPrivate(details.address) : ip.isPrivate(details.address);
            });
            return addresses.length ? addresses[0].address : undefined;
          }).filter(Boolean);
          return !all.length ? ip.loopback(family) : all[0];
        };
        ip.toLong = function toInt(ip) {
          var ipl = 0;
          ip.split('.').forEach(function(octet) {
            ipl <<= 8;
            ipl += parseInt(octet);
          });
          return (ipl >>> 0);
        };
        ip.fromLong = function fromInt(ipl) {
          return ((ipl >>> 24) + '.' + (ipl >> 16 & 255) + '.' + (ipl >> 8 & 255) + '.' + (ipl & 255));
        };
        function _normalizeFamily(family) {
          return family ? family.toLowerCase() : 'ipv4';
        }
      }, {
        "buffer": 4,
        "os": 12
      }],
      66: [function(require, module, exports) {
        var createCallback = require('lodash.createcallback'),
            forOwn = require('lodash.forown');
        function filter(collection, callback, thisArg) {
          var result = [];
          callback = createCallback(callback, thisArg, 3);
          var index = -1,
              length = collection ? collection.length : 0;
          if (typeof length == 'number') {
            while (++index < length) {
              var value = collection[index];
              if (callback(value, index, collection)) {
                result.push(value);
              }
            }
          } else {
            forOwn(collection, function(value, index, collection) {
              if (callback(value, index, collection)) {
                result.push(value);
              }
            });
          }
          return result;
        }
        module.exports = filter;
      }, {
        "lodash.createcallback": 67,
        "lodash.forown": 103
      }],
      67: [function(require, module, exports) {
        var baseCreateCallback = require('lodash._basecreatecallback'),
            baseIsEqual = require('lodash._baseisequal'),
            isObject = require('lodash.isobject'),
            keys = require('lodash.keys'),
            property = require('lodash.property');
        function createCallback(func, thisArg, argCount) {
          var type = typeof func;
          if (func == null || type == 'function') {
            return baseCreateCallback(func, thisArg, argCount);
          }
          if (type != 'object') {
            return property(func);
          }
          var props = keys(func),
              key = props[0],
              a = func[key];
          if (props.length == 1 && a === a && !isObject(a)) {
            return function(object) {
              var b = object[key];
              return a === b && (a !== 0 || (1 / a == 1 / b));
            };
          }
          return function(object) {
            var length = props.length,
                result = false;
            while (length--) {
              if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
                break;
              }
            }
            return result;
          };
        }
        module.exports = createCallback;
      }, {
        "lodash._basecreatecallback": 68,
        "lodash._baseisequal": 87,
        "lodash.isobject": 96,
        "lodash.keys": 98,
        "lodash.property": 102
      }],
      68: [function(require, module, exports) {
        var bind = require('lodash.bind'),
            identity = require('lodash.identity'),
            setBindData = require('lodash._setbinddata'),
            support = require('lodash.support');
        var reFuncName = /^\s*function[ \n\r\t]+\w/;
        var reThis = /\bthis\b/;
        var fnToString = Function.prototype.toString;
        function baseCreateCallback(func, thisArg, argCount) {
          if (typeof func != 'function') {
            return identity;
          }
          if (typeof thisArg == 'undefined' || !('prototype' in func)) {
            return func;
          }
          var bindData = func.__bindData__;
          if (typeof bindData == 'undefined') {
            if (support.funcNames) {
              bindData = !func.name;
            }
            bindData = bindData || !support.funcDecomp;
            if (!bindData) {
              var source = fnToString.call(func);
              if (!support.funcNames) {
                bindData = !reFuncName.test(source);
              }
              if (!bindData) {
                bindData = reThis.test(source);
                setBindData(func, bindData);
              }
            }
          }
          if (bindData === false || (bindData !== true && bindData[1] & 1)) {
            return func;
          }
          switch (argCount) {
            case 1:
              return function(value) {
                return func.call(thisArg, value);
              };
            case 2:
              return function(a, b) {
                return func.call(thisArg, a, b);
              };
            case 3:
              return function(value, index, collection) {
                return func.call(thisArg, value, index, collection);
              };
            case 4:
              return function(accumulator, value, index, collection) {
                return func.call(thisArg, accumulator, value, index, collection);
              };
          }
          return bind(func, thisArg);
        }
        module.exports = baseCreateCallback;
      }, {
        "lodash._setbinddata": 69,
        "lodash.bind": 72,
        "lodash.identity": 84,
        "lodash.support": 85
      }],
      69: [function(require, module, exports) {
        var isNative = require('lodash._isnative'),
            noop = require('lodash.noop');
        var descriptor = {
          'configurable': false,
          'enumerable': false,
          'value': null,
          'writable': false
        };
        var defineProperty = (function() {
          try {
            var o = {},
                func = isNative(func = Object.defineProperty) && func,
                result = func(o, o, o) && func;
          } catch (e) {}
          return result;
        }());
        var setBindData = !defineProperty ? noop : function(func, value) {
          descriptor.value = value;
          defineProperty(func, '__bindData__', descriptor);
        };
        module.exports = setBindData;
      }, {
        "lodash._isnative": 70,
        "lodash.noop": 71
      }],
      70: [function(require, module, exports) {
        var objectProto = Object.prototype;
        var toString = objectProto.toString;
        var reNative = RegExp('^' + String(toString).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/toString| for [^\]]+/g, '.*?') + '$');
        function isNative(value) {
          return typeof value == 'function' && reNative.test(value);
        }
        module.exports = isNative;
      }, {}],
      71: [function(require, module, exports) {
        function noop() {}
        module.exports = noop;
      }, {}],
      72: [function(require, module, exports) {
        var createWrapper = require('lodash._createwrapper'),
            slice = require('lodash._slice');
        function bind(func, thisArg) {
          return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg);
        }
        module.exports = bind;
      }, {
        "lodash._createwrapper": 73,
        "lodash._slice": 83
      }],
      73: [function(require, module, exports) {
        var baseBind = require('lodash._basebind'),
            baseCreateWrapper = require('lodash._basecreatewrapper'),
            isFunction = require('lodash.isfunction'),
            slice = require('lodash._slice');
        var arrayRef = [];
        var push = arrayRef.push,
            unshift = arrayRef.unshift;
        function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
          var isBind = bitmask & 1,
              isBindKey = bitmask & 2,
              isCurry = bitmask & 4,
              isCurryBound = bitmask & 8,
              isPartial = bitmask & 16,
              isPartialRight = bitmask & 32;
          if (!isBindKey && !isFunction(func)) {
            throw new TypeError;
          }
          if (isPartial && !partialArgs.length) {
            bitmask &= ~16;
            isPartial = partialArgs = false;
          }
          if (isPartialRight && !partialRightArgs.length) {
            bitmask &= ~32;
            isPartialRight = partialRightArgs = false;
          }
          var bindData = func && func.__bindData__;
          if (bindData && bindData !== true) {
            bindData = slice(bindData);
            if (bindData[2]) {
              bindData[2] = slice(bindData[2]);
            }
            if (bindData[3]) {
              bindData[3] = slice(bindData[3]);
            }
            if (isBind && !(bindData[1] & 1)) {
              bindData[4] = thisArg;
            }
            if (!isBind && bindData[1] & 1) {
              bitmask |= 8;
            }
            if (isCurry && !(bindData[1] & 4)) {
              bindData[5] = arity;
            }
            if (isPartial) {
              push.apply(bindData[2] || (bindData[2] = []), partialArgs);
            }
            if (isPartialRight) {
              unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
            }
            bindData[1] |= bitmask;
            return createWrapper.apply(null, bindData);
          }
          var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
          return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
        }
        module.exports = createWrapper;
      }, {
        "lodash._basebind": 74,
        "lodash._basecreatewrapper": 78,
        "lodash._slice": 83,
        "lodash.isfunction": 82
      }],
      74: [function(require, module, exports) {
        var baseCreate = require('lodash._basecreate'),
            isObject = require('lodash.isobject'),
            setBindData = require('lodash._setbinddata'),
            slice = require('lodash._slice');
        var arrayRef = [];
        var push = arrayRef.push;
        function baseBind(bindData) {
          var func = bindData[0],
              partialArgs = bindData[2],
              thisArg = bindData[4];
          function bound() {
            if (partialArgs) {
              var args = slice(partialArgs);
              push.apply(args, arguments);
            }
            if (this instanceof bound) {
              var thisBinding = baseCreate(func.prototype),
                  result = func.apply(thisBinding, args || arguments);
              return isObject(result) ? result : thisBinding;
            }
            return func.apply(thisArg, args || arguments);
          }
          setBindData(bound, bindData);
          return bound;
        }
        module.exports = baseBind;
      }, {
        "lodash._basecreate": 75,
        "lodash._setbinddata": 69,
        "lodash._slice": 83,
        "lodash.isobject": 96
      }],
      75: [function(require, module, exports) {
        (function(global) {
          var isNative = require('lodash._isnative'),
              isObject = require('lodash.isobject'),
              noop = require('lodash.noop');
          var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
          function baseCreate(prototype, properties) {
            return isObject(prototype) ? nativeCreate(prototype) : {};
          }
          if (!nativeCreate) {
            baseCreate = (function() {
              function Object() {}
              return function(prototype) {
                if (isObject(prototype)) {
                  Object.prototype = prototype;
                  var result = new Object;
                  Object.prototype = null;
                }
                return result || global.Object();
              };
            }());
          }
          module.exports = baseCreate;
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {
        "lodash._isnative": 76,
        "lodash.isobject": 96,
        "lodash.noop": 77
      }],
      76: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      77: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      78: [function(require, module, exports) {
        var baseCreate = require('lodash._basecreate'),
            isObject = require('lodash.isobject'),
            setBindData = require('lodash._setbinddata'),
            slice = require('lodash._slice');
        var arrayRef = [];
        var push = arrayRef.push;
        function baseCreateWrapper(bindData) {
          var func = bindData[0],
              bitmask = bindData[1],
              partialArgs = bindData[2],
              partialRightArgs = bindData[3],
              thisArg = bindData[4],
              arity = bindData[5];
          var isBind = bitmask & 1,
              isBindKey = bitmask & 2,
              isCurry = bitmask & 4,
              isCurryBound = bitmask & 8,
              key = func;
          function bound() {
            var thisBinding = isBind ? thisArg : this;
            if (partialArgs) {
              var args = slice(partialArgs);
              push.apply(args, arguments);
            }
            if (partialRightArgs || isCurry) {
              args || (args = slice(arguments));
              if (partialRightArgs) {
                push.apply(args, partialRightArgs);
              }
              if (isCurry && args.length < arity) {
                bitmask |= 16 & ~32;
                return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
              }
            }
            args || (args = arguments);
            if (isBindKey) {
              func = thisBinding[key];
            }
            if (this instanceof bound) {
              thisBinding = baseCreate(func.prototype);
              var result = func.apply(thisBinding, args);
              return isObject(result) ? result : thisBinding;
            }
            return func.apply(thisBinding, args);
          }
          setBindData(bound, bindData);
          return bound;
        }
        module.exports = baseCreateWrapper;
      }, {
        "lodash._basecreate": 79,
        "lodash._setbinddata": 69,
        "lodash._slice": 83,
        "lodash.isobject": 96
      }],
      79: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 80,
        "lodash.isobject": 96,
        "lodash.noop": 81
      }],
      80: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      81: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      82: [function(require, module, exports) {
        function isFunction(value) {
          return typeof value == 'function';
        }
        module.exports = isFunction;
      }, {}],
      83: [function(require, module, exports) {
        function slice(array, start, end) {
          start || (start = 0);
          if (typeof end == 'undefined') {
            end = array ? array.length : 0;
          }
          var index = -1,
              length = end - start || 0,
              result = Array(length < 0 ? 0 : length);
          while (++index < length) {
            result[index] = array[start + index];
          }
          return result;
        }
        module.exports = slice;
      }, {}],
      84: [function(require, module, exports) {
        function identity(value) {
          return value;
        }
        module.exports = identity;
      }, {}],
      85: [function(require, module, exports) {
        (function(global) {
          var isNative = require('lodash._isnative');
          var reThis = /\bthis\b/;
          var support = {};
          support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() {
            return this;
          });
          support.funcNames = typeof Function.name == 'string';
          module.exports = support;
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"lodash._isnative": 86}],
      86: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      87: [function(require, module, exports) {
        var forIn = require('lodash.forin'),
            getArray = require('lodash._getarray'),
            isFunction = require('lodash.isfunction'),
            objectTypes = require('lodash._objecttypes'),
            releaseArray = require('lodash._releasearray');
        var argsClass = '[object Arguments]',
            arrayClass = '[object Array]',
            boolClass = '[object Boolean]',
            dateClass = '[object Date]',
            numberClass = '[object Number]',
            objectClass = '[object Object]',
            regexpClass = '[object RegExp]',
            stringClass = '[object String]';
        var objectProto = Object.prototype;
        var toString = objectProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
          if (callback) {
            var result = callback(a, b);
            if (typeof result != 'undefined') {
              return !!result;
            }
          }
          if (a === b) {
            return a !== 0 || (1 / a == 1 / b);
          }
          var type = typeof a,
              otherType = typeof b;
          if (a === a && !(a && objectTypes[type]) && !(b && objectTypes[otherType])) {
            return false;
          }
          if (a == null || b == null) {
            return a === b;
          }
          var className = toString.call(a),
              otherClass = toString.call(b);
          if (className == argsClass) {
            className = objectClass;
          }
          if (otherClass == argsClass) {
            otherClass = objectClass;
          }
          if (className != otherClass) {
            return false;
          }
          switch (className) {
            case boolClass:
            case dateClass:
              return +a == +b;
            case numberClass:
              return (a != +a) ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
            case regexpClass:
            case stringClass:
              return a == String(b);
          }
          var isArr = className == arrayClass;
          if (!isArr) {
            var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
                bWrapped = hasOwnProperty.call(b, '__wrapped__');
            if (aWrapped || bWrapped) {
              return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
            }
            if (className != objectClass) {
              return false;
            }
            var ctorA = a.constructor,
                ctorB = b.constructor;
            if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && ('constructor' in a && 'constructor' in b)) {
              return false;
            }
          }
          var initedStack = !stackA;
          stackA || (stackA = getArray());
          stackB || (stackB = getArray());
          var length = stackA.length;
          while (length--) {
            if (stackA[length] == a) {
              return stackB[length] == b;
            }
          }
          var size = 0;
          result = true;
          stackA.push(a);
          stackB.push(b);
          if (isArr) {
            length = a.length;
            size = b.length;
            result = size == length;
            if (result || isWhere) {
              while (size--) {
                var index = length,
                    value = b[size];
                if (isWhere) {
                  while (index--) {
                    if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                      break;
                    }
                  }
                } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
                  break;
                }
              }
            }
          } else {
            forIn(b, function(value, key, b) {
              if (hasOwnProperty.call(b, key)) {
                size++;
                return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
              }
            });
            if (result && !isWhere) {
              forIn(a, function(value, key, a) {
                if (hasOwnProperty.call(a, key)) {
                  return (result = --size > -1);
                }
              });
            }
          }
          stackA.pop();
          stackB.pop();
          if (initedStack) {
            releaseArray(stackA);
            releaseArray(stackB);
          }
          return result;
        }
        module.exports = baseIsEqual;
      }, {
        "lodash._getarray": 88,
        "lodash._objecttypes": 90,
        "lodash._releasearray": 91,
        "lodash.forin": 94,
        "lodash.isfunction": 95
      }],
      88: [function(require, module, exports) {
        var arrayPool = require('lodash._arraypool');
        function getArray() {
          return arrayPool.pop() || [];
        }
        module.exports = getArray;
      }, {"lodash._arraypool": 89}],
      89: [function(require, module, exports) {
        var arrayPool = [];
        module.exports = arrayPool;
      }, {}],
      90: [function(require, module, exports) {
        var objectTypes = {
          'boolean': false,
          'function': true,
          'object': true,
          'number': false,
          'string': false,
          'undefined': false
        };
        module.exports = objectTypes;
      }, {}],
      91: [function(require, module, exports) {
        var arrayPool = require('lodash._arraypool'),
            maxPoolSize = require('lodash._maxpoolsize');
        function releaseArray(array) {
          array.length = 0;
          if (arrayPool.length < maxPoolSize) {
            arrayPool.push(array);
          }
        }
        module.exports = releaseArray;
      }, {
        "lodash._arraypool": 92,
        "lodash._maxpoolsize": 93
      }],
      92: [function(require, module, exports) {
        arguments[4][89][0].apply(exports, arguments);
      }, {"dup": 89}],
      93: [function(require, module, exports) {
        var maxPoolSize = 40;
        module.exports = maxPoolSize;
      }, {}],
      94: [function(require, module, exports) {
        var baseCreateCallback = require('lodash._basecreatecallback'),
            objectTypes = require('lodash._objecttypes');
        var forIn = function(collection, callback, thisArg) {
          var index,
              iterable = collection,
              result = iterable;
          if (!iterable)
            return result;
          if (!objectTypes[typeof iterable])
            return result;
          callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
          for (index in iterable) {
            if (callback(iterable[index], index, collection) === false)
              return result;
          }
          return result;
        };
        module.exports = forIn;
      }, {
        "lodash._basecreatecallback": 68,
        "lodash._objecttypes": 90
      }],
      95: [function(require, module, exports) {
        arguments[4][82][0].apply(exports, arguments);
      }, {"dup": 82}],
      96: [function(require, module, exports) {
        var objectTypes = require('lodash._objecttypes');
        function isObject(value) {
          return !!(value && objectTypes[typeof value]);
        }
        module.exports = isObject;
      }, {"lodash._objecttypes": 97}],
      97: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      98: [function(require, module, exports) {
        var isNative = require('lodash._isnative'),
            isObject = require('lodash.isobject'),
            shimKeys = require('lodash._shimkeys');
        var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;
        var keys = !nativeKeys ? shimKeys : function(object) {
          if (!isObject(object)) {
            return [];
          }
          return nativeKeys(object);
        };
        module.exports = keys;
      }, {
        "lodash._isnative": 99,
        "lodash._shimkeys": 100,
        "lodash.isobject": 96
      }],
      99: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      100: [function(require, module, exports) {
        var objectTypes = require('lodash._objecttypes');
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var shimKeys = function(object) {
          var index,
              iterable = object,
              result = [];
          if (!iterable)
            return result;
          if (!(objectTypes[typeof object]))
            return result;
          for (index in iterable) {
            if (hasOwnProperty.call(iterable, index)) {
              result.push(index);
            }
          }
          return result;
        };
        module.exports = shimKeys;
      }, {"lodash._objecttypes": 101}],
      101: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      102: [function(require, module, exports) {
        function property(key) {
          return function(object) {
            return object[key];
          };
        }
        module.exports = property;
      }, {}],
      103: [function(require, module, exports) {
        var baseCreateCallback = require('lodash._basecreatecallback'),
            keys = require('lodash.keys'),
            objectTypes = require('lodash._objecttypes');
        var forOwn = function(collection, callback, thisArg) {
          var index,
              iterable = collection,
              result = iterable;
          if (!iterable)
            return result;
          if (!objectTypes[typeof iterable])
            return result;
          callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
          var ownIndex = -1,
              ownProps = objectTypes[typeof iterable] && keys(iterable),
              length = ownProps ? ownProps.length : 0;
          while (++ownIndex < length) {
            index = ownProps[ownIndex];
            if (callback(iterable[index], index, collection) === false)
              return result;
          }
          return result;
        };
        module.exports = forOwn;
      }, {
        "lodash._basecreatecallback": 104,
        "lodash._objecttypes": 125,
        "lodash.keys": 126
      }],
      104: [function(require, module, exports) {
        arguments[4][68][0].apply(exports, arguments);
      }, {
        "dup": 68,
        "lodash._setbinddata": 105,
        "lodash.bind": 108,
        "lodash.identity": 122,
        "lodash.support": 123
      }],
      105: [function(require, module, exports) {
        arguments[4][69][0].apply(exports, arguments);
      }, {
        "dup": 69,
        "lodash._isnative": 106,
        "lodash.noop": 107
      }],
      106: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      107: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      108: [function(require, module, exports) {
        arguments[4][72][0].apply(exports, arguments);
      }, {
        "dup": 72,
        "lodash._createwrapper": 109,
        "lodash._slice": 121
      }],
      109: [function(require, module, exports) {
        arguments[4][73][0].apply(exports, arguments);
      }, {
        "dup": 73,
        "lodash._basebind": 110,
        "lodash._basecreatewrapper": 115,
        "lodash._slice": 121,
        "lodash.isfunction": 120
      }],
      110: [function(require, module, exports) {
        arguments[4][74][0].apply(exports, arguments);
      }, {
        "dup": 74,
        "lodash._basecreate": 111,
        "lodash._setbinddata": 105,
        "lodash._slice": 121,
        "lodash.isobject": 114
      }],
      111: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 112,
        "lodash.isobject": 114,
        "lodash.noop": 113
      }],
      112: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      113: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      114: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 125
      }],
      115: [function(require, module, exports) {
        arguments[4][78][0].apply(exports, arguments);
      }, {
        "dup": 78,
        "lodash._basecreate": 116,
        "lodash._setbinddata": 105,
        "lodash._slice": 121,
        "lodash.isobject": 119
      }],
      116: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 117,
        "lodash.isobject": 119,
        "lodash.noop": 118
      }],
      117: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      118: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      119: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 125
      }],
      120: [function(require, module, exports) {
        arguments[4][82][0].apply(exports, arguments);
      }, {"dup": 82}],
      121: [function(require, module, exports) {
        arguments[4][83][0].apply(exports, arguments);
      }, {"dup": 83}],
      122: [function(require, module, exports) {
        arguments[4][84][0].apply(exports, arguments);
      }, {"dup": 84}],
      123: [function(require, module, exports) {
        arguments[4][85][0].apply(exports, arguments);
      }, {
        "dup": 85,
        "lodash._isnative": 124
      }],
      124: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      125: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      126: [function(require, module, exports) {
        arguments[4][98][0].apply(exports, arguments);
      }, {
        "dup": 98,
        "lodash._isnative": 127,
        "lodash._shimkeys": 128,
        "lodash.isobject": 129
      }],
      127: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      128: [function(require, module, exports) {
        arguments[4][100][0].apply(exports, arguments);
      }, {
        "dup": 100,
        "lodash._objecttypes": 125
      }],
      129: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 125
      }],
      130: [function(require, module, exports) {
        var createCallback = require('lodash.createcallback'),
            forOwn = require('lodash.forown');
        function map(collection, callback, thisArg) {
          var index = -1,
              length = collection ? collection.length : 0;
          callback = createCallback(callback, thisArg, 3);
          if (typeof length == 'number') {
            var result = Array(length);
            while (++index < length) {
              result[index] = callback(collection[index], index, collection);
            }
          } else {
            result = [];
            forOwn(collection, function(value, key, collection) {
              result[++index] = callback(value, key, collection);
            });
          }
          return result;
        }
        module.exports = map;
      }, {
        "lodash.createcallback": 131,
        "lodash.forown": 167
      }],
      131: [function(require, module, exports) {
        arguments[4][67][0].apply(exports, arguments);
      }, {
        "dup": 67,
        "lodash._basecreatecallback": 132,
        "lodash._baseisequal": 151,
        "lodash.isobject": 160,
        "lodash.keys": 162,
        "lodash.property": 166
      }],
      132: [function(require, module, exports) {
        arguments[4][68][0].apply(exports, arguments);
      }, {
        "dup": 68,
        "lodash._setbinddata": 133,
        "lodash.bind": 136,
        "lodash.identity": 148,
        "lodash.support": 149
      }],
      133: [function(require, module, exports) {
        arguments[4][69][0].apply(exports, arguments);
      }, {
        "dup": 69,
        "lodash._isnative": 134,
        "lodash.noop": 135
      }],
      134: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      135: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      136: [function(require, module, exports) {
        arguments[4][72][0].apply(exports, arguments);
      }, {
        "dup": 72,
        "lodash._createwrapper": 137,
        "lodash._slice": 147
      }],
      137: [function(require, module, exports) {
        arguments[4][73][0].apply(exports, arguments);
      }, {
        "dup": 73,
        "lodash._basebind": 138,
        "lodash._basecreatewrapper": 142,
        "lodash._slice": 147,
        "lodash.isfunction": 146
      }],
      138: [function(require, module, exports) {
        arguments[4][74][0].apply(exports, arguments);
      }, {
        "dup": 74,
        "lodash._basecreate": 139,
        "lodash._setbinddata": 133,
        "lodash._slice": 147,
        "lodash.isobject": 160
      }],
      139: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 140,
        "lodash.isobject": 160,
        "lodash.noop": 141
      }],
      140: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      141: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      142: [function(require, module, exports) {
        arguments[4][78][0].apply(exports, arguments);
      }, {
        "dup": 78,
        "lodash._basecreate": 143,
        "lodash._setbinddata": 133,
        "lodash._slice": 147,
        "lodash.isobject": 160
      }],
      143: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 144,
        "lodash.isobject": 160,
        "lodash.noop": 145
      }],
      144: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      145: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      146: [function(require, module, exports) {
        arguments[4][82][0].apply(exports, arguments);
      }, {"dup": 82}],
      147: [function(require, module, exports) {
        arguments[4][83][0].apply(exports, arguments);
      }, {"dup": 83}],
      148: [function(require, module, exports) {
        arguments[4][84][0].apply(exports, arguments);
      }, {"dup": 84}],
      149: [function(require, module, exports) {
        arguments[4][85][0].apply(exports, arguments);
      }, {
        "dup": 85,
        "lodash._isnative": 150
      }],
      150: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      151: [function(require, module, exports) {
        arguments[4][87][0].apply(exports, arguments);
      }, {
        "dup": 87,
        "lodash._getarray": 152,
        "lodash._objecttypes": 154,
        "lodash._releasearray": 155,
        "lodash.forin": 158,
        "lodash.isfunction": 159
      }],
      152: [function(require, module, exports) {
        arguments[4][88][0].apply(exports, arguments);
      }, {
        "dup": 88,
        "lodash._arraypool": 153
      }],
      153: [function(require, module, exports) {
        arguments[4][89][0].apply(exports, arguments);
      }, {"dup": 89}],
      154: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      155: [function(require, module, exports) {
        arguments[4][91][0].apply(exports, arguments);
      }, {
        "dup": 91,
        "lodash._arraypool": 156,
        "lodash._maxpoolsize": 157
      }],
      156: [function(require, module, exports) {
        arguments[4][89][0].apply(exports, arguments);
      }, {"dup": 89}],
      157: [function(require, module, exports) {
        arguments[4][93][0].apply(exports, arguments);
      }, {"dup": 93}],
      158: [function(require, module, exports) {
        arguments[4][94][0].apply(exports, arguments);
      }, {
        "dup": 94,
        "lodash._basecreatecallback": 132,
        "lodash._objecttypes": 154
      }],
      159: [function(require, module, exports) {
        arguments[4][82][0].apply(exports, arguments);
      }, {"dup": 82}],
      160: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 161
      }],
      161: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      162: [function(require, module, exports) {
        arguments[4][98][0].apply(exports, arguments);
      }, {
        "dup": 98,
        "lodash._isnative": 163,
        "lodash._shimkeys": 164,
        "lodash.isobject": 160
      }],
      163: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      164: [function(require, module, exports) {
        arguments[4][100][0].apply(exports, arguments);
      }, {
        "dup": 100,
        "lodash._objecttypes": 165
      }],
      165: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      166: [function(require, module, exports) {
        arguments[4][102][0].apply(exports, arguments);
      }, {"dup": 102}],
      167: [function(require, module, exports) {
        arguments[4][103][0].apply(exports, arguments);
      }, {
        "dup": 103,
        "lodash._basecreatecallback": 168,
        "lodash._objecttypes": 189,
        "lodash.keys": 190
      }],
      168: [function(require, module, exports) {
        arguments[4][68][0].apply(exports, arguments);
      }, {
        "dup": 68,
        "lodash._setbinddata": 169,
        "lodash.bind": 172,
        "lodash.identity": 186,
        "lodash.support": 187
      }],
      169: [function(require, module, exports) {
        arguments[4][69][0].apply(exports, arguments);
      }, {
        "dup": 69,
        "lodash._isnative": 170,
        "lodash.noop": 171
      }],
      170: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      171: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      172: [function(require, module, exports) {
        arguments[4][72][0].apply(exports, arguments);
      }, {
        "dup": 72,
        "lodash._createwrapper": 173,
        "lodash._slice": 185
      }],
      173: [function(require, module, exports) {
        arguments[4][73][0].apply(exports, arguments);
      }, {
        "dup": 73,
        "lodash._basebind": 174,
        "lodash._basecreatewrapper": 179,
        "lodash._slice": 185,
        "lodash.isfunction": 184
      }],
      174: [function(require, module, exports) {
        arguments[4][74][0].apply(exports, arguments);
      }, {
        "dup": 74,
        "lodash._basecreate": 175,
        "lodash._setbinddata": 169,
        "lodash._slice": 185,
        "lodash.isobject": 178
      }],
      175: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 176,
        "lodash.isobject": 178,
        "lodash.noop": 177
      }],
      176: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      177: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      178: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 189
      }],
      179: [function(require, module, exports) {
        arguments[4][78][0].apply(exports, arguments);
      }, {
        "dup": 78,
        "lodash._basecreate": 180,
        "lodash._setbinddata": 169,
        "lodash._slice": 185,
        "lodash.isobject": 183
      }],
      180: [function(require, module, exports) {
        arguments[4][75][0].apply(exports, arguments);
      }, {
        "dup": 75,
        "lodash._isnative": 181,
        "lodash.isobject": 183,
        "lodash.noop": 182
      }],
      181: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      182: [function(require, module, exports) {
        arguments[4][71][0].apply(exports, arguments);
      }, {"dup": 71}],
      183: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 189
      }],
      184: [function(require, module, exports) {
        arguments[4][82][0].apply(exports, arguments);
      }, {"dup": 82}],
      185: [function(require, module, exports) {
        arguments[4][83][0].apply(exports, arguments);
      }, {"dup": 83}],
      186: [function(require, module, exports) {
        arguments[4][84][0].apply(exports, arguments);
      }, {"dup": 84}],
      187: [function(require, module, exports) {
        arguments[4][85][0].apply(exports, arguments);
      }, {
        "dup": 85,
        "lodash._isnative": 188
      }],
      188: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      189: [function(require, module, exports) {
        arguments[4][90][0].apply(exports, arguments);
      }, {"dup": 90}],
      190: [function(require, module, exports) {
        arguments[4][98][0].apply(exports, arguments);
      }, {
        "dup": 98,
        "lodash._isnative": 191,
        "lodash._shimkeys": 192,
        "lodash.isobject": 193
      }],
      191: [function(require, module, exports) {
        arguments[4][70][0].apply(exports, arguments);
      }, {"dup": 70}],
      192: [function(require, module, exports) {
        arguments[4][100][0].apply(exports, arguments);
      }, {
        "dup": 100,
        "lodash._objecttypes": 189
      }],
      193: [function(require, module, exports) {
        arguments[4][96][0].apply(exports, arguments);
      }, {
        "dup": 96,
        "lodash._objecttypes": 189
      }],
      194: [function(require, module, exports) {
        arguments[4][47][0].apply(exports, arguments);
      }, {"dup": 47}],
      195: [function(require, module, exports) {
        var map = require('lodash.map');
        module.exports = Protocols;
        function Protocols(proto) {
          if (typeof(proto) == 'number') {
            if (Protocols.codes[proto])
              return Protocols.codes[proto];
            throw new Error("no protocol with code: " + proto);
          } else if (typeof(proto) == 'string' || proto instanceof String) {
            if (Protocols.names[proto])
              return Protocols.names[proto];
            throw new Error("no protocol with name: " + proto);
          }
          throw new Error("invalid protocol id type: " + proto);
        }
        Protocols.table = [[4, 32, 'ip4'], [6, 16, 'tcp'], [17, 16, 'udp'], [33, 16, 'dccp'], [41, 128, 'ip6'], [132, 16, 'sctp']];
        Protocols.names = {};
        Protocols.codes = {};
        map(Protocols.table, function(e) {
          var proto = p.apply(this, e);
          Protocols.codes[proto.code] = proto;
          Protocols.names[proto.name] = proto;
        });
        Protocols.object = p;
        function p(code, size, name) {
          return {
            code: code,
            size: size,
            name: name
          };
        }
      }, {"lodash.map": 130}],
      196: [function(require, module, exports) {
        var Sandwich = require('sandwich-stream').SandwichStream;
        var stream = require('stream');
        var inherits = require('inherits');
        var CRNL = '\r\n';
        module.exports = Multipart;
        function Multipart(boundary) {
          if (!this instanceof Multipart) {
            return new Multipart(boundary);
          }
          this.boundary = boundary || Math.random().toString(36).slice(2);
          Sandwich.call(this, {
            head: '--' + this.boundary + CRNL,
            tail: CRNL + '--' + this.boundary + '--',
            separator: CRNL + '--' + this.boundary + CRNL
          });
          this._add = this.add;
          this.add = this.addPart;
        }
        inherits(Multipart, Sandwich);
        Multipart.prototype.addPart = function(part) {
          part = part || {};
          var partStream = new stream.PassThrough();
          if (part.headers) {
            for (var key in part.headers) {
              var header = part.headers[key];
              partStream.write(key + ': ' + header + CRNL);
            }
          }
          partStream.write(CRNL);
          if (part.body instanceof stream.Stream) {
            part.body.pipe(partStream);
          } else {
            partStream.end(part.body);
          }
          this._add(partStream);
        };
      }, {
        "inherits": 197,
        "sandwich-stream": 198,
        "stream": 32
      }],
      197: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      198: [function(require, module, exports) {
        var Readable = require('stream').Readable;
        var PassThrough = require('stream').PassThrough;
        function SandwichStream(options) {
          Readable.call(this, options);
          options = options || {};
          this._streamsActive = false;
          this._streamsAdded = false;
          this._streams = [];
          this._currentStream = undefined;
          this._errorsEmitted = false;
          if (options.head) {
            this._head = options.head;
          }
          if (options.tail) {
            this._tail = options.tail;
          }
          if (options.separator) {
            this._separator = options.separator;
          }
        }
        SandwichStream.prototype = Object.create(Readable.prototype, {constructor: SandwichStream});
        SandwichStream.prototype._read = function() {
          if (!this._streamsActive) {
            this._streamsActive = true;
            this._pushHead();
            this._streamNextStream();
          }
        };
        SandwichStream.prototype.add = function(newStream) {
          if (!this._streamsActive) {
            this._streamsAdded = true;
            this._streams.push(newStream);
            newStream.on('error', this._substreamOnError.bind(this));
          } else {
            throw new Error('SandwichStream error adding new stream while streaming');
          }
        };
        SandwichStream.prototype._substreamOnError = function(error) {
          this._errorsEmitted = true;
          this.emit('error', error);
        };
        SandwichStream.prototype._pushHead = function() {
          if (this._head) {
            this.push(this._head);
          }
        };
        SandwichStream.prototype._streamNextStream = function() {
          if (this._nextStream()) {
            this._bindCurrentStreamEvents();
          } else {
            this._pushTail();
            this.push(null);
          }
        };
        SandwichStream.prototype._nextStream = function() {
          this._currentStream = this._streams.shift();
          return this._currentStream !== undefined;
        };
        SandwichStream.prototype._bindCurrentStreamEvents = function() {
          this._currentStream.on('readable', this._currentStreamOnReadable.bind(this));
          this._currentStream.on('end', this._currentStreamOnEnd.bind(this));
        };
        SandwichStream.prototype._currentStreamOnReadable = function() {
          this.push(this._currentStream.read() || '');
        };
        SandwichStream.prototype._currentStreamOnEnd = function() {
          this._pushSeparator();
          this._streamNextStream();
        };
        SandwichStream.prototype._pushSeparator = function() {
          if (this._streams.length > 0 && this._separator) {
            this.push(this._separator);
          }
        };
        SandwichStream.prototype._pushTail = function() {
          if (this._tail) {
            this.push(this._tail);
          }
        };
        function sandwichStream(options) {
          var stream = new SandwichStream(options);
          return stream;
        }
        sandwichStream.SandwichStream = SandwichStream;
        module.exports = sandwichStream;
      }, {"stream": 32}],
      199: [function(require, module, exports) {
        'use strict';
        module.exports = {
          src: require('./lib/src'),
          dest: require('./lib/dest'),
          symlink: require('./lib/symlink'),
          watch: require('glob-watcher')
        };
      }, {
        "./lib/dest": 200,
        "./lib/src": 211,
        "./lib/symlink": 213,
        "glob-watcher": 270
      }],
      200: [function(require, module, exports) {
        'use strict';
        var through2 = require('through2');
        var prepareWrite = require('../prepareWrite');
        var writeContents = require('./writeContents');
        function dest(outFolder, opt) {
          if (!opt) {
            opt = {};
          }
          function saveFile(file, enc, cb) {
            prepareWrite(outFolder, file, opt, function(err, writePath) {
              if (err) {
                return cb(err);
              }
              writeContents(writePath, file, cb);
            });
          }
          return through2.obj(saveFile);
        }
        module.exports = dest;
      }, {
        "../prepareWrite": 206,
        "./writeContents": 201,
        "through2": 310
      }],
      201: [function(require, module, exports) {
        'use strict';
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
      }, {
        "./writeBuffer": 202,
        "./writeDir": 203,
        "./writeStream": 204
      }],
      202: [function(require, module, exports) {
        'use strict';
        function writeBuffer(writePath, file, cb) {
          var opt = {
            mode: file.stat.mode,
            flag: file.flag
          };
          fs.writeFile(writePath, file.contents, opt, cb);
        }
        module.exports = writeBuffer;
      }, {}],
      203: [function(require, module, exports) {
        'use strict';
        var mkdirp = require('mkdirp');
        function writeDir(writePath, file, cb) {
          mkdirp(writePath, file.stat.mode, cb);
        }
        module.exports = writeDir;
      }, {"mkdirp": 294}],
      204: [function(require, module, exports) {
        'use strict';
        var streamFile = require('../../src/getContents/streamFile');
        function writeStream(writePath, file, cb) {
          var opt = {
            mode: file.stat.mode,
            flag: file.flag
          };
          var outStream = fs.createWriteStream(writePath, opt);
          file.contents.once('error', complete);
          outStream.once('error', complete);
          outStream.once('finish', success);
          file.contents.pipe(outStream);
          function success() {
            streamFile(file, {}, complete);
          }
          function complete(err) {
            file.contents.removeListener('error', cb);
            outStream.removeListener('error', cb);
            outStream.removeListener('finish', success);
            cb(err);
          }
        }
        module.exports = writeStream;
      }, {"../../src/getContents/streamFile": 210}],
      205: [function(require, module, exports) {
        'use strict';
        var filter = require('through2-filter');
        module.exports = function(d) {
          var isValid = typeof d === 'number' || d instanceof Number || d instanceof Date;
          if (!isValid) {
            throw new Error('expected since option to be a date or a number');
          }
          return filter.obj(function(file) {
            return file.stat && file.stat.mtime > d;
          });
        };
      }, {"through2-filter": 296}],
      206: [function(require, module, exports) {
        (function(process) {
          'use strict';
          var assign = require('object-assign');
          var path = require('path');
          var mkdirp = require('mkdirp');
          function stringOrFunc(v, file) {
            if (typeof v !== 'string' && typeof v !== 'function') {
              return null;
            }
            return typeof v === 'string' ? v : v(file);
          }
          function prepareWrite(outFolder, file, opt, cb) {
            var options = assign({
              cwd: process.cwd(),
              mode: (file.stat ? file.stat.mode : null),
              dirMode: null,
              overwrite: true
            }, opt);
            options.flag = (options.overwrite ? 'w' : 'wx');
            var cwd = path.resolve(options.cwd);
            var outFolderPath = stringOrFunc(outFolder, file);
            if (!outFolderPath) {
              throw new Error('Invalid output folder');
            }
            var basePath = options.base ? stringOrFunc(options.base, file) : path.resolve(cwd, outFolderPath);
            if (!basePath) {
              throw new Error('Invalid base option');
            }
            var writePath = path.resolve(basePath, file.relative);
            var writeFolder = path.dirname(writePath);
            file.stat = (file.stat || new fs.Stats());
            file.stat.mode = options.mode;
            file.flag = options.flag;
            file.cwd = cwd;
            file.base = basePath;
            file.path = writePath;
            mkdirp(writeFolder, options.dirMode, function(err) {
              if (err) {
                return cb(err);
              }
              cb(null, writePath);
            });
          }
          module.exports = prepareWrite;
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "mkdirp": 294,
        "object-assign": 295,
        "path": 13
      }],
      207: [function(require, module, exports) {
        'use strict';
        function bufferFile(file, opt, cb) {
          fs.readFile(file.path, function(err, data) {
            if (err) {
              return cb(err);
            }
            file.contents = data;
            cb(null, file);
          });
        }
        module.exports = bufferFile;
      }, {}],
      208: [function(require, module, exports) {
        'use strict';
        var through2 = require('through2');
        var readDir = require('./readDir');
        var bufferFile = require('./bufferFile');
        var streamFile = require('./streamFile');
        function getContents(opt) {
          return through2.obj(function(file, enc, cb) {
            if (file.isDirectory()) {
              return readDir(file, opt, cb);
            }
            if (opt.buffer !== false) {
              return bufferFile(file, opt, cb);
            }
            return streamFile(file, opt, cb);
          });
        }
        module.exports = getContents;
      }, {
        "./bufferFile": 207,
        "./readDir": 209,
        "./streamFile": 210,
        "through2": 310
      }],
      209: [function(require, module, exports) {
        'use strict';
        function readDir(file, opt, cb) {
          cb(null, file);
        }
        module.exports = readDir;
      }, {}],
      210: [function(require, module, exports) {
        'use strict';
        function streamFile(file, opt, cb) {
          file.contents = fs.createReadStream(file.path);
          cb(null, file);
        }
        module.exports = streamFile;
      }, {}],
      211: [function(require, module, exports) {
        'use strict';
        var assign = require('object-assign');
        var through = require('through2');
        var gs = require('glob-stream');
        var File = require('vinyl');
        var duplexify = require('duplexify');
        var merge = require('merge-stream');
        var filterSince = require('../filterSince');
        var isValidGlob = require('is-valid-glob');
        var getContents = require('./getContents');
        var resolveSymlinks = require('./resolveSymlinks');
        function createFile(globFile, enc, cb) {
          cb(null, new File(globFile));
        }
        function src(glob, opt) {
          var options = assign({
            read: true,
            buffer: true,
            sourcemaps: false,
            passthrough: false
          }, opt);
          var inputPass;
          if (!isValidGlob(glob)) {
            throw new Error('Invalid glob argument: ' + glob);
          }
          var globStream = gs.create(glob, options);
          var outputStream = globStream.pipe(resolveSymlinks()).pipe(through.obj(createFile));
          if (options.since != null) {
            outputStream = outputStream.pipe(filterSince(options.since));
          }
          if (options.read !== false) {
            outputStream = outputStream.pipe(getContents(options));
          }
          if (options.passthrough === true) {
            inputPass = through.obj();
            outputStream = duplexify.obj(inputPass, merge(outputStream, inputPass));
          }
          globStream.on('error', outputStream.emit.bind(outputStream, 'error'));
          return outputStream;
        }
        module.exports = src;
      }, {
        "../filterSince": 205,
        "./getContents": 208,
        "./resolveSymlinks": 212,
        "duplexify": 214,
        "glob-stream": 230,
        "is-valid-glob": 281,
        "merge-stream": 282,
        "object-assign": 295,
        "through2": 310,
        "vinyl": 332
      }],
      212: [function(require, module, exports) {
        'use strict';
        var through2 = require('through2');
        var path = require('path');
        function resolveSymlinks() {
          return through2.obj(resolveFile);
        }
        function resolveFile(globFile, enc, cb) {
          fs.lstat(globFile.path, function(err, stat) {
            if (err) {
              return cb(err);
            }
            globFile.stat = stat;
            if (!stat.isSymbolicLink()) {
              return cb(null, globFile);
            }
            fs.realpath(globFile.path, function(err, filePath) {
              if (err) {
                return cb(err);
              }
              globFile.base = path.dirname(filePath);
              globFile.path = filePath;
              resolveFile(globFile, enc, cb);
            });
          });
        }
        module.exports = resolveSymlinks;
      }, {
        "path": 13,
        "through2": 310
      }],
      213: [function(require, module, exports) {
        'use strict';
        var through2 = require('through2');
        var prepareWrite = require('../prepareWrite');
        function symlink(outFolder, opt) {
          function linkFile(file, enc, cb) {
            var srcPath = file.path;
            var symType = (file.isDirectory() ? 'dir' : 'file');
            prepareWrite(outFolder, file, opt, function(err, writePath) {
              if (err) {
                return cb(err);
              }
              fs.symlink(srcPath, writePath, symType, function(err) {
                if (err && err.code !== 'EEXIST') {
                  return cb(err);
                }
                cb(null, file);
              });
            });
          }
          var stream = through2.obj(linkFile);
          stream.resume();
          return stream;
        }
        module.exports = symlink;
      }, {
        "../prepareWrite": 206,
        "through2": 310
      }],
      214: [function(require, module, exports) {
        (function(process, Buffer) {
          var stream = require('readable-stream');
          var eos = require('end-of-stream');
          var util = require('util');
          var SIGNAL_FLUSH = new Buffer([0]);
          var onuncork = function(self, fn) {
            if (self._corked)
              self.once('uncork', fn);
            else
              fn();
          };
          var destroyer = function(self, end) {
            return function(err) {
              if (err)
                self.destroy(err.message === 'premature close' ? null : err);
              else if (end && !self._ended)
                self.end();
            };
          };
          var end = function(ws, fn) {
            if (!ws)
              return fn();
            if (ws._writableState && ws._writableState.finished)
              return fn();
            if (ws._writableState)
              return ws.end(fn);
            ws.end();
            fn();
          };
          var toStreams2 = function(rs) {
            return new (stream.Readable)({
              objectMode: true,
              highWaterMark: 16
            }).wrap(rs);
          };
          var Duplexify = function(writable, readable, opts) {
            if (!(this instanceof Duplexify))
              return new Duplexify(writable, readable, opts);
            stream.Duplex.call(this, opts);
            this._writable = null;
            this._readable = null;
            this._readable2 = null;
            this._forwardDestroy = !opts || opts.destroy !== false;
            this._forwardEnd = !opts || opts.end !== false;
            this._corked = 1;
            this._ondrain = null;
            this._drained = false;
            this._forwarding = false;
            this._unwrite = null;
            this._unread = null;
            this._ended = false;
            this.destroyed = false;
            if (writable)
              this.setWritable(writable);
            if (readable)
              this.setReadable(readable);
          };
          util.inherits(Duplexify, stream.Duplex);
          Duplexify.obj = function(writable, readable, opts) {
            if (!opts)
              opts = {};
            opts.objectMode = true;
            opts.highWaterMark = 16;
            return new Duplexify(writable, readable, opts);
          };
          Duplexify.prototype.cork = function() {
            if (++this._corked === 1)
              this.emit('cork');
          };
          Duplexify.prototype.uncork = function() {
            if (this._corked && --this._corked === 0)
              this.emit('uncork');
          };
          Duplexify.prototype.setWritable = function(writable) {
            if (this._unwrite)
              this._unwrite();
            if (this.destroyed) {
              if (writable && writable.destroy)
                writable.destroy();
              return;
            }
            if (writable === null || writable === false) {
              this.end();
              return;
            }
            var self = this;
            var unend = eos(writable, {
              writable: true,
              readable: false
            }, destroyer(this, this._forwardEnd));
            var ondrain = function() {
              var ondrain = self._ondrain;
              self._ondrain = null;
              if (ondrain)
                ondrain();
            };
            var clear = function() {
              self._writable.removeListener('drain', ondrain);
              unend();
            };
            if (this._unwrite)
              process.nextTick(ondrain);
            this._writable = writable;
            this._writable.on('drain', ondrain);
            this._unwrite = clear;
            this.uncork();
          };
          Duplexify.prototype.setReadable = function(readable) {
            if (this._unread)
              this._unread();
            if (this.destroyed) {
              if (readable && readable.destroy)
                readable.destroy();
              return;
            }
            if (readable === null || readable === false) {
              this.push(null);
              this.resume();
              return;
            }
            var self = this;
            var unend = eos(readable, {
              writable: false,
              readable: true
            }, destroyer(this));
            var onreadable = function() {
              self._forward();
            };
            var onend = function() {
              self.push(null);
            };
            var clear = function() {
              self._readable2.removeListener('readable', onreadable);
              self._readable2.removeListener('end', onend);
              unend();
            };
            this._drained = true;
            this._readable = readable;
            this._readable2 = readable._readableState ? readable : toStreams2(readable);
            this._readable2.on('readable', onreadable);
            this._readable2.on('end', onend);
            this._unread = clear;
            this._forward();
          };
          Duplexify.prototype._read = function() {
            this._drained = true;
            this._forward();
          };
          Duplexify.prototype._forward = function() {
            if (this._forwarding || !this._readable2 || !this._drained)
              return;
            this._forwarding = true;
            var data;
            var state = this._readable2._readableState;
            while ((data = this._readable2.read(state.buffer.length ? state.buffer[0].length : state.length)) !== null) {
              this._drained = this.push(data);
            }
            this._forwarding = false;
          };
          Duplexify.prototype.destroy = function(err) {
            if (this.destroyed)
              return;
            this.destroyed = true;
            var self = this;
            process.nextTick(function() {
              self._destroy(err);
            });
          };
          Duplexify.prototype._destroy = function(err) {
            if (err) {
              var ondrain = this._ondrain;
              this._ondrain = null;
              if (ondrain)
                ondrain(err);
              else
                this.emit('error', err);
            }
            if (this._forwardDestroy) {
              if (this._readable && this._readable.destroy)
                this._readable.destroy();
              if (this._writable && this._writable.destroy)
                this._writable.destroy();
            }
            this.emit('close');
          };
          Duplexify.prototype._write = function(data, enc, cb) {
            if (this.destroyed)
              return cb();
            if (this._corked)
              return onuncork(this, this._write.bind(this, data, enc, cb));
            if (data === SIGNAL_FLUSH)
              return this._finish(cb);
            if (!this._writable)
              return cb();
            if (this._writable.write(data) === false)
              this._ondrain = cb;
            else
              cb();
          };
          Duplexify.prototype._finish = function(cb) {
            var self = this;
            this.emit('preend');
            onuncork(this, function() {
              end(self._forwardEnd && self._writable, function() {
                if (self._writableState.prefinished === false)
                  self._writableState.prefinished = true;
                self.emit('prefinish');
                onuncork(self, cb);
              });
            });
          };
          Duplexify.prototype.end = function(data, enc, cb) {
            if (typeof data === 'function')
              return this.end(null, null, data);
            if (typeof enc === 'function')
              return this.end(data, null, enc);
            this._ended = true;
            if (data)
              this.write(data);
            if (!this._writableState.ending)
              this.write(SIGNAL_FLUSH);
            return stream.Writable.prototype.end.call(this, cb);
          };
          module.exports = Duplexify;
        }).call(this, require('_process'), require('buffer').Buffer);
      }, {
        "_process": 14,
        "buffer": 4,
        "end-of-stream": 215,
        "readable-stream": 229,
        "util": 46
      }],
      215: [function(require, module, exports) {
        var once = require('once');
        var noop = function() {};
        var isRequest = function(stream) {
          return stream.setHeader && typeof stream.abort === 'function';
        };
        var eos = function(stream, opts, callback) {
          if (typeof opts === 'function')
            return eos(stream, null, opts);
          if (!opts)
            opts = {};
          callback = once(callback || noop);
          var ws = stream._writableState;
          var rs = stream._readableState;
          var readable = opts.readable || (opts.readable !== false && stream.readable);
          var writable = opts.writable || (opts.writable !== false && stream.writable);
          var onlegacyfinish = function() {
            if (!stream.writable)
              onfinish();
          };
          var onfinish = function() {
            writable = false;
            if (!readable)
              callback();
          };
          var onend = function() {
            readable = false;
            if (!writable)
              callback();
          };
          var onclose = function() {
            if (readable && !(rs && rs.ended))
              return callback(new Error('premature close'));
            if (writable && !(ws && ws.ended))
              return callback(new Error('premature close'));
          };
          var onrequest = function() {
            stream.req.on('finish', onfinish);
          };
          if (isRequest(stream)) {
            stream.on('complete', onfinish);
            stream.on('abort', onclose);
            if (stream.req)
              onrequest();
            else
              stream.on('request', onrequest);
          } else if (writable && !ws) {
            stream.on('end', onlegacyfinish);
            stream.on('close', onlegacyfinish);
          }
          stream.on('end', onend);
          stream.on('finish', onfinish);
          if (opts.error !== false)
            stream.on('error', callback);
          stream.on('close', onclose);
          return function() {
            stream.removeListener('complete', onfinish);
            stream.removeListener('abort', onclose);
            stream.removeListener('request', onrequest);
            if (stream.req)
              stream.req.removeListener('finish', onfinish);
            stream.removeListener('end', onlegacyfinish);
            stream.removeListener('close', onlegacyfinish);
            stream.removeListener('finish', onfinish);
            stream.removeListener('end', onend);
            stream.removeListener('error', callback);
            stream.removeListener('close', onclose);
          };
        };
        module.exports = eos;
      }, {"once": 217}],
      216: [function(require, module, exports) {
        module.exports = wrappy;
        function wrappy(fn, cb) {
          if (fn && cb)
            return wrappy(fn)(cb);
          if (typeof fn !== 'function')
            throw new TypeError('need wrapper function');
          Object.keys(fn).forEach(function(k) {
            wrapper[k] = fn[k];
          });
          return wrapper;
          function wrapper() {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i];
            }
            var ret = fn.apply(this, args);
            var cb = args[args.length - 1];
            if (typeof ret === 'function' && ret !== cb) {
              Object.keys(cb).forEach(function(k) {
                ret[k] = cb[k];
              });
            }
            return ret;
          }
        }
      }, {}],
      217: [function(require, module, exports) {
        var wrappy = require('wrappy');
        module.exports = wrappy(once);
        once.proto = once(function() {
          Object.defineProperty(Function.prototype, 'once', {
            value: function() {
              return once(this);
            },
            configurable: true
          });
        });
        function once(fn) {
          var f = function() {
            if (f.called)
              return f.value;
            f.called = true;
            return f.value = fn.apply(this, arguments);
          };
          f.called = false;
          return f;
        }
      }, {"wrappy": 216}],
      218: [function(require, module, exports) {
        arguments[4][20][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 220,
        "./_stream_writable": 222,
        "core-util-is": 223,
        "dup": 20,
        "inherits": 224,
        "process-nextick-args": 226
      }],
      219: [function(require, module, exports) {
        arguments[4][21][0].apply(exports, arguments);
      }, {
        "./_stream_transform": 221,
        "core-util-is": 223,
        "dup": 21,
        "inherits": 224
      }],
      220: [function(require, module, exports) {
        arguments[4][22][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 218,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 223,
        "dup": 22,
        "events": 9,
        "inherits": 224,
        "isarray": 225,
        "process-nextick-args": 226,
        "string_decoder/": 227,
        "util": 3
      }],
      221: [function(require, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 218,
        "core-util-is": 223,
        "dup": 23,
        "inherits": 224
      }],
      222: [function(require, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 218,
        "buffer": 4,
        "core-util-is": 223,
        "dup": 24,
        "events": 9,
        "inherits": 224,
        "process-nextick-args": 226,
        "util-deprecate": 228
      }],
      223: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      224: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      225: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      226: [function(require, module, exports) {
        arguments[4][26][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 26
      }],
      227: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      228: [function(require, module, exports) {
        arguments[4][27][0].apply(exports, arguments);
      }, {"dup": 27}],
      229: [function(require, module, exports) {
        arguments[4][29][0].apply(exports, arguments);
      }, {
        "./lib/_stream_duplex.js": 218,
        "./lib/_stream_passthrough.js": 219,
        "./lib/_stream_readable.js": 220,
        "./lib/_stream_transform.js": 221,
        "./lib/_stream_writable.js": 222,
        "dup": 29
      }],
      230: [function(require, module, exports) {
        (function(process) {
          'use strict';
          var through2 = require('through2');
          var Combine = require('ordered-read-streams');
          var unique = require('unique-stream');
          var glob = require('glob');
          var Minimatch = require('minimatch').Minimatch;
          var glob2base = require('glob2base');
          var path = require('path');
          var gs = {
            createStream: function(ourGlob, negatives, opt) {
              ourGlob = unrelative(opt.cwd, ourGlob);
              var globber = new glob.Glob(ourGlob, opt);
              var basePath = opt.base || glob2base(globber);
              var stream = through2.obj(negatives.length ? filterNegatives : undefined);
              var found = false;
              globber.on('error', stream.emit.bind(stream, 'error'));
              globber.on('end', function() {
                if (opt.allowEmpty !== true && !found && globIsSingular(globber)) {
                  stream.emit('error', new Error('File not found with singular glob'));
                }
                stream.end();
              });
              globber.on('match', function(filename) {
                found = true;
                stream.write({
                  cwd: opt.cwd,
                  base: basePath,
                  path: path.resolve(opt.cwd, filename)
                });
              });
              return stream;
              function filterNegatives(filename, enc, cb) {
                var matcha = isMatch.bind(null, filename);
                if (negatives.every(matcha)) {
                  cb(null, filename);
                } else {
                  cb();
                }
              }
            },
            create: function(globs, opt) {
              if (!opt)
                opt = {};
              if (typeof opt.cwd !== 'string')
                opt.cwd = process.cwd();
              if (typeof opt.dot !== 'boolean')
                opt.dot = false;
              if (typeof opt.silent !== 'boolean')
                opt.silent = true;
              if (typeof opt.nonull !== 'boolean')
                opt.nonull = false;
              if (typeof opt.cwdbase !== 'boolean')
                opt.cwdbase = false;
              if (opt.cwdbase)
                opt.base = opt.cwd;
              if (!Array.isArray(globs))
                globs = [globs];
              var positives = [];
              var negatives = [];
              globs.forEach(function(glob, index) {
                if (typeof glob !== 'string' && !(glob instanceof RegExp)) {
                  throw new Error('Invalid glob at index ' + index);
                }
                var globArray = isNegative(glob) ? negatives : positives;
                if (globArray === negatives && typeof glob === 'string') {
                  glob = new Minimatch(unrelative(opt.cwd, glob), opt);
                }
                globArray.push({
                  index: index,
                  glob: glob
                });
              });
              if (positives.length === 0)
                throw new Error('Missing positive glob');
              if (positives.length === 1)
                return streamFromPositive(positives[0]);
              var streams = positives.map(streamFromPositive);
              var aggregate = new Combine(streams);
              var uniqueStream = unique('path');
              var returnStream = aggregate.pipe(uniqueStream);
              aggregate.on('error', function(err) {
                returnStream.emit('error', err);
              });
              return returnStream;
              function streamFromPositive(positive) {
                var negativeGlobs = negatives.filter(indexGreaterThan(positive.index)).map(toGlob);
                return gs.createStream(positive.glob, negativeGlobs, opt);
              }
            }
          };
          function isMatch(file, matcher) {
            if (matcher instanceof Minimatch)
              return matcher.match(file.path);
            if (matcher instanceof RegExp)
              return matcher.test(file.path);
          }
          function isNegative(pattern) {
            if (typeof pattern === 'string')
              return pattern[0] === '!';
            if (pattern instanceof RegExp)
              return true;
          }
          function unrelative(cwd, glob) {
            var mod = '';
            if (glob[0] === '!') {
              mod = glob[0];
              glob = glob.slice(1);
            }
            return mod + path.resolve(cwd, glob);
          }
          function indexGreaterThan(index) {
            return function(obj) {
              return obj.index > index;
            };
          }
          function toGlob(obj) {
            return obj.glob;
          }
          function globIsSingular(glob) {
            var globSet = glob.minimatch.set;
            if (globSet.length !== 1) {
              return false;
            }
            return globSet[0].every(function isString(value) {
              return typeof value === 'string';
            });
          }
          module.exports = gs;
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "glob": 232,
        "glob2base": 240,
        "minimatch": 242,
        "ordered-read-streams": 246,
        "path": 13,
        "through2": 268,
        "unique-stream": 269
      }],
      231: [function(require, module, exports) {
        (function(process) {
          exports.alphasort = alphasort;
          exports.alphasorti = alphasorti;
          exports.setopts = setopts;
          exports.ownProp = ownProp;
          exports.makeAbs = makeAbs;
          exports.finish = finish;
          exports.mark = mark;
          exports.isIgnored = isIgnored;
          exports.childrenIgnored = childrenIgnored;
          function ownProp(obj, field) {
            return Object.prototype.hasOwnProperty.call(obj, field);
          }
          var path = require('path');
          var minimatch = require('minimatch');
          var isAbsolute = require('path-is-absolute');
          var Minimatch = minimatch.Minimatch;
          function alphasorti(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
          }
          function alphasort(a, b) {
            return a.localeCompare(b);
          }
          function setupIgnores(self, options) {
            self.ignore = options.ignore || [];
            if (!Array.isArray(self.ignore))
              self.ignore = [self.ignore];
            if (self.ignore.length) {
              self.ignore = self.ignore.map(ignoreMap);
            }
          }
          function ignoreMap(pattern) {
            var gmatcher = null;
            if (pattern.slice(-3) === '/**') {
              var gpattern = pattern.replace(/(\/\*\*)+$/, '');
              gmatcher = new Minimatch(gpattern);
            }
            return {
              matcher: new Minimatch(pattern),
              gmatcher: gmatcher
            };
          }
          function setopts(self, pattern, options) {
            if (!options)
              options = {};
            if (options.matchBase && -1 === pattern.indexOf("/")) {
              if (options.noglobstar) {
                throw new Error("base matching requires globstar");
              }
              pattern = "**/" + pattern;
            }
            self.silent = !!options.silent;
            self.pattern = pattern;
            self.strict = options.strict !== false;
            self.realpath = !!options.realpath;
            self.realpathCache = options.realpathCache || Object.create(null);
            self.follow = !!options.follow;
            self.dot = !!options.dot;
            self.mark = !!options.mark;
            self.nodir = !!options.nodir;
            if (self.nodir)
              self.mark = true;
            self.sync = !!options.sync;
            self.nounique = !!options.nounique;
            self.nonull = !!options.nonull;
            self.nosort = !!options.nosort;
            self.nocase = !!options.nocase;
            self.stat = !!options.stat;
            self.noprocess = !!options.noprocess;
            self.maxLength = options.maxLength || Infinity;
            self.cache = options.cache || Object.create(null);
            self.statCache = options.statCache || Object.create(null);
            self.symlinks = options.symlinks || Object.create(null);
            setupIgnores(self, options);
            self.changedCwd = false;
            var cwd = process.cwd();
            if (!ownProp(options, "cwd"))
              self.cwd = cwd;
            else {
              self.cwd = options.cwd;
              self.changedCwd = path.resolve(options.cwd) !== cwd;
            }
            self.root = options.root || path.resolve(self.cwd, "/");
            self.root = path.resolve(self.root);
            if (process.platform === "win32")
              self.root = self.root.replace(/\\/g, "/");
            self.nomount = !!options.nomount;
            options.nonegate = options.nonegate === false ? false : true;
            options.nocomment = options.nocomment === false ? false : true;
            deprecationWarning(options);
            self.minimatch = new Minimatch(pattern, options);
            self.options = self.minimatch.options;
          }
          exports.deprecationWarned;
          function deprecationWarning(options) {
            if (!options.nonegate || !options.nocomment) {
              if (process.noDeprecation !== true && !exports.deprecationWarned) {
                var msg = 'glob WARNING: comments and negation will be disabled in v6';
                if (process.throwDeprecation)
                  throw new Error(msg);
                else if (process.traceDeprecation)
                  console.trace(msg);
                else
                  console.error(msg);
                exports.deprecationWarned = true;
              }
            }
          }
          function finish(self) {
            var nou = self.nounique;
            var all = nou ? [] : Object.create(null);
            for (var i = 0,
                l = self.matches.length; i < l; i++) {
              var matches = self.matches[i];
              if (!matches || Object.keys(matches).length === 0) {
                if (self.nonull) {
                  var literal = self.minimatch.globSet[i];
                  if (nou)
                    all.push(literal);
                  else
                    all[literal] = true;
                }
              } else {
                var m = Object.keys(matches);
                if (nou)
                  all.push.apply(all, m);
                else
                  m.forEach(function(m) {
                    all[m] = true;
                  });
              }
            }
            if (!nou)
              all = Object.keys(all);
            if (!self.nosort)
              all = all.sort(self.nocase ? alphasorti : alphasort);
            if (self.mark) {
              for (var i = 0; i < all.length; i++) {
                all[i] = self._mark(all[i]);
              }
              if (self.nodir) {
                all = all.filter(function(e) {
                  return !(/\/$/.test(e));
                });
              }
            }
            if (self.ignore.length)
              all = all.filter(function(m) {
                return !isIgnored(self, m);
              });
            self.found = all;
          }
          function mark(self, p) {
            var abs = makeAbs(self, p);
            var c = self.cache[abs];
            var m = p;
            if (c) {
              var isDir = c === 'DIR' || Array.isArray(c);
              var slash = p.slice(-1) === '/';
              if (isDir && !slash)
                m += '/';
              else if (!isDir && slash)
                m = m.slice(0, -1);
              if (m !== p) {
                var mabs = makeAbs(self, m);
                self.statCache[mabs] = self.statCache[abs];
                self.cache[mabs] = self.cache[abs];
              }
            }
            return m;
          }
          function makeAbs(self, f) {
            var abs = f;
            if (f.charAt(0) === '/') {
              abs = path.join(self.root, f);
            } else if (isAbsolute(f) || f === '') {
              abs = f;
            } else if (self.changedCwd) {
              abs = path.resolve(self.cwd, f);
            } else {
              abs = path.resolve(f);
            }
            return abs;
          }
          function isIgnored(self, path) {
            if (!self.ignore.length)
              return false;
            return self.ignore.some(function(item) {
              return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path));
            });
          }
          function childrenIgnored(self, path) {
            if (!self.ignore.length)
              return false;
            return self.ignore.some(function(item) {
              return !!(item.gmatcher && item.gmatcher.match(path));
            });
          }
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "minimatch": 242,
        "path": 13,
        "path-is-absolute": 238
      }],
      232: [function(require, module, exports) {
        (function(process) {
          module.exports = glob;
          var fs = require('fs');
          var minimatch = require('minimatch');
          var Minimatch = minimatch.Minimatch;
          var inherits = require('inherits');
          var EE = require('events').EventEmitter;
          var path = require('path');
          var assert = require('assert');
          var isAbsolute = require('path-is-absolute');
          var globSync = require('./sync');
          var common = require('./common');
          var alphasort = common.alphasort;
          var alphasorti = common.alphasorti;
          var setopts = common.setopts;
          var ownProp = common.ownProp;
          var inflight = require('inflight');
          var util = require('util');
          var childrenIgnored = common.childrenIgnored;
          var isIgnored = common.isIgnored;
          var once = require('once');
          function glob(pattern, options, cb) {
            if (typeof options === 'function')
              cb = options, options = {};
            if (!options)
              options = {};
            if (options.sync) {
              if (cb)
                throw new TypeError('callback provided to sync glob');
              return globSync(pattern, options);
            }
            return new Glob(pattern, options, cb);
          }
          glob.sync = globSync;
          var GlobSync = glob.GlobSync = globSync.GlobSync;
          glob.glob = glob;
          glob.hasMagic = function(pattern, options_) {
            var options = util._extend({}, options_);
            options.noprocess = true;
            var g = new Glob(pattern, options);
            var set = g.minimatch.set;
            if (set.length > 1)
              return true;
            for (var j = 0; j < set[0].length; j++) {
              if (typeof set[0][j] !== 'string')
                return true;
            }
            return false;
          };
          glob.Glob = Glob;
          inherits(Glob, EE);
          function Glob(pattern, options, cb) {
            if (typeof options === 'function') {
              cb = options;
              options = null;
            }
            if (options && options.sync) {
              if (cb)
                throw new TypeError('callback provided to sync glob');
              return new GlobSync(pattern, options);
            }
            if (!(this instanceof Glob))
              return new Glob(pattern, options, cb);
            setopts(this, pattern, options);
            this._didRealPath = false;
            var n = this.minimatch.set.length;
            this.matches = new Array(n);
            if (typeof cb === 'function') {
              cb = once(cb);
              this.on('error', cb);
              this.on('end', function(matches) {
                cb(null, matches);
              });
            }
            var self = this;
            var n = this.minimatch.set.length;
            this._processing = 0;
            this.matches = new Array(n);
            this._emitQueue = [];
            this._processQueue = [];
            this.paused = false;
            if (this.noprocess)
              return this;
            if (n === 0)
              return done();
            for (var i = 0; i < n; i++) {
              this._process(this.minimatch.set[i], i, false, done);
            }
            function done() {
              --self._processing;
              if (self._processing <= 0)
                self._finish();
            }
          }
          Glob.prototype._finish = function() {
            assert(this instanceof Glob);
            if (this.aborted)
              return;
            if (this.realpath && !this._didRealpath)
              return this._realpath();
            common.finish(this);
            this.emit('end', this.found);
          };
          Glob.prototype._realpath = function() {
            if (this._didRealpath)
              return;
            this._didRealpath = true;
            var n = this.matches.length;
            if (n === 0)
              return this._finish();
            var self = this;
            for (var i = 0; i < this.matches.length; i++)
              this._realpathSet(i, next);
            function next() {
              if (--n === 0)
                self._finish();
            }
          };
          Glob.prototype._realpathSet = function(index, cb) {
            var matchset = this.matches[index];
            if (!matchset)
              return cb();
            var found = Object.keys(matchset);
            var self = this;
            var n = found.length;
            if (n === 0)
              return cb();
            var set = this.matches[index] = Object.create(null);
            found.forEach(function(p, i) {
              p = self._makeAbs(p);
              fs.realpath(p, self.realpathCache, function(er, real) {
                if (!er)
                  set[real] = true;
                else if (er.syscall === 'stat')
                  set[p] = true;
                else
                  self.emit('error', er);
                if (--n === 0) {
                  self.matches[index] = set;
                  cb();
                }
              });
            });
          };
          Glob.prototype._mark = function(p) {
            return common.mark(this, p);
          };
          Glob.prototype._makeAbs = function(f) {
            return common.makeAbs(this, f);
          };
          Glob.prototype.abort = function() {
            this.aborted = true;
            this.emit('abort');
          };
          Glob.prototype.pause = function() {
            if (!this.paused) {
              this.paused = true;
              this.emit('pause');
            }
          };
          Glob.prototype.resume = function() {
            if (this.paused) {
              this.emit('resume');
              this.paused = false;
              if (this._emitQueue.length) {
                var eq = this._emitQueue.slice(0);
                this._emitQueue.length = 0;
                for (var i = 0; i < eq.length; i++) {
                  var e = eq[i];
                  this._emitMatch(e[0], e[1]);
                }
              }
              if (this._processQueue.length) {
                var pq = this._processQueue.slice(0);
                this._processQueue.length = 0;
                for (var i = 0; i < pq.length; i++) {
                  var p = pq[i];
                  this._processing--;
                  this._process(p[0], p[1], p[2], p[3]);
                }
              }
            }
          };
          Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
            assert(this instanceof Glob);
            assert(typeof cb === 'function');
            if (this.aborted)
              return;
            this._processing++;
            if (this.paused) {
              this._processQueue.push([pattern, index, inGlobStar, cb]);
              return;
            }
            var n = 0;
            while (typeof pattern[n] === 'string') {
              n++;
            }
            var prefix;
            switch (n) {
              case pattern.length:
                this._processSimple(pattern.join('/'), index, cb);
                return;
              case 0:
                prefix = null;
                break;
              default:
                prefix = pattern.slice(0, n).join('/');
                break;
            }
            var remain = pattern.slice(n);
            var read;
            if (prefix === null)
              read = '.';
            else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
              if (!prefix || !isAbsolute(prefix))
                prefix = '/' + prefix;
              read = prefix;
            } else
              read = prefix;
            var abs = this._makeAbs(read);
            if (childrenIgnored(this, read))
              return cb();
            var isGlobStar = remain[0] === minimatch.GLOBSTAR;
            if (isGlobStar)
              this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
            else
              this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
          };
          Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
            var self = this;
            this._readdir(abs, inGlobStar, function(er, entries) {
              return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
            });
          };
          Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
            if (!entries)
              return cb();
            var pn = remain[0];
            var negate = !!this.minimatch.negate;
            var rawGlob = pn._glob;
            var dotOk = this.dot || rawGlob.charAt(0) === '.';
            var matchedEntries = [];
            for (var i = 0; i < entries.length; i++) {
              var e = entries[i];
              if (e.charAt(0) !== '.' || dotOk) {
                var m;
                if (negate && !prefix) {
                  m = !e.match(pn);
                } else {
                  m = e.match(pn);
                }
                if (m)
                  matchedEntries.push(e);
              }
            }
            var len = matchedEntries.length;
            if (len === 0)
              return cb();
            if (remain.length === 1 && !this.mark && !this.stat) {
              if (!this.matches[index])
                this.matches[index] = Object.create(null);
              for (var i = 0; i < len; i++) {
                var e = matchedEntries[i];
                if (prefix) {
                  if (prefix !== '/')
                    e = prefix + '/' + e;
                  else
                    e = prefix + e;
                }
                if (e.charAt(0) === '/' && !this.nomount) {
                  e = path.join(this.root, e);
                }
                this._emitMatch(index, e);
              }
              return cb();
            }
            remain.shift();
            for (var i = 0; i < len; i++) {
              var e = matchedEntries[i];
              var newPattern;
              if (prefix) {
                if (prefix !== '/')
                  e = prefix + '/' + e;
                else
                  e = prefix + e;
              }
              this._process([e].concat(remain), index, inGlobStar, cb);
            }
            cb();
          };
          Glob.prototype._emitMatch = function(index, e) {
            if (this.aborted)
              return;
            if (this.matches[index][e])
              return;
            if (isIgnored(this, e))
              return;
            if (this.paused) {
              this._emitQueue.push([index, e]);
              return;
            }
            var abs = this._makeAbs(e);
            if (this.nodir) {
              var c = this.cache[abs];
              if (c === 'DIR' || Array.isArray(c))
                return;
            }
            if (this.mark)
              e = this._mark(e);
            this.matches[index][e] = true;
            var st = this.statCache[abs];
            if (st)
              this.emit('stat', e, st);
            this.emit('match', e);
          };
          Glob.prototype._readdirInGlobStar = function(abs, cb) {
            if (this.aborted)
              return;
            if (this.follow)
              return this._readdir(abs, false, cb);
            var lstatkey = 'lstat\0' + abs;
            var self = this;
            var lstatcb = inflight(lstatkey, lstatcb_);
            if (lstatcb)
              fs.lstat(abs, lstatcb);
            function lstatcb_(er, lstat) {
              if (er)
                return cb();
              var isSym = lstat.isSymbolicLink();
              self.symlinks[abs] = isSym;
              if (!isSym && !lstat.isDirectory()) {
                self.cache[abs] = 'FILE';
                cb();
              } else
                self._readdir(abs, false, cb);
            }
          };
          Glob.prototype._readdir = function(abs, inGlobStar, cb) {
            if (this.aborted)
              return;
            cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
            if (!cb)
              return;
            if (inGlobStar && !ownProp(this.symlinks, abs))
              return this._readdirInGlobStar(abs, cb);
            if (ownProp(this.cache, abs)) {
              var c = this.cache[abs];
              if (!c || c === 'FILE')
                return cb();
              if (Array.isArray(c))
                return cb(null, c);
            }
            var self = this;
            fs.readdir(abs, readdirCb(this, abs, cb));
          };
          function readdirCb(self, abs, cb) {
            return function(er, entries) {
              if (er)
                self._readdirError(abs, er, cb);
              else
                self._readdirEntries(abs, entries, cb);
            };
          }
          Glob.prototype._readdirEntries = function(abs, entries, cb) {
            if (this.aborted)
              return;
            if (!this.mark && !this.stat) {
              for (var i = 0; i < entries.length; i++) {
                var e = entries[i];
                if (abs === '/')
                  e = abs + e;
                else
                  e = abs + '/' + e;
                this.cache[e] = true;
              }
            }
            this.cache[abs] = entries;
            return cb(null, entries);
          };
          Glob.prototype._readdirError = function(f, er, cb) {
            if (this.aborted)
              return;
            switch (er.code) {
              case 'ENOTSUP':
              case 'ENOTDIR':
                this.cache[this._makeAbs(f)] = 'FILE';
                break;
              case 'ENOENT':
              case 'ELOOP':
              case 'ENAMETOOLONG':
              case 'UNKNOWN':
                this.cache[this._makeAbs(f)] = false;
                break;
              default:
                this.cache[this._makeAbs(f)] = false;
                if (this.strict) {
                  this.emit('error', er);
                  this.abort();
                }
                if (!this.silent)
                  console.error('glob error', er);
                break;
            }
            return cb();
          };
          Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
            var self = this;
            this._readdir(abs, inGlobStar, function(er, entries) {
              self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
            });
          };
          Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
            if (!entries)
              return cb();
            var remainWithoutGlobStar = remain.slice(1);
            var gspref = prefix ? [prefix] : [];
            var noGlobStar = gspref.concat(remainWithoutGlobStar);
            this._process(noGlobStar, index, false, cb);
            var isSym = this.symlinks[abs];
            var len = entries.length;
            if (isSym && inGlobStar)
              return cb();
            for (var i = 0; i < len; i++) {
              var e = entries[i];
              if (e.charAt(0) === '.' && !this.dot)
                continue;
              var instead = gspref.concat(entries[i], remainWithoutGlobStar);
              this._process(instead, index, true, cb);
              var below = gspref.concat(entries[i], remain);
              this._process(below, index, true, cb);
            }
            cb();
          };
          Glob.prototype._processSimple = function(prefix, index, cb) {
            var self = this;
            this._stat(prefix, function(er, exists) {
              self._processSimple2(prefix, index, er, exists, cb);
            });
          };
          Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
            if (!this.matches[index])
              this.matches[index] = Object.create(null);
            if (!exists)
              return cb();
            if (prefix && isAbsolute(prefix) && !this.nomount) {
              var trail = /[\/\\]$/.test(prefix);
              if (prefix.charAt(0) === '/') {
                prefix = path.join(this.root, prefix);
              } else {
                prefix = path.resolve(this.root, prefix);
                if (trail)
                  prefix += '/';
              }
            }
            if (process.platform === 'win32')
              prefix = prefix.replace(/\\/g, '/');
            this._emitMatch(index, prefix);
            cb();
          };
          Glob.prototype._stat = function(f, cb) {
            var abs = this._makeAbs(f);
            var needDir = f.slice(-1) === '/';
            if (f.length > this.maxLength)
              return cb();
            if (!this.stat && ownProp(this.cache, abs)) {
              var c = this.cache[abs];
              if (Array.isArray(c))
                c = 'DIR';
              if (!needDir || c === 'DIR')
                return cb(null, c);
              if (needDir && c === 'FILE')
                return cb();
            }
            var exists;
            var stat = this.statCache[abs];
            if (stat !== undefined) {
              if (stat === false)
                return cb(null, stat);
              else {
                var type = stat.isDirectory() ? 'DIR' : 'FILE';
                if (needDir && type === 'FILE')
                  return cb();
                else
                  return cb(null, type, stat);
              }
            }
            var self = this;
            var statcb = inflight('stat\0' + abs, lstatcb_);
            if (statcb)
              fs.lstat(abs, statcb);
            function lstatcb_(er, lstat) {
              if (lstat && lstat.isSymbolicLink()) {
                return fs.stat(abs, function(er, stat) {
                  if (er)
                    self._stat2(f, abs, null, lstat, cb);
                  else
                    self._stat2(f, abs, er, stat, cb);
                });
              } else {
                self._stat2(f, abs, er, lstat, cb);
              }
            }
          };
          Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
            if (er) {
              this.statCache[abs] = false;
              return cb();
            }
            var needDir = f.slice(-1) === '/';
            this.statCache[abs] = stat;
            if (abs.slice(-1) === '/' && !stat.isDirectory())
              return cb(null, false, stat);
            var c = stat.isDirectory() ? 'DIR' : 'FILE';
            this.cache[abs] = this.cache[abs] || c;
            if (needDir && c !== 'DIR')
              return cb();
            return cb(null, c, stat);
          };
        }).call(this, require('_process'));
      }, {
        "./common.js": 231,
        "./sync.js": 239,
        "_process": 14,
        "assert": 2,
        "events": 9,
        "fs": 1,
        "inflight": 233,
        "inherits": 235,
        "minimatch": 242,
        "once": 237,
        "path": 13,
        "path-is-absolute": 238,
        "util": 46
      }],
      233: [function(require, module, exports) {
        (function(process) {
          var wrappy = require('wrappy');
          var reqs = Object.create(null);
          var once = require('once');
          module.exports = wrappy(inflight);
          function inflight(key, cb) {
            if (reqs[key]) {
              reqs[key].push(cb);
              return null;
            } else {
              reqs[key] = [cb];
              return makeres(key);
            }
          }
          function makeres(key) {
            return once(function RES() {
              var cbs = reqs[key];
              var len = cbs.length;
              var args = slice(arguments);
              for (var i = 0; i < len; i++) {
                cbs[i].apply(null, args);
              }
              if (cbs.length > len) {
                cbs.splice(0, len);
                process.nextTick(function() {
                  RES.apply(null, args);
                });
              } else {
                delete reqs[key];
              }
            });
          }
          function slice(args) {
            var length = args.length;
            var array = [];
            for (var i = 0; i < length; i++)
              array[i] = args[i];
            return array;
          }
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "once": 237,
        "wrappy": 234
      }],
      234: [function(require, module, exports) {
        arguments[4][216][0].apply(exports, arguments);
      }, {"dup": 216}],
      235: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      236: [function(require, module, exports) {
        arguments[4][216][0].apply(exports, arguments);
      }, {"dup": 216}],
      237: [function(require, module, exports) {
        arguments[4][217][0].apply(exports, arguments);
      }, {
        "dup": 217,
        "wrappy": 236
      }],
      238: [function(require, module, exports) {
        (function(process) {
          'use strict';
          function posix(path) {
            return path.charAt(0) === '/';
          }
          ;
          function win32(path) {
            var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
            var result = splitDeviceRe.exec(path);
            var device = result[1] || '';
            var isUnc = !!device && device.charAt(1) !== ':';
            return !!result[2] || isUnc;
          }
          ;
          module.exports = process.platform === 'win32' ? win32 : posix;
          module.exports.posix = posix;
          module.exports.win32 = win32;
        }).call(this, require('_process'));
      }, {"_process": 14}],
      239: [function(require, module, exports) {
        (function(process) {
          module.exports = globSync;
          globSync.GlobSync = GlobSync;
          var fs = require('fs');
          var minimatch = require('minimatch');
          var Minimatch = minimatch.Minimatch;
          var Glob = require('./glob').Glob;
          var util = require('util');
          var path = require('path');
          var assert = require('assert');
          var isAbsolute = require('path-is-absolute');
          var common = require('./common');
          var alphasort = common.alphasort;
          var alphasorti = common.alphasorti;
          var setopts = common.setopts;
          var ownProp = common.ownProp;
          var childrenIgnored = common.childrenIgnored;
          function globSync(pattern, options) {
            if (typeof options === 'function' || arguments.length === 3)
              throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
            return new GlobSync(pattern, options).found;
          }
          function GlobSync(pattern, options) {
            if (!pattern)
              throw new Error('must provide pattern');
            if (typeof options === 'function' || arguments.length === 3)
              throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
            if (!(this instanceof GlobSync))
              return new GlobSync(pattern, options);
            setopts(this, pattern, options);
            if (this.noprocess)
              return this;
            var n = this.minimatch.set.length;
            this.matches = new Array(n);
            for (var i = 0; i < n; i++) {
              this._process(this.minimatch.set[i], i, false);
            }
            this._finish();
          }
          GlobSync.prototype._finish = function() {
            assert(this instanceof GlobSync);
            if (this.realpath) {
              var self = this;
              this.matches.forEach(function(matchset, index) {
                var set = self.matches[index] = Object.create(null);
                for (var p in matchset) {
                  try {
                    p = self._makeAbs(p);
                    var real = fs.realpathSync(p, self.realpathCache);
                    set[real] = true;
                  } catch (er) {
                    if (er.syscall === 'stat')
                      set[self._makeAbs(p)] = true;
                    else
                      throw er;
                  }
                }
              });
            }
            common.finish(this);
          };
          GlobSync.prototype._process = function(pattern, index, inGlobStar) {
            assert(this instanceof GlobSync);
            var n = 0;
            while (typeof pattern[n] === 'string') {
              n++;
            }
            var prefix;
            switch (n) {
              case pattern.length:
                this._processSimple(pattern.join('/'), index);
                return;
              case 0:
                prefix = null;
                break;
              default:
                prefix = pattern.slice(0, n).join('/');
                break;
            }
            var remain = pattern.slice(n);
            var read;
            if (prefix === null)
              read = '.';
            else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
              if (!prefix || !isAbsolute(prefix))
                prefix = '/' + prefix;
              read = prefix;
            } else
              read = prefix;
            var abs = this._makeAbs(read);
            if (childrenIgnored(this, read))
              return;
            var isGlobStar = remain[0] === minimatch.GLOBSTAR;
            if (isGlobStar)
              this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
            else
              this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
          };
          GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
            var entries = this._readdir(abs, inGlobStar);
            if (!entries)
              return;
            var pn = remain[0];
            var negate = !!this.minimatch.negate;
            var rawGlob = pn._glob;
            var dotOk = this.dot || rawGlob.charAt(0) === '.';
            var matchedEntries = [];
            for (var i = 0; i < entries.length; i++) {
              var e = entries[i];
              if (e.charAt(0) !== '.' || dotOk) {
                var m;
                if (negate && !prefix) {
                  m = !e.match(pn);
                } else {
                  m = e.match(pn);
                }
                if (m)
                  matchedEntries.push(e);
              }
            }
            var len = matchedEntries.length;
            if (len === 0)
              return;
            if (remain.length === 1 && !this.mark && !this.stat) {
              if (!this.matches[index])
                this.matches[index] = Object.create(null);
              for (var i = 0; i < len; i++) {
                var e = matchedEntries[i];
                if (prefix) {
                  if (prefix.slice(-1) !== '/')
                    e = prefix + '/' + e;
                  else
                    e = prefix + e;
                }
                if (e.charAt(0) === '/' && !this.nomount) {
                  e = path.join(this.root, e);
                }
                this.matches[index][e] = true;
              }
              return;
            }
            remain.shift();
            for (var i = 0; i < len; i++) {
              var e = matchedEntries[i];
              var newPattern;
              if (prefix)
                newPattern = [prefix, e];
              else
                newPattern = [e];
              this._process(newPattern.concat(remain), index, inGlobStar);
            }
          };
          GlobSync.prototype._emitMatch = function(index, e) {
            var abs = this._makeAbs(e);
            if (this.mark)
              e = this._mark(e);
            if (this.matches[index][e])
              return;
            if (this.nodir) {
              var c = this.cache[this._makeAbs(e)];
              if (c === 'DIR' || Array.isArray(c))
                return;
            }
            this.matches[index][e] = true;
            if (this.stat)
              this._stat(e);
          };
          GlobSync.prototype._readdirInGlobStar = function(abs) {
            if (this.follow)
              return this._readdir(abs, false);
            var entries;
            var lstat;
            var stat;
            try {
              lstat = fs.lstatSync(abs);
            } catch (er) {
              return null;
            }
            var isSym = lstat.isSymbolicLink();
            this.symlinks[abs] = isSym;
            if (!isSym && !lstat.isDirectory())
              this.cache[abs] = 'FILE';
            else
              entries = this._readdir(abs, false);
            return entries;
          };
          GlobSync.prototype._readdir = function(abs, inGlobStar) {
            var entries;
            if (inGlobStar && !ownProp(this.symlinks, abs))
              return this._readdirInGlobStar(abs);
            if (ownProp(this.cache, abs)) {
              var c = this.cache[abs];
              if (!c || c === 'FILE')
                return null;
              if (Array.isArray(c))
                return c;
            }
            try {
              return this._readdirEntries(abs, fs.readdirSync(abs));
            } catch (er) {
              this._readdirError(abs, er);
              return null;
            }
          };
          GlobSync.prototype._readdirEntries = function(abs, entries) {
            if (!this.mark && !this.stat) {
              for (var i = 0; i < entries.length; i++) {
                var e = entries[i];
                if (abs === '/')
                  e = abs + e;
                else
                  e = abs + '/' + e;
                this.cache[e] = true;
              }
            }
            this.cache[abs] = entries;
            return entries;
          };
          GlobSync.prototype._readdirError = function(f, er) {
            switch (er.code) {
              case 'ENOTSUP':
              case 'ENOTDIR':
                this.cache[this._makeAbs(f)] = 'FILE';
                break;
              case 'ENOENT':
              case 'ELOOP':
              case 'ENAMETOOLONG':
              case 'UNKNOWN':
                this.cache[this._makeAbs(f)] = false;
                break;
              default:
                this.cache[this._makeAbs(f)] = false;
                if (this.strict)
                  throw er;
                if (!this.silent)
                  console.error('glob error', er);
                break;
            }
          };
          GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
            var entries = this._readdir(abs, inGlobStar);
            if (!entries)
              return;
            var remainWithoutGlobStar = remain.slice(1);
            var gspref = prefix ? [prefix] : [];
            var noGlobStar = gspref.concat(remainWithoutGlobStar);
            this._process(noGlobStar, index, false);
            var len = entries.length;
            var isSym = this.symlinks[abs];
            if (isSym && inGlobStar)
              return;
            for (var i = 0; i < len; i++) {
              var e = entries[i];
              if (e.charAt(0) === '.' && !this.dot)
                continue;
              var instead = gspref.concat(entries[i], remainWithoutGlobStar);
              this._process(instead, index, true);
              var below = gspref.concat(entries[i], remain);
              this._process(below, index, true);
            }
          };
          GlobSync.prototype._processSimple = function(prefix, index) {
            var exists = this._stat(prefix);
            if (!this.matches[index])
              this.matches[index] = Object.create(null);
            if (!exists)
              return;
            if (prefix && isAbsolute(prefix) && !this.nomount) {
              var trail = /[\/\\]$/.test(prefix);
              if (prefix.charAt(0) === '/') {
                prefix = path.join(this.root, prefix);
              } else {
                prefix = path.resolve(this.root, prefix);
                if (trail)
                  prefix += '/';
              }
            }
            if (process.platform === 'win32')
              prefix = prefix.replace(/\\/g, '/');
            this.matches[index][prefix] = true;
          };
          GlobSync.prototype._stat = function(f) {
            var abs = this._makeAbs(f);
            var needDir = f.slice(-1) === '/';
            if (f.length > this.maxLength)
              return false;
            if (!this.stat && ownProp(this.cache, abs)) {
              var c = this.cache[abs];
              if (Array.isArray(c))
                c = 'DIR';
              if (!needDir || c === 'DIR')
                return c;
              if (needDir && c === 'FILE')
                return false;
            }
            var exists;
            var stat = this.statCache[abs];
            if (!stat) {
              var lstat;
              try {
                lstat = fs.lstatSync(abs);
              } catch (er) {
                return false;
              }
              if (lstat.isSymbolicLink()) {
                try {
                  stat = fs.statSync(abs);
                } catch (er) {
                  stat = lstat;
                }
              } else {
                stat = lstat;
              }
            }
            this.statCache[abs] = stat;
            var c = stat.isDirectory() ? 'DIR' : 'FILE';
            this.cache[abs] = this.cache[abs] || c;
            if (needDir && c !== 'DIR')
              return false;
            return c;
          };
          GlobSync.prototype._mark = function(p) {
            return common.mark(this, p);
          };
          GlobSync.prototype._makeAbs = function(f) {
            return common.makeAbs(this, f);
          };
        }).call(this, require('_process'));
      }, {
        "./common.js": 231,
        "./glob.js": 232,
        "_process": 14,
        "assert": 2,
        "fs": 1,
        "minimatch": 242,
        "path": 13,
        "path-is-absolute": 238,
        "util": 46
      }],
      240: [function(require, module, exports) {
        'use strict';
        var path = require('path');
        var findIndex = require('find-index');
        var flattenGlob = function(arr) {
          var out = [];
          var flat = true;
          for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'string') {
              flat = false;
              break;
            }
            out.push(arr[i]);
          }
          if (flat) {
            out.pop();
          }
          return out;
        };
        var flattenExpansion = function(set) {
          var first = set[0];
          var toCompare = set.slice(1);
          var idx = findIndex(first, function(v, idx) {
            if (typeof v !== 'string') {
              return true;
            }
            var matched = toCompare.every(function(arr) {
              return v === arr[idx];
            });
            return !matched;
          });
          return first.slice(0, idx);
        };
        var setToBase = function(set) {
          if (set.length <= 1) {
            return flattenGlob(set[0]);
          }
          return flattenExpansion(set);
        };
        module.exports = function(glob) {
          var set = glob.minimatch.set;
          var baseParts = setToBase(set);
          var basePath = path.normalize(baseParts.join(path.sep)) + path.sep;
          return basePath;
        };
      }, {
        "find-index": 241,
        "path": 13
      }],
      241: [function(require, module, exports) {
        function findIndex(array, predicate, self) {
          var len = array.length;
          var i;
          if (len === 0)
            return -1;
          if (typeof predicate !== 'function') {
            throw new TypeError(predicate + ' must be a function');
          }
          if (self) {
            for (i = 0; i < len; i++) {
              if (predicate.call(self, array[i], i, array)) {
                return i;
              }
            }
          } else {
            for (i = 0; i < len; i++) {
              if (predicate(array[i], i, array)) {
                return i;
              }
            }
          }
          return -1;
        }
        module.exports = findIndex;
      }, {}],
      242: [function(require, module, exports) {
        module.exports = minimatch;
        minimatch.Minimatch = Minimatch;
        var path = {sep: '/'};
        try {
          path = require('path');
        } catch (er) {}
        var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
        var expand = require('brace-expansion');
        var qmark = '[^/]';
        var star = qmark + '*?';
        var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';
        var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';
        var reSpecials = charSet('().*{}+?[]^$\\!');
        function charSet(s) {
          return s.split('').reduce(function(set, c) {
            set[c] = true;
            return set;
          }, {});
        }
        var slashSplit = /\/+/;
        minimatch.filter = filter;
        function filter(pattern, options) {
          options = options || {};
          return function(p, i, list) {
            return minimatch(p, pattern, options);
          };
        }
        function ext(a, b) {
          a = a || {};
          b = b || {};
          var t = {};
          Object.keys(b).forEach(function(k) {
            t[k] = b[k];
          });
          Object.keys(a).forEach(function(k) {
            t[k] = a[k];
          });
          return t;
        }
        minimatch.defaults = function(def) {
          if (!def || !Object.keys(def).length)
            return minimatch;
          var orig = minimatch;
          var m = function minimatch(p, pattern, options) {
            return orig.minimatch(p, pattern, ext(def, options));
          };
          m.Minimatch = function Minimatch(pattern, options) {
            return new orig.Minimatch(pattern, ext(def, options));
          };
          return m;
        };
        Minimatch.defaults = function(def) {
          if (!def || !Object.keys(def).length)
            return Minimatch;
          return minimatch.defaults(def).Minimatch;
        };
        function minimatch(p, pattern, options) {
          if (typeof pattern !== 'string') {
            throw new TypeError('glob pattern string required');
          }
          if (!options)
            options = {};
          if (!options.nocomment && pattern.charAt(0) === '#') {
            return false;
          }
          if (pattern.trim() === '')
            return p === '';
          return new Minimatch(pattern, options).match(p);
        }
        function Minimatch(pattern, options) {
          if (!(this instanceof Minimatch)) {
            return new Minimatch(pattern, options);
          }
          if (typeof pattern !== 'string') {
            throw new TypeError('glob pattern string required');
          }
          if (!options)
            options = {};
          pattern = pattern.trim();
          if (path.sep !== '/') {
            pattern = pattern.split(path.sep).join('/');
          }
          this.options = options;
          this.set = [];
          this.pattern = pattern;
          this.regexp = null;
          this.negate = false;
          this.comment = false;
          this.empty = false;
          this.make();
        }
        Minimatch.prototype.debug = function() {};
        Minimatch.prototype.make = make;
        function make() {
          if (this._made)
            return;
          var pattern = this.pattern;
          var options = this.options;
          if (!options.nocomment && pattern.charAt(0) === '#') {
            this.comment = true;
            return;
          }
          if (!pattern) {
            this.empty = true;
            return;
          }
          this.parseNegate();
          var set = this.globSet = this.braceExpand();
          if (options.debug)
            this.debug = console.error;
          this.debug(this.pattern, set);
          set = this.globParts = set.map(function(s) {
            return s.split(slashSplit);
          });
          this.debug(this.pattern, set);
          set = set.map(function(s, si, set) {
            return s.map(this.parse, this);
          }, this);
          this.debug(this.pattern, set);
          set = set.filter(function(s) {
            return s.indexOf(false) === -1;
          });
          this.debug(this.pattern, set);
          this.set = set;
        }
        Minimatch.prototype.parseNegate = parseNegate;
        function parseNegate() {
          var pattern = this.pattern;
          var negate = false;
          var options = this.options;
          var negateOffset = 0;
          if (options.nonegate)
            return;
          for (var i = 0,
              l = pattern.length; i < l && pattern.charAt(i) === '!'; i++) {
            negate = !negate;
            negateOffset++;
          }
          if (negateOffset)
            this.pattern = pattern.substr(negateOffset);
          this.negate = negate;
        }
        minimatch.braceExpand = function(pattern, options) {
          return braceExpand(pattern, options);
        };
        Minimatch.prototype.braceExpand = braceExpand;
        function braceExpand(pattern, options) {
          if (!options) {
            if (this instanceof Minimatch) {
              options = this.options;
            } else {
              options = {};
            }
          }
          pattern = typeof pattern === 'undefined' ? this.pattern : pattern;
          if (typeof pattern === 'undefined') {
            throw new Error('undefined pattern');
          }
          if (options.nobrace || !pattern.match(/\{.*\}/)) {
            return [pattern];
          }
          return expand(pattern);
        }
        Minimatch.prototype.parse = parse;
        var SUBPARSE = {};
        function parse(pattern, isSub) {
          var options = this.options;
          if (!options.noglobstar && pattern === '**')
            return GLOBSTAR;
          if (pattern === '')
            return '';
          var re = '';
          var hasMagic = !!options.nocase;
          var escaping = false;
          var patternListStack = [];
          var negativeLists = [];
          var plType;
          var stateChar;
          var inClass = false;
          var reClassStart = -1;
          var classStart = -1;
          var patternStart = pattern.charAt(0) === '.' ? '' : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';
          var self = this;
          function clearStateChar() {
            if (stateChar) {
              switch (stateChar) {
                case '*':
                  re += star;
                  hasMagic = true;
                  break;
                case '?':
                  re += qmark;
                  hasMagic = true;
                  break;
                default:
                  re += '\\' + stateChar;
                  break;
              }
              self.debug('clearStateChar %j %j', stateChar, re);
              stateChar = false;
            }
          }
          for (var i = 0,
              len = pattern.length,
              c; (i < len) && (c = pattern.charAt(i)); i++) {
            this.debug('%s\t%s %s %j', pattern, i, re, c);
            if (escaping && reSpecials[c]) {
              re += '\\' + c;
              escaping = false;
              continue;
            }
            switch (c) {
              case '/':
                return false;
              case '\\':
                clearStateChar();
                escaping = true;
                continue;
              case '?':
              case '*':
              case '+':
              case '@':
              case '!':
                this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);
                if (inClass) {
                  this.debug('  in class');
                  if (c === '!' && i === classStart + 1)
                    c = '^';
                  re += c;
                  continue;
                }
                self.debug('call clearStateChar %j', stateChar);
                clearStateChar();
                stateChar = c;
                if (options.noext)
                  clearStateChar();
                continue;
              case '(':
                if (inClass) {
                  re += '(';
                  continue;
                }
                if (!stateChar) {
                  re += '\\(';
                  continue;
                }
                plType = stateChar;
                patternListStack.push({
                  type: plType,
                  start: i - 1,
                  reStart: re.length
                });
                re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
                this.debug('plType %j %j', stateChar, re);
                stateChar = false;
                continue;
              case ')':
                if (inClass || !patternListStack.length) {
                  re += '\\)';
                  continue;
                }
                clearStateChar();
                hasMagic = true;
                re += ')';
                var pl = patternListStack.pop();
                plType = pl.type;
                switch (plType) {
                  case '!':
                    negativeLists.push(pl);
                    re += ')[^/]*?)';
                    pl.reEnd = re.length;
                    break;
                  case '?':
                  case '+':
                  case '*':
                    re += plType;
                    break;
                  case '@':
                    break;
                }
                continue;
              case '|':
                if (inClass || !patternListStack.length || escaping) {
                  re += '\\|';
                  escaping = false;
                  continue;
                }
                clearStateChar();
                re += '|';
                continue;
              case '[':
                clearStateChar();
                if (inClass) {
                  re += '\\' + c;
                  continue;
                }
                inClass = true;
                classStart = i;
                reClassStart = re.length;
                re += c;
                continue;
              case ']':
                if (i === classStart + 1 || !inClass) {
                  re += '\\' + c;
                  escaping = false;
                  continue;
                }
                if (inClass) {
                  var cs = pattern.substring(classStart + 1, i);
                  try {
                    RegExp('[' + cs + ']');
                  } catch (er) {
                    var sp = this.parse(cs, SUBPARSE);
                    re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
                    hasMagic = hasMagic || sp[1];
                    inClass = false;
                    continue;
                  }
                }
                hasMagic = true;
                inClass = false;
                re += c;
                continue;
              default:
                clearStateChar();
                if (escaping) {
                  escaping = false;
                } else if (reSpecials[c] && !(c === '^' && inClass)) {
                  re += '\\';
                }
                re += c;
            }
          }
          if (inClass) {
            cs = pattern.substr(classStart + 1);
            sp = this.parse(cs, SUBPARSE);
            re = re.substr(0, reClassStart) + '\\[' + sp[0];
            hasMagic = hasMagic || sp[1];
          }
          for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
            var tail = re.slice(pl.reStart + 3);
            tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function(_, $1, $2) {
              if (!$2) {
                $2 = '\\';
              }
              return $1 + $1 + $2 + '|';
            });
            this.debug('tail=%j\n   %s', tail, tail);
            var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;
            hasMagic = true;
            re = re.slice(0, pl.reStart) + t + '\\(' + tail;
          }
          clearStateChar();
          if (escaping) {
            re += '\\\\';
          }
          var addPatternStart = false;
          switch (re.charAt(0)) {
            case '.':
            case '[':
            case '(':
              addPatternStart = true;
          }
          for (var n = negativeLists.length - 1; n > -1; n--) {
            var nl = negativeLists[n];
            var nlBefore = re.slice(0, nl.reStart);
            var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
            var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
            var nlAfter = re.slice(nl.reEnd);
            nlLast += nlAfter;
            var openParensBefore = nlBefore.split('(').length - 1;
            var cleanAfter = nlAfter;
            for (i = 0; i < openParensBefore; i++) {
              cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
            }
            nlAfter = cleanAfter;
            var dollar = '';
            if (nlAfter === '' && isSub !== SUBPARSE) {
              dollar = '$';
            }
            var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
            re = newRe;
          }
          if (re !== '' && hasMagic) {
            re = '(?=.)' + re;
          }
          if (addPatternStart) {
            re = patternStart + re;
          }
          if (isSub === SUBPARSE) {
            return [re, hasMagic];
          }
          if (!hasMagic) {
            return globUnescape(pattern);
          }
          var flags = options.nocase ? 'i' : '';
          var regExp = new RegExp('^' + re + '$', flags);
          regExp._glob = pattern;
          regExp._src = re;
          return regExp;
        }
        minimatch.makeRe = function(pattern, options) {
          return new Minimatch(pattern, options || {}).makeRe();
        };
        Minimatch.prototype.makeRe = makeRe;
        function makeRe() {
          if (this.regexp || this.regexp === false)
            return this.regexp;
          var set = this.set;
          if (!set.length) {
            this.regexp = false;
            return this.regexp;
          }
          var options = this.options;
          var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
          var flags = options.nocase ? 'i' : '';
          var re = set.map(function(pattern) {
            return pattern.map(function(p) {
              return (p === GLOBSTAR) ? twoStar : (typeof p === 'string') ? regExpEscape(p) : p._src;
            }).join('\\\/');
          }).join('|');
          re = '^(?:' + re + ')$';
          if (this.negate)
            re = '^(?!' + re + ').*$';
          try {
            this.regexp = new RegExp(re, flags);
          } catch (ex) {
            this.regexp = false;
          }
          return this.regexp;
        }
        minimatch.match = function(list, pattern, options) {
          options = options || {};
          var mm = new Minimatch(pattern, options);
          list = list.filter(function(f) {
            return mm.match(f);
          });
          if (mm.options.nonull && !list.length) {
            list.push(pattern);
          }
          return list;
        };
        Minimatch.prototype.match = match;
        function match(f, partial) {
          this.debug('match', f, this.pattern);
          if (this.comment)
            return false;
          if (this.empty)
            return f === '';
          if (f === '/' && partial)
            return true;
          var options = this.options;
          if (path.sep !== '/') {
            f = f.split(path.sep).join('/');
          }
          f = f.split(slashSplit);
          this.debug(this.pattern, 'split', f);
          var set = this.set;
          this.debug(this.pattern, 'set', set);
          var filename;
          var i;
          for (i = f.length - 1; i >= 0; i--) {
            filename = f[i];
            if (filename)
              break;
          }
          for (i = 0; i < set.length; i++) {
            var pattern = set[i];
            var file = f;
            if (options.matchBase && pattern.length === 1) {
              file = [filename];
            }
            var hit = this.matchOne(file, pattern, partial);
            if (hit) {
              if (options.flipNegate)
                return true;
              return !this.negate;
            }
          }
          if (options.flipNegate)
            return false;
          return this.negate;
        }
        Minimatch.prototype.matchOne = function(file, pattern, partial) {
          var options = this.options;
          this.debug('matchOne', {
            'this': this,
            file: file,
            pattern: pattern
          });
          this.debug('matchOne', file.length, pattern.length);
          for (var fi = 0,
              pi = 0,
              fl = file.length,
              pl = pattern.length; (fi < fl) && (pi < pl); fi++, pi++) {
            this.debug('matchOne loop');
            var p = pattern[pi];
            var f = file[fi];
            this.debug(pattern, p, f);
            if (p === false)
              return false;
            if (p === GLOBSTAR) {
              this.debug('GLOBSTAR', [pattern, p, f]);
              var fr = fi;
              var pr = pi + 1;
              if (pr === pl) {
                this.debug('** at the end');
                for (; fi < fl; fi++) {
                  if (file[fi] === '.' || file[fi] === '..' || (!options.dot && file[fi].charAt(0) === '.'))
                    return false;
                }
                return true;
              }
              while (fr < fl) {
                var swallowee = file[fr];
                this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                  this.debug('globstar found match!', fr, fl, swallowee);
                  return true;
                } else {
                  if (swallowee === '.' || swallowee === '..' || (!options.dot && swallowee.charAt(0) === '.')) {
                    this.debug('dot detected!', file, fr, pattern, pr);
                    break;
                  }
                  this.debug('globstar swallow a segment, and continue');
                  fr++;
                }
              }
              if (partial) {
                this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
                if (fr === fl)
                  return true;
              }
              return false;
            }
            var hit;
            if (typeof p === 'string') {
              if (options.nocase) {
                hit = f.toLowerCase() === p.toLowerCase();
              } else {
                hit = f === p;
              }
              this.debug('string match', p, f, hit);
            } else {
              hit = f.match(p);
              this.debug('pattern match', p, f, hit);
            }
            if (!hit)
              return false;
          }
          if (fi === fl && pi === pl) {
            return true;
          } else if (fi === fl) {
            return partial;
          } else if (pi === pl) {
            var emptyFileEnd = (fi === fl - 1) && (file[fi] === '');
            return emptyFileEnd;
          }
          throw new Error('wtf?');
        };
        function globUnescape(s) {
          return s.replace(/\\(.)/g, '$1');
        }
        function regExpEscape(s) {
          return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }
      }, {
        "brace-expansion": 243,
        "path": 13
      }],
      243: [function(require, module, exports) {
        var concatMap = require('concat-map');
        var balanced = require('balanced-match');
        module.exports = expandTop;
        var escSlash = '\0SLASH' + Math.random() + '\0';
        var escOpen = '\0OPEN' + Math.random() + '\0';
        var escClose = '\0CLOSE' + Math.random() + '\0';
        var escComma = '\0COMMA' + Math.random() + '\0';
        var escPeriod = '\0PERIOD' + Math.random() + '\0';
        function numeric(str) {
          return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
        }
        function escapeBraces(str) {
          return str.split('\\\\').join(escSlash).split('\\{').join(escOpen).split('\\}').join(escClose).split('\\,').join(escComma).split('\\.').join(escPeriod);
        }
        function unescapeBraces(str) {
          return str.split(escSlash).join('\\').split(escOpen).join('{').split(escClose).join('}').split(escComma).join(',').split(escPeriod).join('.');
        }
        function parseCommaParts(str) {
          if (!str)
            return [''];
          var parts = [];
          var m = balanced('{', '}', str);
          if (!m)
            return str.split(',');
          var pre = m.pre;
          var body = m.body;
          var post = m.post;
          var p = pre.split(',');
          p[p.length - 1] += '{' + body + '}';
          var postParts = parseCommaParts(post);
          if (post.length) {
            p[p.length - 1] += postParts.shift();
            p.push.apply(p, postParts);
          }
          parts.push.apply(parts, p);
          return parts;
        }
        function expandTop(str) {
          if (!str)
            return [];
          return expand(escapeBraces(str), true).map(unescapeBraces);
        }
        function identity(e) {
          return e;
        }
        function embrace(str) {
          return '{' + str + '}';
        }
        function isPadded(el) {
          return /^-?0\d/.test(el);
        }
        function lte(i, y) {
          return i <= y;
        }
        function gte(i, y) {
          return i >= y;
        }
        function expand(str, isTop) {
          var expansions = [];
          var m = balanced('{', '}', str);
          if (!m || /\$$/.test(m.pre))
            return [str];
          var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
          var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
          var isSequence = isNumericSequence || isAlphaSequence;
          var isOptions = /^(.*,)+(.+)?$/.test(m.body);
          if (!isSequence && !isOptions) {
            if (m.post.match(/,.*}/)) {
              str = m.pre + '{' + m.body + escClose + m.post;
              return expand(str);
            }
            return [str];
          }
          var n;
          if (isSequence) {
            n = m.body.split(/\.\./);
          } else {
            n = parseCommaParts(m.body);
            if (n.length === 1) {
              n = expand(n[0], false).map(embrace);
              if (n.length === 1) {
                var post = m.post.length ? expand(m.post, false) : [''];
                return post.map(function(p) {
                  return m.pre + n[0] + p;
                });
              }
            }
          }
          var pre = m.pre;
          var post = m.post.length ? expand(m.post, false) : [''];
          var N;
          if (isSequence) {
            var x = numeric(n[0]);
            var y = numeric(n[1]);
            var width = Math.max(n[0].length, n[1].length);
            var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
            var test = lte;
            var reverse = y < x;
            if (reverse) {
              incr *= -1;
              test = gte;
            }
            var pad = n.some(isPadded);
            N = [];
            for (var i = x; test(i, y); i += incr) {
              var c;
              if (isAlphaSequence) {
                c = String.fromCharCode(i);
                if (c === '\\')
                  c = '';
              } else {
                c = String(i);
                if (pad) {
                  var need = width - c.length;
                  if (need > 0) {
                    var z = new Array(need + 1).join('0');
                    if (i < 0)
                      c = '-' + z + c.slice(1);
                    else
                      c = z + c;
                  }
                }
              }
              N.push(c);
            }
          } else {
            N = concatMap(n, function(el) {
              return expand(el, false);
            });
          }
          for (var j = 0; j < N.length; j++) {
            for (var k = 0; k < post.length; k++) {
              var expansion = pre + N[j] + post[k];
              if (!isTop || isSequence || expansion)
                expansions.push(expansion);
            }
          }
          return expansions;
        }
      }, {
        "balanced-match": 244,
        "concat-map": 245
      }],
      244: [function(require, module, exports) {
        module.exports = balanced;
        function balanced(a, b, str) {
          var bal = 0;
          var m = {};
          var ended = false;
          for (var i = 0; i < str.length; i++) {
            if (a == str.substr(i, a.length)) {
              if (!('start' in m))
                m.start = i;
              bal++;
            } else if (b == str.substr(i, b.length) && 'start' in m) {
              ended = true;
              bal--;
              if (!bal) {
                m.end = i;
                m.pre = str.substr(0, m.start);
                m.body = (m.end - m.start > 1) ? str.substring(m.start + a.length, m.end) : '';
                m.post = str.slice(m.end + b.length);
                return m;
              }
            }
          }
          if (bal && ended) {
            var start = m.start + a.length;
            m = balanced(a, b, str.substr(start));
            if (m) {
              m.start += start;
              m.end += start;
              m.pre = str.slice(0, start) + m.pre;
            }
            return m;
          }
        }
      }, {}],
      245: [function(require, module, exports) {
        module.exports = function(xs, fn) {
          var res = [];
          for (var i = 0; i < xs.length; i++) {
            var x = fn(xs[i], i);
            if (isArray(x))
              res.push.apply(res, x);
            else
              res.push(x);
          }
          return res;
        };
        var isArray = Array.isArray || function(xs) {
          return Object.prototype.toString.call(xs) === '[object Array]';
        };
      }, {}],
      246: [function(require, module, exports) {
        var Readable = require('readable-stream').Readable;
        var isReadable = require('isstream').isReadable;
        var util = require('util');
        function addStream(streams, stream) {
          if (!isReadable(stream))
            throw new Error('All input streams must be readable');
          var self = this;
          stream._buffer = [];
          stream.on('readable', function() {
            var chunk = stream.read();
            if (chunk === null)
              return;
            if (this === streams[0])
              self.push(chunk);
            else
              this._buffer.push(chunk);
          });
          stream.on('end', function() {
            for (var stream = streams[0]; stream && stream._readableState.ended; stream = streams[0]) {
              while (stream._buffer.length)
                self.push(stream._buffer.shift());
              streams.shift();
            }
            if (!streams.length)
              self.push(null);
          });
          stream.on('error', this.emit.bind(this, 'error'));
          streams.push(stream);
        }
        function OrderedStreams(streams, options) {
          if (!(this instanceof (OrderedStreams))) {
            return new OrderedStreams(streams, options);
          }
          streams = streams || [];
          options = options || {};
          options.objectMode = true;
          Readable.call(this, options);
          if (!Array.isArray(streams))
            streams = [streams];
          if (!streams.length)
            return this.push(null);
          var addStream_bind = addStream.bind(this, []);
          streams.forEach(function(item) {
            if (Array.isArray(item))
              item.forEach(addStream_bind);
            else
              addStream_bind(item);
          });
        }
        util.inherits(OrderedStreams, Readable);
        OrderedStreams.prototype._read = function() {};
        module.exports = OrderedStreams;
      }, {
        "isstream": 247,
        "readable-stream": 257,
        "util": 46
      }],
      247: [function(require, module, exports) {
        var stream = require('stream');
        function isStream(obj) {
          return obj instanceof stream.Stream;
        }
        function isReadable(obj) {
          return isStream(obj) && typeof obj._read == 'function' && typeof obj._readableState == 'object';
        }
        function isWritable(obj) {
          return isStream(obj) && typeof obj._write == 'function' && typeof obj._writableState == 'object';
        }
        function isDuplex(obj) {
          return isReadable(obj) && isWritable(obj);
        }
        module.exports = isStream;
        module.exports.isReadable = isReadable;
        module.exports.isWritable = isWritable;
        module.exports.isDuplex = isDuplex;
      }, {"stream": 32}],
      248: [function(require, module, exports) {
        (function(process) {
          module.exports = Duplex;
          var objectKeys = Object.keys || function(obj) {
            var keys = [];
            for (var key in obj)
              keys.push(key);
            return keys;
          };
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var Readable = require('./_stream_readable');
          var Writable = require('./_stream_writable');
          util.inherits(Duplex, Readable);
          forEach(objectKeys(Writable.prototype), function(method) {
            if (!Duplex.prototype[method])
              Duplex.prototype[method] = Writable.prototype[method];
          });
          function Duplex(options) {
            if (!(this instanceof Duplex))
              return new Duplex(options);
            Readable.call(this, options);
            Writable.call(this, options);
            if (options && options.readable === false)
              this.readable = false;
            if (options && options.writable === false)
              this.writable = false;
            this.allowHalfOpen = true;
            if (options && options.allowHalfOpen === false)
              this.allowHalfOpen = false;
            this.once('end', onend);
          }
          function onend() {
            if (this.allowHalfOpen || this._writableState.ended)
              return;
            process.nextTick(this.end.bind(this));
          }
          function forEach(xs, f) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              f(xs[i], i);
            }
          }
        }).call(this, require('_process'));
      }, {
        "./_stream_readable": 250,
        "./_stream_writable": 252,
        "_process": 14,
        "core-util-is": 253,
        "inherits": 254
      }],
      249: [function(require, module, exports) {
        module.exports = PassThrough;
        var Transform = require('./_stream_transform');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        util.inherits(PassThrough, Transform);
        function PassThrough(options) {
          if (!(this instanceof PassThrough))
            return new PassThrough(options);
          Transform.call(this, options);
        }
        PassThrough.prototype._transform = function(chunk, encoding, cb) {
          cb(null, chunk);
        };
      }, {
        "./_stream_transform": 251,
        "core-util-is": 253,
        "inherits": 254
      }],
      250: [function(require, module, exports) {
        (function(process) {
          module.exports = Readable;
          var isArray = require('isarray');
          var Buffer = require('buffer').Buffer;
          Readable.ReadableState = ReadableState;
          var EE = require('events').EventEmitter;
          if (!EE.listenerCount)
            EE.listenerCount = function(emitter, type) {
              return emitter.listeners(type).length;
            };
          var Stream = require('stream');
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var StringDecoder;
          var debug = require('util');
          if (debug && debug.debuglog) {
            debug = debug.debuglog('stream');
          } else {
            debug = function() {};
          }
          util.inherits(Readable, Stream);
          function ReadableState(options, stream) {
            var Duplex = require('./_stream_duplex');
            options = options || {};
            var hwm = options.highWaterMark;
            var defaultHwm = options.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
            this.highWaterMark = ~~this.highWaterMark;
            this.buffer = [];
            this.length = 0;
            this.pipes = null;
            this.pipesCount = 0;
            this.flowing = null;
            this.ended = false;
            this.endEmitted = false;
            this.reading = false;
            this.sync = true;
            this.needReadable = false;
            this.emittedReadable = false;
            this.readableListening = false;
            this.objectMode = !!options.objectMode;
            if (stream instanceof Duplex)
              this.objectMode = this.objectMode || !!options.readableObjectMode;
            this.defaultEncoding = options.defaultEncoding || 'utf8';
            this.ranOut = false;
            this.awaitDrain = 0;
            this.readingMore = false;
            this.decoder = null;
            this.encoding = null;
            if (options.encoding) {
              if (!StringDecoder)
                StringDecoder = require('string_decoder').StringDecoder;
              this.decoder = new StringDecoder(options.encoding);
              this.encoding = options.encoding;
            }
          }
          function Readable(options) {
            var Duplex = require('./_stream_duplex');
            if (!(this instanceof Readable))
              return new Readable(options);
            this._readableState = new ReadableState(options, this);
            this.readable = true;
            Stream.call(this);
          }
          Readable.prototype.push = function(chunk, encoding) {
            var state = this._readableState;
            if (util.isString(chunk) && !state.objectMode) {
              encoding = encoding || state.defaultEncoding;
              if (encoding !== state.encoding) {
                chunk = new Buffer(chunk, encoding);
                encoding = '';
              }
            }
            return readableAddChunk(this, state, chunk, encoding, false);
          };
          Readable.prototype.unshift = function(chunk) {
            var state = this._readableState;
            return readableAddChunk(this, state, chunk, '', true);
          };
          function readableAddChunk(stream, state, chunk, encoding, addToFront) {
            var er = chunkInvalid(state, chunk);
            if (er) {
              stream.emit('error', er);
            } else if (util.isNullOrUndefined(chunk)) {
              state.reading = false;
              if (!state.ended)
                onEofChunk(stream, state);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (state.ended && !addToFront) {
                var e = new Error('stream.push() after EOF');
                stream.emit('error', e);
              } else if (state.endEmitted && addToFront) {
                var e = new Error('stream.unshift() after end event');
                stream.emit('error', e);
              } else {
                if (state.decoder && !addToFront && !encoding)
                  chunk = state.decoder.write(chunk);
                if (!addToFront)
                  state.reading = false;
                if (state.flowing && state.length === 0 && !state.sync) {
                  stream.emit('data', chunk);
                  stream.read(0);
                } else {
                  state.length += state.objectMode ? 1 : chunk.length;
                  if (addToFront)
                    state.buffer.unshift(chunk);
                  else
                    state.buffer.push(chunk);
                  if (state.needReadable)
                    emitReadable(stream);
                }
                maybeReadMore(stream, state);
              }
            } else if (!addToFront) {
              state.reading = false;
            }
            return needMoreData(state);
          }
          function needMoreData(state) {
            return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
          }
          Readable.prototype.setEncoding = function(enc) {
            if (!StringDecoder)
              StringDecoder = require('string_decoder').StringDecoder;
            this._readableState.decoder = new StringDecoder(enc);
            this._readableState.encoding = enc;
            return this;
          };
          var MAX_HWM = 0x800000;
          function roundUpToNextPowerOf2(n) {
            if (n >= MAX_HWM) {
              n = MAX_HWM;
            } else {
              n--;
              for (var p = 1; p < 32; p <<= 1)
                n |= n >> p;
              n++;
            }
            return n;
          }
          function howMuchToRead(n, state) {
            if (state.length === 0 && state.ended)
              return 0;
            if (state.objectMode)
              return n === 0 ? 0 : 1;
            if (isNaN(n) || util.isNull(n)) {
              if (state.flowing && state.buffer.length)
                return state.buffer[0].length;
              else
                return state.length;
            }
            if (n <= 0)
              return 0;
            if (n > state.highWaterMark)
              state.highWaterMark = roundUpToNextPowerOf2(n);
            if (n > state.length) {
              if (!state.ended) {
                state.needReadable = true;
                return 0;
              } else
                return state.length;
            }
            return n;
          }
          Readable.prototype.read = function(n) {
            debug('read', n);
            var state = this._readableState;
            var nOrig = n;
            if (!util.isNumber(n) || n > 0)
              state.emittedReadable = false;
            if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
              debug('read: emitReadable', state.length, state.ended);
              if (state.length === 0 && state.ended)
                endReadable(this);
              else
                emitReadable(this);
              return null;
            }
            n = howMuchToRead(n, state);
            if (n === 0 && state.ended) {
              if (state.length === 0)
                endReadable(this);
              return null;
            }
            var doRead = state.needReadable;
            debug('need readable', doRead);
            if (state.length === 0 || state.length - n < state.highWaterMark) {
              doRead = true;
              debug('length less than watermark', doRead);
            }
            if (state.ended || state.reading) {
              doRead = false;
              debug('reading or ended', doRead);
            }
            if (doRead) {
              debug('do read');
              state.reading = true;
              state.sync = true;
              if (state.length === 0)
                state.needReadable = true;
              this._read(state.highWaterMark);
              state.sync = false;
            }
            if (doRead && !state.reading)
              n = howMuchToRead(nOrig, state);
            var ret;
            if (n > 0)
              ret = fromList(n, state);
            else
              ret = null;
            if (util.isNull(ret)) {
              state.needReadable = true;
              n = 0;
            }
            state.length -= n;
            if (state.length === 0 && !state.ended)
              state.needReadable = true;
            if (nOrig !== n && state.ended && state.length === 0)
              endReadable(this);
            if (!util.isNull(ret))
              this.emit('data', ret);
            return ret;
          };
          function chunkInvalid(state, chunk) {
            var er = null;
            if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
              er = new TypeError('Invalid non-string/buffer chunk');
            }
            return er;
          }
          function onEofChunk(stream, state) {
            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) {
                state.buffer.push(chunk);
                state.length += state.objectMode ? 1 : chunk.length;
              }
            }
            state.ended = true;
            emitReadable(stream);
          }
          function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = false;
            if (!state.emittedReadable) {
              debug('emitReadable', state.flowing);
              state.emittedReadable = true;
              if (state.sync)
                process.nextTick(function() {
                  emitReadable_(stream);
                });
              else
                emitReadable_(stream);
            }
          }
          function emitReadable_(stream) {
            debug('emit readable');
            stream.emit('readable');
            flow(stream);
          }
          function maybeReadMore(stream, state) {
            if (!state.readingMore) {
              state.readingMore = true;
              process.nextTick(function() {
                maybeReadMore_(stream, state);
              });
            }
          }
          function maybeReadMore_(stream, state) {
            var len = state.length;
            while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
              debug('maybeReadMore read 0');
              stream.read(0);
              if (len === state.length)
                break;
              else
                len = state.length;
            }
            state.readingMore = false;
          }
          Readable.prototype._read = function(n) {
            this.emit('error', new Error('not implemented'));
          };
          Readable.prototype.pipe = function(dest, pipeOpts) {
            var src = this;
            var state = this._readableState;
            switch (state.pipesCount) {
              case 0:
                state.pipes = dest;
                break;
              case 1:
                state.pipes = [state.pipes, dest];
                break;
              default:
                state.pipes.push(dest);
                break;
            }
            state.pipesCount += 1;
            debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
            var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
            var endFn = doEnd ? onend : cleanup;
            if (state.endEmitted)
              process.nextTick(endFn);
            else
              src.once('end', endFn);
            dest.on('unpipe', onunpipe);
            function onunpipe(readable) {
              debug('onunpipe');
              if (readable === src) {
                cleanup();
              }
            }
            function onend() {
              debug('onend');
              dest.end();
            }
            var ondrain = pipeOnDrain(src);
            dest.on('drain', ondrain);
            function cleanup() {
              debug('cleanup');
              dest.removeListener('close', onclose);
              dest.removeListener('finish', onfinish);
              dest.removeListener('drain', ondrain);
              dest.removeListener('error', onerror);
              dest.removeListener('unpipe', onunpipe);
              src.removeListener('end', onend);
              src.removeListener('end', cleanup);
              src.removeListener('data', ondata);
              if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
                ondrain();
            }
            src.on('data', ondata);
            function ondata(chunk) {
              debug('ondata');
              var ret = dest.write(chunk);
              if (false === ret) {
                debug('false write response, pause', src._readableState.awaitDrain);
                src._readableState.awaitDrain++;
                src.pause();
              }
            }
            function onerror(er) {
              debug('onerror', er);
              unpipe();
              dest.removeListener('error', onerror);
              if (EE.listenerCount(dest, 'error') === 0)
                dest.emit('error', er);
            }
            if (!dest._events || !dest._events.error)
              dest.on('error', onerror);
            else if (isArray(dest._events.error))
              dest._events.error.unshift(onerror);
            else
              dest._events.error = [onerror, dest._events.error];
            function onclose() {
              dest.removeListener('finish', onfinish);
              unpipe();
            }
            dest.once('close', onclose);
            function onfinish() {
              debug('onfinish');
              dest.removeListener('close', onclose);
              unpipe();
            }
            dest.once('finish', onfinish);
            function unpipe() {
              debug('unpipe');
              src.unpipe(dest);
            }
            dest.emit('pipe', src);
            if (!state.flowing) {
              debug('pipe resume');
              src.resume();
            }
            return dest;
          };
          function pipeOnDrain(src) {
            return function() {
              var state = src._readableState;
              debug('pipeOnDrain', state.awaitDrain);
              if (state.awaitDrain)
                state.awaitDrain--;
              if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
                state.flowing = true;
                flow(src);
              }
            };
          }
          Readable.prototype.unpipe = function(dest) {
            var state = this._readableState;
            if (state.pipesCount === 0)
              return this;
            if (state.pipesCount === 1) {
              if (dest && dest !== state.pipes)
                return this;
              if (!dest)
                dest = state.pipes;
              state.pipes = null;
              state.pipesCount = 0;
              state.flowing = false;
              if (dest)
                dest.emit('unpipe', this);
              return this;
            }
            if (!dest) {
              var dests = state.pipes;
              var len = state.pipesCount;
              state.pipes = null;
              state.pipesCount = 0;
              state.flowing = false;
              for (var i = 0; i < len; i++)
                dests[i].emit('unpipe', this);
              return this;
            }
            var i = indexOf(state.pipes, dest);
            if (i === -1)
              return this;
            state.pipes.splice(i, 1);
            state.pipesCount -= 1;
            if (state.pipesCount === 1)
              state.pipes = state.pipes[0];
            dest.emit('unpipe', this);
            return this;
          };
          Readable.prototype.on = function(ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);
            if (ev === 'data' && false !== this._readableState.flowing) {
              this.resume();
            }
            if (ev === 'readable' && this.readable) {
              var state = this._readableState;
              if (!state.readableListening) {
                state.readableListening = true;
                state.emittedReadable = false;
                state.needReadable = true;
                if (!state.reading) {
                  var self = this;
                  process.nextTick(function() {
                    debug('readable nexttick read 0');
                    self.read(0);
                  });
                } else if (state.length) {
                  emitReadable(this, state);
                }
              }
            }
            return res;
          };
          Readable.prototype.addListener = Readable.prototype.on;
          Readable.prototype.resume = function() {
            var state = this._readableState;
            if (!state.flowing) {
              debug('resume');
              state.flowing = true;
              if (!state.reading) {
                debug('resume read 0');
                this.read(0);
              }
              resume(this, state);
            }
            return this;
          };
          function resume(stream, state) {
            if (!state.resumeScheduled) {
              state.resumeScheduled = true;
              process.nextTick(function() {
                resume_(stream, state);
              });
            }
          }
          function resume_(stream, state) {
            state.resumeScheduled = false;
            stream.emit('resume');
            flow(stream);
            if (state.flowing && !state.reading)
              stream.read(0);
          }
          Readable.prototype.pause = function() {
            debug('call pause flowing=%j', this._readableState.flowing);
            if (false !== this._readableState.flowing) {
              debug('pause');
              this._readableState.flowing = false;
              this.emit('pause');
            }
            return this;
          };
          function flow(stream) {
            var state = stream._readableState;
            debug('flow', state.flowing);
            if (state.flowing) {
              do {
                var chunk = stream.read();
              } while (null !== chunk && state.flowing);
            }
          }
          Readable.prototype.wrap = function(stream) {
            var state = this._readableState;
            var paused = false;
            var self = this;
            stream.on('end', function() {
              debug('wrapped end');
              if (state.decoder && !state.ended) {
                var chunk = state.decoder.end();
                if (chunk && chunk.length)
                  self.push(chunk);
              }
              self.push(null);
            });
            stream.on('data', function(chunk) {
              debug('wrapped data');
              if (state.decoder)
                chunk = state.decoder.write(chunk);
              if (!chunk || !state.objectMode && !chunk.length)
                return;
              var ret = self.push(chunk);
              if (!ret) {
                paused = true;
                stream.pause();
              }
            });
            for (var i in stream) {
              if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
                this[i] = function(method) {
                  return function() {
                    return stream[method].apply(stream, arguments);
                  };
                }(i);
              }
            }
            var events = ['error', 'close', 'destroy', 'pause', 'resume'];
            forEach(events, function(ev) {
              stream.on(ev, self.emit.bind(self, ev));
            });
            self._read = function(n) {
              debug('wrapped _read', n);
              if (paused) {
                paused = false;
                stream.resume();
              }
            };
            return self;
          };
          Readable._fromList = fromList;
          function fromList(n, state) {
            var list = state.buffer;
            var length = state.length;
            var stringMode = !!state.decoder;
            var objectMode = !!state.objectMode;
            var ret;
            if (list.length === 0)
              return null;
            if (length === 0)
              ret = null;
            else if (objectMode)
              ret = list.shift();
            else if (!n || n >= length) {
              if (stringMode)
                ret = list.join('');
              else
                ret = Buffer.concat(list, length);
              list.length = 0;
            } else {
              if (n < list[0].length) {
                var buf = list[0];
                ret = buf.slice(0, n);
                list[0] = buf.slice(n);
              } else if (n === list[0].length) {
                ret = list.shift();
              } else {
                if (stringMode)
                  ret = '';
                else
                  ret = new Buffer(n);
                var c = 0;
                for (var i = 0,
                    l = list.length; i < l && c < n; i++) {
                  var buf = list[0];
                  var cpy = Math.min(n - c, buf.length);
                  if (stringMode)
                    ret += buf.slice(0, cpy);
                  else
                    buf.copy(ret, c, 0, cpy);
                  if (cpy < buf.length)
                    list[0] = buf.slice(cpy);
                  else
                    list.shift();
                  c += cpy;
                }
              }
            }
            return ret;
          }
          function endReadable(stream) {
            var state = stream._readableState;
            if (state.length > 0)
              throw new Error('endReadable called on non-empty stream');
            if (!state.endEmitted) {
              state.ended = true;
              process.nextTick(function() {
                if (!state.endEmitted && state.length === 0) {
                  state.endEmitted = true;
                  stream.readable = false;
                  stream.emit('end');
                }
              });
            }
          }
          function forEach(xs, f) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              f(xs[i], i);
            }
          }
          function indexOf(xs, x) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              if (xs[i] === x)
                return i;
            }
            return -1;
          }
        }).call(this, require('_process'));
      }, {
        "./_stream_duplex": 248,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 253,
        "events": 9,
        "inherits": 254,
        "isarray": 255,
        "stream": 32,
        "string_decoder/": 256,
        "util": 3
      }],
      251: [function(require, module, exports) {
        module.exports = Transform;
        var Duplex = require('./_stream_duplex');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        util.inherits(Transform, Duplex);
        function TransformState(options, stream) {
          this.afterTransform = function(er, data) {
            return afterTransform(stream, er, data);
          };
          this.needTransform = false;
          this.transforming = false;
          this.writecb = null;
          this.writechunk = null;
        }
        function afterTransform(stream, er, data) {
          var ts = stream._transformState;
          ts.transforming = false;
          var cb = ts.writecb;
          if (!cb)
            return stream.emit('error', new Error('no writecb in Transform class'));
          ts.writechunk = null;
          ts.writecb = null;
          if (!util.isNullOrUndefined(data))
            stream.push(data);
          if (cb)
            cb(er);
          var rs = stream._readableState;
          rs.reading = false;
          if (rs.needReadable || rs.length < rs.highWaterMark) {
            stream._read(rs.highWaterMark);
          }
        }
        function Transform(options) {
          if (!(this instanceof Transform))
            return new Transform(options);
          Duplex.call(this, options);
          this._transformState = new TransformState(options, this);
          var stream = this;
          this._readableState.needReadable = true;
          this._readableState.sync = false;
          this.once('prefinish', function() {
            if (util.isFunction(this._flush))
              this._flush(function(er) {
                done(stream, er);
              });
            else
              done(stream);
          });
        }
        Transform.prototype.push = function(chunk, encoding) {
          this._transformState.needTransform = false;
          return Duplex.prototype.push.call(this, chunk, encoding);
        };
        Transform.prototype._transform = function(chunk, encoding, cb) {
          throw new Error('not implemented');
        };
        Transform.prototype._write = function(chunk, encoding, cb) {
          var ts = this._transformState;
          ts.writecb = cb;
          ts.writechunk = chunk;
          ts.writeencoding = encoding;
          if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
              this._read(rs.highWaterMark);
          }
        };
        Transform.prototype._read = function(n) {
          var ts = this._transformState;
          if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
            ts.transforming = true;
            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
          } else {
            ts.needTransform = true;
          }
        };
        function done(stream, er) {
          if (er)
            return stream.emit('error', er);
          var ws = stream._writableState;
          var ts = stream._transformState;
          if (ws.length)
            throw new Error('calling transform done when ws.length != 0');
          if (ts.transforming)
            throw new Error('calling transform done when still transforming');
          return stream.push(null);
        }
      }, {
        "./_stream_duplex": 248,
        "core-util-is": 253,
        "inherits": 254
      }],
      252: [function(require, module, exports) {
        (function(process) {
          module.exports = Writable;
          var Buffer = require('buffer').Buffer;
          Writable.WritableState = WritableState;
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var Stream = require('stream');
          util.inherits(Writable, Stream);
          function WriteReq(chunk, encoding, cb) {
            this.chunk = chunk;
            this.encoding = encoding;
            this.callback = cb;
          }
          function WritableState(options, stream) {
            var Duplex = require('./_stream_duplex');
            options = options || {};
            var hwm = options.highWaterMark;
            var defaultHwm = options.objectMode ? 16 : 16 * 1024;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
            this.objectMode = !!options.objectMode;
            if (stream instanceof Duplex)
              this.objectMode = this.objectMode || !!options.writableObjectMode;
            this.highWaterMark = ~~this.highWaterMark;
            this.needDrain = false;
            this.ending = false;
            this.ended = false;
            this.finished = false;
            var noDecode = options.decodeStrings === false;
            this.decodeStrings = !noDecode;
            this.defaultEncoding = options.defaultEncoding || 'utf8';
            this.length = 0;
            this.writing = false;
            this.corked = 0;
            this.sync = true;
            this.bufferProcessing = false;
            this.onwrite = function(er) {
              onwrite(stream, er);
            };
            this.writecb = null;
            this.writelen = 0;
            this.buffer = [];
            this.pendingcb = 0;
            this.prefinished = false;
            this.errorEmitted = false;
          }
          function Writable(options) {
            var Duplex = require('./_stream_duplex');
            if (!(this instanceof Writable) && !(this instanceof Duplex))
              return new Writable(options);
            this._writableState = new WritableState(options, this);
            this.writable = true;
            Stream.call(this);
          }
          Writable.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe. Not readable.'));
          };
          function writeAfterEnd(stream, state, cb) {
            var er = new Error('write after end');
            stream.emit('error', er);
            process.nextTick(function() {
              cb(er);
            });
          }
          function validChunk(stream, state, chunk, cb) {
            var valid = true;
            if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
              var er = new TypeError('Invalid non-string/buffer chunk');
              stream.emit('error', er);
              process.nextTick(function() {
                cb(er);
              });
              valid = false;
            }
            return valid;
          }
          Writable.prototype.write = function(chunk, encoding, cb) {
            var state = this._writableState;
            var ret = false;
            if (util.isFunction(encoding)) {
              cb = encoding;
              encoding = null;
            }
            if (util.isBuffer(chunk))
              encoding = 'buffer';
            else if (!encoding)
              encoding = state.defaultEncoding;
            if (!util.isFunction(cb))
              cb = function() {};
            if (state.ended)
              writeAfterEnd(this, state, cb);
            else if (validChunk(this, state, chunk, cb)) {
              state.pendingcb++;
              ret = writeOrBuffer(this, state, chunk, encoding, cb);
            }
            return ret;
          };
          Writable.prototype.cork = function() {
            var state = this._writableState;
            state.corked++;
          };
          Writable.prototype.uncork = function() {
            var state = this._writableState;
            if (state.corked) {
              state.corked--;
              if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)
                clearBuffer(this, state);
            }
          };
          function decodeChunk(state, chunk, encoding) {
            if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
              chunk = new Buffer(chunk, encoding);
            }
            return chunk;
          }
          function writeOrBuffer(stream, state, chunk, encoding, cb) {
            chunk = decodeChunk(state, chunk, encoding);
            if (util.isBuffer(chunk))
              encoding = 'buffer';
            var len = state.objectMode ? 1 : chunk.length;
            state.length += len;
            var ret = state.length < state.highWaterMark;
            if (!ret)
              state.needDrain = true;
            if (state.writing || state.corked)
              state.buffer.push(new WriteReq(chunk, encoding, cb));
            else
              doWrite(stream, state, false, len, chunk, encoding, cb);
            return ret;
          }
          function doWrite(stream, state, writev, len, chunk, encoding, cb) {
            state.writelen = len;
            state.writecb = cb;
            state.writing = true;
            state.sync = true;
            if (writev)
              stream._writev(chunk, state.onwrite);
            else
              stream._write(chunk, encoding, state.onwrite);
            state.sync = false;
          }
          function onwriteError(stream, state, sync, er, cb) {
            if (sync)
              process.nextTick(function() {
                state.pendingcb--;
                cb(er);
              });
            else {
              state.pendingcb--;
              cb(er);
            }
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
          }
          function onwriteStateUpdate(state) {
            state.writing = false;
            state.writecb = null;
            state.length -= state.writelen;
            state.writelen = 0;
          }
          function onwrite(stream, er) {
            var state = stream._writableState;
            var sync = state.sync;
            var cb = state.writecb;
            onwriteStateUpdate(state);
            if (er)
              onwriteError(stream, state, sync, er, cb);
            else {
              var finished = needFinish(stream, state);
              if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
                clearBuffer(stream, state);
              }
              if (sync) {
                process.nextTick(function() {
                  afterWrite(stream, state, finished, cb);
                });
              } else {
                afterWrite(stream, state, finished, cb);
              }
            }
          }
          function afterWrite(stream, state, finished, cb) {
            if (!finished)
              onwriteDrain(stream, state);
            state.pendingcb--;
            cb();
            finishMaybe(stream, state);
          }
          function onwriteDrain(stream, state) {
            if (state.length === 0 && state.needDrain) {
              state.needDrain = false;
              stream.emit('drain');
            }
          }
          function clearBuffer(stream, state) {
            state.bufferProcessing = true;
            if (stream._writev && state.buffer.length > 1) {
              var cbs = [];
              for (var c = 0; c < state.buffer.length; c++)
                cbs.push(state.buffer[c].callback);
              state.pendingcb++;
              doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
                for (var i = 0; i < cbs.length; i++) {
                  state.pendingcb--;
                  cbs[i](err);
                }
              });
              state.buffer = [];
            } else {
              for (var c = 0; c < state.buffer.length; c++) {
                var entry = state.buffer[c];
                var chunk = entry.chunk;
                var encoding = entry.encoding;
                var cb = entry.callback;
                var len = state.objectMode ? 1 : chunk.length;
                doWrite(stream, state, false, len, chunk, encoding, cb);
                if (state.writing) {
                  c++;
                  break;
                }
              }
              if (c < state.buffer.length)
                state.buffer = state.buffer.slice(c);
              else
                state.buffer.length = 0;
            }
            state.bufferProcessing = false;
          }
          Writable.prototype._write = function(chunk, encoding, cb) {
            cb(new Error('not implemented'));
          };
          Writable.prototype._writev = null;
          Writable.prototype.end = function(chunk, encoding, cb) {
            var state = this._writableState;
            if (util.isFunction(chunk)) {
              cb = chunk;
              chunk = null;
              encoding = null;
            } else if (util.isFunction(encoding)) {
              cb = encoding;
              encoding = null;
            }
            if (!util.isNullOrUndefined(chunk))
              this.write(chunk, encoding);
            if (state.corked) {
              state.corked = 1;
              this.uncork();
            }
            if (!state.ending && !state.finished)
              endWritable(this, state, cb);
          };
          function needFinish(stream, state) {
            return (state.ending && state.length === 0 && !state.finished && !state.writing);
          }
          function prefinish(stream, state) {
            if (!state.prefinished) {
              state.prefinished = true;
              stream.emit('prefinish');
            }
          }
          function finishMaybe(stream, state) {
            var need = needFinish(stream, state);
            if (need) {
              if (state.pendingcb === 0) {
                prefinish(stream, state);
                state.finished = true;
                stream.emit('finish');
              } else
                prefinish(stream, state);
            }
            return need;
          }
          function endWritable(stream, state, cb) {
            state.ending = true;
            finishMaybe(stream, state);
            if (cb) {
              if (state.finished)
                process.nextTick(cb);
              else
                stream.once('finish', cb);
            }
            state.ended = true;
          }
        }).call(this, require('_process'));
      }, {
        "./_stream_duplex": 248,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 253,
        "inherits": 254,
        "stream": 32
      }],
      253: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      254: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      255: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      256: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      257: [function(require, module, exports) {
        exports = module.exports = require('./lib/_stream_readable');
        exports.Stream = require('stream');
        exports.Readable = exports;
        exports.Writable = require('./lib/_stream_writable');
        exports.Duplex = require('./lib/_stream_duplex');
        exports.Transform = require('./lib/_stream_transform');
        exports.PassThrough = require('./lib/_stream_passthrough');
      }, {
        "./lib/_stream_duplex.js": 248,
        "./lib/_stream_passthrough.js": 249,
        "./lib/_stream_readable.js": 250,
        "./lib/_stream_transform.js": 251,
        "./lib/_stream_writable.js": 252,
        "stream": 32
      }],
      258: [function(require, module, exports) {
        arguments[4][248][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 259,
        "./_stream_writable": 261,
        "_process": 14,
        "core-util-is": 262,
        "dup": 248,
        "inherits": 263
      }],
      259: [function(require, module, exports) {
        (function(process) {
          module.exports = Readable;
          var isArray = require('isarray');
          var Buffer = require('buffer').Buffer;
          Readable.ReadableState = ReadableState;
          var EE = require('events').EventEmitter;
          if (!EE.listenerCount)
            EE.listenerCount = function(emitter, type) {
              return emitter.listeners(type).length;
            };
          var Stream = require('stream');
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var StringDecoder;
          util.inherits(Readable, Stream);
          function ReadableState(options, stream) {
            options = options || {};
            var hwm = options.highWaterMark;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;
            this.highWaterMark = ~~this.highWaterMark;
            this.buffer = [];
            this.length = 0;
            this.pipes = null;
            this.pipesCount = 0;
            this.flowing = false;
            this.ended = false;
            this.endEmitted = false;
            this.reading = false;
            this.calledRead = false;
            this.sync = true;
            this.needReadable = false;
            this.emittedReadable = false;
            this.readableListening = false;
            this.objectMode = !!options.objectMode;
            this.defaultEncoding = options.defaultEncoding || 'utf8';
            this.ranOut = false;
            this.awaitDrain = 0;
            this.readingMore = false;
            this.decoder = null;
            this.encoding = null;
            if (options.encoding) {
              if (!StringDecoder)
                StringDecoder = require('string_decoder').StringDecoder;
              this.decoder = new StringDecoder(options.encoding);
              this.encoding = options.encoding;
            }
          }
          function Readable(options) {
            if (!(this instanceof Readable))
              return new Readable(options);
            this._readableState = new ReadableState(options, this);
            this.readable = true;
            Stream.call(this);
          }
          Readable.prototype.push = function(chunk, encoding) {
            var state = this._readableState;
            if (typeof chunk === 'string' && !state.objectMode) {
              encoding = encoding || state.defaultEncoding;
              if (encoding !== state.encoding) {
                chunk = new Buffer(chunk, encoding);
                encoding = '';
              }
            }
            return readableAddChunk(this, state, chunk, encoding, false);
          };
          Readable.prototype.unshift = function(chunk) {
            var state = this._readableState;
            return readableAddChunk(this, state, chunk, '', true);
          };
          function readableAddChunk(stream, state, chunk, encoding, addToFront) {
            var er = chunkInvalid(state, chunk);
            if (er) {
              stream.emit('error', er);
            } else if (chunk === null || chunk === undefined) {
              state.reading = false;
              if (!state.ended)
                onEofChunk(stream, state);
            } else if (state.objectMode || chunk && chunk.length > 0) {
              if (state.ended && !addToFront) {
                var e = new Error('stream.push() after EOF');
                stream.emit('error', e);
              } else if (state.endEmitted && addToFront) {
                var e = new Error('stream.unshift() after end event');
                stream.emit('error', e);
              } else {
                if (state.decoder && !addToFront && !encoding)
                  chunk = state.decoder.write(chunk);
                state.length += state.objectMode ? 1 : chunk.length;
                if (addToFront) {
                  state.buffer.unshift(chunk);
                } else {
                  state.reading = false;
                  state.buffer.push(chunk);
                }
                if (state.needReadable)
                  emitReadable(stream);
                maybeReadMore(stream, state);
              }
            } else if (!addToFront) {
              state.reading = false;
            }
            return needMoreData(state);
          }
          function needMoreData(state) {
            return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
          }
          Readable.prototype.setEncoding = function(enc) {
            if (!StringDecoder)
              StringDecoder = require('string_decoder').StringDecoder;
            this._readableState.decoder = new StringDecoder(enc);
            this._readableState.encoding = enc;
          };
          var MAX_HWM = 0x800000;
          function roundUpToNextPowerOf2(n) {
            if (n >= MAX_HWM) {
              n = MAX_HWM;
            } else {
              n--;
              for (var p = 1; p < 32; p <<= 1)
                n |= n >> p;
              n++;
            }
            return n;
          }
          function howMuchToRead(n, state) {
            if (state.length === 0 && state.ended)
              return 0;
            if (state.objectMode)
              return n === 0 ? 0 : 1;
            if (n === null || isNaN(n)) {
              if (state.flowing && state.buffer.length)
                return state.buffer[0].length;
              else
                return state.length;
            }
            if (n <= 0)
              return 0;
            if (n > state.highWaterMark)
              state.highWaterMark = roundUpToNextPowerOf2(n);
            if (n > state.length) {
              if (!state.ended) {
                state.needReadable = true;
                return 0;
              } else
                return state.length;
            }
            return n;
          }
          Readable.prototype.read = function(n) {
            var state = this._readableState;
            state.calledRead = true;
            var nOrig = n;
            var ret;
            if (typeof n !== 'number' || n > 0)
              state.emittedReadable = false;
            if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
              emitReadable(this);
              return null;
            }
            n = howMuchToRead(n, state);
            if (n === 0 && state.ended) {
              ret = null;
              if (state.length > 0 && state.decoder) {
                ret = fromList(n, state);
                state.length -= ret.length;
              }
              if (state.length === 0)
                endReadable(this);
              return ret;
            }
            var doRead = state.needReadable;
            if (state.length - n <= state.highWaterMark)
              doRead = true;
            if (state.ended || state.reading)
              doRead = false;
            if (doRead) {
              state.reading = true;
              state.sync = true;
              if (state.length === 0)
                state.needReadable = true;
              this._read(state.highWaterMark);
              state.sync = false;
            }
            if (doRead && !state.reading)
              n = howMuchToRead(nOrig, state);
            if (n > 0)
              ret = fromList(n, state);
            else
              ret = null;
            if (ret === null) {
              state.needReadable = true;
              n = 0;
            }
            state.length -= n;
            if (state.length === 0 && !state.ended)
              state.needReadable = true;
            if (state.ended && !state.endEmitted && state.length === 0)
              endReadable(this);
            return ret;
          };
          function chunkInvalid(state, chunk) {
            var er = null;
            if (!Buffer.isBuffer(chunk) && 'string' !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
              er = new TypeError('Invalid non-string/buffer chunk');
            }
            return er;
          }
          function onEofChunk(stream, state) {
            if (state.decoder && !state.ended) {
              var chunk = state.decoder.end();
              if (chunk && chunk.length) {
                state.buffer.push(chunk);
                state.length += state.objectMode ? 1 : chunk.length;
              }
            }
            state.ended = true;
            if (state.length > 0)
              emitReadable(stream);
            else
              endReadable(stream);
          }
          function emitReadable(stream) {
            var state = stream._readableState;
            state.needReadable = false;
            if (state.emittedReadable)
              return;
            state.emittedReadable = true;
            if (state.sync)
              process.nextTick(function() {
                emitReadable_(stream);
              });
            else
              emitReadable_(stream);
          }
          function emitReadable_(stream) {
            stream.emit('readable');
          }
          function maybeReadMore(stream, state) {
            if (!state.readingMore) {
              state.readingMore = true;
              process.nextTick(function() {
                maybeReadMore_(stream, state);
              });
            }
          }
          function maybeReadMore_(stream, state) {
            var len = state.length;
            while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
              stream.read(0);
              if (len === state.length)
                break;
              else
                len = state.length;
            }
            state.readingMore = false;
          }
          Readable.prototype._read = function(n) {
            this.emit('error', new Error('not implemented'));
          };
          Readable.prototype.pipe = function(dest, pipeOpts) {
            var src = this;
            var state = this._readableState;
            switch (state.pipesCount) {
              case 0:
                state.pipes = dest;
                break;
              case 1:
                state.pipes = [state.pipes, dest];
                break;
              default:
                state.pipes.push(dest);
                break;
            }
            state.pipesCount += 1;
            var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
            var endFn = doEnd ? onend : cleanup;
            if (state.endEmitted)
              process.nextTick(endFn);
            else
              src.once('end', endFn);
            dest.on('unpipe', onunpipe);
            function onunpipe(readable) {
              if (readable !== src)
                return;
              cleanup();
            }
            function onend() {
              dest.end();
            }
            var ondrain = pipeOnDrain(src);
            dest.on('drain', ondrain);
            function cleanup() {
              dest.removeListener('close', onclose);
              dest.removeListener('finish', onfinish);
              dest.removeListener('drain', ondrain);
              dest.removeListener('error', onerror);
              dest.removeListener('unpipe', onunpipe);
              src.removeListener('end', onend);
              src.removeListener('end', cleanup);
              if (!dest._writableState || dest._writableState.needDrain)
                ondrain();
            }
            function onerror(er) {
              unpipe();
              dest.removeListener('error', onerror);
              if (EE.listenerCount(dest, 'error') === 0)
                dest.emit('error', er);
            }
            if (!dest._events || !dest._events.error)
              dest.on('error', onerror);
            else if (isArray(dest._events.error))
              dest._events.error.unshift(onerror);
            else
              dest._events.error = [onerror, dest._events.error];
            function onclose() {
              dest.removeListener('finish', onfinish);
              unpipe();
            }
            dest.once('close', onclose);
            function onfinish() {
              dest.removeListener('close', onclose);
              unpipe();
            }
            dest.once('finish', onfinish);
            function unpipe() {
              src.unpipe(dest);
            }
            dest.emit('pipe', src);
            if (!state.flowing) {
              this.on('readable', pipeOnReadable);
              state.flowing = true;
              process.nextTick(function() {
                flow(src);
              });
            }
            return dest;
          };
          function pipeOnDrain(src) {
            return function() {
              var dest = this;
              var state = src._readableState;
              state.awaitDrain--;
              if (state.awaitDrain === 0)
                flow(src);
            };
          }
          function flow(src) {
            var state = src._readableState;
            var chunk;
            state.awaitDrain = 0;
            function write(dest, i, list) {
              var written = dest.write(chunk);
              if (false === written) {
                state.awaitDrain++;
              }
            }
            while (state.pipesCount && null !== (chunk = src.read())) {
              if (state.pipesCount === 1)
                write(state.pipes, 0, null);
              else
                forEach(state.pipes, write);
              src.emit('data', chunk);
              if (state.awaitDrain > 0)
                return;
            }
            if (state.pipesCount === 0) {
              state.flowing = false;
              if (EE.listenerCount(src, 'data') > 0)
                emitDataEvents(src);
              return;
            }
            state.ranOut = true;
          }
          function pipeOnReadable() {
            if (this._readableState.ranOut) {
              this._readableState.ranOut = false;
              flow(this);
            }
          }
          Readable.prototype.unpipe = function(dest) {
            var state = this._readableState;
            if (state.pipesCount === 0)
              return this;
            if (state.pipesCount === 1) {
              if (dest && dest !== state.pipes)
                return this;
              if (!dest)
                dest = state.pipes;
              state.pipes = null;
              state.pipesCount = 0;
              this.removeListener('readable', pipeOnReadable);
              state.flowing = false;
              if (dest)
                dest.emit('unpipe', this);
              return this;
            }
            if (!dest) {
              var dests = state.pipes;
              var len = state.pipesCount;
              state.pipes = null;
              state.pipesCount = 0;
              this.removeListener('readable', pipeOnReadable);
              state.flowing = false;
              for (var i = 0; i < len; i++)
                dests[i].emit('unpipe', this);
              return this;
            }
            var i = indexOf(state.pipes, dest);
            if (i === -1)
              return this;
            state.pipes.splice(i, 1);
            state.pipesCount -= 1;
            if (state.pipesCount === 1)
              state.pipes = state.pipes[0];
            dest.emit('unpipe', this);
            return this;
          };
          Readable.prototype.on = function(ev, fn) {
            var res = Stream.prototype.on.call(this, ev, fn);
            if (ev === 'data' && !this._readableState.flowing)
              emitDataEvents(this);
            if (ev === 'readable' && this.readable) {
              var state = this._readableState;
              if (!state.readableListening) {
                state.readableListening = true;
                state.emittedReadable = false;
                state.needReadable = true;
                if (!state.reading) {
                  this.read(0);
                } else if (state.length) {
                  emitReadable(this, state);
                }
              }
            }
            return res;
          };
          Readable.prototype.addListener = Readable.prototype.on;
          Readable.prototype.resume = function() {
            emitDataEvents(this);
            this.read(0);
            this.emit('resume');
          };
          Readable.prototype.pause = function() {
            emitDataEvents(this, true);
            this.emit('pause');
          };
          function emitDataEvents(stream, startPaused) {
            var state = stream._readableState;
            if (state.flowing) {
              throw new Error('Cannot switch to old mode now.');
            }
            var paused = startPaused || false;
            var readable = false;
            stream.readable = true;
            stream.pipe = Stream.prototype.pipe;
            stream.on = stream.addListener = Stream.prototype.on;
            stream.on('readable', function() {
              readable = true;
              var c;
              while (!paused && (null !== (c = stream.read())))
                stream.emit('data', c);
              if (c === null) {
                readable = false;
                stream._readableState.needReadable = true;
              }
            });
            stream.pause = function() {
              paused = true;
              this.emit('pause');
            };
            stream.resume = function() {
              paused = false;
              if (readable)
                process.nextTick(function() {
                  stream.emit('readable');
                });
              else
                this.read(0);
              this.emit('resume');
            };
            stream.emit('readable');
          }
          Readable.prototype.wrap = function(stream) {
            var state = this._readableState;
            var paused = false;
            var self = this;
            stream.on('end', function() {
              if (state.decoder && !state.ended) {
                var chunk = state.decoder.end();
                if (chunk && chunk.length)
                  self.push(chunk);
              }
              self.push(null);
            });
            stream.on('data', function(chunk) {
              if (state.decoder)
                chunk = state.decoder.write(chunk);
              if (state.objectMode && (chunk === null || chunk === undefined))
                return;
              else if (!state.objectMode && (!chunk || !chunk.length))
                return;
              var ret = self.push(chunk);
              if (!ret) {
                paused = true;
                stream.pause();
              }
            });
            for (var i in stream) {
              if (typeof stream[i] === 'function' && typeof this[i] === 'undefined') {
                this[i] = function(method) {
                  return function() {
                    return stream[method].apply(stream, arguments);
                  };
                }(i);
              }
            }
            var events = ['error', 'close', 'destroy', 'pause', 'resume'];
            forEach(events, function(ev) {
              stream.on(ev, self.emit.bind(self, ev));
            });
            self._read = function(n) {
              if (paused) {
                paused = false;
                stream.resume();
              }
            };
            return self;
          };
          Readable._fromList = fromList;
          function fromList(n, state) {
            var list = state.buffer;
            var length = state.length;
            var stringMode = !!state.decoder;
            var objectMode = !!state.objectMode;
            var ret;
            if (list.length === 0)
              return null;
            if (length === 0)
              ret = null;
            else if (objectMode)
              ret = list.shift();
            else if (!n || n >= length) {
              if (stringMode)
                ret = list.join('');
              else
                ret = Buffer.concat(list, length);
              list.length = 0;
            } else {
              if (n < list[0].length) {
                var buf = list[0];
                ret = buf.slice(0, n);
                list[0] = buf.slice(n);
              } else if (n === list[0].length) {
                ret = list.shift();
              } else {
                if (stringMode)
                  ret = '';
                else
                  ret = new Buffer(n);
                var c = 0;
                for (var i = 0,
                    l = list.length; i < l && c < n; i++) {
                  var buf = list[0];
                  var cpy = Math.min(n - c, buf.length);
                  if (stringMode)
                    ret += buf.slice(0, cpy);
                  else
                    buf.copy(ret, c, 0, cpy);
                  if (cpy < buf.length)
                    list[0] = buf.slice(cpy);
                  else
                    list.shift();
                  c += cpy;
                }
              }
            }
            return ret;
          }
          function endReadable(stream) {
            var state = stream._readableState;
            if (state.length > 0)
              throw new Error('endReadable called on non-empty stream');
            if (!state.endEmitted && state.calledRead) {
              state.ended = true;
              process.nextTick(function() {
                if (!state.endEmitted && state.length === 0) {
                  state.endEmitted = true;
                  stream.readable = false;
                  stream.emit('end');
                }
              });
            }
          }
          function forEach(xs, f) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              f(xs[i], i);
            }
          }
          function indexOf(xs, x) {
            for (var i = 0,
                l = xs.length; i < l; i++) {
              if (xs[i] === x)
                return i;
            }
            return -1;
          }
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "buffer": 4,
        "core-util-is": 262,
        "events": 9,
        "inherits": 263,
        "isarray": 264,
        "stream": 32,
        "string_decoder/": 265
      }],
      260: [function(require, module, exports) {
        module.exports = Transform;
        var Duplex = require('./_stream_duplex');
        var util = require('core-util-is');
        util.inherits = require('inherits');
        util.inherits(Transform, Duplex);
        function TransformState(options, stream) {
          this.afterTransform = function(er, data) {
            return afterTransform(stream, er, data);
          };
          this.needTransform = false;
          this.transforming = false;
          this.writecb = null;
          this.writechunk = null;
        }
        function afterTransform(stream, er, data) {
          var ts = stream._transformState;
          ts.transforming = false;
          var cb = ts.writecb;
          if (!cb)
            return stream.emit('error', new Error('no writecb in Transform class'));
          ts.writechunk = null;
          ts.writecb = null;
          if (data !== null && data !== undefined)
            stream.push(data);
          if (cb)
            cb(er);
          var rs = stream._readableState;
          rs.reading = false;
          if (rs.needReadable || rs.length < rs.highWaterMark) {
            stream._read(rs.highWaterMark);
          }
        }
        function Transform(options) {
          if (!(this instanceof Transform))
            return new Transform(options);
          Duplex.call(this, options);
          var ts = this._transformState = new TransformState(options, this);
          var stream = this;
          this._readableState.needReadable = true;
          this._readableState.sync = false;
          this.once('finish', function() {
            if ('function' === typeof this._flush)
              this._flush(function(er) {
                done(stream, er);
              });
            else
              done(stream);
          });
        }
        Transform.prototype.push = function(chunk, encoding) {
          this._transformState.needTransform = false;
          return Duplex.prototype.push.call(this, chunk, encoding);
        };
        Transform.prototype._transform = function(chunk, encoding, cb) {
          throw new Error('not implemented');
        };
        Transform.prototype._write = function(chunk, encoding, cb) {
          var ts = this._transformState;
          ts.writecb = cb;
          ts.writechunk = chunk;
          ts.writeencoding = encoding;
          if (!ts.transforming) {
            var rs = this._readableState;
            if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
              this._read(rs.highWaterMark);
          }
        };
        Transform.prototype._read = function(n) {
          var ts = this._transformState;
          if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
            ts.transforming = true;
            this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
          } else {
            ts.needTransform = true;
          }
        };
        function done(stream, er) {
          if (er)
            return stream.emit('error', er);
          var ws = stream._writableState;
          var rs = stream._readableState;
          var ts = stream._transformState;
          if (ws.length)
            throw new Error('calling transform done when ws.length != 0');
          if (ts.transforming)
            throw new Error('calling transform done when still transforming');
          return stream.push(null);
        }
      }, {
        "./_stream_duplex": 258,
        "core-util-is": 262,
        "inherits": 263
      }],
      261: [function(require, module, exports) {
        (function(process) {
          module.exports = Writable;
          var Buffer = require('buffer').Buffer;
          Writable.WritableState = WritableState;
          var util = require('core-util-is');
          util.inherits = require('inherits');
          var Stream = require('stream');
          util.inherits(Writable, Stream);
          function WriteReq(chunk, encoding, cb) {
            this.chunk = chunk;
            this.encoding = encoding;
            this.callback = cb;
          }
          function WritableState(options, stream) {
            options = options || {};
            var hwm = options.highWaterMark;
            this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;
            this.objectMode = !!options.objectMode;
            this.highWaterMark = ~~this.highWaterMark;
            this.needDrain = false;
            this.ending = false;
            this.ended = false;
            this.finished = false;
            var noDecode = options.decodeStrings === false;
            this.decodeStrings = !noDecode;
            this.defaultEncoding = options.defaultEncoding || 'utf8';
            this.length = 0;
            this.writing = false;
            this.sync = true;
            this.bufferProcessing = false;
            this.onwrite = function(er) {
              onwrite(stream, er);
            };
            this.writecb = null;
            this.writelen = 0;
            this.buffer = [];
            this.errorEmitted = false;
          }
          function Writable(options) {
            var Duplex = require('./_stream_duplex');
            if (!(this instanceof Writable) && !(this instanceof Duplex))
              return new Writable(options);
            this._writableState = new WritableState(options, this);
            this.writable = true;
            Stream.call(this);
          }
          Writable.prototype.pipe = function() {
            this.emit('error', new Error('Cannot pipe. Not readable.'));
          };
          function writeAfterEnd(stream, state, cb) {
            var er = new Error('write after end');
            stream.emit('error', er);
            process.nextTick(function() {
              cb(er);
            });
          }
          function validChunk(stream, state, chunk, cb) {
            var valid = true;
            if (!Buffer.isBuffer(chunk) && 'string' !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
              var er = new TypeError('Invalid non-string/buffer chunk');
              stream.emit('error', er);
              process.nextTick(function() {
                cb(er);
              });
              valid = false;
            }
            return valid;
          }
          Writable.prototype.write = function(chunk, encoding, cb) {
            var state = this._writableState;
            var ret = false;
            if (typeof encoding === 'function') {
              cb = encoding;
              encoding = null;
            }
            if (Buffer.isBuffer(chunk))
              encoding = 'buffer';
            else if (!encoding)
              encoding = state.defaultEncoding;
            if (typeof cb !== 'function')
              cb = function() {};
            if (state.ended)
              writeAfterEnd(this, state, cb);
            else if (validChunk(this, state, chunk, cb))
              ret = writeOrBuffer(this, state, chunk, encoding, cb);
            return ret;
          };
          function decodeChunk(state, chunk, encoding) {
            if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
              chunk = new Buffer(chunk, encoding);
            }
            return chunk;
          }
          function writeOrBuffer(stream, state, chunk, encoding, cb) {
            chunk = decodeChunk(state, chunk, encoding);
            if (Buffer.isBuffer(chunk))
              encoding = 'buffer';
            var len = state.objectMode ? 1 : chunk.length;
            state.length += len;
            var ret = state.length < state.highWaterMark;
            if (!ret)
              state.needDrain = true;
            if (state.writing)
              state.buffer.push(new WriteReq(chunk, encoding, cb));
            else
              doWrite(stream, state, len, chunk, encoding, cb);
            return ret;
          }
          function doWrite(stream, state, len, chunk, encoding, cb) {
            state.writelen = len;
            state.writecb = cb;
            state.writing = true;
            state.sync = true;
            stream._write(chunk, encoding, state.onwrite);
            state.sync = false;
          }
          function onwriteError(stream, state, sync, er, cb) {
            if (sync)
              process.nextTick(function() {
                cb(er);
              });
            else
              cb(er);
            stream._writableState.errorEmitted = true;
            stream.emit('error', er);
          }
          function onwriteStateUpdate(state) {
            state.writing = false;
            state.writecb = null;
            state.length -= state.writelen;
            state.writelen = 0;
          }
          function onwrite(stream, er) {
            var state = stream._writableState;
            var sync = state.sync;
            var cb = state.writecb;
            onwriteStateUpdate(state);
            if (er)
              onwriteError(stream, state, sync, er, cb);
            else {
              var finished = needFinish(stream, state);
              if (!finished && !state.bufferProcessing && state.buffer.length)
                clearBuffer(stream, state);
              if (sync) {
                process.nextTick(function() {
                  afterWrite(stream, state, finished, cb);
                });
              } else {
                afterWrite(stream, state, finished, cb);
              }
            }
          }
          function afterWrite(stream, state, finished, cb) {
            if (!finished)
              onwriteDrain(stream, state);
            cb();
            if (finished)
              finishMaybe(stream, state);
          }
          function onwriteDrain(stream, state) {
            if (state.length === 0 && state.needDrain) {
              state.needDrain = false;
              stream.emit('drain');
            }
          }
          function clearBuffer(stream, state) {
            state.bufferProcessing = true;
            for (var c = 0; c < state.buffer.length; c++) {
              var entry = state.buffer[c];
              var chunk = entry.chunk;
              var encoding = entry.encoding;
              var cb = entry.callback;
              var len = state.objectMode ? 1 : chunk.length;
              doWrite(stream, state, len, chunk, encoding, cb);
              if (state.writing) {
                c++;
                break;
              }
            }
            state.bufferProcessing = false;
            if (c < state.buffer.length)
              state.buffer = state.buffer.slice(c);
            else
              state.buffer.length = 0;
          }
          Writable.prototype._write = function(chunk, encoding, cb) {
            cb(new Error('not implemented'));
          };
          Writable.prototype.end = function(chunk, encoding, cb) {
            var state = this._writableState;
            if (typeof chunk === 'function') {
              cb = chunk;
              chunk = null;
              encoding = null;
            } else if (typeof encoding === 'function') {
              cb = encoding;
              encoding = null;
            }
            if (typeof chunk !== 'undefined' && chunk !== null)
              this.write(chunk, encoding);
            if (!state.ending && !state.finished)
              endWritable(this, state, cb);
          };
          function needFinish(stream, state) {
            return (state.ending && state.length === 0 && !state.finished && !state.writing);
          }
          function finishMaybe(stream, state) {
            var need = needFinish(stream, state);
            if (need) {
              state.finished = true;
              stream.emit('finish');
            }
            return need;
          }
          function endWritable(stream, state, cb) {
            state.ending = true;
            finishMaybe(stream, state);
            if (cb) {
              if (state.finished)
                process.nextTick(cb);
              else
                stream.once('finish', cb);
            }
            state.ended = true;
          }
        }).call(this, require('_process'));
      }, {
        "./_stream_duplex": 258,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 262,
        "inherits": 263,
        "stream": 32
      }],
      262: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      263: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      264: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      265: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      266: [function(require, module, exports) {
        arguments[4][30][0].apply(exports, arguments);
      }, {
        "./lib/_stream_transform.js": 260,
        "dup": 30
      }],
      267: [function(require, module, exports) {
        arguments[4][47][0].apply(exports, arguments);
      }, {"dup": 47}],
      268: [function(require, module, exports) {
        (function(process) {
          var Transform = require('readable-stream/transform'),
              inherits = require('util').inherits,
              xtend = require('xtend');
          function DestroyableTransform(opts) {
            Transform.call(this, opts);
            this._destroyed = false;
          }
          inherits(DestroyableTransform, Transform);
          DestroyableTransform.prototype.destroy = function(err) {
            if (this._destroyed)
              return;
            this._destroyed = true;
            var self = this;
            process.nextTick(function() {
              if (err)
                self.emit('error', err);
              self.emit('close');
            });
          };
          function noop(chunk, enc, callback) {
            callback(null, chunk);
          }
          function through2(construct) {
            return function(options, transform, flush) {
              if (typeof options == 'function') {
                flush = transform;
                transform = options;
                options = {};
              }
              if (typeof transform != 'function')
                transform = noop;
              if (typeof flush != 'function')
                flush = null;
              return construct(options, transform, flush);
            };
          }
          module.exports = through2(function(options, transform, flush) {
            var t2 = new DestroyableTransform(options);
            t2._transform = transform;
            if (flush)
              t2._flush = flush;
            return t2;
          });
          module.exports.ctor = through2(function(options, transform, flush) {
            function Through2(override) {
              if (!(this instanceof Through2))
                return new Through2(override);
              this.options = xtend(options, override);
              DestroyableTransform.call(this, this.options);
            }
            inherits(Through2, DestroyableTransform);
            Through2.prototype._transform = transform;
            if (flush)
              Through2.prototype._flush = flush;
            return Through2;
          });
          module.exports.obj = through2(function(options, transform, flush) {
            var t2 = new DestroyableTransform(xtend({
              objectMode: true,
              highWaterMark: 16
            }, options));
            t2._transform = transform;
            if (flush)
              t2._flush = flush;
            return t2;
          });
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "readable-stream/transform": 266,
        "util": 46,
        "xtend": 267
      }],
      269: [function(require, module, exports) {
        (function(global) {
          'use strict';
          var filter = require('through2-filter').obj;
          var ES6Set;
          if (typeof global.Set === 'function') {
            ES6Set = global.Set;
          } else {
            ES6Set = function() {
              this.keys = [];
              this.has = function(val) {
                return this.keys.indexOf(val) !== -1;
              }, this.add = function(val) {
                this.keys.push(val);
              };
            };
          }
          function prop(propName) {
            return function(data) {
              return data[propName];
            };
          }
          module.exports = unique;
          function unique(propName, keyStore) {
            keyStore = keyStore || new ES6Set();
            var keyfn = JSON.stringify;
            if (typeof propName === 'string') {
              keyfn = prop(propName);
            } else if (typeof propName === 'function') {
              keyfn = propName;
            }
            return filter(function(data) {
              var key = keyfn(data);
              if (keyStore.has(key)) {
                return false;
              }
              keyStore.add(key);
              return true;
            });
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {"through2-filter": 296}],
      270: [function(require, module, exports) {
        var gaze = require('gaze');
        var EventEmitter = require('events').EventEmitter;
        function onWatch(out, cb) {
          return function(err, rwatcher) {
            if (err)
              out.emit('error', err);
            rwatcher.on('all', function(evt, path, old) {
              var outEvt = {
                type: evt,
                path: path
              };
              if (old)
                outEvt.old = old;
              out.emit('change', outEvt);
              if (cb)
                cb();
            });
          };
        }
        module.exports = function(glob, opts, cb) {
          var out = new EventEmitter();
          if (typeof opts === 'function') {
            cb = opts;
            opts = {};
          }
          var watcher = gaze(glob, opts, onWatch(out, cb));
          watcher.on('end', out.emit.bind(out, 'end'));
          watcher.on('error', out.emit.bind(out, 'error'));
          watcher.on('ready', out.emit.bind(out, 'ready'));
          watcher.on('nomatch', out.emit.bind(out, 'nomatch'));
          out.end = function() {
            return watcher.close();
          };
          out.add = function(glob, cb) {
            return watcher.add(glob, onWatch(out, cb));
          };
          out.remove = function(glob) {
            return watcher.remove(glob);
          };
          out._watcher = watcher;
          return out;
        };
      }, {
        "events": 9,
        "gaze": 271
      }],
      271: [function(require, module, exports) {
        (function(process) {
          'use strict';
          var util = require('util');
          var EE = require('events').EventEmitter;
          var fs = require('fs');
          var path = require('path');
          var globule = require('globule');
          var helper = require('./helper');
          var setImmediate = require('timers').setImmediate;
          if (typeof setImmediate !== 'function') {
            setImmediate = process.nextTick;
          }
          var delay = 10;
          function Gaze(patterns, opts, done) {
            var self = this;
            EE.call(self);
            if (typeof opts === 'function') {
              done = opts;
              opts = {};
            }
            opts = opts || {};
            opts.mark = true;
            opts.interval = opts.interval || 100;
            opts.debounceDelay = opts.debounceDelay || 500;
            opts.cwd = opts.cwd || process.cwd();
            this.options = opts;
            done = done || function() {};
            this._watched = Object.create(null);
            this._watchers = Object.create(null);
            this._pollers = Object.create(null);
            this._patterns = [];
            this._cached = Object.create(null);
            if (this.options.maxListeners) {
              this.setMaxListeners(this.options.maxListeners);
              Gaze.super_.prototype.setMaxListeners(this.options.maxListeners);
              delete this.options.maxListeners;
            }
            if (patterns) {
              this.add(patterns, done);
            }
            this._keepalive = setInterval(function() {}, 200);
            return this;
          }
          util.inherits(Gaze, EE);
          module.exports = function gaze(patterns, opts, done) {
            return new Gaze(patterns, opts, done);
          };
          module.exports.Gaze = Gaze;
          Gaze.prototype.emit = function() {
            var self = this;
            var args = arguments;
            var e = args[0];
            var filepath = args[1];
            var timeoutId;
            if (e.slice(-2) !== 'ed') {
              Gaze.super_.prototype.emit.apply(self, args);
              return this;
            }
            if (e === 'added') {
              Object.keys(this._cached).forEach(function(oldFile) {
                if (self._cached[oldFile].indexOf('deleted') !== -1) {
                  args[0] = e = 'renamed';
                  [].push.call(args, oldFile);
                  delete self._cached[oldFile];
                  return false;
                }
              });
            }
            var cache = this._cached[filepath] || [];
            if (cache.indexOf(e) === -1) {
              helper.objectPush(self._cached, filepath, e);
              clearTimeout(timeoutId);
              timeoutId = setTimeout(function() {
                delete self._cached[filepath];
              }, this.options.debounceDelay);
              Gaze.super_.prototype.emit.apply(self, args);
              Gaze.super_.prototype.emit.apply(self, ['all', e].concat([].slice.call(args, 1)));
            }
            if (e === 'added') {
              if (helper.isDir(filepath)) {
                fs.readdirSync(filepath).map(function(file) {
                  return path.join(filepath, file);
                }).filter(function(file) {
                  return globule.isMatch(self._patterns, file, self.options);
                }).forEach(function(file) {
                  self.emit('added', file);
                });
              }
            }
            return this;
          };
          Gaze.prototype.close = function(_reset) {
            var self = this;
            _reset = _reset === false ? false : true;
            Object.keys(self._watchers).forEach(function(file) {
              self._watchers[file].close();
            });
            self._watchers = Object.create(null);
            Object.keys(this._watched).forEach(function(dir) {
              self._unpollDir(dir);
            });
            if (_reset) {
              self._watched = Object.create(null);
              setTimeout(function() {
                self.emit('end');
                self.removeAllListeners();
                clearInterval(self._keepalive);
              }, delay + 100);
            }
            return self;
          };
          Gaze.prototype.add = function(files, done) {
            if (typeof files === 'string') {
              files = [files];
            }
            this._patterns = helper.unique.apply(null, [this._patterns, files]);
            files = globule.find(this._patterns, this.options);
            this._addToWatched(files);
            this.close(false);
            this._initWatched(done);
          };
          Gaze.prototype._internalAdd = function(file, done) {
            var files = [];
            if (helper.isDir(file)) {
              files = [helper.markDir(file)].concat(globule.find(this._patterns, this.options));
            } else {
              if (globule.isMatch(this._patterns, file, this.options)) {
                files = [file];
              }
            }
            if (files.length > 0) {
              this._addToWatched(files);
              this.close(false);
              this._initWatched(done);
            }
          };
          Gaze.prototype.remove = function(file) {
            var self = this;
            if (this._watched[file]) {
              this._unpollDir(file);
              delete this._watched[file];
            } else {
              Object.keys(this._watched).forEach(function(dir) {
                var index = self._watched[dir].indexOf(file);
                if (index !== -1) {
                  self._unpollFile(file);
                  self._watched[dir].splice(index, 1);
                  return false;
                }
              });
            }
            if (this._watchers[file]) {
              this._watchers[file].close();
            }
            return this;
          };
          Gaze.prototype.watched = function() {
            return this._watched;
          };
          Gaze.prototype.relative = function(dir, unixify) {
            var self = this;
            var relative = Object.create(null);
            var relDir,
                relFile,
                unixRelDir;
            var cwd = this.options.cwd || process.cwd();
            if (dir === '') {
              dir = '.';
            }
            dir = helper.markDir(dir);
            unixify = unixify || false;
            Object.keys(this._watched).forEach(function(dir) {
              relDir = path.relative(cwd, dir) + path.sep;
              if (relDir === path.sep) {
                relDir = '.';
              }
              unixRelDir = unixify ? helper.unixifyPathSep(relDir) : relDir;
              relative[unixRelDir] = self._watched[dir].map(function(file) {
                relFile = path.relative(path.join(cwd, relDir) || '', file || '');
                if (helper.isDir(file)) {
                  relFile = helper.markDir(relFile);
                }
                if (unixify) {
                  relFile = helper.unixifyPathSep(relFile);
                }
                return relFile;
              });
            });
            if (dir && unixify) {
              dir = helper.unixifyPathSep(dir);
            }
            return dir ? relative[dir] || [] : relative;
          };
          Gaze.prototype._addToWatched = function(files) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              var filepath = path.resolve(this.options.cwd, file);
              var dirname = (helper.isDir(file)) ? filepath : path.dirname(filepath);
              dirname = helper.markDir(dirname);
              if (helper.isDir(file) && !(filepath in this._watched)) {
                helper.objectPush(this._watched, filepath, []);
              }
              if (file.slice(-1) === '/') {
                filepath += path.sep;
              }
              helper.objectPush(this._watched, path.dirname(filepath) + path.sep, filepath);
              var readdir = fs.readdirSync(dirname);
              for (var j = 0; j < readdir.length; j++) {
                var dirfile = path.join(dirname, readdir[j]);
                if (fs.statSync(dirfile).isDirectory()) {
                  helper.objectPush(this._watched, dirname, dirfile + path.sep);
                }
              }
            }
            return this;
          };
          Gaze.prototype._watchDir = function(dir, done) {
            var self = this;
            var timeoutId;
            try {
              this._watchers[dir] = fs.watch(dir, function(event) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                  if ((dir in self._watchers) && fs.existsSync(dir)) {
                    done(null, dir);
                  }
                }, delay + 100);
              });
            } catch (err) {
              return this._handleError(err);
            }
            return this;
          };
          Gaze.prototype._unpollFile = function(file) {
            if (this._pollers[file]) {
              fs.unwatchFile(file, this._pollers[file]);
              delete this._pollers[file];
            }
            return this;
          };
          Gaze.prototype._unpollDir = function(dir) {
            this._unpollFile(dir);
            for (var i = 0; i < this._watched[dir].length; i++) {
              this._unpollFile(this._watched[dir][i]);
            }
          };
          Gaze.prototype._pollFile = function(file, done) {
            var opts = {
              persistent: true,
              interval: this.options.interval
            };
            if (!this._pollers[file]) {
              this._pollers[file] = function(curr, prev) {
                done(null, file);
              };
              try {
                fs.watchFile(file, opts, this._pollers[file]);
              } catch (err) {
                return this._handleError(err);
              }
            }
            return this;
          };
          Gaze.prototype._initWatched = function(done) {
            var self = this;
            var cwd = this.options.cwd || process.cwd();
            var curWatched = Object.keys(self._watched);
            if (curWatched.length < 1) {
              setImmediate(function() {
                self.emit('ready', self);
                if (done) {
                  done.call(self, null, self);
                }
                self.emit('nomatch');
              });
              return;
            }
            helper.forEachSeries(curWatched, function(dir, next) {
              dir = dir || '';
              var files = self._watched[dir];
              self._watchDir(dir, function(event, dirpath) {
                var relDir = cwd === dir ? '.' : path.relative(cwd, dir);
                relDir = relDir || '';
                fs.readdir(dirpath, function(err, current) {
                  if (err) {
                    return self.emit('error', err);
                  }
                  if (!current) {
                    return;
                  }
                  try {
                    current = current.map(function(curPath) {
                      if (fs.existsSync(path.join(dir, curPath)) && fs.statSync(path.join(dir, curPath)).isDirectory()) {
                        return curPath + path.sep;
                      } else {
                        return curPath;
                      }
                    });
                  } catch (err) {}
                  var previous = self.relative(relDir);
                  previous.filter(function(file) {
                    return current.indexOf(file) < 0;
                  }).forEach(function(file) {
                    if (!helper.isDir(file)) {
                      var filepath = path.join(dir, file);
                      self.remove(filepath);
                      self.emit('deleted', filepath);
                    }
                  });
                  current.filter(function(file) {
                    return previous.indexOf(file) < 0;
                  }).forEach(function(file) {
                    var relFile = path.join(relDir, file);
                    self._internalAdd(relFile, function() {
                      self.emit('added', path.join(dir, file));
                    });
                  });
                });
              });
              files.forEach(function(file) {
                if (helper.isDir(file)) {
                  return;
                }
                self._pollFile(file, function(err, filepath) {
                  if (fs.existsSync(filepath)) {
                    self.emit('changed', filepath);
                  }
                });
              });
              next();
            }, function() {
              setTimeout(function() {
                self.emit('ready', self);
                if (done) {
                  done.call(self, null, self);
                }
              }, delay + 100);
            });
          };
          Gaze.prototype._handleError = function(err) {
            if (err.code === 'EMFILE') {
              return this.emit('error', new Error('EMFILE: Too many opened files.'));
            }
            return this.emit('error', err);
          };
        }).call(this, require('_process'));
      }, {
        "./helper": 272,
        "_process": 14,
        "events": 9,
        "fs": 1,
        "globule": 273,
        "path": 13,
        "timers": 43,
        "util": 46
      }],
      272: [function(require, module, exports) {
        (function(process) {
          'use strict';
          var path = require('path');
          var helper = module.exports = {};
          helper.isDir = function isDir(dir) {
            if (typeof dir !== 'string') {
              return false;
            }
            return (dir.slice(-(path.sep.length)) === path.sep);
          };
          helper.objectPush = function objectPush(obj, key, val) {
            if (obj[key] == null) {
              obj[key] = [];
            }
            if (Array.isArray(val)) {
              obj[key] = obj[key].concat(val);
            } else if (val) {
              obj[key].push(val);
            }
            return obj[key] = helper.unique(obj[key]);
          };
          helper.markDir = function markDir(dir) {
            if (typeof dir === 'string' && dir.slice(-(path.sep.length)) !== path.sep && dir !== '.') {
              dir += path.sep;
            }
            return dir;
          };
          helper.unixifyPathSep = function unixifyPathSep(filepath) {
            return (process.platform === 'win32') ? String(filepath).replace(/\\/g, '/') : filepath;
          };
          helper.unique = function unique() {
            var array = Array.prototype.concat.apply(Array.prototype, arguments);
            var result = [];
            for (var i = 0; i < array.length; i++) {
              if (result.indexOf(array[i]) === -1) {
                result.push(array[i]);
              }
            }
            return result;
          };
          helper.forEachSeries = function forEachSeries(arr, iterator, callback) {
            if (!arr.length) {
              return callback();
            }
            var completed = 0;
            var iterate = function() {
              iterator(arr[completed], function(err) {
                if (err) {
                  callback(err);
                  callback = function() {};
                } else {
                  completed += 1;
                  if (completed === arr.length) {
                    callback(null);
                  } else {
                    iterate();
                  }
                }
              });
            };
            iterate();
          };
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "path": 13
      }],
      273: [function(require, module, exports) {
        'use strict';
        var fs = require('fs');
        var path = require('path');
        var _ = require('lodash');
        var glob = require('glob');
        var minimatch = require('minimatch');
        var globule = exports;
        function processPatterns(patterns, fn) {
          return _.flatten(patterns).reduce(function(result, pattern) {
            if (pattern.indexOf('!') === 0) {
              pattern = pattern.slice(1);
              return _.difference(result, fn(pattern));
            } else {
              return _.union(result, fn(pattern));
            }
          }, []);
        }
        globule.match = function(patterns, filepaths, options) {
          if (patterns == null || filepaths == null) {
            return [];
          }
          if (!_.isArray(patterns)) {
            patterns = [patterns];
          }
          if (!_.isArray(filepaths)) {
            filepaths = [filepaths];
          }
          if (patterns.length === 0 || filepaths.length === 0) {
            return [];
          }
          return processPatterns(patterns, function(pattern) {
            return minimatch.match(filepaths, pattern, options || {});
          });
        };
        globule.isMatch = function() {
          return globule.match.apply(null, arguments).length > 0;
        };
        globule.find = function() {
          var args = _.toArray(arguments);
          var options = _.isPlainObject(args[args.length - 1]) ? args.pop() : {};
          var patterns = _.isArray(args[0]) ? args[0] : args;
          if (patterns.length === 0) {
            return [];
          }
          var srcBase = options.srcBase || options.cwd;
          var globOptions = _.extend({}, options);
          if (srcBase) {
            globOptions.cwd = srcBase;
          }
          var matches = processPatterns(patterns, function(pattern) {
            return glob.sync(pattern, globOptions);
          });
          if (srcBase && options.prefixBase) {
            matches = matches.map(function(filepath) {
              return path.join(srcBase, filepath);
            });
          }
          if (options.filter) {
            matches = matches.filter(function(filepath) {
              if (srcBase && !options.prefixBase) {
                filepath = path.join(srcBase, filepath);
              }
              try {
                if (_.isFunction(options.filter)) {
                  return options.filter(filepath, options);
                } else {
                  return fs.statSync(filepath)[options.filter]();
                }
              } catch (err) {
                return false;
              }
            });
          }
          return matches;
        };
        var pathSeparatorRe = /[\/\\]/g;
        var extDotRe = {
          first: /(\.[^\/]*)?$/,
          last: /(\.[^\/\.]*)?$/
        };
        function rename(dest, options) {
          if (options.flatten) {
            dest = path.basename(dest);
          }
          if (options.ext) {
            dest = dest.replace(extDotRe[options.extDot], options.ext);
          }
          if (options.destBase) {
            dest = path.join(options.destBase, dest);
          }
          return dest;
        }
        globule.mapping = function(filepaths, options) {
          if (filepaths == null) {
            return [];
          }
          options = _.defaults({}, options, {
            extDot: 'first',
            rename: rename
          });
          var files = [];
          var fileByDest = {};
          filepaths.forEach(function(src) {
            var dest = options.rename(src, options);
            if (options.srcBase) {
              src = path.join(options.srcBase, src);
            }
            dest = dest.replace(pathSeparatorRe, '/');
            src = src.replace(pathSeparatorRe, '/');
            if (fileByDest[dest]) {
              fileByDest[dest].src.push(src);
            } else {
              files.push({
                src: [src],
                dest: dest
              });
              fileByDest[dest] = files[files.length - 1];
            }
          });
          return files;
        };
        globule.findMapping = function(patterns, options) {
          return globule.mapping(globule.find(patterns, options), options);
        };
      }, {
        "fs": 1,
        "glob": 274,
        "lodash": 277,
        "minimatch": 278,
        "path": 13
      }],
      274: [function(require, module, exports) {
        (function(process) {
          module.exports = glob;
          var fs = require('graceful-fs'),
              minimatch = require('minimatch'),
              Minimatch = minimatch.Minimatch,
              inherits = require('inherits'),
              EE = require('events').EventEmitter,
              path = require('path'),
              isDir = {},
              assert = require('assert').ok;
          function glob(pattern, options, cb) {
            if (typeof options === "function")
              cb = options, options = {};
            if (!options)
              options = {};
            if (typeof options === "number") {
              deprecated();
              return;
            }
            var g = new Glob(pattern, options, cb);
            return g.sync ? g.found : g;
          }
          glob.fnmatch = deprecated;
          function deprecated() {
            throw new Error("glob's interface has changed. Please see the docs.");
          }
          glob.sync = globSync;
          function globSync(pattern, options) {
            if (typeof options === "number") {
              deprecated();
              return;
            }
            options = options || {};
            options.sync = true;
            return glob(pattern, options);
          }
          glob.Glob = Glob;
          inherits(Glob, EE);
          function Glob(pattern, options, cb) {
            if (!(this instanceof Glob)) {
              return new Glob(pattern, options, cb);
            }
            if (typeof cb === "function") {
              this.on("error", cb);
              this.on("end", function(matches) {
                cb(null, matches);
              });
            }
            options = options || {};
            this.EOF = {};
            this._emitQueue = [];
            this.maxDepth = options.maxDepth || 1000;
            this.maxLength = options.maxLength || Infinity;
            this.statCache = options.statCache || {};
            this.changedCwd = false;
            var cwd = process.cwd();
            if (!options.hasOwnProperty("cwd"))
              this.cwd = cwd;
            else {
              this.cwd = options.cwd;
              this.changedCwd = path.resolve(options.cwd) !== cwd;
            }
            this.root = options.root || path.resolve(this.cwd, "/");
            this.root = path.resolve(this.root);
            if (process.platform === "win32")
              this.root = this.root.replace(/\\/g, "/");
            this.nomount = !!options.nomount;
            if (!pattern) {
              throw new Error("must provide pattern");
            }
            if (options.matchBase && -1 === pattern.indexOf("/")) {
              if (options.noglobstar) {
                throw new Error("base matching requires globstar");
              }
              pattern = "**/" + pattern;
            }
            this.strict = options.strict !== false;
            this.dot = !!options.dot;
            this.mark = !!options.mark;
            this.sync = !!options.sync;
            this.nounique = !!options.nounique;
            this.nonull = !!options.nonull;
            this.nosort = !!options.nosort;
            this.nocase = !!options.nocase;
            this.stat = !!options.stat;
            this.debug = !!options.debug || !!options.globDebug;
            if (this.debug)
              this.log = console.error;
            this.silent = !!options.silent;
            var mm = this.minimatch = new Minimatch(pattern, options);
            this.options = mm.options;
            pattern = this.pattern = mm.pattern;
            this.error = null;
            this.aborted = false;
            EE.call(this);
            var n = this.minimatch.set.length;
            this.matches = new Array(n);
            this.minimatch.set.forEach(iterator.bind(this));
            function iterator(pattern, i, set) {
              this._process(pattern, 0, i, function(er) {
                if (er)
                  this.emit("error", er);
                if (--n <= 0)
                  this._finish();
              });
            }
          }
          Glob.prototype.log = function() {};
          Glob.prototype._finish = function() {
            assert(this instanceof Glob);
            var nou = this.nounique,
                all = nou ? [] : {};
            for (var i = 0,
                l = this.matches.length; i < l; i++) {
              var matches = this.matches[i];
              this.log("matches[%d] =", i, matches);
              if (!matches) {
                if (this.nonull) {
                  var literal = this.minimatch.globSet[i];
                  if (nou)
                    all.push(literal);
                  else
                    all[literal] = true;
                }
              } else {
                var m = Object.keys(matches);
                if (nou)
                  all.push.apply(all, m);
                else
                  m.forEach(function(m) {
                    all[m] = true;
                  });
              }
            }
            if (!nou)
              all = Object.keys(all);
            if (!this.nosort) {
              all = all.sort(this.nocase ? alphasorti : alphasort);
            }
            if (this.mark) {
              all = all.map(function(m) {
                var sc = this.statCache[m];
                if (!sc)
                  return m;
                var isDir = (Array.isArray(sc) || sc === 2);
                if (isDir && m.slice(-1) !== "/") {
                  return m + "/";
                }
                if (!isDir && m.slice(-1) === "/") {
                  return m.replace(/\/+$/, "");
                }
                return m;
              }, this);
            }
            this.log("emitting end", all);
            this.EOF = this.found = all;
            this.emitMatch(this.EOF);
          };
          function alphasorti(a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return alphasort(a, b);
          }
          function alphasort(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          }
          Glob.prototype.abort = function() {
            this.aborted = true;
            this.emit("abort");
          };
          Glob.prototype.pause = function() {
            if (this.paused)
              return;
            if (this.sync)
              this.emit("error", new Error("Can't pause/resume sync glob"));
            this.paused = true;
            this.emit("pause");
          };
          Glob.prototype.resume = function() {
            if (!this.paused)
              return;
            if (this.sync)
              this.emit("error", new Error("Can't pause/resume sync glob"));
            this.paused = false;
            this.emit("resume");
            this._processEmitQueue();
          };
          Glob.prototype.emitMatch = function(m) {
            this._emitQueue.push(m);
            this._processEmitQueue();
          };
          Glob.prototype._processEmitQueue = function(m) {
            while (!this._processingEmitQueue && !this.paused) {
              this._processingEmitQueue = true;
              var m = this._emitQueue.shift();
              if (!m) {
                this._processingEmitQueue = false;
                break;
              }
              this.log('emit!', m === this.EOF ? "end" : "match");
              this.emit(m === this.EOF ? "end" : "match", m);
              this._processingEmitQueue = false;
            }
          };
          Glob.prototype._process = function(pattern, depth, index, cb_) {
            assert(this instanceof Glob);
            var cb = function cb(er, res) {
              assert(this instanceof Glob);
              if (this.paused) {
                if (!this._processQueue) {
                  this._processQueue = [];
                  this.once("resume", function() {
                    var q = this._processQueue;
                    this._processQueue = null;
                    q.forEach(function(cb) {
                      cb();
                    });
                  });
                }
                this._processQueue.push(cb_.bind(this, er, res));
              } else {
                cb_.call(this, er, res);
              }
            }.bind(this);
            if (this.aborted)
              return cb();
            if (depth > this.maxDepth)
              return cb();
            var n = 0;
            while (typeof pattern[n] === "string") {
              n++;
            }
            var prefix;
            switch (n) {
              case pattern.length:
                prefix = pattern.join("/");
                this._stat(prefix, function(exists, isDir) {
                  if (exists) {
                    if (prefix && isAbsolute(prefix) && !this.nomount) {
                      if (prefix.charAt(0) === "/") {
                        prefix = path.join(this.root, prefix);
                      } else {
                        prefix = path.resolve(this.root, prefix);
                      }
                    }
                    if (process.platform === "win32")
                      prefix = prefix.replace(/\\/g, "/");
                    this.matches[index] = this.matches[index] || {};
                    this.matches[index][prefix] = true;
                    this.emitMatch(prefix);
                  }
                  return cb();
                });
                return;
              case 0:
                prefix = null;
                break;
              default:
                prefix = pattern.slice(0, n);
                prefix = prefix.join("/");
                break;
            }
            var read;
            if (prefix === null)
              read = ".";
            else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
              if (!prefix || !isAbsolute(prefix)) {
                prefix = path.join("/", prefix);
              }
              read = prefix = path.resolve(prefix);
              this.log('absolute: ', prefix, this.root, pattern, read);
            } else {
              read = prefix;
            }
            this.log('readdir(%j)', read, this.cwd, this.root);
            return this._readdir(read, function(er, entries) {
              if (er) {
                return cb();
              }
              if (pattern[n] === minimatch.GLOBSTAR) {
                var s = [pattern.slice(0, n).concat(pattern.slice(n + 1))];
                entries.forEach(function(e) {
                  if (e.charAt(0) === "." && !this.dot)
                    return;
                  s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1)));
                  s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n)));
                }, this);
                var l = s.length,
                    errState = null;
                s.forEach(function(gsPattern) {
                  this._process(gsPattern, depth + 1, index, function(er) {
                    if (errState)
                      return;
                    if (er)
                      return cb(errState = er);
                    if (--l <= 0)
                      return cb();
                  });
                }, this);
                return;
              }
              var pn = pattern[n];
              if (typeof pn === "string") {
                var found = entries.indexOf(pn) !== -1;
                entries = found ? entries[pn] : [];
              } else {
                var rawGlob = pattern[n]._glob,
                    dotOk = this.dot || rawGlob.charAt(0) === ".";
                entries = entries.filter(function(e) {
                  return (e.charAt(0) !== "." || dotOk) && (typeof pattern[n] === "string" && e === pattern[n] || e.match(pattern[n]));
                });
              }
              if (n === pattern.length - 1 && !this.mark && !this.stat) {
                entries.forEach(function(e) {
                  if (prefix) {
                    if (prefix !== "/")
                      e = prefix + "/" + e;
                    else
                      e = prefix + e;
                  }
                  if (e.charAt(0) === "/" && !this.nomount) {
                    e = path.join(this.root, e);
                  }
                  if (process.platform === "win32")
                    e = e.replace(/\\/g, "/");
                  this.matches[index] = this.matches[index] || {};
                  this.matches[index][e] = true;
                  this.emitMatch(e);
                }, this);
                return cb.call(this);
              }
              var l = entries.length,
                  errState = null;
              if (l === 0)
                return cb();
              entries.forEach(function(e) {
                var p = pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1));
                this._process(p, depth + 1, index, function(er) {
                  if (errState)
                    return;
                  if (er)
                    return cb(errState = er);
                  if (--l === 0)
                    return cb.call(this);
                });
              }, this);
            });
          };
          Glob.prototype._stat = function(f, cb) {
            assert(this instanceof Glob);
            var abs = f;
            if (f.charAt(0) === "/") {
              abs = path.join(this.root, f);
            } else if (this.changedCwd) {
              abs = path.resolve(this.cwd, f);
            }
            this.log('stat', [this.cwd, f, '=', abs]);
            if (f.length > this.maxLength) {
              var er = new Error("Path name too long");
              er.code = "ENAMETOOLONG";
              er.path = f;
              return this._afterStat(f, abs, cb, er);
            }
            if (this.statCache.hasOwnProperty(f)) {
              var exists = this.statCache[f],
                  isDir = exists && (Array.isArray(exists) || exists === 2);
              if (this.sync)
                return cb.call(this, !!exists, isDir);
              return process.nextTick(cb.bind(this, !!exists, isDir));
            }
            if (this.sync) {
              var er,
                  stat;
              try {
                stat = fs.statSync(abs);
              } catch (e) {
                er = e;
              }
              this._afterStat(f, abs, cb, er, stat);
            } else {
              fs.stat(abs, this._afterStat.bind(this, f, abs, cb));
            }
          };
          Glob.prototype._afterStat = function(f, abs, cb, er, stat) {
            var exists;
            assert(this instanceof Glob);
            if (abs.slice(-1) === "/" && stat && !stat.isDirectory()) {
              this.log("should be ENOTDIR, fake it");
              er = new Error("ENOTDIR, not a directory '" + abs + "'");
              er.path = abs;
              er.code = "ENOTDIR";
              stat = null;
            }
            if (er || !stat) {
              exists = false;
            } else {
              exists = stat.isDirectory() ? 2 : 1;
            }
            this.statCache[f] = this.statCache[f] || exists;
            cb.call(this, !!exists, exists === 2);
          };
          Glob.prototype._readdir = function(f, cb) {
            assert(this instanceof Glob);
            var abs = f;
            if (f.charAt(0) === "/") {
              abs = path.join(this.root, f);
            } else if (isAbsolute(f)) {
              abs = f;
            } else if (this.changedCwd) {
              abs = path.resolve(this.cwd, f);
            }
            this.log('readdir', [this.cwd, f, abs]);
            if (f.length > this.maxLength) {
              var er = new Error("Path name too long");
              er.code = "ENAMETOOLONG";
              er.path = f;
              return this._afterReaddir(f, abs, cb, er);
            }
            if (this.statCache.hasOwnProperty(f)) {
              var c = this.statCache[f];
              if (Array.isArray(c)) {
                if (this.sync)
                  return cb.call(this, null, c);
                return process.nextTick(cb.bind(this, null, c));
              }
              if (!c || c === 1) {
                var code = c ? "ENOTDIR" : "ENOENT",
                    er = new Error((c ? "Not a directory" : "Not found") + ": " + f);
                er.path = f;
                er.code = code;
                this.log(f, er);
                if (this.sync)
                  return cb.call(this, er);
                return process.nextTick(cb.bind(this, er));
              }
            }
            if (this.sync) {
              var er,
                  entries;
              try {
                entries = fs.readdirSync(abs);
              } catch (e) {
                er = e;
              }
              return this._afterReaddir(f, abs, cb, er, entries);
            }
            fs.readdir(abs, this._afterReaddir.bind(this, f, abs, cb));
          };
          Glob.prototype._afterReaddir = function(f, abs, cb, er, entries) {
            assert(this instanceof Glob);
            if (entries && !er) {
              this.statCache[f] = entries;
              if (!this.mark && !this.stat) {
                entries.forEach(function(e) {
                  if (f === "/")
                    e = f + e;
                  else
                    e = f + "/" + e;
                  this.statCache[e] = true;
                }, this);
              }
              return cb.call(this, er, entries);
            }
            if (er)
              switch (er.code) {
                case "ENOTDIR":
                  this.statCache[f] = 1;
                  return cb.call(this, er);
                case "ENOENT":
                case "ELOOP":
                case "ENAMETOOLONG":
                case "UNKNOWN":
                  this.statCache[f] = false;
                  return cb.call(this, er);
                default:
                  this.statCache[f] = false;
                  if (this.strict)
                    this.emit("error", er);
                  if (!this.silent)
                    console.error("glob error", er);
                  return cb.call(this, er);
              }
          };
          var isAbsolute = process.platform === "win32" ? absWin : absUnix;
          function absWin(p) {
            if (absUnix(p))
              return true;
            var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,
                result = splitDeviceRe.exec(p),
                device = result[1] || '',
                isUnc = device && device.charAt(1) !== ':',
                isAbsolute = !!result[2] || isUnc;
            return isAbsolute;
          }
          function absUnix(p) {
            return p.charAt(0) === "/" || p === "";
          }
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "assert": 2,
        "events": 9,
        "graceful-fs": 275,
        "inherits": 276,
        "minimatch": 278,
        "path": 13
      }],
      275: [function(require, module, exports) {
        (function(process) {
          var fs = exports = module.exports = {};
          fs._originalFs = require('fs');
          Object.getOwnPropertyNames(fs._originalFs).forEach(function(prop) {
            var desc = Object.getOwnPropertyDescriptor(fs._originalFs, prop);
            Object.defineProperty(fs, prop, desc);
          });
          var queue = [],
              constants = require('constants');
          fs._curOpen = 0;
          fs.MIN_MAX_OPEN = 64;
          fs.MAX_OPEN = 1024;
          function OpenReq(path, flags, mode, cb) {
            this.path = path;
            this.flags = flags;
            this.mode = mode;
            this.cb = cb;
          }
          function noop() {}
          fs.open = gracefulOpen;
          function gracefulOpen(path, flags, mode, cb) {
            if (typeof mode === "function")
              cb = mode, mode = null;
            if (typeof cb !== "function")
              cb = noop;
            if (fs._curOpen >= fs.MAX_OPEN) {
              queue.push(new OpenReq(path, flags, mode, cb));
              setTimeout(flush);
              return;
            }
            open(path, flags, mode, function(er, fd) {
              if (er && er.code === "EMFILE" && fs._curOpen > fs.MIN_MAX_OPEN) {
                fs.MAX_OPEN = fs._curOpen - 1;
                return fs.open(path, flags, mode, cb);
              }
              cb(er, fd);
            });
          }
          function open(path, flags, mode, cb) {
            cb = cb || noop;
            fs._curOpen++;
            fs._originalFs.open.call(fs, path, flags, mode, function(er, fd) {
              if (er)
                onclose();
              cb(er, fd);
            });
          }
          fs.openSync = function(path, flags, mode) {
            var ret;
            ret = fs._originalFs.openSync.call(fs, path, flags, mode);
            fs._curOpen++;
            return ret;
          };
          function onclose() {
            fs._curOpen--;
            flush();
          }
          function flush() {
            while (fs._curOpen < fs.MAX_OPEN) {
              var req = queue.shift();
              if (!req)
                return;
              switch (req.constructor.name) {
                case 'OpenReq':
                  open(req.path, req.flags || "r", req.mode || 0777, req.cb);
                  break;
                case 'ReaddirReq':
                  readdir(req.path, req.cb);
                  break;
                case 'ReadFileReq':
                  readFile(req.path, req.options, req.cb);
                  break;
                case 'WriteFileReq':
                  writeFile(req.path, req.data, req.options, req.cb);
                  break;
                default:
                  throw new Error('Unknown req type: ' + req.constructor.name);
              }
            }
          }
          fs.close = function(fd, cb) {
            cb = cb || noop;
            fs._originalFs.close.call(fs, fd, function(er) {
              onclose();
              cb(er);
            });
          };
          fs.closeSync = function(fd) {
            try {
              return fs._originalFs.closeSync.call(fs, fd);
            } finally {
              onclose();
            }
          };
          fs.readdir = gracefulReaddir;
          function gracefulReaddir(path, cb) {
            if (fs._curOpen >= fs.MAX_OPEN) {
              queue.push(new ReaddirReq(path, cb));
              setTimeout(flush);
              return;
            }
            readdir(path, function(er, files) {
              if (er && er.code === "EMFILE" && fs._curOpen > fs.MIN_MAX_OPEN) {
                fs.MAX_OPEN = fs._curOpen - 1;
                return fs.readdir(path, cb);
              }
              cb(er, files);
            });
          }
          function readdir(path, cb) {
            cb = cb || noop;
            fs._curOpen++;
            fs._originalFs.readdir.call(fs, path, function(er, files) {
              onclose();
              cb(er, files);
            });
          }
          function ReaddirReq(path, cb) {
            this.path = path;
            this.cb = cb;
          }
          fs.readFile = gracefulReadFile;
          function gracefulReadFile(path, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            if (typeof cb !== "function")
              cb = noop;
            if (fs._curOpen >= fs.MAX_OPEN) {
              queue.push(new ReadFileReq(path, options, cb));
              setTimeout(flush);
              return;
            }
            readFile(path, options, function(er, data) {
              if (er && er.code === "EMFILE" && fs._curOpen > fs.MIN_MAX_OPEN) {
                fs.MAX_OPEN = fs._curOpen - 1;
                return fs.readFile(path, options, cb);
              }
              cb(er, data);
            });
          }
          function readFile(path, options, cb) {
            cb = cb || noop;
            fs._curOpen++;
            fs._originalFs.readFile.call(fs, path, options, function(er, data) {
              onclose();
              cb(er, data);
            });
          }
          function ReadFileReq(path, options, cb) {
            this.path = path;
            this.options = options;
            this.cb = cb;
          }
          fs.writeFile = gracefulWriteFile;
          function gracefulWriteFile(path, data, options, cb) {
            if (typeof options === "function")
              cb = options, options = null;
            if (typeof cb !== "function")
              cb = noop;
            if (fs._curOpen >= fs.MAX_OPEN) {
              queue.push(new WriteFileReq(path, data, options, cb));
              setTimeout(flush);
              return;
            }
            writeFile(path, data, options, function(er) {
              if (er && er.code === "EMFILE" && fs._curOpen > fs.MIN_MAX_OPEN) {
                fs.MAX_OPEN = fs._curOpen - 1;
                return fs.writeFile(path, data, options, cb);
              }
              cb(er);
            });
          }
          function writeFile(path, data, options, cb) {
            cb = cb || noop;
            fs._curOpen++;
            fs._originalFs.writeFile.call(fs, path, data, options, function(er) {
              onclose();
              cb(er);
            });
          }
          function WriteFileReq(path, data, options, cb) {
            this.path = path;
            this.data = data;
            this.options = options;
            this.cb = cb;
          }
          var constants = require('constants');
          if (constants.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
            fs.lchmod = function(path, mode, callback) {
              callback = callback || noop;
              fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                  callback(err);
                  return;
                }
                fs.fchmod(fd, mode, function(err) {
                  fs.close(fd, function(err2) {
                    callback(err || err2);
                  });
                });
              });
            };
            fs.lchmodSync = function(path, mode) {
              var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
              var err,
                  err2;
              try {
                var ret = fs.fchmodSync(fd, mode);
              } catch (er) {
                err = er;
              }
              try {
                fs.closeSync(fd);
              } catch (er) {
                err2 = er;
              }
              if (err || err2)
                throw (err || err2);
              return ret;
            };
          }
          if (!fs.lutimes) {
            if (constants.hasOwnProperty("O_SYMLINK")) {
              fs.lutimes = function(path, at, mt, cb) {
                fs.open(path, constants.O_SYMLINK, function(er, fd) {
                  cb = cb || noop;
                  if (er)
                    return cb(er);
                  fs.futimes(fd, at, mt, function(er) {
                    fs.close(fd, function(er2) {
                      return cb(er || er2);
                    });
                  });
                });
              };
              fs.lutimesSync = function(path, at, mt) {
                var fd = fs.openSync(path, constants.O_SYMLINK),
                    err,
                    err2,
                    ret;
                try {
                  var ret = fs.futimesSync(fd, at, mt);
                } catch (er) {
                  err = er;
                }
                try {
                  fs.closeSync(fd);
                } catch (er) {
                  err2 = er;
                }
                if (err || err2)
                  throw (err || err2);
                return ret;
              };
            } else if (fs.utimensat && constants.hasOwnProperty("AT_SYMLINK_NOFOLLOW")) {
              fs.lutimes = function(path, at, mt, cb) {
                fs.utimensat(path, at, mt, constants.AT_SYMLINK_NOFOLLOW, cb);
              };
              fs.lutimesSync = function(path, at, mt) {
                return fs.utimensatSync(path, at, mt, constants.AT_SYMLINK_NOFOLLOW);
              };
            } else {
              fs.lutimes = function(_a, _b, _c, cb) {
                process.nextTick(cb);
              };
              fs.lutimesSync = function() {};
            }
          }
          fs.chown = chownFix(fs.chown);
          fs.fchown = chownFix(fs.fchown);
          fs.lchown = chownFix(fs.lchown);
          fs.chownSync = chownFixSync(fs.chownSync);
          fs.fchownSync = chownFixSync(fs.fchownSync);
          fs.lchownSync = chownFixSync(fs.lchownSync);
          function chownFix(orig) {
            if (!orig)
              return orig;
            return function(target, uid, gid, cb) {
              return orig.call(fs, target, uid, gid, function(er, res) {
                if (chownErOk(er))
                  er = null;
                cb(er, res);
              });
            };
          }
          function chownFixSync(orig) {
            if (!orig)
              return orig;
            return function(target, uid, gid) {
              try {
                return orig.call(fs, target, uid, gid);
              } catch (er) {
                if (!chownErOk(er))
                  throw er;
              }
            };
          }
          function chownErOk(er) {
            if (!er || (!process.getuid || process.getuid() !== 0) && (er.code === "EINVAL" || er.code === "EPERM"))
              return true;
          }
          if (!fs.lchmod) {
            fs.lchmod = function(path, mode, cb) {
              process.nextTick(cb);
            };
            fs.lchmodSync = function() {};
          }
          if (!fs.lchown) {
            fs.lchown = function(path, uid, gid, cb) {
              process.nextTick(cb);
            };
            fs.lchownSync = function() {};
          }
          if (process.platform === "win32") {
            var rename_ = fs.rename;
            fs.rename = function rename(from, to, cb) {
              var start = Date.now();
              rename_(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < 1000) {
                  return rename_(from, to, CB);
                }
                cb(er);
              });
            };
          }
          var read = fs.read;
          fs.read = function(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === 'function') {
              var eagCounter = 0;
              callback = function(er, _, __) {
                if (er && er.code === 'EAGAIN' && eagCounter < 10) {
                  eagCounter++;
                  return read.call(fs, fd, buffer, offset, length, position, callback);
                }
                callback_.apply(this, arguments);
              };
            }
            return read.call(fs, fd, buffer, offset, length, position, callback);
          };
          var readSync = fs.readSync;
          fs.readSync = function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while (true) {
              try {
                return readSync.call(fs, fd, buffer, offset, length, position);
              } catch (er) {
                if (er.code === 'EAGAIN' && eagCounter < 10) {
                  eagCounter++;
                  continue;
                }
                throw er;
              }
            }
          };
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "constants": 8,
        "fs": 1
      }],
      276: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      277: [function(require, module, exports) {
        (function(global) {
          ;
          (function(window, undefined) {
            var freeExports = typeof exports == 'object' && exports;
            var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
            var freeGlobal = typeof global == 'object' && global;
            if (freeGlobal.global === freeGlobal) {
              window = freeGlobal;
            }
            var arrayRef = [],
                objectRef = {};
            var idCounter = 0;
            var indicatorObject = objectRef;
            var largeArraySize = 30;
            var oldDash = window._;
            var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
            var reEmptyStringLeading = /\b__p \+= '';/g,
                reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
                reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
            var reFlags = /\w*$/;
            var reNative = RegExp('^' + (objectRef.valueOf + '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$');
            var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
            var reInterpolate = /<%=([\s\S]+?)%>/g;
            var reNoMatch = /($^)/;
            var reUnescapedHtml = /[&<>"']/g;
            var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
            var templateCounter = 0;
            var ceil = Math.ceil,
                concat = arrayRef.concat,
                floor = Math.floor,
                getPrototypeOf = reNative.test(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
                hasOwnProperty = objectRef.hasOwnProperty,
                push = arrayRef.push,
                toString = objectRef.toString;
            var nativeBind = reNative.test(nativeBind = slice.bind) && nativeBind,
                nativeIsArray = reNative.test(nativeIsArray = Array.isArray) && nativeIsArray,
                nativeIsFinite = window.isFinite,
                nativeIsNaN = window.isNaN,
                nativeKeys = reNative.test(nativeKeys = Object.keys) && nativeKeys,
                nativeMax = Math.max,
                nativeMin = Math.min,
                nativeRandom = Math.random;
            var argsClass = '[object Arguments]',
                arrayClass = '[object Array]',
                boolClass = '[object Boolean]',
                dateClass = '[object Date]',
                funcClass = '[object Function]',
                numberClass = '[object Number]',
                objectClass = '[object Object]',
                regexpClass = '[object RegExp]',
                stringClass = '[object String]';
            var isIeOpera = !!window.attachEvent,
                isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);
            var isBindFast = nativeBind && !isV8;
            var isKeysFast = nativeKeys && (isIeOpera || isV8);
            var cloneableClasses = {};
            cloneableClasses[funcClass] = false;
            cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
            var ctorByClass = {};
            ctorByClass[arrayClass] = Array;
            ctorByClass[boolClass] = Boolean;
            ctorByClass[dateClass] = Date;
            ctorByClass[objectClass] = Object;
            ctorByClass[numberClass] = Number;
            ctorByClass[regexpClass] = RegExp;
            ctorByClass[stringClass] = String;
            var objectTypes = {
              'boolean': false,
              'function': true,
              'object': true,
              'number': false,
              'string': false,
              'undefined': false
            };
            var stringEscapes = {
              '\\': '\\',
              "'": "'",
              '\n': 'n',
              '\r': 'r',
              '\t': 't',
              '\u2028': 'u2028',
              '\u2029': 'u2029'
            };
            function lodash(value) {
              if (value && typeof value == 'object' && value.__wrapped__) {
                return value;
              }
              if (!(this instanceof lodash)) {
                return new lodash(value);
              }
              this.__wrapped__ = value;
            }
            lodash.templateSettings = {
              'escape': /<%-([\s\S]+?)%>/g,
              'evaluate': /<%([\s\S]+?)%>/g,
              'interpolate': reInterpolate,
              'variable': '',
              'imports': {'_': lodash}
            };
            var iteratorTemplate = function(obj) {
              var __p = 'var index, iterable = ' + (obj.firstArg) + ', result = iterable;\nif (!iterable) return result;\n' + (obj.top) + ';\n';
              if (obj.arrays) {
                __p += 'var length = iterable.length; index = -1;\nif (' + (obj.arrays) + ') {\n  while (++index < length) {\n    ' + (obj.loop) + '\n  }\n}\nelse {  ';
              }
              ;
              if (obj.isKeysFast && obj.useHas) {
                __p += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ' + (obj.loop) + '\n  }  ';
              } else {
                __p += '\n  for (index in iterable) {';
                if (obj.useHas) {
                  __p += '\n    if (';
                  if (obj.useHas) {
                    __p += 'hasOwnProperty.call(iterable, index)';
                  }
                  ;
                  __p += ') {    ';
                }
                ;
                __p += (obj.loop) + ';    ';
                if (obj.useHas) {
                  __p += '\n    }';
                }
                ;
                __p += '\n  }  ';
              }
              ;
              if (obj.arrays) {
                __p += '\n}';
              }
              ;
              __p += (obj.bottom) + ';\nreturn result';
              return __p;
            };
            var defaultsIteratorOptions = {
              'args': 'object, source, guard',
              'top': 'var args = arguments,\n' + '    argsIndex = 0,\n' + "    argsLength = typeof guard == 'number' ? 2 : args.length;\n" + 'while (++argsIndex < argsLength) {\n' + '  iterable = args[argsIndex];\n' + '  if (iterable && objectTypes[typeof iterable]) {',
              'loop': "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
              'bottom': '  }\n}'
            };
            var eachIteratorOptions = {
              'args': 'collection, callback, thisArg',
              'top': "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
              'arrays': "typeof length == 'number'",
              'loop': 'if (callback(iterable[index], index, collection) === false) return result'
            };
            var forOwnIteratorOptions = {
              'top': 'if (!objectTypes[typeof iterable]) return result;\n' + eachIteratorOptions.top,
              'arrays': false
            };
            function cachedContains(array, fromIndex, largeSize) {
              fromIndex || (fromIndex = 0);
              var length = array.length,
                  isLarge = (length - fromIndex) >= (largeSize || largeArraySize);
              if (isLarge) {
                var cache = {},
                    index = fromIndex - 1;
                while (++index < length) {
                  var key = array[index] + '';
                  (hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = [])).push(array[index]);
                }
              }
              return function(value) {
                if (isLarge) {
                  var key = value + '';
                  return hasOwnProperty.call(cache, key) && indexOf(cache[key], value) > -1;
                }
                return indexOf(array, value, fromIndex) > -1;
              };
            }
            function charAtCallback(value) {
              return value.charCodeAt(0);
            }
            function compareAscending(a, b) {
              var ai = a.index,
                  bi = b.index;
              a = a.criteria;
              b = b.criteria;
              if (a !== b) {
                if (a > b || typeof a == 'undefined') {
                  return 1;
                }
                if (a < b || typeof b == 'undefined') {
                  return -1;
                }
              }
              return ai < bi ? -1 : 1;
            }
            function createBound(func, thisArg, partialArgs, rightIndicator) {
              var isFunc = isFunction(func),
                  isPartial = !partialArgs,
                  key = thisArg;
              if (isPartial) {
                partialArgs = thisArg;
              }
              if (!isFunc) {
                thisArg = func;
              }
              function bound() {
                var args = arguments,
                    thisBinding = isPartial ? this : thisArg;
                if (!isFunc) {
                  func = thisArg[key];
                }
                if (partialArgs.length) {
                  args = args.length ? (args = slice(args), rightIndicator ? args.concat(partialArgs) : partialArgs.concat(args)) : partialArgs;
                }
                if (this instanceof bound) {
                  noop.prototype = func.prototype;
                  thisBinding = new noop;
                  noop.prototype = null;
                  var result = func.apply(thisBinding, args);
                  return isObject(result) ? result : thisBinding;
                }
                return func.apply(thisBinding, args);
              }
              return bound;
            }
            function createCallback(func, thisArg, argCount) {
              if (func == null) {
                return identity;
              }
              var type = typeof func;
              if (type != 'function') {
                if (type != 'object') {
                  return function(object) {
                    return object[func];
                  };
                }
                var props = keys(func);
                return function(object) {
                  var length = props.length,
                      result = false;
                  while (length--) {
                    if (!(result = isEqual(object[props[length]], func[props[length]], indicatorObject))) {
                      break;
                    }
                  }
                  return result;
                };
              }
              if (typeof thisArg != 'undefined') {
                if (argCount === 1) {
                  return function(value) {
                    return func.call(thisArg, value);
                  };
                }
                if (argCount === 2) {
                  return function(a, b) {
                    return func.call(thisArg, a, b);
                  };
                }
                if (argCount === 4) {
                  return function(accumulator, value, index, object) {
                    return func.call(thisArg, accumulator, value, index, object);
                  };
                }
                return function(value, index, object) {
                  return func.call(thisArg, value, index, object);
                };
              }
              return func;
            }
            function createIterator() {
              var data = {
                'isKeysFast': isKeysFast,
                'arrays': 'isArray(iterable)',
                'bottom': '',
                'loop': '',
                'top': '',
                'useHas': true
              };
              for (var object,
                  index = 0; object = arguments[index]; index++) {
                for (var key in object) {
                  data[key] = object[key];
                }
              }
              var args = data.args;
              data.firstArg = /^[^,]+/.exec(args)[0];
              var factory = Function('createCallback, hasOwnProperty, isArguments, isArray, isString, ' + 'objectTypes, nativeKeys', 'return function(' + args + ') {\n' + iteratorTemplate(data) + '\n}');
              return factory(createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys);
            }
            var each = createIterator(eachIteratorOptions);
            function escapeStringChar(match) {
              return '\\' + stringEscapes[match];
            }
            function escapeHtmlChar(match) {
              return htmlEscapes[match];
            }
            function isNode(value) {
              return typeof value.toString != 'function' && typeof(value + '') == 'string';
            }
            function noop() {}
            function slice(array, start, end) {
              start || (start = 0);
              if (typeof end == 'undefined') {
                end = array ? array.length : 0;
              }
              var index = -1,
                  length = end - start || 0,
                  result = Array(length < 0 ? 0 : length);
              while (++index < length) {
                result[index] = array[start + index];
              }
              return result;
            }
            function unescapeHtmlChar(match) {
              return htmlUnescapes[match];
            }
            function isArguments(value) {
              return toString.call(value) == argsClass;
            }
            var forIn = createIterator(eachIteratorOptions, forOwnIteratorOptions, {'useHas': false});
            var forOwn = createIterator(eachIteratorOptions, forOwnIteratorOptions);
            var isArray = nativeIsArray || function(value) {
              return value instanceof Array || toString.call(value) == arrayClass;
            };
            var keys = !nativeKeys ? shimKeys : function(object) {
              if (!isObject(object)) {
                return [];
              }
              return nativeKeys(object);
            };
            function shimIsPlainObject(value) {
              var result = false;
              if (!(value && typeof value == 'object') || isArguments(value)) {
                return result;
              }
              var ctor = value.constructor;
              if ((!isFunction(ctor)) || ctor instanceof ctor) {
                forIn(value, function(value, key) {
                  result = key;
                });
                return result === false || hasOwnProperty.call(value, result);
              }
              return result;
            }
            function shimKeys(object) {
              var result = [];
              forOwn(object, function(value, key) {
                result.push(key);
              });
              return result;
            }
            var htmlEscapes = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;'
            };
            var htmlUnescapes = invert(htmlEscapes);
            var assign = createIterator(defaultsIteratorOptions, {
              'top': defaultsIteratorOptions.top.replace(';', ';\n' + "if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n" + '  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n' + "} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n" + '  callback = args[--argsLength];\n' + '}'),
              'loop': 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
            });
            function clone(value, deep, callback, thisArg, stackA, stackB) {
              var result = value;
              if (typeof deep == 'function') {
                thisArg = callback;
                callback = deep;
                deep = false;
              }
              if (typeof callback == 'function') {
                callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 1);
                result = callback(result);
                var done = typeof result != 'undefined';
                if (!done) {
                  result = value;
                }
              }
              var isObj = isObject(result);
              if (isObj) {
                var className = toString.call(result);
                if (!cloneableClasses[className]) {
                  return result;
                }
                var isArr = isArray(result);
              }
              if (!isObj || !deep) {
                return isObj && !done ? (isArr ? slice(result) : assign({}, result)) : result;
              }
              var ctor = ctorByClass[className];
              switch (className) {
                case boolClass:
                case dateClass:
                  return done ? result : new ctor(+result);
                case numberClass:
                case stringClass:
                  return done ? result : new ctor(result);
                case regexpClass:
                  return done ? result : ctor(result.source, reFlags.exec(result));
              }
              stackA || (stackA = []);
              stackB || (stackB = []);
              var length = stackA.length;
              while (length--) {
                if (stackA[length] == value) {
                  return stackB[length];
                }
              }
              if (!done) {
                result = isArr ? ctor(result.length) : {};
                if (isArr) {
                  if (hasOwnProperty.call(value, 'index')) {
                    result.index = value.index;
                  }
                  if (hasOwnProperty.call(value, 'input')) {
                    result.input = value.input;
                  }
                }
              }
              stackA.push(value);
              stackB.push(result);
              (isArr ? forEach : forOwn)(done ? result : value, function(objValue, key) {
                result[key] = clone(objValue, deep, callback, undefined, stackA, stackB);
              });
              return result;
            }
            function cloneDeep(value, callback, thisArg) {
              return clone(value, true, callback, thisArg);
            }
            var defaults = createIterator(defaultsIteratorOptions);
            function functions(object) {
              var result = [];
              forIn(object, function(value, key) {
                if (isFunction(value)) {
                  result.push(key);
                }
              });
              return result.sort();
            }
            function has(object, property) {
              return object ? hasOwnProperty.call(object, property) : false;
            }
            function invert(object) {
              var index = -1,
                  props = keys(object),
                  length = props.length,
                  result = {};
              while (++index < length) {
                var key = props[index];
                result[object[key]] = key;
              }
              return result;
            }
            function isBoolean(value) {
              return value === true || value === false || toString.call(value) == boolClass;
            }
            function isDate(value) {
              return value instanceof Date || toString.call(value) == dateClass;
            }
            function isElement(value) {
              return value ? value.nodeType === 1 : false;
            }
            function isEmpty(value) {
              var result = true;
              if (!value) {
                return result;
              }
              var className = toString.call(value),
                  length = value.length;
              if ((className == arrayClass || className == stringClass || className == argsClass) || (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
                return !length;
              }
              forOwn(value, function() {
                return (result = false);
              });
              return result;
            }
            function isEqual(a, b, callback, thisArg, stackA, stackB) {
              var whereIndicator = callback === indicatorObject;
              if (callback && !whereIndicator) {
                callback = typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg, 2);
                var result = callback(a, b);
                if (typeof result != 'undefined') {
                  return !!result;
                }
              }
              if (a === b) {
                return a !== 0 || (1 / a == 1 / b);
              }
              var type = typeof a,
                  otherType = typeof b;
              if (a === a && (!a || (type != 'function' && type != 'object')) && (!b || (otherType != 'function' && otherType != 'object'))) {
                return false;
              }
              if (a == null || b == null) {
                return a === b;
              }
              var className = toString.call(a),
                  otherClass = toString.call(b);
              if (className == argsClass) {
                className = objectClass;
              }
              if (otherClass == argsClass) {
                otherClass = objectClass;
              }
              if (className != otherClass) {
                return false;
              }
              switch (className) {
                case boolClass:
                case dateClass:
                  return +a == +b;
                case numberClass:
                  return a != +a ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
                case regexpClass:
                case stringClass:
                  return a == b + '';
              }
              var isArr = className == arrayClass;
              if (!isArr) {
                if (a.__wrapped__ || b.__wrapped__) {
                  return isEqual(a.__wrapped__ || a, b.__wrapped__ || b, callback, thisArg, stackA, stackB);
                }
                if (className != objectClass) {
                  return false;
                }
                var ctorA = a.constructor,
                    ctorB = b.constructor;
                if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB)) {
                  return false;
                }
              }
              stackA || (stackA = []);
              stackB || (stackB = []);
              var length = stackA.length;
              while (length--) {
                if (stackA[length] == a) {
                  return stackB[length] == b;
                }
              }
              var size = 0;
              result = true;
              stackA.push(a);
              stackB.push(b);
              if (isArr) {
                length = a.length;
                size = b.length;
                result = size == a.length;
                if (!result && !whereIndicator) {
                  return result;
                }
                while (size--) {
                  var index = length,
                      value = b[size];
                  if (whereIndicator) {
                    while (index--) {
                      if ((result = isEqual(a[index], value, callback, thisArg, stackA, stackB))) {
                        break;
                      }
                    }
                  } else if (!(result = isEqual(a[size], value, callback, thisArg, stackA, stackB))) {
                    break;
                  }
                }
                return result;
              }
              forIn(b, function(value, key, b) {
                if (hasOwnProperty.call(b, key)) {
                  size++;
                  return (result = hasOwnProperty.call(a, key) && isEqual(a[key], value, callback, thisArg, stackA, stackB));
                }
              });
              if (result && !whereIndicator) {
                forIn(a, function(value, key, a) {
                  if (hasOwnProperty.call(a, key)) {
                    return (result = --size > -1);
                  }
                });
              }
              return result;
            }
            function isFinite(value) {
              return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
            }
            function isFunction(value) {
              return typeof value == 'function';
            }
            if (isFunction(/x/)) {
              isFunction = function(value) {
                return value instanceof Function || toString.call(value) == funcClass;
              };
            }
            function isObject(value) {
              return value ? objectTypes[typeof value] : false;
            }
            function isNaN(value) {
              return isNumber(value) && value != +value;
            }
            function isNull(value) {
              return value === null;
            }
            function isNumber(value) {
              return typeof value == 'number' || toString.call(value) == numberClass;
            }
            var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
              if (!(value && typeof value == 'object')) {
                return false;
              }
              var valueOf = value.valueOf,
                  objProto = typeof valueOf == 'function' && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
              return objProto ? value == objProto || (getPrototypeOf(value) == objProto && !isArguments(value)) : shimIsPlainObject(value);
            };
            function isRegExp(value) {
              return value instanceof RegExp || toString.call(value) == regexpClass;
            }
            function isString(value) {
              return typeof value == 'string' || toString.call(value) == stringClass;
            }
            function isUndefined(value) {
              return typeof value == 'undefined';
            }
            function merge(object, source, deepIndicator) {
              var args = arguments,
                  index = 0,
                  length = 2;
              if (!isObject(object)) {
                return object;
              }
              if (deepIndicator === indicatorObject) {
                var callback = args[3],
                    stackA = args[4],
                    stackB = args[5];
              } else {
                stackA = [];
                stackB = [];
                if (typeof deepIndicator != 'number') {
                  length = args.length;
                }
                if (length > 3 && typeof args[length - 2] == 'function') {
                  callback = createCallback(args[--length - 1], args[length--], 2);
                } else if (length > 2 && typeof args[length - 1] == 'function') {
                  callback = args[--length];
                }
              }
              while (++index < length) {
                (isArray(args[index]) ? forEach : forOwn)(args[index], function(source, key) {
                  var found,
                      isArr,
                      result = source,
                      value = object[key];
                  if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
                    var stackLength = stackA.length;
                    while (stackLength--) {
                      if ((found = stackA[stackLength] == source)) {
                        value = stackB[stackLength];
                        break;
                      }
                    }
                    if (!found) {
                      value = isArr ? (isArray(value) ? value : []) : (isPlainObject(value) ? value : {});
                      if (callback) {
                        result = callback(value, source);
                        if (typeof result != 'undefined') {
                          value = result;
                        }
                      }
                      stackA.push(source);
                      stackB.push(value);
                      if (!callback) {
                        value = merge(value, source, indicatorObject, callback, stackA, stackB);
                      }
                    }
                  } else {
                    if (callback) {
                      result = callback(value, source);
                      if (typeof result == 'undefined') {
                        result = source;
                      }
                    }
                    if (typeof result != 'undefined') {
                      value = result;
                    }
                  }
                  object[key] = value;
                });
              }
              return object;
            }
            function omit(object, callback, thisArg) {
              var isFunc = typeof callback == 'function',
                  result = {};
              if (isFunc) {
                callback = createCallback(callback, thisArg);
              } else {
                var props = concat.apply(arrayRef, arguments);
              }
              forIn(object, function(value, key, object) {
                if (isFunc ? !callback(value, key, object) : indexOf(props, key, 1) < 0) {
                  result[key] = value;
                }
              });
              return result;
            }
            function pairs(object) {
              var index = -1,
                  props = keys(object),
                  length = props.length,
                  result = Array(length);
              while (++index < length) {
                var key = props[index];
                result[index] = [key, object[key]];
              }
              return result;
            }
            function pick(object, callback, thisArg) {
              var result = {};
              if (typeof callback != 'function') {
                var index = 0,
                    props = concat.apply(arrayRef, arguments),
                    length = isObject(object) ? props.length : 0;
                while (++index < length) {
                  var key = props[index];
                  if (key in object) {
                    result[key] = object[key];
                  }
                }
              } else {
                callback = createCallback(callback, thisArg);
                forIn(object, function(value, key, object) {
                  if (callback(value, key, object)) {
                    result[key] = value;
                  }
                });
              }
              return result;
            }
            function values(object) {
              var index = -1,
                  props = keys(object),
                  length = props.length,
                  result = Array(length);
              while (++index < length) {
                result[index] = object[props[index]];
              }
              return result;
            }
            function at(collection) {
              var index = -1,
                  props = concat.apply(arrayRef, slice(arguments, 1)),
                  length = props.length,
                  result = Array(length);
              while (++index < length) {
                result[index] = collection[props[index]];
              }
              return result;
            }
            function contains(collection, target, fromIndex) {
              var index = -1,
                  length = collection ? collection.length : 0,
                  result = false;
              fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
              if (typeof length == 'number') {
                result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
              } else {
                each(collection, function(value) {
                  if (++index >= fromIndex) {
                    return !(result = value === target);
                  }
                });
              }
              return result;
            }
            function countBy(collection, callback, thisArg) {
              var result = {};
              callback = createCallback(callback, thisArg);
              forEach(collection, function(value, key, collection) {
                key = callback(value, key, collection) + '';
                (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
              });
              return result;
            }
            function every(collection, callback, thisArg) {
              var result = true;
              callback = createCallback(callback, thisArg);
              if (isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  if (!(result = !!callback(collection[index], index, collection))) {
                    break;
                  }
                }
              } else {
                each(collection, function(value, index, collection) {
                  return (result = !!callback(value, index, collection));
                });
              }
              return result;
            }
            function filter(collection, callback, thisArg) {
              var result = [];
              callback = createCallback(callback, thisArg);
              if (isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  var value = collection[index];
                  if (callback(value, index, collection)) {
                    result.push(value);
                  }
                }
              } else {
                each(collection, function(value, index, collection) {
                  if (callback(value, index, collection)) {
                    result.push(value);
                  }
                });
              }
              return result;
            }
            function find(collection, callback, thisArg) {
              var result;
              callback = createCallback(callback, thisArg);
              forEach(collection, function(value, index, collection) {
                if (callback(value, index, collection)) {
                  result = value;
                  return false;
                }
              });
              return result;
            }
            function forEach(collection, callback, thisArg) {
              if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  if (callback(collection[index], index, collection) === false) {
                    break;
                  }
                }
              } else {
                each(collection, callback, thisArg);
              }
              return collection;
            }
            function groupBy(collection, callback, thisArg) {
              var result = {};
              callback = createCallback(callback, thisArg);
              forEach(collection, function(value, key, collection) {
                key = callback(value, key, collection) + '';
                (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
              });
              return result;
            }
            function invoke(collection, methodName) {
              var args = slice(arguments, 2),
                  index = -1,
                  isFunc = typeof methodName == 'function',
                  length = collection ? collection.length : 0,
                  result = Array(typeof length == 'number' ? length : 0);
              forEach(collection, function(value) {
                result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
              });
              return result;
            }
            function map(collection, callback, thisArg) {
              var index = -1,
                  length = collection ? collection.length : 0,
                  result = Array(typeof length == 'number' ? length : 0);
              callback = createCallback(callback, thisArg);
              if (isArray(collection)) {
                while (++index < length) {
                  result[index] = callback(collection[index], index, collection);
                }
              } else {
                each(collection, function(value, key, collection) {
                  result[++index] = callback(value, key, collection);
                });
              }
              return result;
            }
            function max(collection, callback, thisArg) {
              var computed = -Infinity,
                  result = computed;
              if (!callback && isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  var value = collection[index];
                  if (value > result) {
                    result = value;
                  }
                }
              } else {
                callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg);
                each(collection, function(value, index, collection) {
                  var current = callback(value, index, collection);
                  if (current > computed) {
                    computed = current;
                    result = value;
                  }
                });
              }
              return result;
            }
            function min(collection, callback, thisArg) {
              var computed = Infinity,
                  result = computed;
              if (!callback && isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  var value = collection[index];
                  if (value < result) {
                    result = value;
                  }
                }
              } else {
                callback = !callback && isString(collection) ? charAtCallback : createCallback(callback, thisArg);
                each(collection, function(value, index, collection) {
                  var current = callback(value, index, collection);
                  if (current < computed) {
                    computed = current;
                    result = value;
                  }
                });
              }
              return result;
            }
            var pluck = map;
            function reduce(collection, callback, accumulator, thisArg) {
              var noaccum = arguments.length < 3;
              callback = createCallback(callback, thisArg, 4);
              if (isArray(collection)) {
                var index = -1,
                    length = collection.length;
                if (noaccum) {
                  accumulator = collection[++index];
                }
                while (++index < length) {
                  accumulator = callback(accumulator, collection[index], index, collection);
                }
              } else {
                each(collection, function(value, index, collection) {
                  accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection);
                });
              }
              return accumulator;
            }
            function reduceRight(collection, callback, accumulator, thisArg) {
              var iterable = collection,
                  length = collection ? collection.length : 0,
                  noaccum = arguments.length < 3;
              if (typeof length != 'number') {
                var props = keys(collection);
                length = props.length;
              }
              callback = createCallback(callback, thisArg, 4);
              forEach(collection, function(value, index, collection) {
                index = props ? props[--length] : --length;
                accumulator = noaccum ? (noaccum = false, iterable[index]) : callback(accumulator, iterable[index], index, collection);
              });
              return accumulator;
            }
            function reject(collection, callback, thisArg) {
              callback = createCallback(callback, thisArg);
              return filter(collection, function(value, index, collection) {
                return !callback(value, index, collection);
              });
            }
            function shuffle(collection) {
              var index = -1,
                  length = collection ? collection.length : 0,
                  result = Array(typeof length == 'number' ? length : 0);
              forEach(collection, function(value) {
                var rand = floor(nativeRandom() * (++index + 1));
                result[index] = result[rand];
                result[rand] = value;
              });
              return result;
            }
            function size(collection) {
              var length = collection ? collection.length : 0;
              return typeof length == 'number' ? length : keys(collection).length;
            }
            function some(collection, callback, thisArg) {
              var result;
              callback = createCallback(callback, thisArg);
              if (isArray(collection)) {
                var index = -1,
                    length = collection.length;
                while (++index < length) {
                  if ((result = callback(collection[index], index, collection))) {
                    break;
                  }
                }
              } else {
                each(collection, function(value, index, collection) {
                  return !(result = callback(value, index, collection));
                });
              }
              return !!result;
            }
            function sortBy(collection, callback, thisArg) {
              var index = -1,
                  length = collection ? collection.length : 0,
                  result = Array(typeof length == 'number' ? length : 0);
              callback = createCallback(callback, thisArg);
              forEach(collection, function(value, key, collection) {
                result[++index] = {
                  'criteria': callback(value, key, collection),
                  'index': index,
                  'value': value
                };
              });
              length = result.length;
              result.sort(compareAscending);
              while (length--) {
                result[length] = result[length].value;
              }
              return result;
            }
            function toArray(collection) {
              if (collection && typeof collection.length == 'number') {
                return slice(collection);
              }
              return values(collection);
            }
            var where = filter;
            function compact(array) {
              var index = -1,
                  length = array ? array.length : 0,
                  result = [];
              while (++index < length) {
                var value = array[index];
                if (value) {
                  result.push(value);
                }
              }
              return result;
            }
            function difference(array) {
              var index = -1,
                  length = array ? array.length : 0,
                  flattened = concat.apply(arrayRef, arguments),
                  contains = cachedContains(flattened, length),
                  result = [];
              while (++index < length) {
                var value = array[index];
                if (!contains(value)) {
                  result.push(value);
                }
              }
              return result;
            }
            function first(array, callback, thisArg) {
              if (array) {
                var n = 0,
                    length = array.length;
                if (typeof callback != 'number' && callback != null) {
                  var index = -1;
                  callback = createCallback(callback, thisArg);
                  while (++index < length && callback(array[index], index, array)) {
                    n++;
                  }
                } else {
                  n = callback;
                  if (n == null || thisArg) {
                    return array[0];
                  }
                }
                return slice(array, 0, nativeMin(nativeMax(0, n), length));
              }
            }
            function flatten(array, shallow) {
              var index = -1,
                  length = array ? array.length : 0,
                  result = [];
              while (++index < length) {
                var value = array[index];
                if (isArray(value)) {
                  push.apply(result, shallow ? value : flatten(value));
                } else {
                  result.push(value);
                }
              }
              return result;
            }
            function indexOf(array, value, fromIndex) {
              var index = -1,
                  length = array ? array.length : 0;
              if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0) - 1;
              } else if (fromIndex) {
                index = sortedIndex(array, value);
                return array[index] === value ? index : -1;
              }
              while (++index < length) {
                if (array[index] === value) {
                  return index;
                }
              }
              return -1;
            }
            function initial(array, callback, thisArg) {
              if (!array) {
                return [];
              }
              var n = 0,
                  length = array.length;
              if (typeof callback != 'number' && callback != null) {
                var index = length;
                callback = createCallback(callback, thisArg);
                while (index-- && callback(array[index], index, array)) {
                  n++;
                }
              } else {
                n = (callback == null || thisArg) ? 1 : callback || n;
              }
              return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
            }
            function intersection(array) {
              var args = arguments,
                  argsLength = args.length,
                  cache = {'0': {}},
                  index = -1,
                  length = array ? array.length : 0,
                  isLarge = length >= 100,
                  result = [],
                  seen = result;
              outer: while (++index < length) {
                var value = array[index];
                if (isLarge) {
                  var key = value + '';
                  var inited = hasOwnProperty.call(cache[0], key) ? !(seen = cache[0][key]) : (seen = cache[0][key] = []);
                }
                if (inited || indexOf(seen, value) < 0) {
                  if (isLarge) {
                    seen.push(value);
                  }
                  var argsIndex = argsLength;
                  while (--argsIndex) {
                    if (!(cache[argsIndex] || (cache[argsIndex] = cachedContains(args[argsIndex], 0, 100)))(value)) {
                      continue outer;
                    }
                  }
                  result.push(value);
                }
              }
              return result;
            }
            function last(array, callback, thisArg) {
              if (array) {
                var n = 0,
                    length = array.length;
                if (typeof callback != 'number' && callback != null) {
                  var index = length;
                  callback = createCallback(callback, thisArg);
                  while (index-- && callback(array[index], index, array)) {
                    n++;
                  }
                } else {
                  n = callback;
                  if (n == null || thisArg) {
                    return array[length - 1];
                  }
                }
                return slice(array, nativeMax(0, length - n));
              }
            }
            function lastIndexOf(array, value, fromIndex) {
              var index = array ? array.length : 0;
              if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
              }
              while (index--) {
                if (array[index] === value) {
                  return index;
                }
              }
              return -1;
            }
            function object(keys, values) {
              var index = -1,
                  length = keys ? keys.length : 0,
                  result = {};
              while (++index < length) {
                var key = keys[index];
                if (values) {
                  result[key] = values[index];
                } else {
                  result[key[0]] = key[1];
                }
              }
              return result;
            }
            function range(start, end, step) {
              start = +start || 0;
              step = +step || 1;
              if (end == null) {
                end = start;
                start = 0;
              }
              var index = -1,
                  length = nativeMax(0, ceil((end - start) / step)),
                  result = Array(length);
              while (++index < length) {
                result[index] = start;
                start += step;
              }
              return result;
            }
            function rest(array, callback, thisArg) {
              if (typeof callback != 'number' && callback != null) {
                var n = 0,
                    index = -1,
                    length = array ? array.length : 0;
                callback = createCallback(callback, thisArg);
                while (++index < length && callback(array[index], index, array)) {
                  n++;
                }
              } else {
                n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
              }
              return slice(array, n);
            }
            function sortedIndex(array, value, callback, thisArg) {
              var low = 0,
                  high = array ? array.length : low;
              callback = callback ? createCallback(callback, thisArg, 1) : identity;
              value = callback(value);
              while (low < high) {
                var mid = (low + high) >>> 1;
                callback(array[mid]) < value ? low = mid + 1 : high = mid;
              }
              return low;
            }
            function union() {
              return uniq(concat.apply(arrayRef, arguments));
            }
            function uniq(array, isSorted, callback, thisArg) {
              var index = -1,
                  length = array ? array.length : 0,
                  result = [],
                  seen = result;
              if (typeof isSorted == 'function') {
                thisArg = callback;
                callback = isSorted;
                isSorted = false;
              }
              var isLarge = !isSorted && length >= 75;
              if (isLarge) {
                var cache = {};
              }
              if (callback) {
                seen = [];
                callback = createCallback(callback, thisArg);
              }
              while (++index < length) {
                var value = array[index],
                    computed = callback ? callback(value, index, array) : value;
                if (isLarge) {
                  var key = computed + '';
                  var inited = hasOwnProperty.call(cache, key) ? !(seen = cache[key]) : (seen = cache[key] = []);
                }
                if (isSorted ? !index || seen[seen.length - 1] !== computed : inited || indexOf(seen, computed) < 0) {
                  if (callback || isLarge) {
                    seen.push(computed);
                  }
                  result.push(value);
                }
              }
              return result;
            }
            function without(array) {
              var index = -1,
                  length = array ? array.length : 0,
                  contains = cachedContains(arguments, 1),
                  result = [];
              while (++index < length) {
                var value = array[index];
                if (!contains(value)) {
                  result.push(value);
                }
              }
              return result;
            }
            function zip(array) {
              var index = -1,
                  length = array ? max(pluck(arguments, 'length')) : 0,
                  result = Array(length);
              while (++index < length) {
                result[index] = pluck(arguments, index);
              }
              return result;
            }
            function after(n, func) {
              if (n < 1) {
                return func();
              }
              return function() {
                if (--n < 1) {
                  return func.apply(this, arguments);
                }
              };
            }
            function bind(func, thisArg) {
              return isBindFast || (nativeBind && arguments.length > 2) ? nativeBind.call.apply(nativeBind, arguments) : createBound(func, thisArg, slice(arguments, 2));
            }
            function bindAll(object) {
              var funcs = concat.apply(arrayRef, arguments),
                  index = funcs.length > 1 ? 0 : (funcs = functions(object), -1),
                  length = funcs.length;
              while (++index < length) {
                var key = funcs[index];
                object[key] = bind(object[key], object);
              }
              return object;
            }
            function bindKey(object, key) {
              return createBound(object, key, slice(arguments, 2));
            }
            function compose() {
              var funcs = arguments;
              return function() {
                var args = arguments,
                    length = funcs.length;
                while (length--) {
                  args = [funcs[length].apply(this, args)];
                }
                return args[0];
              };
            }
            function debounce(func, wait, immediate) {
              var args,
                  result,
                  thisArg,
                  timeoutId;
              function delayed() {
                timeoutId = null;
                if (!immediate) {
                  result = func.apply(thisArg, args);
                }
              }
              return function() {
                var isImmediate = immediate && !timeoutId;
                args = arguments;
                thisArg = this;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(delayed, wait);
                if (isImmediate) {
                  result = func.apply(thisArg, args);
                }
                return result;
              };
            }
            function delay(func, wait) {
              var args = slice(arguments, 2);
              return setTimeout(function() {
                func.apply(undefined, args);
              }, wait);
            }
            function defer(func) {
              var args = slice(arguments, 1);
              return setTimeout(function() {
                func.apply(undefined, args);
              }, 1);
            }
            if (isV8 && freeModule && typeof setImmediate == 'function') {
              defer = bind(setImmediate, window);
            }
            function memoize(func, resolver) {
              var cache = {};
              return function() {
                var key = (resolver ? resolver.apply(this, arguments) : arguments[0]) + '';
                return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments));
              };
            }
            function once(func) {
              var ran,
                  result;
              return function() {
                if (ran) {
                  return result;
                }
                ran = true;
                result = func.apply(this, arguments);
                func = null;
                return result;
              };
            }
            function partial(func) {
              return createBound(func, slice(arguments, 1));
            }
            function partialRight(func) {
              return createBound(func, slice(arguments, 1), null, indicatorObject);
            }
            function throttle(func, wait) {
              var args,
                  result,
                  thisArg,
                  timeoutId,
                  lastCalled = 0;
              function trailingCall() {
                lastCalled = new Date;
                timeoutId = null;
                result = func.apply(thisArg, args);
              }
              return function() {
                var now = new Date,
                    remaining = wait - (now - lastCalled);
                args = arguments;
                thisArg = this;
                if (remaining <= 0) {
                  clearTimeout(timeoutId);
                  timeoutId = null;
                  lastCalled = now;
                  result = func.apply(thisArg, args);
                } else if (!timeoutId) {
                  timeoutId = setTimeout(trailingCall, remaining);
                }
                return result;
              };
            }
            function wrap(value, wrapper) {
              return function() {
                var args = [value];
                push.apply(args, arguments);
                return wrapper.apply(this, args);
              };
            }
            function escape(string) {
              return string == null ? '' : (string + '').replace(reUnescapedHtml, escapeHtmlChar);
            }
            function identity(value) {
              return value;
            }
            function mixin(object) {
              forEach(functions(object), function(methodName) {
                var func = lodash[methodName] = object[methodName];
                lodash.prototype[methodName] = function() {
                  var args = [this.__wrapped__];
                  push.apply(args, arguments);
                  return new lodash(func.apply(lodash, args));
                };
              });
            }
            function noConflict() {
              window._ = oldDash;
              return this;
            }
            function random(min, max) {
              if (min == null && max == null) {
                max = 1;
              }
              min = +min || 0;
              if (max == null) {
                max = min;
                min = 0;
              }
              return min + floor(nativeRandom() * ((+max || 0) - min + 1));
            }
            function result(object, property) {
              var value = object ? object[property] : undefined;
              return isFunction(value) ? object[property]() : value;
            }
            function template(text, data, options) {
              var settings = lodash.templateSettings;
              text || (text = '');
              options = defaults({}, options, settings);
              var imports = defaults({}, options.imports, settings.imports),
                  importsKeys = keys(imports),
                  importsValues = values(imports);
              var isEvaluating,
                  index = 0,
                  interpolate = options.interpolate || reNoMatch,
                  source = "__p += '";
              var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
              text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                if (escapeValue) {
                  source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                  isEvaluating = true;
                  source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) {
                  source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                }
                index = offset + match.length;
                return match;
              });
              source += "';\n";
              var variable = options.variable,
                  hasVariable = variable;
              if (!hasVariable) {
                variable = 'obj';
                source = 'with (' + variable + ') {\n' + source + '\n}\n';
              }
              source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
              source = 'function(' + variable + ') {\n' + (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') + "var __t, __p = '', __e = _.escape" + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
              var sourceURL = '\n/*\n//@ sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';
              try {
                var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
              } catch (e) {
                e.source = source;
                throw e;
              }
              if (data) {
                return result(data);
              }
              result.source = source;
              return result;
            }
            function times(n, callback, thisArg) {
              n = +n || 0;
              var index = -1,
                  result = Array(n);
              while (++index < n) {
                result[index] = callback.call(thisArg, index);
              }
              return result;
            }
            function unescape(string) {
              return string == null ? '' : (string + '').replace(reEscapedHtml, unescapeHtmlChar);
            }
            function uniqueId(prefix) {
              var id = ++idCounter;
              return (prefix == null ? '' : prefix + '') + id;
            }
            function tap(value, interceptor) {
              interceptor(value);
              return value;
            }
            function wrapperToString() {
              return this.__wrapped__ + '';
            }
            function wrapperValueOf() {
              return this.__wrapped__;
            }
            lodash.after = after;
            lodash.assign = assign;
            lodash.at = at;
            lodash.bind = bind;
            lodash.bindAll = bindAll;
            lodash.bindKey = bindKey;
            lodash.compact = compact;
            lodash.compose = compose;
            lodash.countBy = countBy;
            lodash.debounce = debounce;
            lodash.defaults = defaults;
            lodash.defer = defer;
            lodash.delay = delay;
            lodash.difference = difference;
            lodash.filter = filter;
            lodash.flatten = flatten;
            lodash.forEach = forEach;
            lodash.forIn = forIn;
            lodash.forOwn = forOwn;
            lodash.functions = functions;
            lodash.groupBy = groupBy;
            lodash.initial = initial;
            lodash.intersection = intersection;
            lodash.invert = invert;
            lodash.invoke = invoke;
            lodash.keys = keys;
            lodash.map = map;
            lodash.max = max;
            lodash.memoize = memoize;
            lodash.merge = merge;
            lodash.min = min;
            lodash.object = object;
            lodash.omit = omit;
            lodash.once = once;
            lodash.pairs = pairs;
            lodash.partial = partial;
            lodash.partialRight = partialRight;
            lodash.pick = pick;
            lodash.pluck = pluck;
            lodash.range = range;
            lodash.reject = reject;
            lodash.rest = rest;
            lodash.shuffle = shuffle;
            lodash.sortBy = sortBy;
            lodash.tap = tap;
            lodash.throttle = throttle;
            lodash.times = times;
            lodash.toArray = toArray;
            lodash.union = union;
            lodash.uniq = uniq;
            lodash.values = values;
            lodash.where = where;
            lodash.without = without;
            lodash.wrap = wrap;
            lodash.zip = zip;
            lodash.collect = map;
            lodash.drop = rest;
            lodash.each = forEach;
            lodash.extend = assign;
            lodash.methods = functions;
            lodash.select = filter;
            lodash.tail = rest;
            lodash.unique = uniq;
            mixin(lodash);
            lodash.clone = clone;
            lodash.cloneDeep = cloneDeep;
            lodash.contains = contains;
            lodash.escape = escape;
            lodash.every = every;
            lodash.find = find;
            lodash.has = has;
            lodash.identity = identity;
            lodash.indexOf = indexOf;
            lodash.isArguments = isArguments;
            lodash.isArray = isArray;
            lodash.isBoolean = isBoolean;
            lodash.isDate = isDate;
            lodash.isElement = isElement;
            lodash.isEmpty = isEmpty;
            lodash.isEqual = isEqual;
            lodash.isFinite = isFinite;
            lodash.isFunction = isFunction;
            lodash.isNaN = isNaN;
            lodash.isNull = isNull;
            lodash.isNumber = isNumber;
            lodash.isObject = isObject;
            lodash.isPlainObject = isPlainObject;
            lodash.isRegExp = isRegExp;
            lodash.isString = isString;
            lodash.isUndefined = isUndefined;
            lodash.lastIndexOf = lastIndexOf;
            lodash.mixin = mixin;
            lodash.noConflict = noConflict;
            lodash.random = random;
            lodash.reduce = reduce;
            lodash.reduceRight = reduceRight;
            lodash.result = result;
            lodash.size = size;
            lodash.some = some;
            lodash.sortedIndex = sortedIndex;
            lodash.template = template;
            lodash.unescape = unescape;
            lodash.uniqueId = uniqueId;
            lodash.all = every;
            lodash.any = some;
            lodash.detect = find;
            lodash.foldl = reduce;
            lodash.foldr = reduceRight;
            lodash.include = contains;
            lodash.inject = reduce;
            forOwn(lodash, function(func, methodName) {
              if (!lodash.prototype[methodName]) {
                lodash.prototype[methodName] = function() {
                  var args = [this.__wrapped__];
                  push.apply(args, arguments);
                  return func.apply(lodash, args);
                };
              }
            });
            lodash.first = first;
            lodash.last = last;
            lodash.take = first;
            lodash.head = first;
            forOwn(lodash, function(func, methodName) {
              if (!lodash.prototype[methodName]) {
                lodash.prototype[methodName] = function(callback, thisArg) {
                  var result = func(this.__wrapped__, callback, thisArg);
                  return callback == null || (thisArg && typeof callback != 'function') ? result : new lodash(result);
                };
              }
            });
            lodash.VERSION = '1.0.2';
            lodash.prototype.toString = wrapperToString;
            lodash.prototype.value = wrapperValueOf;
            lodash.prototype.valueOf = wrapperValueOf;
            each(['join', 'pop', 'shift'], function(methodName) {
              var func = arrayRef[methodName];
              lodash.prototype[methodName] = function() {
                return func.apply(this.__wrapped__, arguments);
              };
            });
            each(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
              var func = arrayRef[methodName];
              lodash.prototype[methodName] = function() {
                func.apply(this.__wrapped__, arguments);
                return this;
              };
            });
            each(['concat', 'slice', 'splice'], function(methodName) {
              var func = arrayRef[methodName];
              lodash.prototype[methodName] = function() {
                return new lodash(func.apply(this.__wrapped__, arguments));
              };
            });
            if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
              window._ = lodash;
              define(function() {
                return lodash;
              });
            } else if (freeExports) {
              if (freeModule) {
                (freeModule.exports = lodash)._ = lodash;
              } else {
                freeExports._ = lodash;
              }
            } else {
              window._ = lodash;
            }
          }(this));
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}],
      278: [function(require, module, exports) {
        (function(process) {
          ;
          (function(require, exports, module, platform) {
            if (module)
              module.exports = minimatch;
            else
              exports.minimatch = minimatch;
            if (!require) {
              require = function(id) {
                switch (id) {
                  case "sigmund":
                    return function sigmund(obj) {
                      return JSON.stringify(obj);
                    };
                  case "path":
                    return {basename: function(f) {
                        f = f.split(/[\/\\]/);
                        var e = f.pop();
                        if (!e)
                          e = f.pop();
                        return e;
                      }};
                  case "lru-cache":
                    return function LRUCache() {
                      var cache = {};
                      var cnt = 0;
                      this.set = function(k, v) {
                        cnt++;
                        if (cnt >= 100)
                          cache = {};
                        cache[k] = v;
                      };
                      this.get = function(k) {
                        return cache[k];
                      };
                    };
                }
              };
            }
            minimatch.Minimatch = Minimatch;
            var LRU = require('lru-cache'),
                cache = minimatch.cache = new LRU({max: 100}),
                GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {},
                sigmund = require('sigmund');
            var path = require('path'),
                qmark = "[^/]",
                star = qmark + "*?",
                twoStarDot = "(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?",
                twoStarNoDot = "(?:(?!(?:\\\/|^)\\.).)*?",
                reSpecials = charSet("().*{}+?[]^$\\!");
            function charSet(s) {
              return s.split("").reduce(function(set, c) {
                set[c] = true;
                return set;
              }, {});
            }
            var slashSplit = /\/+/;
            minimatch.filter = filter;
            function filter(pattern, options) {
              options = options || {};
              return function(p, i, list) {
                return minimatch(p, pattern, options);
              };
            }
            function ext(a, b) {
              a = a || {};
              b = b || {};
              var t = {};
              Object.keys(b).forEach(function(k) {
                t[k] = b[k];
              });
              Object.keys(a).forEach(function(k) {
                t[k] = a[k];
              });
              return t;
            }
            minimatch.defaults = function(def) {
              if (!def || !Object.keys(def).length)
                return minimatch;
              var orig = minimatch;
              var m = function minimatch(p, pattern, options) {
                return orig.minimatch(p, pattern, ext(def, options));
              };
              m.Minimatch = function Minimatch(pattern, options) {
                return new orig.Minimatch(pattern, ext(def, options));
              };
              return m;
            };
            Minimatch.defaults = function(def) {
              if (!def || !Object.keys(def).length)
                return Minimatch;
              return minimatch.defaults(def).Minimatch;
            };
            function minimatch(p, pattern, options) {
              if (typeof pattern !== "string") {
                throw new TypeError("glob pattern string required");
              }
              if (!options)
                options = {};
              if (!options.nocomment && pattern.charAt(0) === "#") {
                return false;
              }
              if (pattern.trim() === "")
                return p === "";
              return new Minimatch(pattern, options).match(p);
            }
            function Minimatch(pattern, options) {
              if (!(this instanceof Minimatch)) {
                return new Minimatch(pattern, options, cache);
              }
              if (typeof pattern !== "string") {
                throw new TypeError("glob pattern string required");
              }
              if (!options)
                options = {};
              pattern = pattern.trim();
              if (platform === "win32") {
                pattern = pattern.split("\\").join("/");
              }
              var cacheKey = pattern + "\n" + sigmund(options);
              var cached = minimatch.cache.get(cacheKey);
              if (cached)
                return cached;
              minimatch.cache.set(cacheKey, this);
              this.options = options;
              this.set = [];
              this.pattern = pattern;
              this.regexp = null;
              this.negate = false;
              this.comment = false;
              this.empty = false;
              this.make();
            }
            Minimatch.prototype.debug = function() {};
            Minimatch.prototype.make = make;
            function make() {
              if (this._made)
                return;
              var pattern = this.pattern;
              var options = this.options;
              if (!options.nocomment && pattern.charAt(0) === "#") {
                this.comment = true;
                return;
              }
              if (!pattern) {
                this.empty = true;
                return;
              }
              this.parseNegate();
              var set = this.globSet = this.braceExpand();
              if (options.debug)
                this.debug = console.error;
              this.debug(this.pattern, set);
              set = this.globParts = set.map(function(s) {
                return s.split(slashSplit);
              });
              this.debug(this.pattern, set);
              set = set.map(function(s, si, set) {
                return s.map(this.parse, this);
              }, this);
              this.debug(this.pattern, set);
              set = set.filter(function(s) {
                return -1 === s.indexOf(false);
              });
              this.debug(this.pattern, set);
              this.set = set;
            }
            Minimatch.prototype.parseNegate = parseNegate;
            function parseNegate() {
              var pattern = this.pattern,
                  negate = false,
                  options = this.options,
                  negateOffset = 0;
              if (options.nonegate)
                return;
              for (var i = 0,
                  l = pattern.length; i < l && pattern.charAt(i) === "!"; i++) {
                negate = !negate;
                negateOffset++;
              }
              if (negateOffset)
                this.pattern = pattern.substr(negateOffset);
              this.negate = negate;
            }
            minimatch.braceExpand = function(pattern, options) {
              return new Minimatch(pattern, options).braceExpand();
            };
            Minimatch.prototype.braceExpand = braceExpand;
            function braceExpand(pattern, options) {
              options = options || this.options;
              pattern = typeof pattern === "undefined" ? this.pattern : pattern;
              if (typeof pattern === "undefined") {
                throw new Error("undefined pattern");
              }
              if (options.nobrace || !pattern.match(/\{.*\}/)) {
                return [pattern];
              }
              var escaping = false;
              if (pattern.charAt(0) !== "{") {
                this.debug(pattern);
                var prefix = null;
                for (var i = 0,
                    l = pattern.length; i < l; i++) {
                  var c = pattern.charAt(i);
                  this.debug(i, c);
                  if (c === "\\") {
                    escaping = !escaping;
                  } else if (c === "{" && !escaping) {
                    prefix = pattern.substr(0, i);
                    break;
                  }
                }
                if (prefix === null) {
                  this.debug("no sets");
                  return [pattern];
                }
                var tail = braceExpand.call(this, pattern.substr(i), options);
                return tail.map(function(t) {
                  return prefix + t;
                });
              }
              var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/);
              if (numset) {
                this.debug("numset", numset[1], numset[2]);
                var suf = braceExpand.call(this, pattern.substr(numset[0].length), options),
                    start = +numset[1],
                    end = +numset[2],
                    inc = start > end ? -1 : 1,
                    set = [];
                for (var i = start; i != (end + inc); i += inc) {
                  for (var ii = 0,
                      ll = suf.length; ii < ll; ii++) {
                    set.push(i + suf[ii]);
                  }
                }
                return set;
              }
              var i = 1,
                  depth = 1,
                  set = [],
                  member = "",
                  sawEnd = false,
                  escaping = false;
              function addMember() {
                set.push(member);
                member = "";
              }
              this.debug("Entering for");
              FOR: for (i = 1, l = pattern.length; i < l; i++) {
                var c = pattern.charAt(i);
                this.debug("", i, c);
                if (escaping) {
                  escaping = false;
                  member += "\\" + c;
                } else {
                  switch (c) {
                    case "\\":
                      escaping = true;
                      continue;
                    case "{":
                      depth++;
                      member += "{";
                      continue;
                    case "}":
                      depth--;
                      if (depth === 0) {
                        addMember();
                        i++;
                        break FOR;
                      } else {
                        member += c;
                        continue;
                      }
                    case ",":
                      if (depth === 1) {
                        addMember();
                      } else {
                        member += c;
                      }
                      continue;
                    default:
                      member += c;
                      continue;
                  }
                }
              }
              if (depth !== 0) {
                this.debug("didn't close", pattern);
                return braceExpand.call(this, "\\" + pattern, options);
              }
              this.debug("set", set);
              this.debug("suffix", pattern.substr(i));
              var suf = braceExpand.call(this, pattern.substr(i), options);
              var addBraces = set.length === 1;
              this.debug("set pre-expanded", set);
              set = set.map(function(p) {
                return braceExpand.call(this, p, options);
              }, this);
              this.debug("set expanded", set);
              set = set.reduce(function(l, r) {
                return l.concat(r);
              });
              if (addBraces) {
                set = set.map(function(s) {
                  return "{" + s + "}";
                });
              }
              var ret = [];
              for (var i = 0,
                  l = set.length; i < l; i++) {
                for (var ii = 0,
                    ll = suf.length; ii < ll; ii++) {
                  ret.push(set[i] + suf[ii]);
                }
              }
              return ret;
            }
            Minimatch.prototype.parse = parse;
            var SUBPARSE = {};
            function parse(pattern, isSub) {
              var options = this.options;
              if (!options.noglobstar && pattern === "**")
                return GLOBSTAR;
              if (pattern === "")
                return "";
              var re = "",
                  hasMagic = !!options.nocase,
                  escaping = false,
                  patternListStack = [],
                  plType,
                  stateChar,
                  inClass = false,
                  reClassStart = -1,
                  classStart = -1,
                  patternStart = pattern.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))" : "(?!\\.)",
                  self = this;
              function clearStateChar() {
                if (stateChar) {
                  switch (stateChar) {
                    case "*":
                      re += star;
                      hasMagic = true;
                      break;
                    case "?":
                      re += qmark;
                      hasMagic = true;
                      break;
                    default:
                      re += "\\" + stateChar;
                      break;
                  }
                  self.debug('clearStateChar %j %j', stateChar, re);
                  stateChar = false;
                }
              }
              for (var i = 0,
                  len = pattern.length,
                  c; (i < len) && (c = pattern.charAt(i)); i++) {
                this.debug("%s\t%s %s %j", pattern, i, re, c);
                if (escaping && reSpecials[c]) {
                  re += "\\" + c;
                  escaping = false;
                  continue;
                }
                SWITCH: switch (c) {
                  case "/":
                    return false;
                  case "\\":
                    clearStateChar();
                    escaping = true;
                    continue;
                  case "?":
                  case "*":
                  case "+":
                  case "@":
                  case "!":
                    this.debug("%s\t%s %s %j <-- stateChar", pattern, i, re, c);
                    if (inClass) {
                      this.debug('  in class');
                      if (c === "!" && i === classStart + 1)
                        c = "^";
                      re += c;
                      continue;
                    }
                    self.debug('call clearStateChar %j', stateChar);
                    clearStateChar();
                    stateChar = c;
                    if (options.noext)
                      clearStateChar();
                    continue;
                  case "(":
                    if (inClass) {
                      re += "(";
                      continue;
                    }
                    if (!stateChar) {
                      re += "\\(";
                      continue;
                    }
                    plType = stateChar;
                    patternListStack.push({
                      type: plType,
                      start: i - 1,
                      reStart: re.length
                    });
                    re += stateChar === "!" ? "(?:(?!" : "(?:";
                    this.debug('plType %j %j', stateChar, re);
                    stateChar = false;
                    continue;
                  case ")":
                    if (inClass || !patternListStack.length) {
                      re += "\\)";
                      continue;
                    }
                    clearStateChar();
                    hasMagic = true;
                    re += ")";
                    plType = patternListStack.pop().type;
                    switch (plType) {
                      case "!":
                        re += "[^/]*?)";
                        break;
                      case "?":
                      case "+":
                      case "*":
                        re += plType;
                      case "@":
                        break;
                    }
                    continue;
                  case "|":
                    if (inClass || !patternListStack.length || escaping) {
                      re += "\\|";
                      escaping = false;
                      continue;
                    }
                    clearStateChar();
                    re += "|";
                    continue;
                  case "[":
                    clearStateChar();
                    if (inClass) {
                      re += "\\" + c;
                      continue;
                    }
                    inClass = true;
                    classStart = i;
                    reClassStart = re.length;
                    re += c;
                    continue;
                  case "]":
                    if (i === classStart + 1 || !inClass) {
                      re += "\\" + c;
                      escaping = false;
                      continue;
                    }
                    hasMagic = true;
                    inClass = false;
                    re += c;
                    continue;
                  default:
                    clearStateChar();
                    if (escaping) {
                      escaping = false;
                    } else if (reSpecials[c] && !(c === "^" && inClass)) {
                      re += "\\";
                    }
                    re += c;
                }
              }
              if (inClass) {
                var cs = pattern.substr(classStart + 1),
                    sp = this.parse(cs, SUBPARSE);
                re = re.substr(0, reClassStart) + "\\[" + sp[0];
                hasMagic = hasMagic || sp[1];
              }
              var pl;
              while (pl = patternListStack.pop()) {
                var tail = re.slice(pl.reStart + 3);
                tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function(_, $1, $2) {
                  if (!$2) {
                    $2 = "\\";
                  }
                  return $1 + $1 + $2 + "|";
                });
                this.debug("tail=%j\n   %s", tail, tail);
                var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
                hasMagic = true;
                re = re.slice(0, pl.reStart) + t + "\\(" + tail;
              }
              clearStateChar();
              if (escaping) {
                re += "\\\\";
              }
              var addPatternStart = false;
              switch (re.charAt(0)) {
                case ".":
                case "[":
                case "(":
                  addPatternStart = true;
              }
              if (re !== "" && hasMagic)
                re = "(?=.)" + re;
              if (addPatternStart)
                re = patternStart + re;
              if (isSub === SUBPARSE) {
                return [re, hasMagic];
              }
              if (!hasMagic) {
                return globUnescape(pattern);
              }
              var flags = options.nocase ? "i" : "",
                  regExp = new RegExp("^" + re + "$", flags);
              regExp._glob = pattern;
              regExp._src = re;
              return regExp;
            }
            minimatch.makeRe = function(pattern, options) {
              return new Minimatch(pattern, options || {}).makeRe();
            };
            Minimatch.prototype.makeRe = makeRe;
            function makeRe() {
              if (this.regexp || this.regexp === false)
                return this.regexp;
              var set = this.set;
              if (!set.length)
                return this.regexp = false;
              var options = this.options;
              var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot,
                  flags = options.nocase ? "i" : "";
              var re = set.map(function(pattern) {
                return pattern.map(function(p) {
                  return (p === GLOBSTAR) ? twoStar : (typeof p === "string") ? regExpEscape(p) : p._src;
                }).join("\\\/");
              }).join("|");
              re = "^(?:" + re + ")$";
              if (this.negate)
                re = "^(?!" + re + ").*$";
              try {
                return this.regexp = new RegExp(re, flags);
              } catch (ex) {
                return this.regexp = false;
              }
            }
            minimatch.match = function(list, pattern, options) {
              var mm = new Minimatch(pattern, options);
              list = list.filter(function(f) {
                return mm.match(f);
              });
              if (options.nonull && !list.length) {
                list.push(pattern);
              }
              return list;
            };
            Minimatch.prototype.match = match;
            function match(f, partial) {
              this.debug("match", f, this.pattern);
              if (this.comment)
                return false;
              if (this.empty)
                return f === "";
              if (f === "/" && partial)
                return true;
              var options = this.options;
              if (platform === "win32") {
                f = f.split("\\").join("/");
              }
              f = f.split(slashSplit);
              this.debug(this.pattern, "split", f);
              var set = this.set;
              this.debug(this.pattern, "set", set);
              var splitFile = path.basename(f.join("/")).split("/");
              for (var i = 0,
                  l = set.length; i < l; i++) {
                var pattern = set[i],
                    file = f;
                if (options.matchBase && pattern.length === 1) {
                  file = splitFile;
                }
                var hit = this.matchOne(file, pattern, partial);
                if (hit) {
                  if (options.flipNegate)
                    return true;
                  return !this.negate;
                }
              }
              if (options.flipNegate)
                return false;
              return this.negate;
            }
            Minimatch.prototype.matchOne = function(file, pattern, partial) {
              var options = this.options;
              this.debug("matchOne", {
                "this": this,
                file: file,
                pattern: pattern
              });
              this.debug("matchOne", file.length, pattern.length);
              for (var fi = 0,
                  pi = 0,
                  fl = file.length,
                  pl = pattern.length; (fi < fl) && (pi < pl); fi++, pi++) {
                this.debug("matchOne loop");
                var p = pattern[pi],
                    f = file[fi];
                this.debug(pattern, p, f);
                if (p === false)
                  return false;
                if (p === GLOBSTAR) {
                  this.debug('GLOBSTAR', [pattern, p, f]);
                  var fr = fi,
                      pr = pi + 1;
                  if (pr === pl) {
                    this.debug('** at the end');
                    for (; fi < fl; fi++) {
                      if (file[fi] === "." || file[fi] === ".." || (!options.dot && file[fi].charAt(0) === "."))
                        return false;
                    }
                    return true;
                  }
                  WHILE: while (fr < fl) {
                    var swallowee = file[fr];
                    this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);
                    if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                      this.debug('globstar found match!', fr, fl, swallowee);
                      return true;
                    } else {
                      if (swallowee === "." || swallowee === ".." || (!options.dot && swallowee.charAt(0) === ".")) {
                        this.debug("dot detected!", file, fr, pattern, pr);
                        break WHILE;
                      }
                      this.debug('globstar swallow a segment, and continue');
                      fr++;
                    }
                  }
                  if (partial) {
                    this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
                    if (fr === fl)
                      return true;
                  }
                  return false;
                }
                var hit;
                if (typeof p === "string") {
                  if (options.nocase) {
                    hit = f.toLowerCase() === p.toLowerCase();
                  } else {
                    hit = f === p;
                  }
                  this.debug("string match", p, f, hit);
                } else {
                  hit = f.match(p);
                  this.debug("pattern match", p, f, hit);
                }
                if (!hit)
                  return false;
              }
              if (fi === fl && pi === pl) {
                return true;
              } else if (fi === fl) {
                return partial;
              } else if (pi === pl) {
                var emptyFileEnd = (fi === fl - 1) && (file[fi] === "");
                return emptyFileEnd;
              }
              throw new Error("wtf?");
            };
            function globUnescape(s) {
              return s.replace(/\\(.)/g, "$1");
            }
            function regExpEscape(s) {
              return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            }
          })(typeof require === "function" ? require : null, this, typeof module === "object" ? module : null, typeof process === "object" ? process.platform : "win32");
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "lru-cache": 279,
        "path": 13,
        "sigmund": 280
      }],
      279: [function(require, module, exports) {
        ;
        (function() {
          if (typeof module === 'object' && module.exports) {
            module.exports = LRUCache;
          } else {
            this.LRUCache = LRUCache;
          }
          function hOP(obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
          }
          function naiveLength() {
            return 1;
          }
          function LRUCache(options) {
            if (!(this instanceof LRUCache))
              return new LRUCache(options);
            if (typeof options === 'number')
              options = {max: options};
            if (!options)
              options = {};
            this._max = options.max;
            if (!this._max || !(typeof this._max === "number") || this._max <= 0)
              this._max = Infinity;
            this._lengthCalculator = options.length || naiveLength;
            if (typeof this._lengthCalculator !== "function")
              this._lengthCalculator = naiveLength;
            this._allowStale = options.stale || false;
            this._maxAge = options.maxAge || null;
            this._dispose = options.dispose;
            this.reset();
          }
          Object.defineProperty(LRUCache.prototype, "max", {
            set: function(mL) {
              if (!mL || !(typeof mL === "number") || mL <= 0)
                mL = Infinity;
              this._max = mL;
              if (this._length > this._max)
                trim(this);
            },
            get: function() {
              return this._max;
            },
            enumerable: true
          });
          Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
            set: function(lC) {
              if (typeof lC !== "function") {
                this._lengthCalculator = naiveLength;
                this._length = this._itemCount;
                for (var key in this._cache) {
                  this._cache[key].length = 1;
                }
              } else {
                this._lengthCalculator = lC;
                this._length = 0;
                for (var key in this._cache) {
                  this._cache[key].length = this._lengthCalculator(this._cache[key].value);
                  this._length += this._cache[key].length;
                }
              }
              if (this._length > this._max)
                trim(this);
            },
            get: function() {
              return this._lengthCalculator;
            },
            enumerable: true
          });
          Object.defineProperty(LRUCache.prototype, "length", {
            get: function() {
              return this._length;
            },
            enumerable: true
          });
          Object.defineProperty(LRUCache.prototype, "itemCount", {
            get: function() {
              return this._itemCount;
            },
            enumerable: true
          });
          LRUCache.prototype.forEach = function(fn, thisp) {
            thisp = thisp || this;
            var i = 0;
            var itemCount = this._itemCount;
            for (var k = this._mru - 1; k >= 0 && i < itemCount; k--)
              if (this._lruList[k]) {
                i++;
                var hit = this._lruList[k];
                if (isStale(this, hit)) {
                  del(this, hit);
                  if (!this._allowStale)
                    hit = undefined;
                }
                if (hit) {
                  fn.call(thisp, hit.value, hit.key, this);
                }
              }
          };
          LRUCache.prototype.keys = function() {
            var keys = new Array(this._itemCount);
            var i = 0;
            for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--)
              if (this._lruList[k]) {
                var hit = this._lruList[k];
                keys[i++] = hit.key;
              }
            return keys;
          };
          LRUCache.prototype.values = function() {
            var values = new Array(this._itemCount);
            var i = 0;
            for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--)
              if (this._lruList[k]) {
                var hit = this._lruList[k];
                values[i++] = hit.value;
              }
            return values;
          };
          LRUCache.prototype.reset = function() {
            if (this._dispose && this._cache) {
              for (var k in this._cache) {
                this._dispose(k, this._cache[k].value);
              }
            }
            this._cache = Object.create(null);
            this._lruList = Object.create(null);
            this._mru = 0;
            this._lru = 0;
            this._length = 0;
            this._itemCount = 0;
          };
          LRUCache.prototype.dump = function() {
            return this._cache;
          };
          LRUCache.prototype.dumpLru = function() {
            return this._lruList;
          };
          LRUCache.prototype.set = function(key, value, maxAge) {
            maxAge = maxAge || this._maxAge;
            var now = maxAge ? Date.now() : 0;
            if (hOP(this._cache, key)) {
              if (this._dispose)
                this._dispose(key, this._cache[key].value);
              this._cache[key].now = now;
              this._cache[key].maxAge = maxAge;
              this._cache[key].value = value;
              this.get(key);
              return true;
            }
            var len = this._lengthCalculator(value);
            var hit = new Entry(key, value, this._mru++, len, now, maxAge);
            if (hit.length > this._max) {
              if (this._dispose)
                this._dispose(key, value);
              return false;
            }
            this._length += hit.length;
            this._lruList[hit.lu] = this._cache[key] = hit;
            this._itemCount++;
            if (this._length > this._max)
              trim(this);
            return true;
          };
          LRUCache.prototype.has = function(key) {
            if (!hOP(this._cache, key))
              return false;
            var hit = this._cache[key];
            if (isStale(this, hit)) {
              return false;
            }
            return true;
          };
          LRUCache.prototype.get = function(key) {
            return get(this, key, true);
          };
          LRUCache.prototype.peek = function(key) {
            return get(this, key, false);
          };
          LRUCache.prototype.pop = function() {
            var hit = this._lruList[this._lru];
            del(this, hit);
            return hit || null;
          };
          LRUCache.prototype.del = function(key) {
            del(this, this._cache[key]);
          };
          function get(self, key, doUse) {
            var hit = self._cache[key];
            if (hit) {
              if (isStale(self, hit)) {
                del(self, hit);
                if (!self._allowStale)
                  hit = undefined;
              } else {
                if (doUse)
                  use(self, hit);
              }
              if (hit)
                hit = hit.value;
            }
            return hit;
          }
          function isStale(self, hit) {
            if (!hit || (!hit.maxAge && !self._maxAge))
              return false;
            var stale = false;
            var diff = Date.now() - hit.now;
            if (hit.maxAge) {
              stale = diff > hit.maxAge;
            } else {
              stale = self._maxAge && (diff > self._maxAge);
            }
            return stale;
          }
          function use(self, hit) {
            shiftLU(self, hit);
            hit.lu = self._mru++;
            self._lruList[hit.lu] = hit;
          }
          function trim(self) {
            while (self._lru < self._mru && self._length > self._max)
              del(self, self._lruList[self._lru]);
          }
          function shiftLU(self, hit) {
            delete self._lruList[hit.lu];
            while (self._lru < self._mru && !self._lruList[self._lru])
              self._lru++;
          }
          function del(self, hit) {
            if (hit) {
              if (self._dispose)
                self._dispose(hit.key, hit.value);
              self._length -= hit.length;
              self._itemCount--;
              delete self._cache[hit.key];
              shiftLU(self, hit);
            }
          }
          function Entry(key, value, lu, length, now, maxAge) {
            this.key = key;
            this.value = value;
            this.lu = lu;
            this.length = length;
            this.now = now;
            if (maxAge)
              this.maxAge = maxAge;
          }
        })();
      }, {}],
      280: [function(require, module, exports) {
        module.exports = sigmund;
        function sigmund(subject, maxSessions) {
          maxSessions = maxSessions || 10;
          var notes = [];
          var analysis = '';
          var RE = RegExp;
          function psychoAnalyze(subject, session) {
            if (session > maxSessions)
              return;
            if (typeof subject === 'function' || typeof subject === 'undefined') {
              return;
            }
            if (typeof subject !== 'object' || !subject || (subject instanceof RE)) {
              analysis += subject;
              return;
            }
            if (notes.indexOf(subject) !== -1 || session === maxSessions)
              return;
            notes.push(subject);
            analysis += '{';
            Object.keys(subject).forEach(function(issue, _, __) {
              if (issue.charAt(0) === '_')
                return;
              var to = typeof subject[issue];
              if (to === 'function' || to === 'undefined')
                return;
              analysis += issue;
              psychoAnalyze(subject[issue], session + 1);
            });
          }
          psychoAnalyze(subject, 0);
          return analysis;
        }
      }, {}],
      281: [function(require, module, exports) {
        'use strict';
        module.exports = function isValidGlob(glob) {
          if (typeof glob === 'string' && glob.length > 0) {
            return true;
          }
          if (Array.isArray(glob)) {
            return glob.length !== 0 && every(glob);
          }
          return false;
        };
        function every(arr) {
          var len = arr.length;
          while (len--) {
            if (typeof arr[len] !== 'string' || arr[len].length <= 0) {
              return false;
            }
          }
          return true;
        }
      }, {}],
      282: [function(require, module, exports) {
        'use strict';
        var through = require('through2');
        module.exports = function() {
          var sources = [];
          var output = through.obj();
          output.setMaxListeners(0);
          output.add = add;
          output.isEmpty = isEmpty;
          output.on('unpipe', remove);
          Array.prototype.slice.call(arguments).forEach(add);
          return output;
          function add(source) {
            if (Array.isArray(source)) {
              source.forEach(add);
              return this;
            }
            sources.push(source);
            source.once('end', remove.bind(null, source));
            source.pipe(output, {end: false});
            return this;
          }
          function isEmpty() {
            return sources.length == 0;
          }
          function remove(source) {
            sources = sources.filter(function(it) {
              return it !== source;
            });
            if (!sources.length && output.readable) {
              output.end();
            }
          }
        };
      }, {"through2": 293}],
      283: [function(require, module, exports) {
        arguments[4][248][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 284,
        "./_stream_writable": 286,
        "_process": 14,
        "core-util-is": 287,
        "dup": 248,
        "inherits": 288
      }],
      284: [function(require, module, exports) {
        arguments[4][259][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "buffer": 4,
        "core-util-is": 287,
        "dup": 259,
        "events": 9,
        "inherits": 288,
        "isarray": 289,
        "stream": 32,
        "string_decoder/": 290
      }],
      285: [function(require, module, exports) {
        arguments[4][260][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 283,
        "core-util-is": 287,
        "dup": 260,
        "inherits": 288
      }],
      286: [function(require, module, exports) {
        arguments[4][261][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 283,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 287,
        "dup": 261,
        "inherits": 288,
        "stream": 32
      }],
      287: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      288: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      289: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      290: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      291: [function(require, module, exports) {
        arguments[4][30][0].apply(exports, arguments);
      }, {
        "./lib/_stream_transform.js": 285,
        "dup": 30
      }],
      292: [function(require, module, exports) {
        arguments[4][47][0].apply(exports, arguments);
      }, {"dup": 47}],
      293: [function(require, module, exports) {
        arguments[4][268][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 268,
        "readable-stream/transform": 291,
        "util": 46,
        "xtend": 292
      }],
      294: [function(require, module, exports) {
        (function(process) {
          var path = require('path');
          var fs = require('fs');
          var _0777 = parseInt('0777', 8);
          module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
          function mkdirP(p, opts, f, made) {
            if (typeof opts === 'function') {
              f = opts;
              opts = {};
            } else if (!opts || typeof opts !== 'object') {
              opts = {mode: opts};
            }
            var mode = opts.mode;
            var xfs = opts.fs || fs;
            if (mode === undefined) {
              mode = _0777 & (~process.umask());
            }
            if (!made)
              made = null;
            var cb = f || function() {};
            p = path.resolve(p);
            xfs.mkdir(p, mode, function(er) {
              if (!er) {
                made = made || p;
                return cb(null, made);
              }
              switch (er.code) {
                case 'ENOENT':
                  mkdirP(path.dirname(p), opts, function(er, made) {
                    if (er)
                      cb(er, made);
                    else
                      mkdirP(p, opts, cb, made);
                  });
                  break;
                default:
                  xfs.stat(p, function(er2, stat) {
                    if (er2 || !stat.isDirectory())
                      cb(er, made);
                    else
                      cb(null, made);
                  });
                  break;
              }
            });
          }
          mkdirP.sync = function sync(p, opts, made) {
            if (!opts || typeof opts !== 'object') {
              opts = {mode: opts};
            }
            var mode = opts.mode;
            var xfs = opts.fs || fs;
            if (mode === undefined) {
              mode = _0777 & (~process.umask());
            }
            if (!made)
              made = null;
            p = path.resolve(p);
            try {
              xfs.mkdirSync(p, mode);
              made = made || p;
            } catch (err0) {
              switch (err0.code) {
                case 'ENOENT':
                  made = sync(path.dirname(p), opts, made);
                  sync(p, opts, made);
                  break;
                default:
                  var stat;
                  try {
                    stat = xfs.statSync(p);
                  } catch (err1) {
                    throw err0;
                  }
                  if (!stat.isDirectory())
                    throw err0;
                  break;
              }
            }
            return made;
          };
        }).call(this, require('_process'));
      }, {
        "_process": 14,
        "fs": 1,
        "path": 13
      }],
      295: [function(require, module, exports) {
        'use strict';
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function ToObject(val) {
          if (val == null) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
          }
          return Object(val);
        }
        function ownEnumerableKeys(obj) {
          var keys = Object.getOwnPropertyNames(obj);
          if (Object.getOwnPropertySymbols) {
            keys = keys.concat(Object.getOwnPropertySymbols(obj));
          }
          return keys.filter(function(key) {
            return propIsEnumerable.call(obj, key);
          });
        }
        module.exports = Object.assign || function(target, source) {
          var from;
          var keys;
          var to = ToObject(target);
          for (var s = 1; s < arguments.length; s++) {
            from = arguments[s];
            keys = ownEnumerableKeys(Object(from));
            for (var i = 0; i < keys.length; i++) {
              to[keys[i]] = from[keys[i]];
            }
          }
          return to;
        };
      }, {}],
      296: [function(require, module, exports) {
        "use strict";
        module.exports = make;
        module.exports.ctor = ctor;
        module.exports.objCtor = objCtor;
        module.exports.obj = obj;
        var through2 = require('through2');
        var xtend = require('xtend');
        function ctor(options, fn) {
          if (typeof options == "function") {
            fn = options;
            options = {};
          }
          var Filter = through2.ctor(options, function(chunk, encoding, callback) {
            if (this.options.wantStrings)
              chunk = chunk.toString();
            if (fn.call(this, chunk, this._index++))
              this.push(chunk);
            return callback();
          });
          Filter.prototype._index = 0;
          return Filter;
        }
        function objCtor(options, fn) {
          if (typeof options === "function") {
            fn = options;
            options = {};
          }
          options = xtend({
            objectMode: true,
            highWaterMark: 16
          }, options);
          return ctor(options, fn);
        }
        function make(options, fn) {
          return ctor(options, fn)();
        }
        function obj(options, fn) {
          if (typeof options === "function") {
            fn = options;
            options = {};
          }
          options = xtend({
            objectMode: true,
            highWaterMark: 16
          }, options);
          return make(options, fn);
        }
      }, {
        "through2": 310,
        "xtend": 297
      }],
      297: [function(require, module, exports) {
        arguments[4][47][0].apply(exports, arguments);
      }, {"dup": 47}],
      298: [function(require, module, exports) {
        arguments[4][20][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 299,
        "./_stream_writable": 301,
        "core-util-is": 302,
        "dup": 20,
        "inherits": 303,
        "process-nextick-args": 305
      }],
      299: [function(require, module, exports) {
        arguments[4][22][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 298,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 302,
        "dup": 22,
        "events": 9,
        "inherits": 303,
        "isarray": 304,
        "process-nextick-args": 305,
        "string_decoder/": 306,
        "util": 3
      }],
      300: [function(require, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 298,
        "core-util-is": 302,
        "dup": 23,
        "inherits": 303
      }],
      301: [function(require, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 298,
        "buffer": 4,
        "core-util-is": 302,
        "dup": 24,
        "events": 9,
        "inherits": 303,
        "process-nextick-args": 305,
        "util-deprecate": 307
      }],
      302: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      303: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      304: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      305: [function(require, module, exports) {
        arguments[4][26][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 26
      }],
      306: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      307: [function(require, module, exports) {
        arguments[4][27][0].apply(exports, arguments);
      }, {"dup": 27}],
      308: [function(require, module, exports) {
        arguments[4][30][0].apply(exports, arguments);
      }, {
        "./lib/_stream_transform.js": 300,
        "dup": 30
      }],
      309: [function(require, module, exports) {
        arguments[4][47][0].apply(exports, arguments);
      }, {"dup": 47}],
      310: [function(require, module, exports) {
        arguments[4][268][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 268,
        "readable-stream/transform": 308,
        "util": 46,
        "xtend": 309
      }],
      311: [function(require, module, exports) {
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
      }, {"path": 13}],
      312: [function(require, module, exports) {
        var x = module.exports = {};
        x.randomString = randomString;
        x.cleanPath = cleanPath;
        function randomString() {
          return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
        }
        function cleanPath(path, base) {
          if (!path)
            return '';
          if (!base)
            return path;
          if (base[base.length - 1] != '/') {
            base += "/";
          }
          path = path.replace(base, '');
          path = path.replace(/[\/]+/g, '/');
          return path;
        }
      }, {}],
      313: [function(require, module, exports) {
        var flat = require('./mp2v_flat');
        var tree = require('./mp2v_tree');
        var x = module.exports = tree;
        x.flat = flat;
        x.tree = tree;
      }, {
        "./mp2v_flat": 314,
        "./mp2v_tree": 315
      }],
      314: [function(require, module, exports) {
        var Multipart = require('multipart-stream');
        var duplexify = require('duplexify');
        var stream = require('stream');
        var common = require('./common');
        randomString = common.randomString;
        module.exports = v2mpFlat;
        function v2mpFlat(opts) {
          opts = opts || {};
          opts.boundary = opts.boundary || randomString();
          var w = new stream.Writable({objectMode: true});
          var r = new stream.PassThrough({objectMode: true});
          var mp = new Multipart(opts.boundary);
          w._write = function(file, enc, cb) {
            writePart(mp, file, cb);
          };
          w.on('finish', function() {
            mp.pipe(r);
          });
          var out = duplexify.obj(w, r);
          out.boundary = opts.boundary;
          return out;
        }
        function writePart(mp, file, cb) {
          var c = file.contents;
          if (c === null)
            c = emptyStream();
          mp.addPart({
            body: file.contents,
            headers: headersForFile(file)
          });
          cb(null);
        }
        function emptyStream() {
          var s = new stream.PassThrough({objectMode: true});
          s.write(null);
          return s;
        }
        function headersForFile(file) {
          var fpath = common.cleanPath(file.path, file.base);
          var h = {};
          h['Content-Disposition'] = 'file; filename="' + fpath + '"';
          if (file.isDirectory()) {
            h['Content-Type'] = 'text/directory';
          } else {
            h['Content-Type'] = 'application/octet-stream';
          }
          return h;
        }
        function randomString() {
          return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
        }
      }, {
        "./common": 312,
        "duplexify": 316,
        "multipart-stream": 196,
        "stream": 32
      }],
      315: [function(require, module, exports) {
        var Multipart = require('multipart-stream');
        var duplexify = require('duplexify');
        var stream = require('stream');
        var Path = require('path');
        var collect = require('./collect');
        var common = require('./common');
        randomString = common.randomString;
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
          if (f.children.length > 0) {
            throw new Error("non-directory has children. lib error");
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
      }, {
        "./collect": 311,
        "./common": 312,
        "duplexify": 316,
        "multipart-stream": 196,
        "path": 13,
        "stream": 32
      }],
      316: [function(require, module, exports) {
        arguments[4][214][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "buffer": 4,
        "dup": 214,
        "end-of-stream": 317,
        "readable-stream": 331,
        "util": 46
      }],
      317: [function(require, module, exports) {
        arguments[4][215][0].apply(exports, arguments);
      }, {
        "dup": 215,
        "once": 319
      }],
      318: [function(require, module, exports) {
        arguments[4][216][0].apply(exports, arguments);
      }, {"dup": 216}],
      319: [function(require, module, exports) {
        arguments[4][217][0].apply(exports, arguments);
      }, {
        "dup": 217,
        "wrappy": 318
      }],
      320: [function(require, module, exports) {
        arguments[4][20][0].apply(exports, arguments);
      }, {
        "./_stream_readable": 322,
        "./_stream_writable": 324,
        "core-util-is": 325,
        "dup": 20,
        "inherits": 326,
        "process-nextick-args": 328
      }],
      321: [function(require, module, exports) {
        arguments[4][21][0].apply(exports, arguments);
      }, {
        "./_stream_transform": 323,
        "core-util-is": 325,
        "dup": 21,
        "inherits": 326
      }],
      322: [function(require, module, exports) {
        arguments[4][22][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 320,
        "_process": 14,
        "buffer": 4,
        "core-util-is": 325,
        "dup": 22,
        "events": 9,
        "inherits": 326,
        "isarray": 327,
        "process-nextick-args": 328,
        "string_decoder/": 329,
        "util": 3
      }],
      323: [function(require, module, exports) {
        arguments[4][23][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 320,
        "core-util-is": 325,
        "dup": 23,
        "inherits": 326
      }],
      324: [function(require, module, exports) {
        arguments[4][24][0].apply(exports, arguments);
      }, {
        "./_stream_duplex": 320,
        "buffer": 4,
        "core-util-is": 325,
        "dup": 24,
        "events": 9,
        "inherits": 326,
        "process-nextick-args": 328,
        "util-deprecate": 330
      }],
      325: [function(require, module, exports) {
        arguments[4][25][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 25
      }],
      326: [function(require, module, exports) {
        arguments[4][10][0].apply(exports, arguments);
      }, {"dup": 10}],
      327: [function(require, module, exports) {
        arguments[4][11][0].apply(exports, arguments);
      }, {"dup": 11}],
      328: [function(require, module, exports) {
        arguments[4][26][0].apply(exports, arguments);
      }, {
        "_process": 14,
        "dup": 26
      }],
      329: [function(require, module, exports) {
        arguments[4][42][0].apply(exports, arguments);
      }, {
        "buffer": 4,
        "dup": 42
      }],
      330: [function(require, module, exports) {
        arguments[4][27][0].apply(exports, arguments);
      }, {"dup": 27}],
      331: [function(require, module, exports) {
        arguments[4][29][0].apply(exports, arguments);
      }, {
        "./lib/_stream_duplex.js": 320,
        "./lib/_stream_passthrough.js": 321,
        "./lib/_stream_readable.js": 322,
        "./lib/_stream_transform.js": 323,
        "./lib/_stream_writable.js": 324,
        "dup": 29
      }],
      332: [function(require, module, exports) {
        (function(process) {
          var path = require('path');
          var clone = require('clone');
          var cloneStats = require('clone-stats');
          var cloneBuffer = require('./lib/cloneBuffer');
          var isBuffer = require('./lib/isBuffer');
          var isStream = require('./lib/isStream');
          var isNull = require('./lib/isNull');
          var inspectStream = require('./lib/inspectStream');
          var Stream = require('stream');
          var replaceExt = require('replace-ext');
          function File(file) {
            if (!file)
              file = {};
            var history = file.path ? [file.path] : file.history;
            this.history = history || [];
            this.cwd = file.cwd || process.cwd();
            this.base = file.base || this.cwd;
            this.stat = file.stat || null;
            this.contents = file.contents || null;
          }
          File.prototype.isBuffer = function() {
            return isBuffer(this.contents);
          };
          File.prototype.isStream = function() {
            return isStream(this.contents);
          };
          File.prototype.isNull = function() {
            return isNull(this.contents);
          };
          File.prototype.isDirectory = function() {
            return this.isNull() && this.stat && this.stat.isDirectory();
          };
          File.prototype.clone = function(opt) {
            if (typeof opt === 'boolean') {
              opt = {
                deep: opt,
                contents: true
              };
            } else if (!opt) {
              opt = {
                deep: true,
                contents: true
              };
            } else {
              opt.deep = opt.deep === true;
              opt.contents = opt.contents !== false;
            }
            var contents;
            if (this.isStream()) {
              contents = this.contents.pipe(new Stream.PassThrough());
              this.contents = this.contents.pipe(new Stream.PassThrough());
            } else if (this.isBuffer()) {
              contents = opt.contents ? cloneBuffer(this.contents) : this.contents;
            }
            var file = new File({
              cwd: this.cwd,
              base: this.base,
              stat: (this.stat ? cloneStats(this.stat) : null),
              history: this.history.slice(),
              contents: contents
            });
            Object.keys(this).forEach(function(key) {
              if (key === '_contents' || key === 'stat' || key === 'history' || key === 'path' || key === 'base' || key === 'cwd') {
                return;
              }
              file[key] = opt.deep ? clone(this[key], true) : this[key];
            }, this);
            return file;
          };
          File.prototype.pipe = function(stream, opt) {
            if (!opt)
              opt = {};
            if (typeof opt.end === 'undefined')
              opt.end = true;
            if (this.isStream()) {
              return this.contents.pipe(stream, opt);
            }
            if (this.isBuffer()) {
              if (opt.end) {
                stream.end(this.contents);
              } else {
                stream.write(this.contents);
              }
              return stream;
            }
            if (opt.end)
              stream.end();
            return stream;
          };
          File.prototype.inspect = function() {
            var inspect = [];
            var filePath = (this.base && this.path) ? this.relative : this.path;
            if (filePath) {
              inspect.push('"' + filePath + '"');
            }
            if (this.isBuffer()) {
              inspect.push(this.contents.inspect());
            }
            if (this.isStream()) {
              inspect.push(inspectStream(this.contents));
            }
            return '<File ' + inspect.join(' ') + '>';
          };
          Object.defineProperty(File.prototype, 'contents', {
            get: function() {
              return this._contents;
            },
            set: function(val) {
              if (!isBuffer(val) && !isStream(val) && !isNull(val)) {
                throw new Error('File.contents can only be a Buffer, a Stream, or null.');
              }
              this._contents = val;
            }
          });
          Object.defineProperty(File.prototype, 'relative', {
            get: function() {
              if (!this.base)
                throw new Error('No base specified! Can not get relative.');
              if (!this.path)
                throw new Error('No path specified! Can not get relative.');
              return path.relative(this.base, this.path);
            },
            set: function() {
              throw new Error('File.relative is generated from the base and path attributes. Do not modify it.');
            }
          });
          Object.defineProperty(File.prototype, 'dirname', {
            get: function() {
              if (!this.path)
                throw new Error('No path specified! Can not get dirname.');
              return path.dirname(this.path);
            },
            set: function(dirname) {
              if (!this.path)
                throw new Error('No path specified! Can not set dirname.');
              this.path = path.join(dirname, path.basename(this.path));
            }
          });
          Object.defineProperty(File.prototype, 'basename', {
            get: function() {
              if (!this.path)
                throw new Error('No path specified! Can not get basename.');
              return path.basename(this.path);
            },
            set: function(basename) {
              if (!this.path)
                throw new Error('No path specified! Can not set basename.');
              this.path = path.join(path.dirname(this.path), basename);
            }
          });
          Object.defineProperty(File.prototype, 'extname', {
            get: function() {
              if (!this.path)
                throw new Error('No path specified! Can not get extname.');
              return path.extname(this.path);
            },
            set: function(extname) {
              if (!this.path)
                throw new Error('No path specified! Can not set extname.');
              this.path = replaceExt(this.path, extname);
            }
          });
          Object.defineProperty(File.prototype, 'path', {
            get: function() {
              return this.history[this.history.length - 1];
            },
            set: function(path) {
              if (typeof path !== 'string')
                throw new Error('path should be string');
              if (path && path !== this.path) {
                this.history.push(path);
              }
            }
          });
          module.exports = File;
        }).call(this, require('_process'));
      }, {
        "./lib/cloneBuffer": 333,
        "./lib/inspectStream": 334,
        "./lib/isBuffer": 335,
        "./lib/isNull": 336,
        "./lib/isStream": 337,
        "_process": 14,
        "clone": 339,
        "clone-stats": 338,
        "path": 13,
        "replace-ext": 340,
        "stream": 32
      }],
      333: [function(require, module, exports) {
        var Buffer = require('buffer').Buffer;
        module.exports = function(buf) {
          var out = new Buffer(buf.length);
          buf.copy(out);
          return out;
        };
      }, {"buffer": 4}],
      334: [function(require, module, exports) {
        var isStream = require('./isStream');
        module.exports = function(stream) {
          if (!isStream(stream))
            return;
          var streamType = stream.constructor.name;
          if (streamType === 'Stream')
            streamType = '';
          return '<' + streamType + 'Stream>';
        };
      }, {"./isStream": 337}],
      335: [function(require, module, exports) {
        module.exports = require('buffer').Buffer.isBuffer;
      }, {"buffer": 4}],
      336: [function(require, module, exports) {
        module.exports = function(v) {
          return v === null;
        };
      }, {}],
      337: [function(require, module, exports) {
        var Stream = require('stream').Stream;
        module.exports = function(o) {
          return !!o && o instanceof Stream;
        };
      }, {"stream": 32}],
      338: [function(require, module, exports) {
        var Stat = require('fs').Stats;
        module.exports = cloneStats;
        function cloneStats(stats) {
          var replacement = new Stat;
          Object.keys(stats).forEach(function(key) {
            replacement[key] = stats[key];
          });
          return replacement;
        }
      }, {"fs": 1}],
      339: [function(require, module, exports) {
        (function(Buffer) {
          var clone = (function() {
            'use strict';
            function clone(parent, circular, depth, prototype) {
              var filter;
              if (typeof circular === 'object') {
                depth = circular.depth;
                prototype = circular.prototype;
                filter = circular.filter;
                circular = circular.circular;
              }
              var allParents = [];
              var allChildren = [];
              var useBuffer = typeof Buffer != 'undefined';
              if (typeof circular == 'undefined')
                circular = true;
              if (typeof depth == 'undefined')
                depth = Infinity;
              function _clone(parent, depth) {
                if (parent === null)
                  return null;
                if (depth == 0)
                  return parent;
                var child;
                var proto;
                if (typeof parent != 'object') {
                  return parent;
                }
                if (clone.__isArray(parent)) {
                  child = [];
                } else if (clone.__isRegExp(parent)) {
                  child = new RegExp(parent.source, __getRegExpFlags(parent));
                  if (parent.lastIndex)
                    child.lastIndex = parent.lastIndex;
                } else if (clone.__isDate(parent)) {
                  child = new Date(parent.getTime());
                } else if (useBuffer && Buffer.isBuffer(parent)) {
                  child = new Buffer(parent.length);
                  parent.copy(child);
                  return child;
                } else {
                  if (typeof prototype == 'undefined') {
                    proto = Object.getPrototypeOf(parent);
                    child = Object.create(proto);
                  } else {
                    child = Object.create(prototype);
                    proto = prototype;
                  }
                }
                if (circular) {
                  var index = allParents.indexOf(parent);
                  if (index != -1) {
                    return allChildren[index];
                  }
                  allParents.push(parent);
                  allChildren.push(child);
                }
                for (var i in parent) {
                  var attrs;
                  if (proto) {
                    attrs = Object.getOwnPropertyDescriptor(proto, i);
                  }
                  if (attrs && attrs.set == null) {
                    continue;
                  }
                  child[i] = _clone(parent[i], depth - 1);
                }
                return child;
              }
              return _clone(parent, depth);
            }
            clone.clonePrototype = function clonePrototype(parent) {
              if (parent === null)
                return null;
              var c = function() {};
              c.prototype = parent;
              return new c();
            };
            function __objToStr(o) {
              return Object.prototype.toString.call(o);
            }
            ;
            clone.__objToStr = __objToStr;
            function __isDate(o) {
              return typeof o === 'object' && __objToStr(o) === '[object Date]';
            }
            ;
            clone.__isDate = __isDate;
            function __isArray(o) {
              return typeof o === 'object' && __objToStr(o) === '[object Array]';
            }
            ;
            clone.__isArray = __isArray;
            function __isRegExp(o) {
              return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
            }
            ;
            clone.__isRegExp = __isRegExp;
            function __getRegExpFlags(re) {
              var flags = '';
              if (re.global)
                flags += 'g';
              if (re.ignoreCase)
                flags += 'i';
              if (re.multiline)
                flags += 'm';
              return flags;
            }
            ;
            clone.__getRegExpFlags = __getRegExpFlags;
            return clone;
          })();
          if (typeof module === 'object' && module.exports) {
            module.exports = clone;
          }
        }).call(this, require('buffer').Buffer);
      }, {"buffer": 4}],
      340: [function(require, module, exports) {
        var path = require('path');
        module.exports = function(npath, ext) {
          if (typeof npath !== 'string')
            return npath;
          if (npath.length === 0)
            return npath;
          var nFileName = path.basename(npath, path.extname(npath)) + ext;
          return path.join(path.dirname(npath), nFileName);
        };
      }, {"path": 13}],
      341: [function(require, module, exports) {
        module.exports = {
          "name": "ipfs-api",
          "version": "2.3.2",
          "description": "A client library for the IPFS API",
          "main": "src/index.js",
          "dependencies": {
            "brfs": "^1.4.0",
            "merge-stream": "^1.0.0",
            "multiaddr": "^1.0.0",
            "multipart-stream": "^2.0.0",
            "vinyl": "^0.5.1",
            "vinyl-fs-browser": "^0.1.0",
            "vinyl-multipart-stream": "^1.2.5"
          },
          "browserify": {"transform": ["brfs"]},
          "repository": {
            "type": "git",
            "url": "https://github.com/ipfs/node-ipfs-api"
          },
          "devDependencies": {
            "browserify": "^11.0.0",
            "ipfsd-ctl": "^0.3.3",
            "mocha": "^2.2.5",
            "pre-commit": "^1.0.6",
            "standard": "^3.3.2",
            "uglify-js": "^2.4.24"
          },
          "scripts": {
            "test": "./node_modules/.bin/mocha",
            "lint": "./node_modules/.bin/standard --format",
            "build": "./node_modules/.bin/browserify -t brfs -s ipfsAPI -e ./src/index.js | tee dist/ipfsapi.js | ./node_modules/.bin/uglifyjs -m > dist/ipfsapi.min.js"
          },
          "pre-commit": ["lint"],
          "keywords": ["ipfs"],
          "author": "Matt Bell <mappum@gmail.com>",
          "contributors": ["Travis Person <travis.person@gmail.com>", "Jeromy Jonson <why@ipfs.io>"],
          "license": "MIT",
          "bugs": {"url": "https://github.com/ipfs/node-ipfs-api/issues"},
          "homepage": "https://github.com/ipfs/node-ipfs-api"
        };
      }, {}],
      342: [function(require, module, exports) {
        var pkg = require('../package.json!systemjs-json');
        exports = module.exports = {
          'api-path': '/api/v0/',
          'user-agent': '/node-' + pkg.name + '/' + pkg.version + '/',
          'host': 'localhost',
          'port': '5001'
        };
      }, {"../package.json": 341}],
      343: [function(require, module, exports) {
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
        }).call(this, require('buffer').Buffer);
      }, {
        "buffer": 4,
        "merge-stream": 48,
        "stream": 32,
        "vinyl": 332,
        "vinyl-fs-browser": 199,
        "vinyl-multipart-stream": 313
      }],
      344: [function(require, module, exports) {
        (function(Buffer) {
          var multiaddr = require('multiaddr');
          var config = require('./config');
          var requestAPI = require('./request-api');
          exports = module.exports = IpfsAPI;
          function IpfsAPI(host_or_multiaddr, port) {
            var self = this;
            if (!(self instanceof IpfsAPI)) {
              return new IpfsAPI(host_or_multiaddr, port);
            }
            try {
              var maddr = multiaddr(host_or_multiaddr).nodeAddress();
              config.host = maddr.address;
              config.port = maddr.port;
            } catch (e) {
              config.host = host_or_multiaddr;
              config.port = port || config.port;
            }
            if (!config.host && window && window.location) {
              var split = window.location.host.split(':');
              config.host = split[0];
              config.port = split[1];
            }
            function command(name) {
              return function(opts, cb) {
                if (typeof(opts) === 'function') {
                  cb = opts;
                  opts = {};
                }
                return requestAPI(name, null, opts, null, cb);
              };
            }
            function argCommand(name) {
              return function(arg, opts, cb) {
                if (typeof(opts) === 'function') {
                  cb = opts;
                  opts = {};
                }
                return requestAPI(name, arg, opts, null, cb);
              };
            }
            self.send = requestAPI;
            self.add = function(files, opts, cb) {
              if (typeof(opts) === 'function' && cb === undefined) {
                cb = opts;
                opts = {};
              }
              return requestAPI('add', null, opts, files, cb);
            };
            self.cat = argCommand('cat');
            self.ls = argCommand('ls');
            self.config = {
              get: argCommand('config'),
              set: function(key, value, opts, cb) {
                if (typeof(opts) === 'function') {
                  cb = opts;
                  opts = {};
                }
                return requestAPI('config', [key, value], opts, null, cb);
              },
              show: function(cb) {
                return requestAPI('config/show', null, null, null, true, cb);
              },
              replace: function(file, cb) {
                return requestAPI('config/replace', null, null, file, cb);
              }
            };
            self.update = {
              apply: command('update'),
              check: command('update/check'),
              log: command('update/log')
            };
            self.version = command('version');
            self.commands = command('commands');
            self.mount = function(ipfs, ipns, cb) {
              if (typeof ipfs === 'function') {
                cb = ipfs;
                ipfs = null;
              } else if (typeof ipns === 'function') {
                cb = ipns;
                ipns = null;
              }
              var opts = {};
              if (ipfs)
                opts.f = ipfs;
              if (ipns)
                opts.n = ipns;
              return requestAPI('mount', null, opts, null, cb);
            };
            self.diag = {net: command('diag/net')};
            self.block = {
              get: argCommand('block/get'),
              put: function(file, cb) {
                if (Array.isArray(file)) {
                  return cb(null, new Error('block.put() only accepts 1 file'));
                }
                return requestAPI('block/put', null, null, file, cb);
              }
            };
            self.object = {
              get: argCommand('object/get'),
              put: function(file, encoding, cb) {
                if (typeof encoding === 'function') {
                  return cb(null, new Error("Must specify an object encoding ('json' or 'protobuf')"));
                }
                return requestAPI('object/put', encoding, null, file, cb);
              },
              data: argCommand('object/data'),
              stat: argCommand('object/stat'),
              links: argCommand('object/links')
            };
            self.swarm = {
              peers: command('swarm/peers'),
              connect: argCommand('swarm/peers')
            };
            self.ping = function(id, cb) {
              return requestAPI('ping', id, {n: 1}, null, function(err, res) {
                if (err)
                  return cb(err, null);
                cb(null, res[1]);
              });
            };
            self.id = function(id, cb) {
              if (typeof id === 'function') {
                cb = id;
                id = null;
              }
              return requestAPI('id', id, null, null, cb);
            };
            self.pin = {
              add: function(hash, opts, cb) {
                if (typeof opts === 'function') {
                  cb = opts;
                  opts = null;
                }
                requestAPI('pin/add', hash, opts, null, cb);
              },
              remove: function(hash, opts, cb) {
                if (typeof opts === 'function') {
                  cb = opts;
                  opts = null;
                }
                requestAPI('pin/rm', hash, opts, null, cb);
              },
              list: function(type, cb) {
                if (typeof type === 'function') {
                  cb = type;
                  type = null;
                }
                var opts = null;
                if (type)
                  opts = {type: type};
                return requestAPI('pin/ls', null, opts, null, cb);
              }
            };
            self.gateway = {
              enable: command('gateway/enable'),
              disable: command('gateway/disable')
            };
            self.log = {tail: function(cb) {
                return requestAPI('log/tail', null, {enc: 'text'}, null, true, cb);
              }};
            self.name = {
              publish: argCommand('name/publish'),
              resolve: argCommand('name/resolve')
            };
            self.Buffer = Buffer;
            self.refs = argCommand('refs');
            self.refs.local = command('refs/local');
            self.dht = {
              findprovs: argCommand('dht/findprovs'),
              get: function(key, opts, cb) {
                if (typeof(opts) === 'function' && !cb) {
                  cb = opts;
                  opts = null;
                }
                return requestAPI('dht/get', key, opts, null, function(err, res) {
                  if (err)
                    return cb(err);
                  if (!res)
                    return cb(new Error('empty response'));
                  if (res.length === 0)
                    return cb(new Error('no value returned for key'));
                  if (res[0].Type === 5) {
                    cb(null, res[0].Extra);
                  } else {
                    cb(res);
                  }
                });
              },
              put: function(key, value, opts, cb) {
                if (typeof(opts) === 'function' && !cb) {
                  cb = opts;
                  opts = null;
                }
                return requestAPI('dht/put', [key, value], opts, null, cb);
              }
            };
          }
        }).call(this, require('buffer').Buffer);
      }, {
        "./config": 342,
        "./request-api": 345,
        "buffer": 4,
        "multiaddr": 63
      }],
      345: [function(require, module, exports) {
        var http = require('http');
        var qs = require('querystring');
        var getFilesStream = require('./get-files-stream');
        var config = require('./config');
        exports = module.exports = requestAPI;
        function requestAPI(path, args, opts, files, buffer, cb) {
          var query,
              stream,
              contentType;
          contentType = 'application/json';
          if (Array.isArray(path))
            path = path.join('/');
          opts = opts || {};
          if (args && !Array.isArray(args))
            args = [args];
          if (args)
            opts.arg = args;
          opts['stream-channels'] = true;
          query = qs.stringify(opts);
          if (files) {
            stream = getFilesStream(files, opts);
            if (!stream.boundary) {
              throw new Error('no boundary in multipart stream');
            }
            contentType = 'multipart/form-data; boundary=' + stream.boundary;
          }
          if (typeof buffer === 'function') {
            cb = buffer;
            buffer = false;
          }
          var reqo = {
            method: files ? 'POST' : 'GET',
            host: config.host,
            port: config.port,
            path: config['api-path'] + path + '?' + query,
            headers: {
              'User-Agent': config['user-agent'],
              'Content-Type': contentType
            },
            withCredentials: false
          };
          var req = http.request(reqo, function(res) {
            var data = '';
            var objects = [];
            var stream = !!res.headers && !!res.headers['x-stream-output'];
            var chunkedObjects = !!res.headers && !!res.headers['x-chunked-output'];
            if (stream && !buffer)
              return cb(null, res);
            if (chunkedObjects && buffer)
              return cb(null, res);
            res.on('data', function(chunk) {
              if (!chunkedObjects) {
                data += chunk;
                return data;
              }
              try {
                var obj = JSON.parse(chunk.toString());
                objects.push(obj);
              } catch (e) {
                chunkedObjects = false;
                data += chunk;
              }
            });
            res.on('end', function() {
              var parsed;
              if (!chunkedObjects) {
                try {
                  parsed = JSON.parse(data);
                  data = parsed;
                } catch (e) {}
              } else {
                data = objects;
              }
              if (res.statusCode >= 400 || !res.statusCode) {
                if (!data)
                  data = new Error();
                return cb(data, null);
              }
              return cb(null, data);
            });
            res.on('error', function(err) {
              return cb(err, null);
            });
          });
          req.on('error', function(err) {
            return cb(err, null);
          });
          if (stream) {
            stream.pipe(req);
          } else {
            req.end();
          }
          return req;
        }
      }, {
        "./config": 342,
        "./get-files-stream": 343,
        "http": 33,
        "querystring": 18
      }]
    }, {}, [344])(344);
  });
})(require('buffer').Buffer, require('process'));
