/* */ 
(function(process) {
  'use strict';
  var warning = require('fbjs/lib/warning');
  if (process.env.NODE_ENV !== 'production') {
    var processingChildContext = false;
    var warnInvalidSetState = function() {
      process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : undefined;
    };
  }
  var ReactInvalidSetStateWarningDevTool = {
    onBeginProcessingChildContext: function() {
      processingChildContext = true;
    },
    onEndProcessingChildContext: function() {
      processingChildContext = false;
    },
    onSetState: function() {
      warnInvalidSetState();
    }
  };
  module.exports = ReactInvalidSetStateWarningDevTool;
})(require('process'));
