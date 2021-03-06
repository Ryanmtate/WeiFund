/* */ 
var mapping = require('./_mapping'),
    mutateMap = mapping.mutate,
    fallbackHolder = {};
function baseConvert(util, name, func, options) {
  var setPlaceholder,
      isLib = typeof name == 'function',
      isObj = name === Object(name);
  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});
  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };
  var forceRearg = ('rearg' in options) && options.rearg,
      placeholder = isLib ? func : fallbackHolder,
      pristine = isLib ? func.runInContext() : undefined;
  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isFunction': util.isFunction,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'spread': util.spread,
    'toPath': util.toPath
  };
  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isFunction = helpers.isFunction,
      keys = helpers.keys,
      rearg = helpers.rearg,
      spread = helpers.spread,
      toPath = helpers.toPath;
  var aryMethodKeys = keys(mapping.aryMethod);
  var baseArity = function(func, n) {
    return n == 2 ? function(a, b) {
      return func.apply(undefined, arguments);
    } : function(a) {
      return func.apply(undefined, arguments);
    };
  };
  var baseAry = function(func, n) {
    return n == 2 ? function(a, b) {
      return func(a, b);
    } : function(a) {
      return func(a);
    };
  };
  var cloneArray = function(array) {
    var length = array ? array.length : 0,
        result = Array(length);
    while (length--) {
      result[length] = array[length];
    }
    return result;
  };
  var cloneByPath = function(object, path) {
    path = toPath(path);
    var index = -1,
        length = path.length,
        result = clone(Object(object)),
        nested = result;
    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];
      if (value != null) {
        nested[key] = clone(Object(value));
      }
      nested = nested[key];
    }
    return result;
  };
  var convertLib = function(options) {
    return _.runInContext.convert(options)();
  };
  var createCloner = function(func) {
    return function(object) {
      return func({}, object);
    };
  };
  var immutWrap = function(func, cloner) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return result;
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var result = args[0] = cloner.apply(undefined, args);
      func.apply(undefined, args);
      return result;
    };
  };
  var iterateeAry = function(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  };
  var iterateeRearg = function(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  };
  var overArg = function(func, iteratee, retArg) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = iteratee(args[index]);
      return func.apply(undefined, args);
    };
  };
  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;
        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var methods = [],
            methodNames = [];
        each(keys(source), function(key) {
          var value = source[key];
          if (isFunction(value)) {
            methodNames.push(key);
            methods.push(func.prototype[key]);
          }
        });
        mixin(func, Object(source));
        each(methodNames, function(methodName, index) {
          var method = methods[index];
          if (isFunction(method)) {
            func.prototype[methodName] = method;
          } else {
            delete func.prototype[methodName];
          }
        });
        return func;
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };
  var wrap = function(name, func) {
    name = mapping.aliasToReal[name] || name;
    var wrapper = wrappers[name];
    var convertMethod = function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[name] : func,
          newOptions = assign(assign({}, config), options);
      return baseConvert(newUtil, name, newFunc, newOptions);
    };
    if (wrapper) {
      var result = wrapper(func);
      result.convert = convertMethod;
      return result;
    }
    var wrapped = func;
    if (config.immutable) {
      if (mutateMap.array[name]) {
        wrapped = immutWrap(func, cloneArray);
      } else if (mutateMap.object[name]) {
        wrapped = immutWrap(func, createCloner(func));
      } else if (mutateMap.set[name]) {
        wrapped = immutWrap(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (name == otherName) {
          var aryN = !isLib && mapping.iterateeAry[name],
              reargIndexes = mapping.iterateeRearg[name],
              spreadStart = mapping.methodSpread[name];
          result = wrapped;
          if (config.fixed) {
            result = spreadStart === undefined ? ary(result, aryKey) : spread(result, spreadStart);
          }
          if (config.rearg && aryKey > 1 && (forceRearg || !mapping.skipRearg[name])) {
            result = rearg(result, mapping.methodRearg[name] || mapping.aryRearg[aryKey]);
          }
          if (config.cap) {
            if (reargIndexes) {
              result = iterateeRearg(result, reargIndexes);
            } else if (aryN) {
              result = iterateeAry(result, aryN);
            }
          }
          if (config.curry && aryKey > 1) {
            result = curry(result, aryKey);
          }
          return false;
        }
      });
      return !result;
    });
    result || (result = wrapped);
    if (result == func) {
      result = function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = convertMethod;
    if (mapping.placeholder[name]) {
      setPlaceholder = true;
      result.placeholder = func.placeholder = placeholder;
    }
    return result;
  };
  if (!isObj) {
    return wrap(name, func);
  }
  var _ = func;
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func)]);
      }
    });
  });
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });
  _.convert = convertLib;
  if (setPlaceholder) {
    _.placeholder = placeholder;
  }
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });
  return _;
}
module.exports = baseConvert;
