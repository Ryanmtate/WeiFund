/* */ 
(function(Buffer) {
  var ip = require('ip');
  var protocols = require('./protocols');
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
})(require('buffer').Buffer);
