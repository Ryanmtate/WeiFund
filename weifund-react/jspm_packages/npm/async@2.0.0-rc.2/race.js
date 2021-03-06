/* */ 
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = race;

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _each = require('lodash/each');

var _each2 = _interopRequireDefault(_each);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _once = require('lodash/once');

var _once2 = _interopRequireDefault(_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function race(tasks, cb) {
    cb = (0, _once2.default)(cb || _noop2.default);
    if (!(0, _isArray2.default)(tasks)) return cb(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return cb();
    (0, _each2.default)(tasks, function (task) {
        task(cb);
    });
}
module.exports = exports['default'];