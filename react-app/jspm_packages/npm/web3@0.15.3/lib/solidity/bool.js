/* */ 
var f = require('./formatters');
var SolidityType = require('./type');
var SolidityTypeBool = function() {
  this._inputFormatter = f.formatInputBool;
  this._outputFormatter = f.formatOutputBool;
};
SolidityTypeBool.prototype = new SolidityType({});
SolidityTypeBool.prototype.constructor = SolidityTypeBool;
SolidityTypeBool.prototype.isType = function(name) {
  return !!name.match(/^bool(\[([0-9]*)\])*$/);
};
SolidityTypeBool.prototype.staticPartLength = function(name) {
  return 32 * this.staticArrayLength(name);
};
module.exports = SolidityTypeBool;
