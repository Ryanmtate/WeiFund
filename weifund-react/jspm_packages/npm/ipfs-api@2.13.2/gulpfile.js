/* */ 
(function(process) {
  'use strict';
  const gulp = require('gulp');
  const runSequence = require('run-sequence');
  require('require-dir')('tasks');
  gulp.task('default', (done) => {
    runSequence('lint', 'test', done);
  });
  gulp.on('stop', () => {
    process.nextTick(() => {
      process.exit();
    });
  });
})(require('process'));
