/* */ 
(function(Buffer) {
  var sha512 = require('./sha512').sha512;
  var WordArray = require('./word-array');
  function HMAC(key) {
    if (!(this instanceof HMAC))
      return new HMAC(key);
    var hasher = this._hasher = new sha512.init();
    if (typeof key == 'string') {
      key = WordArray.fromBuffer(new Buffer(key, 'utf8'));
    }
    if (Buffer.isBuffer(key)) {
      key = WordArray.fromBuffer(key);
    }
    var hasherBlockSize = hasher.blockSize;
    var hasherBlockSizeBytes = hasherBlockSize * 4;
    if (key.sigBytes > hasherBlockSizeBytes) {
      key = hasher.finalize(key);
    }
    key.clamp();
    var oKey = this._oKey = key.clone();
    var iKey = this._iKey = key.clone();
    var oKeyWords = oKey.words;
    var iKeyWords = iKey.words;
    for (var i = 0; i < hasherBlockSize; i++) {
      oKeyWords[i] ^= 0x5c5c5c5c;
      iKeyWords[i] ^= 0x36363636;
    }
    oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
    this.reset();
  }
  HMAC.prototype.reset = function() {
    var hasher = this._hasher;
    hasher.reset();
    hasher.update(this._iKey);
  };
  HMAC.prototype.update = function(messageUpdate) {
    if (typeof messageUpdate == 'string')
      messageUpdate = WordArray.fromBuffer(new Buffer(messageUpdate, 'utf8'));
    if (Buffer.isBuffer(messageUpdate))
      messageUpdate = WordArray.fromBuffer(messageUpdate);
    this._hasher.update(messageUpdate);
    return this;
  };
  HMAC.prototype.finalize = function(messageUpdate) {
    if (typeof messageUpdate == 'string')
      messageUpdate = WordArray.fromBuffer(new Buffer(messageUpdate, 'utf8'));
    if (Buffer.isBuffer(messageUpdate))
      messageUpdate = WordArray.fromBuffer(messageUpdate);
    var hasher = this._hasher;
    var innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
    return hmac;
  };
  module.exports = HMAC;
})(require('buffer').Buffer);
