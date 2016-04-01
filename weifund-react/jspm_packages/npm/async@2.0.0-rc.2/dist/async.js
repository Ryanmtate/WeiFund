/* */ 
"format cjs";
(function(Buffer, process) {
  (function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (factory((global.async = global.async || {})));
  }(this, function(exports) {
    'use strict';
    function apply(func, thisArg, args) {
      var length = args.length;
      switch (length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    var funcTag = '[object Function]';
    var genTag = '[object GeneratorFunction]';
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    var NAN = 0 / 0;
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (isObject(value)) {
        var other = isFunction(value.valueOf) ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
    }
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 1.7976931348623157e+308;
    function toInteger(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      var remainder = value % 1;
      return value === value ? (remainder ? value - remainder : value) : 0;
    }
    var FUNC_ERROR_TEXT = 'Expected a function';
    var nativeMax = Math.max;
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        switch (start) {
          case 0:
            return func.call(this, array);
          case 1:
            return func.call(this, args[0], array);
          case 2:
            return func.call(this, args[0], args[1], array);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    function initialParams(fn) {
      return rest(function(args) {
        var callback = args.pop();
        fn(args, callback);
      });
    }
    function applyEach$1(eachfn) {
      return rest(function(fns, args) {
        var go = initialParams(function(args, callback) {
          var that = this;
          return eachfn(fns, function(fn, _, cb) {
            fn.apply(that, args.concat([cb]));
          }, callback);
        });
        if (args.length) {
          return go.apply(this, args);
        } else {
          return go;
        }
      });
    }
    function noop() {}
    var FUNC_ERROR_TEXT$1 = 'Expected a function';
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }
    function once(func) {
      return before(2, func);
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }
    var getLength = baseProperty('length');
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isArrayLike(value) {
      return value != null && isLength(getLength(value)) && !isFunction(value);
    }
    var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;
    function getIterator(coll) {
      return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
    }
    var objectProto$1 = Object.prototype;
    var hasOwnProperty = objectProto$1.hasOwnProperty;
    var getPrototypeOf = Object.getPrototypeOf;
    function baseHas(object, key) {
      return hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
    }
    var nativeKeys = Object.keys;
    function baseKeys(object) {
      return nativeKeys(Object(object));
    }
    function baseTimes(n, iteratee) {
      var index = -1,
          result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var argsTag = '[object Arguments]';
    var objectProto$2 = Object.prototype;
    var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
    var objectToString$1 = objectProto$2.toString;
    var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString$1.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    var stringTag = '[object String]';
    var objectProto$3 = Object.prototype;
    var objectToString$2 = objectProto$3.toString;
    function isString(value) {
      return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString$2.call(value) == stringTag);
    }
    function indexKeys(object) {
      var length = object ? object.length : undefined;
      if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
        return baseTimes(length, String);
      }
      return null;
    }
    var MAX_SAFE_INTEGER$1 = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER$1 : length;
      return value > -1 && value % 1 == 0 && value < length;
    }
    var objectProto$4 = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;
      return value === proto;
    }
    function keys(object) {
      var isProto = isPrototype(object);
      if (!(isProto || isArrayLike(object))) {
        return baseKeys(object);
      }
      var indexes = indexKeys(object),
          skipIndexes = !!indexes,
          result = indexes || [],
          length = result.length;
      for (var key in object) {
        if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
          result.push(key);
        }
      }
      return result;
    }
    function iterator(coll) {
      var i = -1;
      var len;
      if (isArrayLike(coll)) {
        len = coll.length;
        return function next() {
          i++;
          return i < len ? {
            value: coll[i],
            key: i
          } : null;
        };
      }
      var iterate = getIterator(coll);
      if (iterate) {
        return function next() {
          var item = iterate.next();
          if (item.done)
            return null;
          i++;
          return {
            value: item.value,
            key: i
          };
        };
      }
      var okeys = keys(coll);
      len = okeys.length;
      return function next() {
        i++;
        var key = okeys[i];
        return i < len ? {
          value: coll[key],
          key: key
        } : null;
      };
    }
    function onlyOnce(fn) {
      return function() {
        if (fn === null)
          throw new Error("Callback was already called.");
        fn.apply(this, arguments);
        fn = null;
      };
    }
    function _eachOfLimit(limit) {
      return function(obj, iteratee, callback) {
        callback = once(callback || noop);
        obj = obj || [];
        var nextElem = iterator(obj);
        if (limit <= 0) {
          return callback(null);
        }
        var done = false;
        var running = 0;
        var errored = false;
        (function replenish() {
          if (done && running <= 0) {
            return callback(null);
          }
          while (running < limit && !errored) {
            var elem = nextElem();
            if (elem === null) {
              done = true;
              if (running <= 0) {
                callback(null);
              }
              return;
            }
            running += 1;
            iteratee(elem.value, elem.key, onlyOnce(function(err) {
              running -= 1;
              if (err) {
                callback(err);
                errored = true;
              } else {
                replenish();
              }
            }));
          }
        })();
      };
    }
    function eachOfLimit(obj, limit, iteratee, cb) {
      _eachOfLimit(limit)(obj, iteratee, cb);
    }
    function doLimit(fn, limit) {
      return function(iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
      };
    }
    var eachOf = doLimit(eachOfLimit, Infinity);
    var applyEach = applyEach$1(eachOf);
    var eachOfSeries = doLimit(eachOfLimit, 1);
    var applyEachSeries = applyEach$1(eachOfSeries);
    var apply$1 = rest(function(fn, args) {
      return rest(function(callArgs) {
        return fn.apply(null, args.concat(callArgs));
      });
    });
    function asyncify(func) {
      return initialParams(function(args, callback) {
        var result;
        try {
          result = func.apply(this, args);
        } catch (e) {
          return callback(e);
        }
        if (isObject(result) && typeof result.then === 'function') {
          result.then(function(value) {
            callback(null, value);
          })['catch'](function(err) {
            callback(err.message ? err : new Error(err));
          });
        } else {
          callback(null, result);
        }
      });
    }
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function identity(value) {
      return value;
    }
    function baseCastFunction(value) {
      return typeof value == 'function' ? value : identity;
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    var baseFor = createBaseFor();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, baseCastFunction(iteratee));
    }
    function indexOfNaN(array, fromIndex, fromRight) {
      var length = array.length,
          index = fromIndex + (fromRight ? 0 : -1);
      while ((fromRight ? index-- : ++index < length)) {
        var other = array[index];
        if (other !== other) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return indexOfNaN(array, fromIndex);
      }
      var index = fromIndex - 1,
          length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    var nativeMax$1 = Math.max;
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      fromIndex = toInteger(fromIndex);
      if (fromIndex < 0) {
        fromIndex = nativeMax$1(length + fromIndex, 0);
      }
      return baseIndexOf(array, value, fromIndex);
    }
    function auto(tasks, concurrency, callback) {
      if (typeof concurrency === 'function') {
        callback = concurrency;
        concurrency = null;
      }
      callback = once(callback || noop);
      var keys$$ = keys(tasks);
      var numTasks = keys$$.length;
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
      forOwn(tasks, function(task, key) {
        if (!isArray(task)) {
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
            if (isArray(dep) && indexOf(dep, key) >= 0) {
              throw new Error('async.auto task `' + key + '`Has cyclic dependencies');
            }
          }
        }
        arrayEach(dependencies, function(dependencyName) {
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
        arrayEach(taskListeners, function(fn) {
          fn();
        });
        processQueue();
      }
      function runTask(key, task) {
        if (hasError)
          return;
        var taskCallback = onlyOnce(rest(function(err, args) {
          runningTasks--;
          if (args.length <= 1) {
            args = args[0];
          }
          if (err) {
            var safeResults = {};
            forOwn(results, function(val, rkey) {
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
    }
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function stackClear() {
      this.__data__ = {
        'array': [],
        'map': null
      };
    }
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function assocDelete(array, key) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = array.length - 1;
      if (index == lastIndex) {
        array.pop();
      } else {
        splice.call(array, index, 1);
      }
      return true;
    }
    function stackDelete(key) {
      var data = this.__data__,
          array = data.array;
      return array ? assocDelete(array, key) : data.map['delete'](key);
    }
    function assocGet(array, key) {
      var index = assocIndexOf(array, key);
      return index < 0 ? undefined : array[index][1];
    }
    function stackGet(key) {
      var data = this.__data__,
          array = data.array;
      return array ? assocGet(array, key) : data.map.get(key);
    }
    function assocHas(array, key) {
      return assocIndexOf(array, key) > -1;
    }
    function stackHas(key) {
      var data = this.__data__,
          array = data.array;
      return array ? assocHas(array, key) : data.map.has(key);
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }
      return result;
    }
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var objectProto$6 = Object.prototype;
    var funcToString = Function.prototype.toString;
    var hasOwnProperty$2 = objectProto$6.hasOwnProperty;
    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (isFunction(value)) {
        return reIsNative.test(funcToString.call(value));
      }
      return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
    }
    function getNative(object, key) {
      var value = object[key];
      return isNative(value) ? value : undefined;
    }
    var nativeCreate = getNative(Object, 'create');
    var objectProto$5 = Object.prototype;
    function Hash() {}
    Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto$5;
    function checkGlobal(value) {
      return (value && value.Object === Object) ? value : null;
    }
    var objectTypes = {
      'function': true,
      'object': true
    };
    var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
    var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
    var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
    var freeSelf = checkGlobal(objectTypes[typeof self] && self);
    var freeWindow = checkGlobal(objectTypes[typeof window] && window);
    var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
    var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
    var Map = getNative(root, 'Map');
    function mapClear() {
      this.__data__ = {
        'hash': new Hash,
        'map': Map ? new Map : [],
        'string': new Hash
      };
    }
    var objectProto$7 = Object.prototype;
    var hasOwnProperty$3 = objectProto$7.hasOwnProperty;
    function hashHas(hash, key) {
      return nativeCreate ? hash[key] !== undefined : hasOwnProperty$3.call(hash, key);
    }
    function hashDelete(hash, key) {
      return hashHas(hash, key) && delete hash[key];
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == 'number' || type == 'boolean' || (type == 'string' && value != '__proto__') || value == null;
    }
    function mapDelete(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map['delete'](key) : assocDelete(data.map, key);
    }
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    var objectProto$8 = Object.prototype;
    var hasOwnProperty$4 = objectProto$8.hasOwnProperty;
    function hashGet(hash, key) {
      if (nativeCreate) {
        var result = hash[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty$4.call(hash, key) ? hash[key] : undefined;
    }
    function mapGet(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashGet(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.get(key) : assocGet(data.map, key);
    }
    function mapHas(key) {
      var data = this.__data__;
      if (isKeyable(key)) {
        return hashHas(typeof key == 'string' ? data.string : data.hash, key);
      }
      return Map ? data.map.has(key) : assocHas(data.map, key);
    }
    function assocSet(array, key, value) {
      var index = assocIndexOf(array, key);
      if (index < 0) {
        array.push([key, value]);
      } else {
        array[index][1] = value;
      }
    }
    var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
    function hashSet(hash, key, value) {
      hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    }
    function mapSet(key, value) {
      var data = this.__data__;
      if (isKeyable(key)) {
        hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
      } else if (Map) {
        data.map.set(key, value);
      } else {
        assocSet(data.map, key, value);
      }
      return this;
    }
    function MapCache(values) {
      var index = -1,
          length = values ? values.length : 0;
      this.clear();
      while (++index < length) {
        var entry = values[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapClear;
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__,
          array = data.array;
      if (array) {
        if (array.length < (LARGE_ARRAY_SIZE - 1)) {
          assocSet(array, key, value);
        } else {
          data.array = null;
          data.map = new MapCache(array);
        }
      }
      var map = data.map;
      if (map) {
        map.set(key, value);
      }
      return this;
    }
    function Stack(values) {
      var index = -1,
          length = values ? values.length : 0;
      this.clear();
      while (++index < length) {
        var entry = values[index];
        this.set(entry[0], entry[1]);
      }
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    var objectProto$9 = Object.prototype;
    var hasOwnProperty$5 = objectProto$9.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
        object[key] = value;
      }
    }
    function copyObjectWith(source, props, object, customizer) {
      object || (object = {});
      var index = -1,
          length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
        assignValue(object, key, newValue);
      }
      return object;
    }
    function copyObject(source, props, object) {
      return copyObjectWith(source, props, object);
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function copyArray(source, array) {
      var index = -1,
          length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getSymbols = getOwnPropertySymbols || function() {
      return [];
    };
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    var Set = getNative(root, 'Set');
    var WeakMap = getNative(root, 'WeakMap');
    var mapTag$1 = '[object Map]';
    var objectTag$1 = '[object Object]';
    var setTag$1 = '[object Set]';
    var weakMapTag$1 = '[object WeakMap]';
    var objectProto$10 = Object.prototype;
    var funcToString$1 = Function.prototype.toString;
    var objectToString$3 = objectProto$10.toString;
    var mapCtorString = Map ? funcToString$1.call(Map) : '';
    var setCtorString = Set ? funcToString$1.call(Set) : '';
    var weakMapCtorString = WeakMap ? funcToString$1.call(WeakMap) : '';
    function getTag(value) {
      return objectToString$3.call(value);
    }
    if ((Map && getTag(new Map) != mapTag$1) || (Set && getTag(new Set) != setTag$1) || (WeakMap && getTag(new WeakMap) != weakMapTag$1)) {
      getTag = function(value) {
        var result = objectToString$3.call(value),
            Ctor = result == objectTag$1 ? value.constructor : null,
            ctorString = typeof Ctor == 'function' ? funcToString$1.call(Ctor) : '';
        if (ctorString) {
          switch (ctorString) {
            case mapCtorString:
              return mapTag$1;
            case setCtorString:
              return setTag$1;
            case weakMapCtorString:
              return weakMapTag$1;
          }
        }
        return result;
      };
    }
    var getTag$1 = getTag;
    var objectProto$11 = Object.prototype;
    var hasOwnProperty$6 = objectProto$11.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);
      if (length && typeof array[0] == 'string' && hasOwnProperty$6.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    var Uint8Array = root.Uint8Array;
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1,
          length = array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function mapToArray(map) {
      var index = -1,
          result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function cloneMap(map) {
      return arrayReduce(mapToArray(map), addMapEntry, new map.constructor);
    }
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function setToArray(set) {
      var index = -1,
          result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function cloneSet(set) {
      return arrayReduce(setToArray(set), addSetEntry, new set.constructor);
    }
    var Symbol$1 = root.Symbol;
    var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    var boolTag$1 = '[object Boolean]';
    var dateTag$1 = '[object Date]';
    var mapTag$2 = '[object Map]';
    var numberTag$1 = '[object Number]';
    var regexpTag$1 = '[object RegExp]';
    var setTag$2 = '[object Set]';
    var stringTag$2 = '[object String]';
    var symbolTag$1 = '[object Symbol]';
    var arrayBufferTag$1 = '[object ArrayBuffer]';
    var float32Tag$1 = '[object Float32Array]';
    var float64Tag$1 = '[object Float64Array]';
    var int8Tag$1 = '[object Int8Array]';
    var int16Tag$1 = '[object Int16Array]';
    var int32Tag$1 = '[object Int32Array]';
    var uint8Tag$1 = '[object Uint8Array]';
    var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
    var uint16Tag$1 = '[object Uint16Array]';
    var uint32Tag$1 = '[object Uint32Array]';
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag$1:
          return cloneArrayBuffer(object);
        case boolTag$1:
        case dateTag$1:
          return new Ctor(+object);
        case float32Tag$1:
        case float64Tag$1:
        case int8Tag$1:
        case int16Tag$1:
        case int32Tag$1:
        case uint8Tag$1:
        case uint8ClampedTag$1:
        case uint16Tag$1:
        case uint32Tag$1:
          return cloneTypedArray(object, isDeep);
        case mapTag$2:
          return cloneMap(object);
        case numberTag$1:
        case stringTag$2:
          return new Ctor(object);
        case regexpTag$1:
          return cloneRegExp(object);
        case setTag$2:
          return cloneSet(object);
        case symbolTag$1:
          return cloneSymbol(object);
      }
    }
    var objectCreate = Object.create;
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    var getPrototypeOf$1 = Object.getPrototypeOf;
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object)) ? baseCreate(getPrototypeOf$1(object)) : {};
    }
    function constant(value) {
      return function() {
        return value;
      };
    }
    var objectTypes$1 = {
      'function': true,
      'object': true
    };
    var freeExports$1 = (objectTypes$1[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
    var freeModule$1 = (objectTypes$1[typeof module] && module && !module.nodeType) ? module : undefined;
    var moduleExports = (freeModule$1 && freeModule$1.exports === freeExports$1) ? freeExports$1 : undefined;
    var Buffer = moduleExports ? root.Buffer : undefined;
    var isBuffer = !Buffer ? constant(false) : function(value) {
      return value instanceof Buffer;
    };
    var argsTag$1 = '[object Arguments]';
    var arrayTag = '[object Array]';
    var boolTag = '[object Boolean]';
    var dateTag = '[object Date]';
    var errorTag = '[object Error]';
    var funcTag$1 = '[object Function]';
    var genTag$1 = '[object GeneratorFunction]';
    var mapTag = '[object Map]';
    var numberTag = '[object Number]';
    var objectTag = '[object Object]';
    var regexpTag = '[object RegExp]';
    var setTag = '[object Set]';
    var stringTag$1 = '[object String]';
    var symbolTag = '[object Symbol]';
    var weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]';
    var float32Tag = '[object Float32Array]';
    var float64Tag = '[object Float64Array]';
    var int8Tag = '[object Int8Array]';
    var int16Tag = '[object Int16Array]';
    var int32Tag = '[object Int32Array]';
    var uint8Tag = '[object Uint8Array]';
    var uint8ClampedTag = '[object Uint8ClampedArray]';
    var uint16Tag = '[object Uint16Array]';
    var uint32Tag = '[object Uint32Array]';
    var cloneableTags = {};
    cloneableTags[argsTag$1] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag$1] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag$1] = cloneableTags[weakMapTag] = false;
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag$1(value),
            isFunc = tag == funcTag$1 || tag == genTag$1;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag$1 || (isFunc && !object)) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            result = baseAssign(result, value);
            return isFull ? copySymbols(value, result) : result;
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
        assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
      });
      return (isFull && !isArr) ? copySymbols(value, result) : result;
    }
    var argsRegex = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
    function parseParams(func) {
      return func.toString().match(argsRegex)[1].split(/\s*\,\s*/);
    }
    function autoInject(tasks, callback) {
      var newTasks = {};
      forOwn(tasks, function(taskFn, key) {
        var params;
        if (isArray(taskFn)) {
          params = baseClone(taskFn);
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
          var newArgs = arrayMap(params, function(name) {
            return results[name];
          });
          newArgs.push(taskCb);
          taskFn.apply(null, newArgs);
        }
      });
      auto(newTasks, callback);
    }
    var _setImmediate = typeof setImmediate === 'function' && setImmediate;
    var _defer;
    if (_setImmediate) {
      _defer = _setImmediate;
    } else if (typeof process === 'object' && typeof process.nextTick === 'function') {
      _defer = process.nextTick;
    } else {
      _defer = function(fn) {
        setTimeout(fn, 0);
      };
    }
    var setImmediate$1 = rest(function(fn, args) {
      _defer(function() {
        fn.apply(null, args);
      });
    });
    function queue(worker, concurrency, payload) {
      if (concurrency == null) {
        concurrency = 1;
      } else if (concurrency === 0) {
        throw new Error('Concurrency must not be zero');
      }
      function _insert(q, data, pos, callback) {
        if (callback != null && typeof callback !== 'function') {
          throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
          data = [data];
        }
        if (data.length === 0 && q.idle()) {
          return setImmediate$1(function() {
            q.drain();
          });
        }
        arrayEach(data, function(task) {
          var item = {
            data: task,
            callback: callback || noop
          };
          if (pos) {
            q.tasks.unshift(item);
          } else {
            q.tasks.push(item);
          }
        });
        setImmediate$1(q.process);
      }
      function _next(q, tasks) {
        return function() {
          workers -= 1;
          var removed = false;
          var args = arguments;
          arrayEach(tasks, function(task) {
            arrayEach(workersList, function(worker, index) {
              if (worker === task && !removed) {
                workersList.splice(index, 1);
                removed = true;
              }
            });
            task.callback.apply(task, args);
          });
          if (workers <= q.concurrency - q.buffer) {
            q.unsaturated();
          }
          if (q.tasks.length + workers === 0) {
            q.drain();
          }
          q.process();
        };
      }
      var workers = 0;
      var workersList = [];
      var q = {
        tasks: [],
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated: noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        started: false,
        paused: false,
        push: function(data, callback) {
          _insert(q, data, false, callback);
        },
        kill: function() {
          q.drain = noop;
          q.tasks = [];
        },
        unshift: function(data, callback) {
          _insert(q, data, true, callback);
        },
        process: function() {
          while (!q.paused && workers < q.concurrency && q.tasks.length) {
            var tasks = q.payload ? q.tasks.splice(0, q.payload) : q.tasks.splice(0, q.tasks.length);
            var data = arrayMap(tasks, baseProperty('data'));
            if (q.tasks.length === 0) {
              q.empty();
            }
            workers += 1;
            workersList.push(tasks[0]);
            if (workers === q.concurrency) {
              q.saturated();
            }
            var cb = onlyOnce(_next(q, tasks));
            worker(data, cb);
          }
        },
        length: function() {
          return q.tasks.length;
        },
        running: function() {
          return workers;
        },
        workersList: function() {
          return workersList;
        },
        idle: function() {
          return q.tasks.length + workers === 0;
        },
        pause: function() {
          q.paused = true;
        },
        resume: function() {
          if (q.paused === false) {
            return;
          }
          q.paused = false;
          var resumeCount = Math.min(q.concurrency, q.tasks.length);
          for (var w = 1; w <= resumeCount; w++) {
            setImmediate$1(q.process);
          }
        }
      };
      return q;
    }
    function cargo(worker, payload) {
      return queue(worker, 1, payload);
    }
    function reduce(arr, memo, iteratee, cb) {
      eachOfSeries(arr, function(x, i, cb) {
        iteratee(memo, x, function(err, v) {
          memo = v;
          cb(err);
        });
      }, function(err) {
        cb(err, memo);
      });
    }
    function seq() {
      var fns = arguments;
      return rest(function(args) {
        var that = this;
        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
          args.pop();
        } else {
          cb = noop;
        }
        reduce(fns, args, function(newargs, fn, cb) {
          fn.apply(that, newargs.concat([rest(function(err, nextargs) {
            cb(err, nextargs);
          })]));
        }, function(err, results) {
          cb.apply(that, [err].concat(results));
        });
      });
    }
    var reverse = Array.prototype.reverse;
    function compose() {
      return seq.apply(null, reverse.call(arguments));
    }
    function concat$1(eachfn, arr, fn, callback) {
      var result = [];
      eachfn(arr, function(x, index, cb) {
        fn(x, function(err, y) {
          result = result.concat(y || []);
          cb(err);
        });
      }, function(err) {
        callback(err, result);
      });
    }
    function doParallel(fn) {
      return function(obj, iteratee, callback) {
        return fn(eachOf, obj, iteratee, callback);
      };
    }
    var concat = doParallel(concat$1);
    function doSeries(fn) {
      return function(obj, iteratee, callback) {
        return fn(eachOfSeries, obj, iteratee, callback);
      };
    }
    var concatSeries = doSeries(concat$1);
    var constant$1 = rest(function(values) {
      var args = [null].concat(values);
      return initialParams(function(ignoredArgs, callback) {
        return callback.apply(this, args);
      });
    });
    function _createTester(eachfn, check, getResult) {
      return function(arr, limit, iteratee, cb) {
        function done(err) {
          if (cb) {
            if (err) {
              cb(err);
            } else {
              cb(null, getResult(false));
            }
          }
        }
        function wrappedIteratee(x, _, callback) {
          if (!cb)
            return callback();
          iteratee(x, function(err, v) {
            if (cb) {
              if (err) {
                cb(err);
                cb = iteratee = false;
              } else if (check(v)) {
                cb(null, getResult(true, x));
                cb = iteratee = false;
              }
            }
            callback();
          });
        }
        if (arguments.length > 3) {
          eachfn(arr, limit, wrappedIteratee, done);
        } else {
          cb = iteratee;
          iteratee = limit;
          eachfn(arr, wrappedIteratee, done);
        }
      };
    }
    function _findGetResult(v, x) {
      return x;
    }
    var detect = _createTester(eachOf, identity, _findGetResult);
    var detectLimit = _createTester(eachOfLimit, identity, _findGetResult);
    var detectSeries = _createTester(eachOfSeries, identity, _findGetResult);
    function consoleFunc(name) {
      return rest(function(fn, args) {
        fn.apply(null, args.concat([rest(function(err, args) {
          if (typeof console === 'object') {
            if (err) {
              if (console.error) {
                console.error(err);
              }
            } else if (console[name]) {
              arrayEach(args, function(x) {
                console[name](x);
              });
            }
          }
        })]));
      });
    }
    var dir = consoleFunc('dir');
    function during(test, iteratee, cb) {
      cb = cb || noop;
      var next = rest(function(err, args) {
        if (err) {
          cb(err);
        } else {
          args.push(check);
          test.apply(this, args);
        }
      });
      var check = function(err, truth) {
        if (err)
          return cb(err);
        if (!truth)
          return cb(null);
        iteratee(next);
      };
      test(check);
    }
    function doDuring(iteratee, test, cb) {
      var calls = 0;
      during(function(next) {
        if (calls++ < 1)
          return next(null, true);
        test.apply(this, arguments);
      }, iteratee, cb);
    }
    function whilst(test, iteratee, cb) {
      cb = cb || noop;
      if (!test())
        return cb(null);
      var next = rest(function(err, args) {
        if (err)
          return cb(err);
        if (test.apply(this, args))
          return iteratee(next);
        cb.apply(null, [null].concat(args));
      });
      iteratee(next);
    }
    function doWhilst(iteratee, test, cb) {
      var calls = 0;
      return whilst(function() {
        return ++calls <= 1 || test.apply(this, arguments);
      }, iteratee, cb);
    }
    function doUntil(iteratee, test, cb) {
      return doWhilst(iteratee, function() {
        return !test.apply(this, arguments);
      }, cb);
    }
    function _withoutIndex(iteratee) {
      return function(value, index, callback) {
        return iteratee(value, callback);
      };
    }
    function eachLimit(arr, limit, iteratee, cb) {
      return _eachOfLimit(limit)(arr, _withoutIndex(iteratee), cb);
    }
    var each = doLimit(eachLimit, Infinity);
    var eachSeries = doLimit(eachLimit, 1);
    function ensureAsync(fn) {
      return initialParams(function(args, callback) {
        var sync = true;
        args.push(function() {
          var innerArgs = arguments;
          if (sync) {
            setImmediate$1(function() {
              callback.apply(null, innerArgs);
            });
          } else {
            callback.apply(null, innerArgs);
          }
        });
        fn.apply(this, args);
        sync = false;
      });
    }
    function notId(v) {
      return !v;
    }
    var everyLimit = _createTester(eachOfLimit, notId, notId);
    var every = doLimit(everyLimit, Infinity);
    var everySeries = doLimit(everyLimit, 1);
    function _filter(eachfn, arr, iteratee, callback) {
      var results = [];
      eachfn(arr, function(x, index, callback) {
        iteratee(x, function(err, v) {
          if (err) {
            callback(err);
          } else {
            if (v) {
              results.push({
                index: index,
                value: x
              });
            }
            callback();
          }
        });
      }, function(err) {
        if (err) {
          callback(err);
        } else {
          callback(null, arrayMap(results.sort(function(a, b) {
            return a.index - b.index;
          }), baseProperty('value')));
        }
      });
    }
    function doParallelLimit(fn) {
      return function(obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, iteratee, callback);
      };
    }
    var filterLimit = doParallelLimit(_filter);
    var filter = doLimit(filterLimit, Infinity);
    var filterSeries = doLimit(filterLimit, 1);
    function forever(fn, cb) {
      var done = onlyOnce(cb || noop);
      var task = ensureAsync(fn);
      function next(err) {
        if (err)
          return done(err);
        task(next);
      }
      next();
    }
    function iterator$1(tasks) {
      function makeCallback(index) {
        function fn() {
          if (tasks.length) {
            tasks[index].apply(null, arguments);
          }
          return fn.next();
        }
        fn.next = function() {
          return index < tasks.length - 1 ? makeCallback(index + 1) : null;
        };
        return fn;
      }
      return makeCallback(0);
    }
    var log = consoleFunc('log');
    function _asyncMap(eachfn, arr, iteratee, callback) {
      callback = once(callback || noop);
      arr = arr || [];
      var results = isArrayLike(arr) || getIterator(arr) ? [] : {};
      eachfn(arr, function(value, index, callback) {
        iteratee(value, function(err, v) {
          results[index] = v;
          callback(err);
        });
      }, function(err) {
        callback(err, results);
      });
    }
    var mapLimit = doParallelLimit(_asyncMap);
    var map = doLimit(mapLimit, Infinity);
    var mapSeries = doLimit(mapLimit, 1);
    var symbolTag$2 = '[object Symbol]';
    var objectProto$12 = Object.prototype;
    var objectToString$4 = objectProto$12.toString;
    function isSymbol(value) {
      return typeof value == 'symbol' || (isObjectLike(value) && objectToString$4.call(value) == symbolTag$2);
    }
    var INFINITY$1 = 1 / 0;
    var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined;
    var symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;
    function toString(value) {
      if (typeof value == 'string') {
        return value;
      }
      if (value == null) {
        return '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
    }
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
    var reEscapeChar = /\\(\\)?/g;
    function stringToPath(string) {
      var result = [];
      toString(string).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }
    function baseCastPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (typeof value == 'number') {
        return true;
      }
      return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
    }
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path + ''] : baseCastPath(path);
      var index = 0,
          length = path.length;
      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }
    function parent(object, path) {
      return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
    }
    function hasPath(object, path, hasFunc) {
      if (object == null) {
        return false;
      }
      var result = hasFunc(object, path);
      if (!result && !isKey(path)) {
        path = baseCastPath(path);
        object = parent(object, path);
        if (object != null) {
          path = last(path);
          result = hasFunc(object, path);
        }
      }
      var length = object ? object.length : undefined;
      return result || (!!length && isLength(length) && isIndex(path, length) && (isArray(object) || isString(object) || isArguments(object)));
    }
    function has(object, path) {
      return hasPath(object, path, baseHas);
    }
    function memoize(fn, hasher) {
      var memo = Object.create(null);
      var queues = Object.create(null);
      hasher = hasher || identity;
      var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
          setImmediate$1(function() {
            callback.apply(null, memo[key]);
          });
        } else if (has(queues, key)) {
          queues[key].push(callback);
        } else {
          queues[key] = [callback];
          fn.apply(null, args.concat([rest(function(args) {
            memo[key] = args;
            var q = queues[key];
            delete queues[key];
            for (var i = 0,
                l = q.length; i < l; i++) {
              q[i].apply(null, args);
            }
          })]));
        }
      });
      memoized.memo = memo;
      memoized.unmemoized = fn;
      return memoized;
    }
    function _parallel(eachfn, tasks, callback) {
      callback = callback || noop;
      var results = isArrayLike(tasks) ? [] : {};
      eachfn(tasks, function(task, key, callback) {
        task(rest(function(err, args) {
          if (args.length <= 1) {
            args = args[0];
          }
          results[key] = args;
          callback(err);
        }));
      }, function(err) {
        callback(err, results);
      });
    }
    function parallelLimit(tasks, limit, cb) {
      return _parallel(_eachOfLimit(limit), tasks, cb);
    }
    var parallel = doLimit(parallelLimit, Infinity);
    function queue$1(worker, concurrency) {
      return queue(function(items, cb) {
        worker(items[0], cb);
      }, concurrency, 1);
    }
    function priorityQueue(worker, concurrency) {
      function _compareTasks(a, b) {
        return a.priority - b.priority;
      }
      function _binarySearch(sequence, item, compare) {
        var beg = -1,
            end = sequence.length - 1;
        while (beg < end) {
          var mid = beg + (end - beg + 1 >>> 1);
          if (compare(item, sequence[mid]) >= 0) {
            beg = mid;
          } else {
            end = mid - 1;
          }
        }
        return beg;
      }
      function _insert(q, data, priority, callback) {
        if (callback != null && typeof callback !== 'function') {
          throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
          data = [data];
        }
        if (data.length === 0) {
          return setImmediate$1(function() {
            q.drain();
          });
        }
        arrayEach(data, function(task) {
          var item = {
            data: task,
            priority: priority,
            callback: typeof callback === 'function' ? callback : noop
          };
          q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
          if (q.tasks.length === q.concurrency) {
            q.saturated();
          }
          if (q.tasks.length <= q.concurrency - q.buffer) {
            q.unsaturated();
          }
          setImmediate$1(q.process);
        });
      }
      var q = queue$1(worker, concurrency);
      q.push = function(data, priority, callback) {
        _insert(q, data, priority, callback);
      };
      delete q.unshift;
      return q;
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);
        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    var baseEach = createBaseEach(baseForOwn);
    function forEach(collection, iteratee) {
      return (typeof iteratee == 'function' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, baseCastFunction(iteratee));
    }
    function race(tasks, cb) {
      cb = once(cb || noop);
      if (!isArray(tasks))
        return cb(new TypeError('First argument to race must be an array of functions'));
      if (!tasks.length)
        return cb();
      forEach(tasks, function(task) {
        task(cb);
      });
    }
    var slice = Array.prototype.slice;
    function reduceRight(arr, memo, iteratee, cb) {
      var reversed = slice.call(arr).reverse();
      reduce(reversed, memo, iteratee, cb);
    }
    function reject$1(eachfn, arr, iteratee, callback) {
      _filter(eachfn, arr, function(value, cb) {
        iteratee(value, function(err, v) {
          if (err) {
            cb(err);
          } else {
            cb(null, !v);
          }
        });
      }, callback);
    }
    var rejectLimit = doParallelLimit(reject$1);
    var reject = doLimit(rejectLimit, Infinity);
    var rejectSeries = doLimit(rejectLimit, 1);
    function series(tasks, cb) {
      return _parallel(eachOfSeries, tasks, cb);
    }
    function retry(times, task, callback) {
      var DEFAULT_TIMES = 5;
      var DEFAULT_INTERVAL = 0;
      var opts = {
        times: DEFAULT_TIMES,
        interval: DEFAULT_INTERVAL
      };
      function parseTimes(acc, t) {
        if (typeof t === 'object') {
          acc.times = +t.times || DEFAULT_TIMES;
          acc.interval = +t.interval || DEFAULT_INTERVAL;
        } else if (typeof t === 'number' || typeof t === 'string') {
          acc.times = +t || DEFAULT_TIMES;
        } else {
          throw new Error("Invalid arguments for async.retry");
        }
      }
      if (arguments.length < 3 && typeof times === 'function') {
        callback = task || noop;
        task = times;
      } else {
        parseTimes(opts, times);
        callback = callback || noop;
      }
      if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
      }
      var attempts = [];
      while (opts.times) {
        var isFinalAttempt = !(opts.times -= 1);
        attempts.push(retryAttempt(isFinalAttempt));
        if (!isFinalAttempt && opts.interval > 0) {
          attempts.push(retryInterval(opts.interval));
        }
      }
      series(attempts, function(done, data) {
        data = data[data.length - 1];
        callback(data.err, data.result);
      });
      function retryAttempt(isFinalAttempt) {
        return function(seriesCallback) {
          task(function(err, result) {
            seriesCallback(!err || isFinalAttempt, {
              err: err,
              result: result
            });
          });
        };
      }
      function retryInterval(interval) {
        return function(seriesCallback) {
          setTimeout(function() {
            seriesCallback(null);
          }, interval);
        };
      }
    }
    function retryable(opts, task) {
      if (!task) {
        task = opts;
        opts = null;
      }
      return initialParams(function(args, callback) {
        function taskFn(cb) {
          task.apply(null, args.concat([cb]));
        }
        if (opts)
          retry(opts, taskFn, callback);
        else
          retry(taskFn, callback);
      });
    }
    var someLimit = _createTester(eachOfLimit, Boolean, identity);
    var some = doLimit(someLimit, Infinity);
    var someSeries = doLimit(someLimit, 1);
    function sortBy(arr, iteratee, cb) {
      map(arr, function(x, cb) {
        iteratee(x, function(err, criteria) {
          if (err)
            return cb(err);
          cb(null, {
            value: x,
            criteria: criteria
          });
        });
      }, function(err, results) {
        if (err)
          return cb(err);
        cb(null, arrayMap(results.sort(comparator), baseProperty('value')));
      });
      function comparator(left, right) {
        var a = left.criteria,
            b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
      }
    }
    function timeout(asyncFn, miliseconds) {
      var originalCallback,
          timer;
      var timedOut = false;
      function injectedCallback() {
        if (!timedOut) {
          originalCallback.apply(null, arguments);
          clearTimeout(timer);
        }
      }
      function timeoutCallback() {
        var error = new Error('Callback function timed out.');
        error.code = 'ETIMEDOUT';
        timedOut = true;
        originalCallback(error);
      }
      return initialParams(function(args, origCallback) {
        originalCallback = origCallback;
        timer = setTimeout(timeoutCallback, miliseconds);
        asyncFn.apply(null, args.concat(injectedCallback));
      });
    }
    var nativeCeil = Math.ceil;
    var nativeMax$2 = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax$2(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    function timeLimit(count, limit, iteratee, cb) {
      return mapLimit(baseRange(0, count, 1), limit, iteratee, cb);
    }
    var times = doLimit(timeLimit, Infinity);
    var timesSeries = doLimit(timeLimit, 1);
    function transform(arr, memo, iteratee, callback) {
      if (arguments.length === 3) {
        callback = iteratee;
        iteratee = memo;
        memo = isArray(arr) ? [] : {};
      }
      eachOf(arr, function(v, k, cb) {
        iteratee(memo, v, k, cb);
      }, function(err) {
        callback(err, memo);
      });
    }
    function unmemoize(fn) {
      return function() {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    }
    function until(test, iteratee, cb) {
      return whilst(function() {
        return !test.apply(this, arguments);
      }, iteratee, cb);
    }
    function waterfall(tasks, cb) {
      cb = once(cb || noop);
      if (!isArray(tasks))
        return cb(new Error('First argument to waterfall must be an array of functions'));
      if (!tasks.length)
        return cb();
      var taskIndex = 0;
      function nextTask(args) {
        if (taskIndex === tasks.length) {
          return cb.apply(null, [null].concat(args));
        }
        var taskCallback = onlyOnce(rest(function(err, args) {
          if (err) {
            return cb.apply(null, [err].concat(args));
          }
          nextTask(args);
        }));
        args.push(taskCallback);
        var task = tasks[taskIndex++];
        task.apply(null, args);
      }
      nextTask([]);
    }
    var index = {
      applyEach: applyEach,
      applyEachSeries: applyEachSeries,
      apply: apply$1,
      asyncify: asyncify,
      auto: auto,
      autoInject: autoInject,
      cargo: cargo,
      compose: compose,
      concat: concat,
      concatSeries: concatSeries,
      constant: constant$1,
      detect: detect,
      detectLimit: detectLimit,
      detectSeries: detectSeries,
      dir: dir,
      doDuring: doDuring,
      doUntil: doUntil,
      doWhilst: doWhilst,
      during: during,
      each: each,
      eachLimit: eachLimit,
      eachOf: eachOf,
      eachOfLimit: eachOfLimit,
      eachOfSeries: eachOfSeries,
      eachSeries: eachSeries,
      ensureAsync: ensureAsync,
      every: every,
      everyLimit: everyLimit,
      everySeries: everySeries,
      filter: filter,
      filterLimit: filterLimit,
      filterSeries: filterSeries,
      forever: forever,
      iterator: iterator$1,
      log: log,
      map: map,
      mapLimit: mapLimit,
      mapSeries: mapSeries,
      memoize: memoize,
      nextTick: setImmediate$1,
      parallel: parallel,
      parallelLimit: parallelLimit,
      priorityQueue: priorityQueue,
      queue: queue$1,
      race: race,
      reduce: reduce,
      reduceRight: reduceRight,
      reject: reject,
      rejectLimit: rejectLimit,
      rejectSeries: rejectSeries,
      retry: retry,
      retryable: retryable,
      seq: seq,
      series: series,
      setImmediate: setImmediate$1,
      some: some,
      someLimit: someLimit,
      someSeries: someSeries,
      sortBy: sortBy,
      timeout: timeout,
      times: times,
      timesLimit: timeLimit,
      timesSeries: timesSeries,
      transform: transform,
      unmemoize: unmemoize,
      until: until,
      waterfall: waterfall,
      whilst: whilst,
      all: every,
      any: some,
      forEach: each,
      forEachSeries: eachSeries,
      forEachLimit: eachLimit,
      forEachOf: eachOf,
      forEachOfSeries: eachOfSeries,
      forEachOfLimit: eachOfLimit,
      inject: reduce,
      foldl: reduce,
      foldr: reduceRight,
      select: filter,
      selectLimit: filterLimit,
      selectSeries: filterSeries,
      wrapSync: asyncify
    };
    exports['default'] = index;
    exports.applyEach = applyEach;
    exports.applyEachSeries = applyEachSeries;
    exports.apply = apply$1;
    exports.asyncify = asyncify;
    exports.auto = auto;
    exports.autoInject = autoInject;
    exports.cargo = cargo;
    exports.compose = compose;
    exports.concat = concat;
    exports.concatSeries = concatSeries;
    exports.constant = constant$1;
    exports.detect = detect;
    exports.detectLimit = detectLimit;
    exports.detectSeries = detectSeries;
    exports.dir = dir;
    exports.doDuring = doDuring;
    exports.doUntil = doUntil;
    exports.doWhilst = doWhilst;
    exports.during = during;
    exports.each = each;
    exports.eachLimit = eachLimit;
    exports.eachOf = eachOf;
    exports.eachOfLimit = eachOfLimit;
    exports.eachOfSeries = eachOfSeries;
    exports.eachSeries = eachSeries;
    exports.ensureAsync = ensureAsync;
    exports.every = every;
    exports.everyLimit = everyLimit;
    exports.everySeries = everySeries;
    exports.filter = filter;
    exports.filterLimit = filterLimit;
    exports.filterSeries = filterSeries;
    exports.forever = forever;
    exports.iterator = iterator$1;
    exports.log = log;
    exports.map = map;
    exports.mapLimit = mapLimit;
    exports.mapSeries = mapSeries;
    exports.memoize = memoize;
    exports.nextTick = setImmediate$1;
    exports.parallel = parallel;
    exports.parallelLimit = parallelLimit;
    exports.priorityQueue = priorityQueue;
    exports.queue = queue$1;
    exports.race = race;
    exports.reduce = reduce;
    exports.reduceRight = reduceRight;
    exports.reject = reject;
    exports.rejectLimit = rejectLimit;
    exports.rejectSeries = rejectSeries;
    exports.retry = retry;
    exports.retryable = retryable;
    exports.seq = seq;
    exports.series = series;
    exports.setImmediate = setImmediate$1;
    exports.some = some;
    exports.someLimit = someLimit;
    exports.someSeries = someSeries;
    exports.sortBy = sortBy;
    exports.timeout = timeout;
    exports.times = times;
    exports.timesLimit = timeLimit;
    exports.timesSeries = timesSeries;
    exports.transform = transform;
    exports.unmemoize = unmemoize;
    exports.until = until;
    exports.waterfall = waterfall;
    exports.whilst = whilst;
    exports.all = every;
    exports.allLimit = everyLimit;
    exports.allSeries = everySeries;
    exports.any = some;
    exports.anyLimit = someLimit;
    exports.anySeries = someSeries;
    exports.find = detect;
    exports.findLimit = detectLimit;
    exports.findSeries = detectSeries;
    exports.forEach = each;
    exports.forEachSeries = eachSeries;
    exports.forEachLimit = eachLimit;
    exports.forEachOf = eachOf;
    exports.forEachOfSeries = eachOfSeries;
    exports.forEachOfLimit = eachOfLimit;
    exports.inject = reduce;
    exports.foldl = reduce;
    exports.foldr = reduceRight;
    exports.select = filter;
    exports.selectLimit = filterLimit;
    exports.selectSeries = filterSeries;
    exports.wrapSync = asyncify;
  }));
})(require('buffer').Buffer, require('process'));
