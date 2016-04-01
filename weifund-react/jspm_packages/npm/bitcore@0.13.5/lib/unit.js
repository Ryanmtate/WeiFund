/* */ 
'use strict';
var _ = require('lodash');
var errors = require('./errors/index');
var $ = require('./util/preconditions');
var UNITS = {
  'BTC': [1e8, 8],
  'mBTC': [1e5, 5],
  'uBTC': [1e2, 2],
  'bits': [1e2, 2],
  'satoshis': [1, 0]
};
function Unit(amount, code) {
  if (!(this instanceof Unit)) {
    return new Unit(amount, code);
  }
  if (_.isNumber(code)) {
    if (code <= 0) {
      throw new errors.Unit.InvalidRate(code);
    }
    amount = amount / code;
    code = Unit.BTC;
  }
  this._value = this._from(amount, code);
  var self = this;
  var defineAccesor = function(key) {
    Object.defineProperty(self, key, {
      get: function() {
        return self.to(key);
      },
      enumerable: true
    });
  };
  Object.keys(UNITS).forEach(defineAccesor);
}
Object.keys(UNITS).forEach(function(key) {
  Unit[key] = key;
});
Unit.fromObject = function fromObject(data) {
  $.checkArgument(_.isObject(data), 'Argument is expected to be an object');
  return new Unit(data.amount, data.code);
};
Unit.fromBTC = function(amount) {
  return new Unit(amount, Unit.BTC);
};
Unit.fromMilis = function(amount) {
  return new Unit(amount, Unit.mBTC);
};
Unit.fromMicros = Unit.fromBits = function(amount) {
  return new Unit(amount, Unit.bits);
};
Unit.fromSatoshis = function(amount) {
  return new Unit(amount, Unit.satoshis);
};
Unit.fromFiat = function(amount, rate) {
  return new Unit(amount, rate);
};
Unit.prototype._from = function(amount, code) {
  if (!UNITS[code]) {
    throw new errors.Unit.UnknownCode(code);
  }
  return parseInt((amount * UNITS[code][0]).toFixed());
};
Unit.prototype.to = function(code) {
  if (_.isNumber(code)) {
    if (code <= 0) {
      throw new errors.Unit.InvalidRate(code);
    }
    return parseFloat((this.BTC * code).toFixed(2));
  }
  if (!UNITS[code]) {
    throw new errors.Unit.UnknownCode(code);
  }
  var value = this._value / UNITS[code][0];
  return parseFloat(value.toFixed(UNITS[code][1]));
};
Unit.prototype.toBTC = function() {
  return this.to(Unit.BTC);
};
Unit.prototype.toMilis = function() {
  return this.to(Unit.mBTC);
};
Unit.prototype.toMicros = Unit.prototype.toBits = function() {
  return this.to(Unit.bits);
};
Unit.prototype.toSatoshis = function() {
  return this.to(Unit.satoshis);
};
Unit.prototype.atRate = function(rate) {
  return this.to(rate);
};
Unit.prototype.toString = function() {
  return this.satoshis + ' satoshis';
};
Unit.prototype.toObject = Unit.prototype.toJSON = function toObject() {
  return {
    amount: this.BTC,
    code: Unit.BTC
  };
};
Unit.prototype.inspect = function() {
  return '<Unit: ' + this.toString() + '>';
};
module.exports = Unit;
