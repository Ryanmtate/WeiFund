/* */ 
var assert = require('assert');
var requireDir = require('../index');
assert.deepEqual(requireDir('./simple'), {
  a: 'a',
  b: 'b'
});
require('coffee-script');
assert.deepEqual(requireDir('./simple'), {
  a: 'a',
  b: 'b',
  c: 'c'
});
console.log('Simple tests passed.');
