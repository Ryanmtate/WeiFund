/* */ 
"use strict";
var errors = require('./errors');
var XMLHttpRequest;
if (typeof Meteor !== 'undefined' && Meteor.isServer) {
  XMLHttpRequest = Npm.require('xmlhttprequest').XMLHttpRequest;
} else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
  XMLHttpRequest = window.XMLHttpRequest;
} else {
  XMLHttpRequest = require('../utils/browser-xhr').XMLHttpRequest;
}
var HttpProvider = function(host) {
  this.host = host || 'http://localhost:8545';
};
HttpProvider.prototype.prepareRequest = function(async) {
  var request = new XMLHttpRequest();
  request.open('POST', this.host, async);
  request.setRequestHeader('Content-Type', 'application/json');
  return request;
};
HttpProvider.prototype.send = function(payload) {
  var request = this.prepareRequest(false);
  try {
    request.send(JSON.stringify(payload));
  } catch (error) {
    throw errors.InvalidConnection(this.host);
  }
  var result = request.responseText;
  try {
    result = JSON.parse(result);
  } catch (e) {
    throw errors.InvalidResponse(request.responseText);
  }
  return result;
};
HttpProvider.prototype.sendAsync = function(payload, callback) {
  var request = this.prepareRequest(true);
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      var result = request.responseText;
      var error = null;
      try {
        result = JSON.parse(result);
      } catch (e) {
        error = errors.InvalidResponse(request.responseText);
      }
      callback(error, result);
    }
  };
  try {
    request.send(JSON.stringify(payload));
  } catch (error) {
    callback(errors.InvalidConnection(this.host));
  }
};
HttpProvider.prototype.isConnected = function() {
  try {
    this.send({
      id: 9999999999,
      jsonrpc: '2.0',
      method: 'net_listening',
      params: []
    });
    return true;
  } catch (e) {
    return false;
  }
};
module.exports = HttpProvider;
