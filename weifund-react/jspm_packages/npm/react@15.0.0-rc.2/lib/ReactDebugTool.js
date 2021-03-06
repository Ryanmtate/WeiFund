/* */ 
(function(process) {
  'use strict';
  var ReactInvalidSetStateWarningDevTool = require('./ReactInvalidSetStateWarningDevTool');
  var warning = require('fbjs/lib/warning');
  var eventHandlers = [];
  var handlerDoesThrowForEvent = {};
  function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
    if (process.env.NODE_ENV !== 'production') {
      eventHandlers.forEach(function(handler) {
        try {
          if (handler[handlerFunctionName]) {
            handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);
          }
        } catch (e) {
          process.env.NODE_ENV !== 'production' ? warning(!handlerDoesThrowForEvent[handlerFunctionName], 'exception thrown by devtool while handling %s: %s', handlerFunctionName, e.message) : undefined;
          handlerDoesThrowForEvent[handlerFunctionName] = true;
        }
      });
    }
  }
  var ReactDebugTool = {
    addDevtool: function(devtool) {
      eventHandlers.push(devtool);
    },
    removeDevtool: function(devtool) {
      for (var i = 0; i < eventHandlers.length; i++) {
        if (eventHandlers[i] === devtool) {
          eventHandlers.splice(i, 1);
          i--;
        }
      }
    },
    onBeginProcessingChildContext: function() {
      emitEvent('onBeginProcessingChildContext');
    },
    onEndProcessingChildContext: function() {
      emitEvent('onEndProcessingChildContext');
    },
    onSetState: function() {
      emitEvent('onSetState');
    },
    onMountRootComponent: function(internalInstance) {
      emitEvent('onMountRootComponent', internalInstance);
    },
    onMountComponent: function(internalInstance) {
      emitEvent('onMountComponent', internalInstance);
    },
    onUpdateComponent: function(internalInstance) {
      emitEvent('onUpdateComponent', internalInstance);
    },
    onUnmountComponent: function(internalInstance) {
      emitEvent('onUnmountComponent', internalInstance);
    }
  };
  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
  module.exports = ReactDebugTool;
})(require('process'));
