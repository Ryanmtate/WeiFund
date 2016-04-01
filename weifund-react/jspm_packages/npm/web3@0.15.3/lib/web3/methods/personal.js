/* */ 
"use strict";
var Method = require('../method');
var Property = require('../property');
function Personal(web3) {
  this._requestManager = web3._requestManager;
  var self = this;
  methods().forEach(function(method) {
    method.attachToObject(self);
    method.setRequestManager(self._requestManager);
  });
  properties().forEach(function(p) {
    p.attachToObject(self);
    p.setRequestManager(self._requestManager);
  });
}
var methods = function() {
  var newAccount = new Method({
    name: 'newAccount',
    call: 'personal_newAccount',
    params: 1,
    inputFormatter: [null]
  });
  var unlockAccount = new Method({
    name: 'unlockAccount',
    call: 'personal_unlockAccount',
    params: 3,
    inputFormatter: [null, null, null]
  });
  return [newAccount, unlockAccount];
};
var properties = function() {
  return [new Property({
    name: 'listAccounts',
    getter: 'personal_listAccounts'
  })];
};
module.exports = Personal;
