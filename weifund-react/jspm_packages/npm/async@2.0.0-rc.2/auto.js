/* */ 
(function(process) {
  'use strict';
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = function(tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
      callback = concurrency;
      concurrency = null;
    }
    callback = (0, _once2.default)(callback || _noop2.default);
    var keys = (0, _keys2.default)(tasks);
    var numTasks = keys.length;
    if (!numTasks) {
      return callback(null);
    }
    if (!concurrency) {
      concurrency = numTasks;
    }
    var results = {};
    var runningTasks = 0;
    var hasError = false;
    var listeners = {};
    var readyTasks = [];
    (0, _forOwn2.default)(tasks, function(task, key) {
      if (!(0, _isArray2.default)(task)) {
        enqueueTask(key, [task]);
        return;
      }
      var dependencies = task.slice(0, task.length - 1);
      var remainingDependencies = dependencies.length;
      checkForDeadlocks();
      function checkForDeadlocks() {
        var len = dependencies.length;
        var dep;
        while (len--) {
          if (!(dep = tasks[dependencies[len]])) {
            throw new Error('async.auto task `' + key + '` has non-existent dependency in ' + dependencies.join(', '));
          }
          if ((0, _isArray2.default)(dep) && (0, _indexOf2.default)(dep, key) >= 0) {
            throw new Error('async.auto task `' + key + '`Has cyclic dependencies');
          }
        }
      }
      (0, _arrayEach2.default)(dependencies, function(dependencyName) {
        addListener(dependencyName, function() {
          remainingDependencies--;
          if (remainingDependencies === 0) {
            enqueueTask(key, task);
          }
        });
      });
    });
    processQueue();
    function enqueueTask(key, task) {
      readyTasks.push(function() {
        runTask(key, task);
      });
    }
    function processQueue() {
      if (readyTasks.length === 0 && runningTasks === 0) {
        return callback(null, results);
      }
      while (readyTasks.length && runningTasks < concurrency) {
        var run = readyTasks.shift();
        run();
      }
    }
    function addListener(taskName, fn) {
      var taskListeners = listeners[taskName];
      if (!taskListeners) {
        taskListeners = listeners[taskName] = [];
      }
      taskListeners.push(fn);
    }
    function taskComplete(taskName) {
      var taskListeners = listeners[taskName] || [];
      (0, _arrayEach2.default)(taskListeners, function(fn) {
        fn();
      });
      processQueue();
    }
    function runTask(key, task) {
      if (hasError)
        return;
      var taskCallback = (0, _onlyOnce2.default)((0, _rest2.default)(function(err, args) {
        runningTasks--;
        if (args.length <= 1) {
          args = args[0];
        }
        if (err) {
          var safeResults = {};
          (0, _forOwn2.default)(results, function(val, rkey) {
            safeResults[rkey] = val;
          });
          safeResults[key] = args;
          hasError = true;
          listeners = [];
          callback(err, safeResults);
        } else {
          results[key] = args;
          taskComplete(key);
        }
      }));
      runningTasks++;
      var taskFn = task[task.length - 1];
      if (task.length > 1) {
        taskFn(results, taskCallback);
      } else {
        taskFn(taskCallback);
      }
    }
  };
  var _arrayEach = require('lodash/_arrayEach');
  var _arrayEach2 = _interopRequireDefault(_arrayEach);
  var _forOwn = require('lodash/forOwn');
  var _forOwn2 = _interopRequireDefault(_forOwn);
  var _indexOf = require('lodash/indexOf');
  var _indexOf2 = _interopRequireDefault(_indexOf);
  var _isArray = require('lodash/isArray');
  var _isArray2 = _interopRequireDefault(_isArray);
  var _keys = require('lodash/keys');
  var _keys2 = _interopRequireDefault(_keys);
  var _noop = require('lodash/noop');
  var _noop2 = _interopRequireDefault(_noop);
  var _once = require('lodash/once');
  var _once2 = _interopRequireDefault(_once);
  var _rest = require('lodash/rest');
  var _rest2 = _interopRequireDefault(_rest);
  var _onlyOnce = require('./internal/onlyOnce');
  var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  module.exports = exports['default'];
})(require('process'));
