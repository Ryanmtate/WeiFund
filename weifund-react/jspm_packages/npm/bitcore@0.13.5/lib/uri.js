/* */ 
'use strict';
var _ = require('lodash');
var URL = require('url');
var Address = require('./address');
var Unit = require('./unit');
var URI = function(data, knownParams) {
  if (!(this instanceof URI)) {
    return new URI(data, knownParams);
  }
  this.extras = {};
  this.knownParams = knownParams || [];
  this.address = this.network = this.amount = this.message = null;
  if (typeof(data) === 'string') {
    var params = URI.parse(data);
    if (params.amount) {
      params.amount = this._parseAmount(params.amount);
    }
    this._fromObject(params);
  } else if (typeof(data) === 'object') {
    this._fromObject(data);
  } else {
    throw new TypeError('Unrecognized data format.');
  }
};
URI.fromString = function fromString(str) {
  if (typeof(str) !== 'string') {
    throw new TypeError('Expected a string');
  }
  return new URI(str);
};
URI.fromObject = function fromObject(json) {
  return new URI(json);
};
URI.isValid = function(arg, knownParams) {
  try {
    new URI(arg, knownParams);
  } catch (err) {
    return false;
  }
  return true;
};
URI.parse = function(uri) {
  var info = URL.parse(uri, true);
  if (info.protocol !== 'bitcoin:') {
    throw new TypeError('Invalid bitcoin URI');
  }
  var group = /[^:]*:\/?\/?([^?]*)/.exec(uri);
  info.query.address = group && group[1] || undefined;
  return info.query;
};
URI.Members = ['address', 'amount', 'message', 'label', 'r'];
URI.prototype._fromObject = function(obj) {
  if (!Address.isValid(obj.address)) {
    throw new TypeError('Invalid bitcoin address');
  }
  this.address = new Address(obj.address);
  this.network = this.address.network;
  this.amount = obj.amount;
  for (var key in obj) {
    if (key === 'address' || key === 'amount') {
      continue;
    }
    if (/^req-/.exec(key) && this.knownParams.indexOf(key) === -1) {
      throw Error('Unknown required argument ' + key);
    }
    var destination = URI.Members.indexOf(key) > -1 ? this : this.extras;
    destination[key] = obj[key];
  }
};
URI.prototype._parseAmount = function(amount) {
  amount = Number(amount);
  if (isNaN(amount)) {
    throw new TypeError('Invalid amount');
  }
  return Unit.fromBTC(amount).toSatoshis();
};
URI.prototype.toObject = URI.prototype.toJSON = function toObject() {
  var json = {};
  for (var i = 0; i < URI.Members.length; i++) {
    var m = URI.Members[i];
    if (this.hasOwnProperty(m) && typeof(this[m]) !== 'undefined') {
      json[m] = this[m].toString();
    }
  }
  _.extend(json, this.extras);
  return json;
};
URI.prototype.toString = function() {
  var query = {};
  if (this.amount) {
    query.amount = Unit.fromSatoshis(this.amount).toBTC();
  }
  if (this.message) {
    query.message = this.message;
  }
  if (this.label) {
    query.label = this.label;
  }
  if (this.r) {
    query.r = this.r;
  }
  _.extend(query, this.extras);
  return URL.format({
    protocol: 'bitcoin:',
    host: this.address,
    query: query
  });
};
URI.prototype.inspect = function() {
  return '<URI: ' + this.toString() + '>';
};
module.exports = URI;
