/* */ 
(function(Buffer, process) {
  var WordArray = require('./word-array');
  var Base = (function() {
    function F() {}
    return {
      extend: function(overrides) {
        F.prototype = this;
        var subtype = new F();
        if (overrides) {
          subtype.mixIn(overrides);
        }
        if (!subtype.hasOwnProperty('init')) {
          subtype.init = function() {
            subtype.$super.init.apply(this, arguments);
          };
        }
        subtype.init.prototype = subtype;
        subtype.$super = this;
        return subtype;
      },
      create: function() {
        var instance = this.extend();
        instance.init.apply(instance, arguments);
        return instance;
      },
      init: function() {},
      mixIn: function(properties) {
        for (var propertyName in properties) {
          if (properties.hasOwnProperty(propertyName)) {
            this[propertyName] = properties[propertyName];
          }
        }
        if (properties.hasOwnProperty('toString')) {
          this.toString = properties.toString;
        }
      },
      clone: function() {
        return this.init.prototype.extend(this);
      }
    };
  }());
  var BufferedBlockAlgorithm = Base.extend({
    reset: function() {
      this._data = new WordArray();
      this._nDataBytes = 0;
    },
    _append: function(data) {
      if (Buffer.isBuffer(data)) {
        data = WordArray.fromBuffer(data);
      }
      this._data.concat(data);
      this._nDataBytes += data.sigBytes;
    },
    _process: function(doFlush) {
      var data = this._data;
      var dataWords = data.words;
      var dataSigBytes = data.sigBytes;
      var blockSize = this.blockSize;
      var blockSizeBytes = blockSize * 4;
      var nBlocksReady = dataSigBytes / blockSizeBytes;
      if (doFlush) {
        nBlocksReady = Math.ceil(nBlocksReady);
      } else {
        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
      }
      var nWordsReady = nBlocksReady * blockSize;
      var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
      if (nWordsReady) {
        for (var offset = 0; offset < nWordsReady; offset += blockSize) {
          this._doProcessBlock(dataWords, offset);
        }
        var processedWords = dataWords.splice(0, nWordsReady);
        data.sigBytes -= nBytesReady;
      }
      return new WordArray(processedWords, nBytesReady);
    },
    clone: function() {
      var clone = Base.clone.call(this);
      clone._data = this._data.clone();
      return clone;
    },
    _minBufferSize: 0
  });
  var Hasher = BufferedBlockAlgorithm.extend({
    cfg: Base.extend(),
    init: function(cfg) {
      this.cfg = this.cfg.extend(cfg);
      this.reset();
    },
    reset: function() {
      BufferedBlockAlgorithm.reset.call(this);
      this._doReset();
    },
    update: function(messageUpdate) {
      if (typeof messageUpdate == 'string')
        messageUpdate = WordArray.fromBuffer(new Buffer(messageUpdate, 'utf8'));
      if (Buffer.isBuffer(messageUpdate))
        messageUpdate = WordArray.fromBuffer(messageUpdate);
      this._append(messageUpdate);
      this._process();
      return this;
    },
    finalize: function(messageUpdate) {
      if (typeof messageUpdate == 'string')
        messageUpdate = WordArray.fromBuffer(new Buffer(messageUpdate, 'utf8'));
      if (Buffer.isBuffer(messageUpdate))
        messageUpdate = WordArray.fromBuffer(messageUpdate);
      if (messageUpdate) {
        this._append(messageUpdate);
      }
      var hash = this._doFinalize();
      return hash.toBuffer();
    },
    blockSize: 512 / 32,
    _createHelper: function(hasher) {
      return function(message, cfg) {
        return new hasher.init(cfg).finalize(message);
      };
    }
  });
  module.exports.Hasher = Hasher;
})(require('buffer').Buffer, require('process'));
