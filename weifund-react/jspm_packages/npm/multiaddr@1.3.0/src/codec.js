/* */ 
(function(Buffer) {
  var map = require('lodash.map');
  var filter = require('lodash.filter');
  var convert = require('./convert');
  var protocols = require('./protocols');
  var varint = require('varint');
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
        tuples.push([part]);
        return tuples;
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
    if (parts[parts.length - 1] === '') {
      parts.pop();
    }
    return '/' + parts.join('/');
  }
  function stringTuplesToTuples(tuples) {
    return map(tuples, function(tup) {
      if (!Array.isArray(tup)) {
        tup = [tup];
      }
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
      var buf = new Buffer(varint.encode(proto.code));
      if (tup.length > 1) {
        buf = Buffer.concat([buf, tup[1]]);
      }
      return buf;
    })));
  }
  function bufferToTuples(buf) {
    var tuples = [];
    for (var i = 0; i < buf.length; ) {
      var code = varint.decode(buf, i);
      var proto = protocols(code);
      if (!proto) {
        throw ParseError('Invalid protocol code: ' + code);
      }
      var size = (proto.size / 8);
      code = Number(code);
      var addr = buf.slice(i + 1, i + 1 + size);
      i += 1 + size;
      if (i > buf.length) {
        throw ParseError('Invalid address buffer: ' + buf.toString('hex'));
      }
      tuples.push([code, addr]);
      i = i + varint.decode.bytes - 1;
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
    return proto;
  }
})(require('buffer').Buffer);
