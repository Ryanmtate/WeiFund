/* */ 
(function(process) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  var UNORDERED_COMPARE_FLAG = 1,
      PARTIAL_COMPARE_FLAG = 2;
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reEscapeChar = /\\(\\)?/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
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
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  function arraySome(array, predicate) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
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
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype,
      objectProto = Object.prototype;
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  var Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      getPrototypeOf = Object.getPrototypeOf,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;
  var nativeKeys = Object.keys;
  var Map = getNative(root, 'Map'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');
  var mapCtorString = Map ? funcToString.call(Map) : '',
      setCtorString = Set ? funcToString.call(Set) : '',
      weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  function Hash() {}
  function hashDelete(hash, key) {
    return hashHas(hash, key) && delete hash[key];
  }
  function hashGet(hash, key) {
    if (nativeCreate) {
      var result = hash[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
  }
  function hashHas(hash, key) {
    return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
  }
  function hashSet(hash, key, value) {
    hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
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
  function mapClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': Map ? new Map : [],
      'string': new Hash
    };
  }
  function mapDelete(key) {
    var data = this.__data__;
    if (isKeyable(key)) {
      return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
    }
    return Map ? data.map['delete'](key) : assocDelete(data.map, key);
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
  function Stack(values) {
    var index = -1,
        length = values ? values.length : 0;
    this.clear();
    while (++index < length) {
      var entry = values[index];
      this.set(entry[0], entry[1]);
    }
  }
  function stackClear() {
    this.__data__ = {
      'array': [],
      'map': null
    };
  }
  function stackDelete(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocDelete(array, key) : data.map['delete'](key);
  }
  function stackGet(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocGet(array, key) : data.map.get(key);
  }
  function stackHas(key) {
    var data = this.__data__,
        array = data.array;
    return array ? assocHas(array, key) : data.map.has(key);
  }
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
  function assocGet(array, key) {
    var index = assocIndexOf(array, key);
    return index < 0 ? undefined : array[index][1];
  }
  function assocHas(array, key) {
    return assocIndexOf(array, key) > -1;
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
  function assocSet(array, key, value) {
    var index = assocIndexOf(array, key);
    if (index < 0) {
      array.push([key, value]);
    } else {
      array[index][1] = value;
    }
  }
  function baseCastPath(value) {
    return isArray(value) ? value : stringToPath(value);
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
  function baseHas(object, key) {
    return hasOwnProperty.call(object, key) || (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
  }
  function baseHasIn(object, key) {
    return key in Object(object);
  }
  function baseIsEqual(value, other, customizer, bitmask, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
  }
  function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
    if (!objIsArr) {
      objTag = getTag(object);
      objTag = objTag == argsTag ? objectTag : objTag;
    }
    if (!othIsArr) {
      othTag = getTag(other);
      othTag = othTag == argsTag ? objectTag : othTag;
    }
    var objIsObj = objTag == objectTag && !isHostObject(object),
        othIsObj = othTag == objectTag && !isHostObject(other),
        isSameTag = objTag == othTag;
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object)) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
    }
    if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
      if (objIsWrapped || othIsWrapped) {
        stack || (stack = new Stack);
        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
  }
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack,
            result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;
        if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  function baseIteratee(value) {
    var type = typeof value;
    if (type == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (type == 'object') {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  function baseKeys(object) {
    return nativeKeys(Object(object));
  }
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      var key = matchData[0][0],
          value = matchData[0][1];
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === value && (value !== undefined || (key in Object(object)));
      };
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  function baseMatchesProperty(path, srcValue) {
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue) ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
    };
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
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
  function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
    var index = -1,
        isPartial = bitmask & PARTIAL_COMPARE_FLAG,
        isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
        arrLength = array.length,
        othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked) {
      return stacked == other;
    }
    var result = true;
    stack.set(array, other);
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (isUnordered) {
        if (!arraySome(other, function(othValue) {
          return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    return result;
  }
  function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
    switch (tag) {
      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
        return +object == +other;
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case numberTag:
        return (object != +object) ? other != +other : object == +other;
      case regexpTag:
      case stringTag:
        return object == (other + '');
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask | UNORDERED_COMPARE_FLAG, stack.set(object, other));
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
    var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
        objProps = keys(object),
        objLength = objProps.length,
        othProps = keys(other),
        othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : baseHas(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === undefined ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack)) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
      if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    return result;
  }
  var getLength = baseProperty('length');
  function getMatchData(object) {
    var result = toPairs(object),
        length = result.length;
    while (length--) {
      result[length][2] = isStrictComparable(result[length][1]);
    }
    return result;
  }
  function getNative(object, key) {
    var value = object[key];
    return isNative(value) ? value : undefined;
  }
  function getTag(value) {
    return objectToString.call(value);
  }
  if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : null,
          ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
      if (ctorString) {
        switch (ctorString) {
          case mapCtorString:
            return mapTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
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
  function indexKeys(object) {
    var length = object ? object.length : undefined;
    if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
      return baseTimes(length, String);
    }
    return null;
  }
  function isKey(value, object) {
    if (typeof value == 'number') {
      return true;
    }
    return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == 'number' || type == 'boolean' || (type == 'string' && value != '__proto__') || value == null;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
    return value === proto;
  }
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  function parent(object, path) {
    return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
  }
  function stringToPath(string) {
    var result = [];
    toString(string).replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  }
  function last(array) {
    var length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
  }
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(getLength(value)) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(funcToString.call(value));
    }
    return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
  }
  function isString(value) {
    return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
  }
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }
  function isTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
  }
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
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }
  function hasIn(object, path) {
    return hasPath(object, path, baseHasIn);
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
  function toPairs(object) {
    return baseToPairs(object, keys(object));
  }
  function identity(value) {
    return value;
  }
  function property(path) {
    return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
  }
  Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
  MapCache.prototype.clear = mapClear;
  MapCache.prototype['delete'] = mapDelete;
  MapCache.prototype.get = mapGet;
  MapCache.prototype.has = mapHas;
  MapCache.prototype.set = mapSet;
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  module.exports = baseIteratee;
})(require('process'));
