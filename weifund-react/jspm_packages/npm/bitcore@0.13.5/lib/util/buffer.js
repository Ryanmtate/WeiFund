/* */ 
(function(Buffer) {
  'use strict';
  var buffer = require('buffer');
  var assert = require('assert');
  var js = require('./js');
  var $ = require('./preconditions');
  function equals(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    var length = a.length;
    for (var i = 0; i < length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  module.exports = {
    fill: function fill(buffer, value) {
      $.checkArgumentType(buffer, 'Buffer', 'buffer');
      $.checkArgumentType(value, 'number', 'value');
      var length = buffer.length;
      for (var i = 0; i < length; i++) {
        buffer[i] = value;
      }
      return buffer;
    },
    copy: function(original) {
      var buffer = new Buffer(original.length);
      original.copy(buffer);
      return buffer;
    },
    isBuffer: function isBuffer(arg) {
      return buffer.Buffer.isBuffer(arg) || arg instanceof Uint8Array;
    },
    emptyBuffer: function emptyBuffer(bytes) {
      $.checkArgumentType(bytes, 'number', 'bytes');
      var result = new buffer.Buffer(bytes);
      for (var i = 0; i < bytes; i++) {
        result.write('\0', i);
      }
      return result;
    },
    concat: buffer.Buffer.concat,
    equals: equals,
    equal: equals,
    integerAsSingleByteBuffer: function integerAsSingleByteBuffer(integer) {
      $.checkArgumentType(integer, 'number', 'integer');
      return new buffer.Buffer([integer & 0xff]);
    },
    integerAsBuffer: function integerAsBuffer(integer) {
      $.checkArgumentType(integer, 'number', 'integer');
      var bytes = [];
      bytes.push((integer >> 24) & 0xff);
      bytes.push((integer >> 16) & 0xff);
      bytes.push((integer >> 8) & 0xff);
      bytes.push(integer & 0xff);
      return new Buffer(bytes);
    },
    integerFromBuffer: function integerFromBuffer(buffer) {
      $.checkArgumentType(buffer, 'Buffer', 'buffer');
      return buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
    },
    integerFromSingleByteBuffer: function integerFromBuffer(buffer) {
      $.checkArgumentType(buffer, 'Buffer', 'buffer');
      return buffer[0];
    },
    bufferToHex: function bufferToHex(buffer) {
      $.checkArgumentType(buffer, 'Buffer', 'buffer');
      return buffer.toString('hex');
    },
    reverse: function reverse(param) {
      var ret = new buffer.Buffer(param.length);
      for (var i = 0; i < param.length; i++) {
        ret[i] = param[param.length - i - 1];
      }
      return ret;
    },
    hexToBuffer: function hexToBuffer(string) {
      assert(js.isHexa(string));
      return new buffer.Buffer(string, 'hex');
    }
  };
  module.exports.NULL_HASH = module.exports.fill(new Buffer(32), 0);
  module.exports.EMPTY_BUFFER = new Buffer(0);
})(require('buffer').Buffer);
