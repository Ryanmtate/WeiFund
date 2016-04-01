/* */ 
(function(Buffer, process) {
  var N = 1e7;
  var M = 10;
  var buffer = new Buffer(8);
  var _buffer = buffer.slice(0, 4);
  var varint = require('./index');
  var l = N;
  var invalid = 0;
  includeInvalid = !!process.env.INVALID;
  var start = Date.now();
  while (l--) {
    var int = Math.floor(Math.random() * 0x01fffffffffffff);
    varint.encode(int, buffer, 0);
    if (includeInvalid && !(l % M)) {
      if (undefined == varint.decode(_buffer, 0))
        invalid++;
    } else if (int !== varint.decode(buffer, 0))
      throw new Error('decode was incorrect');
  }
  console.log('decode&encode/ms, invalidDecodes');
  console.log(N / (Date.now() - start) + ',', invalid);
})(require('buffer').Buffer, require('process'));
