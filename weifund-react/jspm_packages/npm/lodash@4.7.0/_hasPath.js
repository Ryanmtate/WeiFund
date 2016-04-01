/* */ 
var baseCastPath = require('./_baseCastPath'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isIndex = require('./_isIndex'),
    isKey = require('./_isKey'),
    isLength = require('./isLength'),
    isString = require('./isString');
function hasPath(object, path, hasFunc) {
  if (object == null) {
    return false;
  }
  var result = hasFunc(object, path);
  if (!result && !isKey(path)) {
    path = baseCastPath(path);
    var index = -1,
        length = path.length;
    while (object != null && ++index < length) {
      var key = path[index];
      if (!(result = hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
  }
  var length = object ? object.length : undefined;
  return result || (!!length && isLength(length) && isIndex(path, length) && (isArray(object) || isString(object) || isArguments(object)));
}
module.exports = hasPath;
