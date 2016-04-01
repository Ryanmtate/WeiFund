/* */ 
(function(Buffer) {
  'use strict';
  var through = require('through2');
  var fs = require('graceful-fs');
  var path = require('path');
  var File = require('vinyl');
  var convert = require('convert-source-map');
  var stripBom = require('strip-bom');
  var PLUGIN_NAME = 'gulp-sourcemap';
  var urlRegex = /^(https?|webpack(-[^:]+)?):\/\//;
  module.exports.init = function init(options) {
    function sourceMapInit(file, encoding, callback) {
      if (file.isNull() || file.sourceMap) {
        this.push(file);
        return callback();
      }
      if (file.isStream()) {
        return callback(new Error(PLUGIN_NAME + '-init: Streaming not supported'));
      }
      var fileContent = file.contents.toString();
      var sourceMap;
      if (options && options.loadMaps) {
        var sourcePath = '';
        sourceMap = convert.fromSource(fileContent);
        if (sourceMap) {
          sourceMap = sourceMap.toObject();
          sourcePath = path.dirname(file.path);
          fileContent = convert.removeComments(fileContent);
        } else {
          var mapComment = convert.mapFileCommentRegex.exec(fileContent);
          var mapFile;
          if (mapComment) {
            mapFile = path.resolve(path.dirname(file.path), mapComment[1] || mapComment[2]);
            fileContent = convert.removeMapFileComments(fileContent);
          } else {
            mapFile = file.path + '.map';
          }
          sourcePath = path.dirname(mapFile);
          try {
            sourceMap = JSON.parse(stripBom(fs.readFileSync(mapFile, 'utf8')));
          } catch (e) {}
        }
        if (sourceMap) {
          sourceMap.sourcesContent = sourceMap.sourcesContent || [];
          sourceMap.sources.forEach(function(source, i) {
            if (source.match(urlRegex)) {
              sourceMap.sourcesContent[i] = sourceMap.sourcesContent[i] || null;
              return;
            }
            var absPath = path.resolve(sourcePath, source);
            sourceMap.sources[i] = unixStylePath(path.relative(file.base, absPath));
            if (!sourceMap.sourcesContent[i]) {
              var sourceContent = null;
              if (sourceMap.sourceRoot) {
                if (sourceMap.sourceRoot.match(urlRegex)) {
                  sourceMap.sourcesContent[i] = null;
                  return;
                }
                absPath = path.resolve(sourcePath, sourceMap.sourceRoot, source);
              }
              if (absPath === file.path) {
                sourceContent = fileContent;
              } else {
                try {
                  if (options.debug)
                    console.log(PLUGIN_NAME + '-init: No source content for "' + source + '". Loading from file.');
                  sourceContent = stripBom(fs.readFileSync(absPath, 'utf8'));
                } catch (e) {
                  if (options.debug)
                    console.warn(PLUGIN_NAME + '-init: source file not found: ' + absPath);
                }
              }
              sourceMap.sourcesContent[i] = sourceContent;
            }
          });
          file.contents = new Buffer(fileContent, 'utf8');
        }
      }
      if (!sourceMap) {
        sourceMap = {
          version: 3,
          names: [],
          mappings: '',
          sources: [unixStylePath(file.relative)],
          sourcesContent: [fileContent]
        };
      }
      sourceMap.file = unixStylePath(file.relative);
      file.sourceMap = sourceMap;
      this.push(file);
      callback();
    }
    return through.obj(sourceMapInit);
  };
  module.exports.write = function write(destPath, options) {
    if (options === undefined && Object.prototype.toString.call(destPath) === '[object Object]') {
      options = destPath;
      destPath = undefined;
    }
    options = options || {};
    if (options.includeContent === undefined)
      options.includeContent = true;
    if (options.addComment === undefined)
      options.addComment = true;
    function sourceMapWrite(file, encoding, callback) {
      if (file.isNull() || !file.sourceMap) {
        this.push(file);
        return callback();
      }
      if (file.isStream()) {
        return callback(new Error(PLUGIN_NAME + '-write: Streaming not supported'));
      }
      var sourceMap = file.sourceMap;
      sourceMap.file = unixStylePath(file.relative);
      sourceMap.sources = sourceMap.sources.map(function(filePath) {
        return unixStylePath(filePath);
      });
      if (typeof options.sourceRoot === 'function') {
        sourceMap.sourceRoot = options.sourceRoot(file);
      } else {
        sourceMap.sourceRoot = options.sourceRoot;
      }
      if (options.includeContent) {
        sourceMap.sourcesContent = sourceMap.sourcesContent || [];
        for (var i = 0; i < file.sourceMap.sources.length; i++) {
          if (!sourceMap.sourcesContent[i]) {
            var sourcePath = path.resolve(sourceMap.sourceRoot || file.base, sourceMap.sources[i]);
            try {
              if (options.debug)
                console.log(PLUGIN_NAME + '-write: No source content for "' + sourceMap.sources[i] + '". Loading from file.');
              sourceMap.sourcesContent[i] = stripBom(fs.readFileSync(sourcePath, 'utf8'));
            } catch (e) {
              if (options.debug)
                console.warn(PLUGIN_NAME + '-write: source file not found: ' + sourcePath);
            }
          }
        }
        if (sourceMap.sourceRoot === undefined) {
          sourceMap.sourceRoot = '/source/';
        } else if (sourceMap.sourceRoot === null) {
          sourceMap.sourceRoot = undefined;
        }
      } else {
        delete sourceMap.sourcesContent;
      }
      var extension = file.relative.split('.').pop();
      var commentFormatter;
      switch (extension) {
        case 'css':
          commentFormatter = function(url) {
            return "\n/*# sourceMappingURL=" + url + " */\n";
          };
          break;
        case 'js':
          commentFormatter = function(url) {
            return "\n//# sourceMappingURL=" + url + "\n";
          };
          break;
        default:
          commentFormatter = function(url) {
            return "";
          };
      }
      var comment,
          sourceMappingURLPrefix;
      if (!destPath) {
        var base64Map = new Buffer(JSON.stringify(sourceMap)).toString('base64');
        comment = commentFormatter('data:application/json;base64,' + base64Map);
      } else {
        var sourceMapPath = path.join(file.base, destPath, file.relative) + '.map';
        var sourceMapFile = new File({
          cwd: file.cwd,
          base: file.base,
          path: sourceMapPath,
          contents: new Buffer(JSON.stringify(sourceMap)),
          stat: {
            isFile: function() {
              return true;
            },
            isDirectory: function() {
              return false;
            },
            isBlockDevice: function() {
              return false;
            },
            isCharacterDevice: function() {
              return false;
            },
            isSymbolicLink: function() {
              return false;
            },
            isFIFO: function() {
              return false;
            },
            isSocket: function() {
              return false;
            }
          }
        });
        this.push(sourceMapFile);
        var sourceMapPathRelative = path.relative(path.dirname(file.path), sourceMapPath);
        if (options.sourceMappingURLPrefix) {
          var prefix = '';
          if (typeof options.sourceMappingURLPrefix === 'function') {
            prefix = options.sourceMappingURLPrefix(file);
          } else {
            prefix = options.sourceMappingURLPrefix;
          }
          sourceMapPathRelative = prefix + path.join('/', sourceMapPathRelative);
        }
        comment = commentFormatter(unixStylePath(sourceMapPathRelative));
        if (options.sourceMappingURL && typeof options.sourceMappingURL === 'function') {
          comment = commentFormatter(options.sourceMappingURL(file));
        }
      }
      if (options.addComment)
        file.contents = Buffer.concat([file.contents, new Buffer(comment)]);
      this.push(file);
      callback();
    }
    return through.obj(sourceMapWrite);
  };
  function unixStylePath(filePath) {
    return filePath.split(path.sep).join('/');
  }
})(require('buffer').Buffer);
