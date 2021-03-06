/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
exports.default = autoInject;
var _auto = require('./auto');
var _auto2 = _interopRequireDefault(_auto);
var _forOwn = require('lodash/forOwn');
var _forOwn2 = _interopRequireDefault(_forOwn);
var _arrayMap = require('lodash/_arrayMap');
var _arrayMap2 = _interopRequireDefault(_arrayMap);
var _baseClone = require('lodash/_baseClone');
var _baseClone2 = _interopRequireDefault(_baseClone);
var _isArray = require('lodash/isArray');
var _isArray2 = _interopRequireDefault(_isArray);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
var argsRegex = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
function parseParams(func) {
  return func.toString().match(argsRegex)[1].split(/\s*\,\s*/);
}
function autoInject(tasks, callback) {
  var newTasks = {};
  (0, _forOwn2.default)(tasks, function(taskFn, key) {
    var params;
    if ((0, _isArray2.default)(taskFn)) {
      params = (0, _baseClone2.default)(taskFn);
      taskFn = params.pop();
      newTasks[key] = params.concat(newTask);
    } else if (taskFn.length === 0) {
      throw new Error("autoInject task functions require explicit parameters.");
    } else if (taskFn.length === 1) {
      newTasks[key] = taskFn;
    } else {
      params = parseParams(taskFn);
      params.pop();
      newTasks[key] = params.concat(newTask);
    }
    function newTask(results, taskCb) {
      var newArgs = (0, _arrayMap2.default)(params, function(name) {
        return results[name];
      });
      newArgs.push(taskCb);
      taskFn.apply(null, newArgs);
    }
  });
  (0, _auto2.default)(newTasks, callback);
}
module.exports = exports['default'];
