/* */ 
(function(Buffer, process) {
  var multiaddr = (function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 17);
  })([function(module, exports, __webpack_require__) {
    (function(Buffer, global) {
      'use strict';
      var base64 = __webpack_require__(8);
      var ieee754 = __webpack_require__(10);
      var isArray = __webpack_require__(9);
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.poolSize = 8192;
      var rootParent = {};
      Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.foo = function() {
            return 42;
          };
          return arr.foo() === 42 && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
      }
      function Buffer(arg) {
        if (!(this instanceof Buffer)) {
          if (arguments.length > 1)
            return new Buffer(arg, arguments[1]);
          return new Buffer(arg);
        }
        if (!Buffer.TYPED_ARRAY_SUPPORT) {
          this.length = 0;
          this.parent = undefined;
        }
        if (typeof arg === 'number') {
          return fromNumber(this, arg);
        }
        if (typeof arg === 'string') {
          return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
        }
        return fromObject(this, arg);
      }
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
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
        array.byteLength;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(array);
          that.__proto__ = Buffer.prototype;
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
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
          Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: true
          });
        }
      } else {
        Buffer.prototype.length = undefined;
        Buffer.prototype.parent = undefined;
      }
      function allocate(that, length) {
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          that.length = length;
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
      Buffer.prototype._isBuffer = true;
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
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte,
                thirdByte,
                fourthByte,
                tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 0x1000;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        var res = '';
        var i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
        return res;
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
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
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
        this[offset] = (value & 0xff);
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
          this[offset] = (value & 0xff);
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
          this[offset + 1] = (value & 0xff);
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
          this[offset] = (value & 0xff);
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
          this[offset + 3] = (value & 0xff);
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
        this[offset] = (value & 0xff);
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset | 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = (value & 0xff);
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
          this[offset + 1] = (value & 0xff);
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
          this[offset] = (value & 0xff);
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
          this[offset + 3] = (value & 0xff);
        } else {
          objectWriteUInt32(this, value, offset, false);
        }
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
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
          Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
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
        for (var i = 0; i < length; i++) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            if (!leadSurrogate) {
              if (codePoint > 0xDBFF) {
                if ((units -= 3) > -1)
                  bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1)
                bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
          }
          leadSurrogate = null;
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
          } else if (codePoint < 0x110000) {
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
    }.call(exports, __webpack_require__(0).Buffer, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    var baseEach = __webpack_require__(3),
        baseIteratee = __webpack_require__(4);
    var MAX_SAFE_INTEGER = 9007199254740991;
    var funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }
    var getLength = baseProperty('length');
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(getLength(value)) && !isFunction(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    module.exports = map;
  }, function(module, exports, __webpack_require__) {
    var map = __webpack_require__(1);
    module.exports = Protocols;
    function Protocols(proto) {
      if (typeof(proto) === 'number') {
        if (Protocols.codes[proto]) {
          return Protocols.codes[proto];
        }
        throw new Error('no protocol with code: ' + proto);
      } else if (typeof(proto) === 'string' || proto instanceof String) {
        if (Protocols.names[proto]) {
          return Protocols.names[proto];
        }
        throw new Error('no protocol with name: ' + proto);
      }
      throw new Error('invalid protocol id type: ' + proto);
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
  }, function(module, exports) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = '[object Arguments]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        stringTag = '[object String]';
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var getPrototypeOf = Object.getPrototypeOf,
        propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = Object.keys;
    var baseEach = createBaseEach(baseForOwn);
    var baseFor = createBaseFor();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    function baseHas(object, key) {
      return hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
    }
    function baseKeys(object) {
      return nativeKeys(Object(object));
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);
        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    var getLength = baseProperty('length');
    function indexKeys(object) {
      var length = object ? object.length : undefined;
      if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
        return baseTimes(length, String);
      }
      return null;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
      return value === proto;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(getLength(value)) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    function isString(value) {
      return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
    }
    function keys(object) {
      var isProto = isPrototype(object);
      if (!(isProto || isArrayLike(object))) {
        return baseKeys(object);
      }
      var indexes = indexKeys(object),
          skipIndexes = !!indexes,
          result = indexes || [],
          length = result.length;
      for (var key in object) {
        if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseEach;
  }, function(module, exports, __webpack_require__) {
    (function(module, global) {
      var LARGE_ARRAY_SIZE = 200;
      var HASH_UNDEFINED = '__lodash_hash_undefined__';
      var UNORDERED_COMPARE_FLAG = 1,
          PARTIAL_COMPARE_FLAG = 2;
      var INFINITY = 1 / 0,
          MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          genTag = '[object GeneratorFunction]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          symbolTag = '[object Symbol]',
          weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var objectTypes = {
        'function': true,
        'object': true
      };
      var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
      var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
      var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
      var freeSelf = checkGlobal(objectTypes[typeof self] && self);
      var freeWindow = checkGlobal(objectTypes[typeof window] && window);
      var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
      var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
      function arrayMap(array, iteratee) {
        var index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arraySome(array, predicate) {
        var index = -1,
            length = array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function checkGlobal(value) {
        return (value && value.Object === Object) ? value : null;
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != 'function') {
          try {
            result = !!(value + '');
          } catch (e) {}
        }
        return result;
      }
      function isIndex(value, length) {
        value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && value < length;
      }
      function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      var arrayProto = Array.prototype,
          objectProto = Object.prototype;
      var funcToString = Function.prototype.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      var Symbol = root.Symbol,
          Uint8Array = root.Uint8Array,
          getPrototypeOf = Object.getPrototypeOf,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          splice = arrayProto.splice;
      var nativeKeys = Object.keys;
      var Map = getNative(root, 'Map'),
          Set = getNative(root, 'Set'),
          WeakMap = getNative(root, 'WeakMap'),
          nativeCreate = getNative(Object, 'create');
      var mapCtorString = Map ? funcToString.call(Map) : '',
          setCtorString = Set ? funcToString.call(Set) : '',
          weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
      var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;
      function Hash() {}
      function hashDelete(hash, key) {
        return hashHas(hash, key) && delete hash[key];
      }
      function hashGet(hash, key) {
        if (nativeCreate) {
          var result = hash[key];
          return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
      }
      function hashHas(hash, key) {
        return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
      }
      function hashSet(hash, key, value) {
        hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      }
      function MapCache(values) {
        var index = -1,
            length = values ? values.length : 0;
        this.clear();
        while (++index < length) {
          var entry = values[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapClear() {
        this.__data__ = {
          'hash': new Hash,
          'map': Map ? new Map : [],
          'string': new Hash
        };
      }
      function mapDelete(key) {
        var data = this.__data__;
        if (isKeyable(key)) {
          return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
        }
        return Map ? data.map['delete'](key) : assocDelete(data.map, key);
      }
      function mapGet(key) {
        var data = this.__data__;
        if (isKeyable(key)) {
          return hashGet(typeof key == 'string' ? data.string : data.hash, key);
        }
        return Map ? data.map.get(key) : assocGet(data.map, key);
      }
      function mapHas(key) {
        var data = this.__data__;
        if (isKeyable(key)) {
          return hashHas(typeof key == 'string' ? data.string : data.hash, key);
        }
        return Map ? data.map.has(key) : assocHas(data.map, key);
      }
      function mapSet(key, value) {
        var data = this.__data__;
        if (isKeyable(key)) {
          hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
        } else if (Map) {
          data.map.set(key, value);
        } else {
          assocSet(data.map, key, value);
        }
        return this;
      }
      function Stack(values) {
        var index = -1,
            length = values ? values.length : 0;
        this.clear();
        while (++index < length) {
          var entry = values[index];
          this.set(entry[0], entry[1]);
        }
      }
      function stackClear() {
        this.__data__ = {
          'array': [],
          'map': null
        };
      }
      function stackDelete(key) {
        var data = this.__data__,
            array = data.array;
        return array ? assocDelete(array, key) : data.map['delete'](key);
      }
      function stackGet(key) {
        var data = this.__data__,
            array = data.array;
        return array ? assocGet(array, key) : data.map.get(key);
      }
      function stackHas(key) {
        var data = this.__data__,
            array = data.array;
        return array ? assocHas(array, key) : data.map.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__,
            array = data.array;
        if (array) {
          if (array.length < (LARGE_ARRAY_SIZE - 1)) {
            assocSet(array, key, value);
          } else {
            data.array = null;
            data.map = new MapCache(array);
          }
        }
        var map = data.map;
        if (map) {
          map.set(key, value);
        }
        return this;
      }
      function assocDelete(array, key) {
        var index = assocIndexOf(array, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = array.length - 1;
        if (index == lastIndex) {
          array.pop();
        } else {
          splice.call(array, index, 1);
        }
        return true;
      }
      function assocGet(array, key) {
        var index = assocIndexOf(array, key);
        return index < 0 ? undefined : array[index][1];
      }
      function assocHas(array, key) {
        return assocIndexOf(array, key) > -1;
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function assocSet(array, key, value) {
        var index = assocIndexOf(array, key);
        if (index < 0) {
          array.push([key, value]);
        } else {
          array[index][1] = value;
        }
      }
      function baseCastPath(value) {
        return isArray(value) ? value : stringToPath(value);
      }
      function baseGet(object, path) {
        path = isKey(path, object) ? [path + ''] : baseCastPath(path);
        var index = 0,
            length = path.length;
        while (object != null && index < length) {
          object = object[path[index++]];
        }
        return (index && index == length) ? object : undefined;
      }
      function baseHas(object, key) {
        return hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
      }
      function baseHasIn(object, key) {
        return key in Object(object);
      }
      function baseIsEqual(value, other, customizer, bitmask, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
      }
      function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
        var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = arrayTag,
            othTag = arrayTag;
        if (!objIsArr) {
          objTag = getTag(object);
          objTag = objTag == argsTag ? objectTag : objTag;
        }
        if (!othIsArr) {
          othTag = getTag(other);
          othTag = othTag == argsTag ? objectTag : othTag;
        }
        var objIsObj = objTag == objectTag && !isHostObject(object),
            othIsObj = othTag == objectTag && !isHostObject(other),
            isSameTag = objTag == othTag;
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack);
          return (objIsArr || isTypedArray(object)) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
        }
        if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
              othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
          if (objIsWrapped || othIsWrapped) {
            stack || (stack = new Stack);
            return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack);
        return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length,
            length = index,
            noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0],
              objValue = object[key],
              srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack,
                result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIteratee(value) {
        var type = typeof value;
        if (type == 'function') {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (type == 'object') {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        return nativeKeys(Object(object));
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          var key = matchData[0][0],
              value = matchData[0][1];
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === value && (value !== undefined || (key in Object(object)));
          };
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        return function(object) {
          var objValue = get(object, path);
          return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
        };
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined : object[key];
        };
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function baseSlice(array, start, end) {
        var index = -1,
            length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : (length + start);
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : ((end - start) >>> 0);
        start >>>= 0;
        var result = Array(length);
        while (++index < length) {
          result[index] = array[index + start];
        }
        return result;
      }
      function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
        var index = -1,
            isPartial = bitmask & PARTIAL_COMPARE_FLAG,
            isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
            arrLength = array.length,
            othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var stacked = stack.get(array);
        if (stacked) {
          return stacked == other;
        }
        var result = true;
        stack.set(array, other);
        while (++index < arrLength) {
          var arrValue = array[index],
              othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (isUnordered) {
            if (!arraySome(other, function(othValue) {
              return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
            result = false;
            break;
          }
        }
        stack['delete'](array);
        return result;
      }
      function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
        switch (tag) {
          case arrayBufferTag:
            if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
            return +object == +other;
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case numberTag:
            return (object != +object) ? other != +other : object == +other;
          case regexpTag:
          case stringTag:
            return object == (other + '');
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask | UNORDERED_COMPARE_FLAG, stack.set(object, other));
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
            objProps = keys(object),
            objLength = objProps.length,
            othProps = keys(other),
            othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : baseHas(other, key))) {
            return false;
          }
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        var result = true;
        stack.set(object, other);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key],
              othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack)) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == 'constructor');
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor,
              othCtor = other.constructor;
          if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack['delete'](object);
        return result;
      }
      var getLength = baseProperty('length');
      function getMatchData(object) {
        var result = toPairs(object),
            length = result.length;
        while (length--) {
          result[length][2] = isStrictComparable(result[length][1]);
        }
        return result;
      }
      function getNative(object, key) {
        var value = object[key];
        return isNative(value) ? value : undefined;
      }
      function getTag(value) {
        return objectToString.call(value);
      }
      if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
        getTag = function(value) {
          var result = objectToString.call(value),
              Ctor = result == objectTag ? value.constructor : null,
              ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
          if (ctorString) {
            switch (ctorString) {
              case mapCtorString:
                return mapTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      function hasPath(object, path, hasFunc) {
        if (object == null) {
          return false;
        }
        var result = hasFunc(object, path);
        if (!result && !isKey(path)) {
          path = baseCastPath(path);
          object = parent(object, path);
          if (object != null) {
            path = last(path);
            result = hasFunc(object, path);
          }
        }
        var length = object ? object.length : undefined;
        return result || (!!length && isLength(length) && isIndex(path, length) && (isArray(object) || isString(object) || isArguments(object)));
      }
      function indexKeys(object) {
        var length = object ? object.length : undefined;
        if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
          return baseTimes(length, String);
        }
        return null;
      }
      function isKey(value, object) {
        if (typeof value == 'number') {
          return true;
        }
        return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == 'number' || type == 'boolean' || (type == 'string' && value != '__proto__') || value == null;
      }
      function isPrototype(value) {
        var Ctor = value && value.constructor,
            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function parent(object, path) {
        return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
      }
      function stringToPath(string) {
        var result = [];
        toString(string).replace(rePropName, function(match, number, quote, string) {
          result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
        });
        return result;
      }
      function last(array) {
        var length = array ? array.length : 0;
        return length ? array[length - 1] : undefined;
      }
      function eq(value, other) {
        return value === other || (value !== value && other !== other);
      }
      function isArguments(value) {
        return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
      }
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(getLength(value)) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : '';
        return tag == funcTag || tag == genTag;
      }
      function isLength(value) {
        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == 'object' || type == 'function');
      }
      function isObjectLike(value) {
        return !!value && typeof value == 'object';
      }
      function isNative(value) {
        if (value == null) {
          return false;
        }
        if (isFunction(value)) {
          return reIsNative.test(funcToString.call(value));
        }
        return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
      }
      function isString(value) {
        return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
      }
      function isSymbol(value) {
        return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
      }
      function isTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
      }
      function toString(value) {
        if (typeof value == 'string') {
          return value;
        }
        if (value == null) {
          return '';
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : '';
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
      }
      function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
      }
      function hasIn(object, path) {
        return hasPath(object, path, baseHasIn);
      }
      function keys(object) {
        var isProto = isPrototype(object);
        if (!(isProto || isArrayLike(object))) {
          return baseKeys(object);
        }
        var indexes = indexKeys(object),
            skipIndexes = !!indexes,
            result = indexes || [],
            length = result.length;
        for (var key in object) {
          if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
            result.push(key);
          }
        }
        return result;
      }
      function toPairs(object) {
        return baseToPairs(object, keys(object));
      }
      function identity(value) {
        return value;
      }
      function property(path) {
        return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
      }
      Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
      MapCache.prototype.clear = mapClear;
      MapCache.prototype['delete'] = mapDelete;
      MapCache.prototype.get = mapGet;
      MapCache.prototype.has = mapHas;
      MapCache.prototype.set = mapSet;
      Stack.prototype.clear = stackClear;
      Stack.prototype['delete'] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = baseIteratee;
    }.call(exports, __webpack_require__(15)(module), (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    var Buffer = __webpack_require__(0).Buffer;
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
  }, function(module, exports) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }, function(module, exports, __webpack_require__) {
    (function(Buffer) {
      var map = __webpack_require__(1);
      var filter = __webpack_require__(13);
      var convert = __webpack_require__(16);
      var protocols = __webpack_require__(2);
      module.exports = {
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
        if (parts.length === 1 && parts[0] === '') {
          return [];
        }
        for (var p = 0; p < parts.length; p++) {
          var part = parts[p];
          var proto = protocols(part);
          if (proto.size === 0) {
            return [part];
          }
          p++;
          if (p >= parts.length) {
            throw ParseError('invalid address: ' + str);
          }
          tuples.push([part, parts[p]]);
        }
        return tuples;
      }
      function stringTuplesToString(tuples) {
        var parts = [];
        map(tuples, function(tup) {
          var proto = protoFromTuple(tup);
          parts.push(proto.name);
          if (tup.length > 1) {
            parts.push(tup[1]);
          }
        });
        return '/' + parts.join('/');
      }
      function stringTuplesToTuples(tuples) {
        return map(tuples, function(tup) {
          var proto = protoFromTuple(tup);
          if (tup.length > 1) {
            return [proto.code, convert.toBuffer(proto.code, tup[1])];
          }
          return [proto.code];
        });
      }
      function tuplesToStringTuples(tuples) {
        return map(tuples, function(tup) {
          var proto = protoFromTuple(tup);
          if (tup.length > 1) {
            return [proto.code, convert.toString(proto.code, tup[1])];
          }
          return [proto.code];
        });
      }
      function tuplesToBuffer(tuples) {
        return fromBuffer(Buffer.concat(map(tuples, function(tup) {
          var proto = protoFromTuple(tup);
          var buf = new Buffer([proto.code]);
          if (tup.length > 1) {
            buf = Buffer.concat([buf, tup[1]]);
          }
          return buf;
        })));
      }
      function bufferToTuples(buf) {
        var tuples = [];
        for (var i = 0; i < buf.length; ) {
          var code = buf[i];
          var proto = protocols(code);
          if (!proto) {
            throw ParseError('Invalid protocol code: ' + code);
          }
          var size = (proto.size / 8);
          code = 0 + buf[i];
          var addr = buf.slice(i + 1, i + 1 + size);
          i += 1 + size;
          if (i > buf.length) {
            throw ParseError('Invalid address buffer: ' + buf.toString('hex'));
          }
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
        return new Error('Error parsing address: ' + str);
      }
      function protoFromTuple(tup) {
        var proto = protocols(tup[0]);
        if (tup.length > 1 && proto.size === 0) {
          throw ParseError('tuple has address but protocol size is 0');
        }
        return proto;
      }
    }.call(exports, __webpack_require__(0).Buffer));
  }, function(module, exports) {
    'use strict';
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    function init() {
      var i;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var len = code.length;
      for (i = 0; i < len; i++) {
        lookup[i] = code[i];
      }
      for (i = 0; i < len; ++i) {
        revLookup[code.charCodeAt(i)] = i;
      }
      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }
    init();
    function toByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      var len = b64.length;
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
      arr = new Arr(len * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? len - 4 : len;
      var L = 0;
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp & 0xFF0000) >> 16;
        arr[L++] = (tmp & 0xFF00) >> 8;
        arr[L++] = tmp & 0xFF;
      }
      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('');
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var output = '';
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0,
          len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }
      parts.push(output);
      return parts.join('');
    }
  }, function(module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return toString.call(arr) == '[object Array]';
    };
  }, function(module, exports) {
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
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var ip = exports;
    var Buffer = __webpack_require__(0).Buffer;
    var os = __webpack_require__(14);
    ip.toBuffer = function(ip, buff, offset) {
      offset = ~~offset;
      var result;
      if (this.isV4Format(ip)) {
        result = buff || new Buffer(offset + 4);
        ip.split(/\./g).map(function(byte) {
          result[offset++] = parseInt(byte, 10) & 0xff;
        });
      } else if (this.isV6Format(ip)) {
        var sections = ip.split(':', 8);
        var i;
        for (i = 0; i < sections.length; i++) {
          var isv4 = this.isV4Format(sections[i]);
          var v4Buffer;
          if (isv4) {
            v4Buffer = this.toBuffer(sections[i]);
            sections[i] = v4Buffer.slice(0, 2).toString('hex');
          }
          if (v4Buffer && ++i < 8) {
            sections.splice(i, 0, v4Buffer.slice(2, 4).toString('hex'));
          }
        }
        if (sections[0] === '') {
          while (sections.length < 8)
            sections.unshift('0');
        } else if (sections[sections.length - 1] === '') {
          while (sections.length < 8)
            sections.push('0');
        } else if (sections.length < 8) {
          for (i = 0; i < sections.length && sections[i] !== ''; i++)
            ;
          var argv = [i, 1];
          for (i = 9 - sections.length; i > 0; i--) {
            argv.push('0');
          }
          sections.splice.apply(sections, argv);
        }
        result = buff || new Buffer(offset + 16);
        for (i = 0; i < sections.length; i++) {
          var word = parseInt(sections[i], 16);
          result[offset++] = (word >> 8) & 0xff;
          result[offset++] = word & 0xff;
        }
      }
      if (!result) {
        throw Error('Invalid ip address: ' + ip);
      }
      return result;
    };
    ip.toString = function(buff, offset, length) {
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
    var ipv4Regex = /^(\d{1,3}\.){3,3}\d{1,3}$/;
    var ipv6Regex = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;
    ip.isV4Format = function(ip) {
      return ipv4Regex.test(ip);
    };
    ip.isV6Format = function(ip) {
      return ipv6Regex.test(ip);
    };
    function _normalizeFamily(family) {
      return family ? family.toLowerCase() : 'ipv4';
    }
    ip.fromPrefixLen = function(prefixlen, family) {
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
    ip.mask = function(addr, mask) {
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
    ip.cidr = function(cidrString) {
      var cidrParts = cidrString.split('/');
      var addr = cidrParts[0];
      if (cidrParts.length !== 2)
        throw new Error('invalid CIDR subnet: ' + addr);
      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
      return ip.mask(addr, mask);
    };
    ip.subnet = function(addr, mask) {
      var networkAddress = ip.toLong(ip.mask(addr, mask));
      var maskBuffer = ip.toBuffer(mask);
      var maskLength = 0;
      for (var i = 0; i < maskBuffer.length; i++) {
        if (maskBuffer[i] === 0xff) {
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
        length: numberOfAddresses,
        contains: function(other) {
          return networkAddress === ip.toLong(ip.mask(other, mask));
        }
      };
    };
    ip.cidrSubnet = function(cidrString) {
      var cidrParts = cidrString.split('/');
      var addr = cidrParts[0];
      if (cidrParts.length !== 2)
        throw new Error('invalid CIDR subnet: ' + addr);
      var mask = ip.fromPrefixLen(parseInt(cidrParts[1], 10));
      return ip.subnet(addr, mask);
    };
    ip.not = function(addr) {
      var buff = ip.toBuffer(addr);
      for (var i = 0; i < buff.length; i++) {
        buff[i] = 0xff ^ buff[i];
      }
      return ip.toString(buff);
    };
    ip.or = function(a, b) {
      a = ip.toBuffer(a);
      b = ip.toBuffer(b);
      if (a.length === b.length) {
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
    ip.isEqual = function(a, b) {
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
    ip.isPrivate = function(addr) {
      return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) || /^f[cd][0-9a-f]{2}:/i.test(addr) || /^fe80:/i.test(addr) || /^::1$/.test(addr) || /^::$/.test(addr);
    };
    ip.isPublic = function(addr) {
      return !ip.isPrivate(addr);
    };
    ip.isLoopback = function(addr) {
      return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(addr) || /^fe80::1$/.test(addr) || /^::1$/.test(addr) || /^::$/.test(addr);
    };
    ip.loopback = function(family) {
      family = _normalizeFamily(family);
      if (family !== 'ipv4' && family !== 'ipv6') {
        throw new Error('family must be ipv4 or ipv6');
      }
      return family === 'ipv4' ? '127.0.0.1' : 'fe80::1';
    };
    ip.address = function(name, family) {
      var interfaces = os.networkInterfaces();
      var all;
      family = _normalizeFamily(family);
      if (name && name !== 'private' && name !== 'public') {
        var res = interfaces[name].filter(function(details) {
          var itemFamily = details.family.toLowerCase();
          return itemFamily === family;
        });
        if (res.length === 0)
          return undefined;
        return res[0].address;
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
    ip.toLong = function(ip) {
      var ipl = 0;
      ip.split('.').forEach(function(octet) {
        ipl <<= 8;
        ipl += parseInt(octet);
      });
      return (ipl >>> 0);
    };
    ip.fromLong = function(ipl) {
      return ((ipl >>> 24) + '.' + (ipl >> 16 & 255) + '.' + (ipl >> 8 & 255) + '.' + (ipl & 255));
    };
  }, function(module, exports, __webpack_require__) {
    var baseEach = __webpack_require__(3);
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }
    module.exports = baseFilter;
  }, function(module, exports, __webpack_require__) {
    var baseFilter = __webpack_require__(12),
        baseIteratee = __webpack_require__(4);
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    var isArray = Array.isArray;
    module.exports = filter;
  }, function(module, exports) {
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
  }, function(module, exports) {
    module.exports = function(module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function() {};
        module.paths = [];
        module.children = [];
        module.webpackPolyfill = 1;
      }
      return module;
    };
  }, function(module, exports, __webpack_require__) {
    (function(Buffer) {
      var ip = __webpack_require__(11);
      var protocols = __webpack_require__(2);
      module.exports = Convert;
      function Convert(proto, a) {
        if (a instanceof Buffer) {
          return Convert.toString(proto, a);
        } else {
          return Convert.toBuffer(proto, a);
        }
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
    }.call(exports, __webpack_require__(0).Buffer));
  }, function(module, exports, __webpack_require__) {
    (function(Buffer) {
      var map = __webpack_require__(1);
      var extend = __webpack_require__(6);
      var codec = __webpack_require__(7);
      var bufeq = __webpack_require__(5);
      var protocols = __webpack_require__(2);
      var NotImplemented = new Error('Sorry, Not Implemented Yet.');
      exports = module.exports = Multiaddr;
      exports.Buffer = Buffer;
      function Multiaddr(addr) {
        if (!(this instanceof Multiaddr)) {
          return new Multiaddr(addr);
        }
        if (!addr) {
          addr = '';
        }
        if (addr instanceof Buffer) {
          this.buffer = codec.fromBuffer(addr);
        } else if (typeof(addr) === 'string' || addr instanceof String) {
          this.buffer = codec.fromString(addr);
        } else if (addr.buffer && addr.protos && addr.protoCodes) {
          this.buffer = codec.fromBuffer(addr.buffer);
        } else {
          throw new Error('addr must be a string, Buffer, or Multiaddr');
        }
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
        return '<Mutliaddr ' + this.buffer.toString('hex') + ' - ' + codec.bufferToString(this.buffer) + '>';
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
        if (i < 0) {
          throw new Error('Address ' + this + ' does not contain subaddress: ' + addr);
        }
        return Multiaddr(s.slice(0, i));
      };
      Multiaddr.prototype.equals = function equals(addr) {
        return bufeq(this.buffer, addr.buffer);
      };
      Multiaddr.prototype.nodeAddress = function nodeAddress() {
        if (!this.isThinWaistAddress()) {
          throw new Error('Multiaddr must be "thin waist" address for nodeAddress.');
        }
        var codes = this.protoCodes();
        var parts = this.toString().split('/').slice(1);
        return {
          family: (codes[0] === 41) ? 'IPv6' : 'IPv4',
          address: parts[1],
          port: parts[3]
        };
      };
      Multiaddr.fromNodeAddress = function fromNodeAddress(addr, transport) {
        if (!addr)
          throw new Error('requires node address object');
        if (!transport)
          throw new Error('requires transport protocol');
        var ip = (addr.family === 'IPv6') ? 'ip6' : 'ip4';
        return Multiaddr('/' + [ip, addr.address, transport, addr.port].join('/'));
      };
      Multiaddr.prototype.isThinWaistAddress = function isThinWaistAddress(addr) {
        var protos = (addr || this).protos();
        if (protos.length !== 2) {
          return false;
        }
        if (protos[0].code !== 4 && protos[0].code !== 41) {
          return false;
        }
        if (protos[1].code !== 6 && protos[1].code !== 17) {
          return false;
        }
        return true;
      };
      Multiaddr.prototype.fromStupidString = function fromStupidString(str) {
        throw NotImplemented;
      };
      Multiaddr.protocols = protocols;
    }.call(exports, __webpack_require__(0).Buffer));
  }]);
})(require('buffer').Buffer, require('process'));
