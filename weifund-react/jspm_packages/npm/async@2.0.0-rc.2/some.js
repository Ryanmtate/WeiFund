/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _someLimit = require('./someLimit');
var _someLimit2 = _interopRequireDefault(_someLimit);
var _doLimit = require('./internal/doLimit');
var _doLimit2 = _interopRequireDefault(_doLimit);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = (0, _doLimit2.default)(_someLimit2.default, Infinity);
module.exports = exports['default'];
