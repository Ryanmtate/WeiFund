/* */ 
(function(Buffer, process) {
  module.exports = WordArray;
  function WordArray(words, sigBytes) {
    this.words = words || [];
    if (sigBytes != undefined) {
      this.sigBytes = sigBytes;
    } else {
      this.sigBytes = this.words.length * 4;
    }
  }
  WordArray.prototype.concat = function(wordArray) {
    if (Buffer.isBuffer(wordArray))
      wordArray = WordArray.fromBuffer(wordArray);
    var thisWords = this.words;
    var thatWords = wordArray.words;
    var thisSigBytes = this.sigBytes;
    var thatSigBytes = wordArray.sigBytes;
    this.clamp();
    if (thisSigBytes % 4) {
      for (var i = 0; i < thatSigBytes; i++) {
        var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
      }
    } else if (thatWords.length > 0xffff) {
      for (var i = 0; i < thatSigBytes; i += 4) {
        thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
      }
    } else {
      thisWords.push.apply(thisWords, thatWords);
    }
    this.sigBytes += thatSigBytes;
    return this;
  };
  WordArray.prototype.clamp = function() {
    var words = this.words;
    var sigBytes = this.sigBytes;
    words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    words.length = Math.ceil(sigBytes / 4);
  };
  WordArray.prototype.clone = function() {
    var wa = new WordArray(this.words.slice(0));
    return wa;
  };
  WordArray.prototype.toBuffer = function() {
    var buf = new Buffer(this.words.length * 4);
    for (var i = 0; i < this.words.length; ++i) {
      var w = this.words[i];
      buf.writeUInt32BE(w, i * 4, true);
    }
    return buf;
  };
  WordArray.fromBuffer = function(buf) {
    var len = buf.length;
    var dif = len % 4;
    var w = [];
    if (!process.browser) {
      for (var i = 0; i < len; i += 4) {
        var n = buf.readUInt32BE(i, true);
        w.push(n);
      }
      return new WordArray(w, buf.length);
    } else {
      for (var i = 0; i < len - dif; i += 4) {
        var n = buf.readUInt32BE(i);
        w.push(n);
      }
      var lw = 0x0;
      var off = len - dif;
      for (var j = 0; j < dif; j += 1) {
        lw |= (buf.readUInt8(off + j) << ((3 - j) * 8));
      }
      if (dif > 0)
        w.push(lw);
      return new WordArray(w, buf.length);
    }
  };
})(require('buffer').Buffer, require('process'));
