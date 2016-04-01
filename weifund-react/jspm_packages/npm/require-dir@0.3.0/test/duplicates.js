/* */ 
var assert = require('assert');
var requireDir = require('../index');
assert.deepEqual(requireDir('./duplicates'), {
  a: 'a.js',
  b: 'b.json',
  d: 'd.js'
});
assert.deepEqual(requireDir('./duplicates', {duplicates: true}), {
  a: 'a.js',
  'a.js': 'a.js',
  b: 'b.json',
  'b.json': 'b.json',
  d: 'd.js',
  'd.js': 'd.js',
  'd.json': 'd.json'
});
assert.deepEqual(requireDir('./duplicates', {
  duplicates: true,
  recurse: true
}), {
  a: 'a.js',
  'a.js': 'a.js',
  b: {
    '1': '1.js',
    '1.js': '1.js',
    '2': '2.js',
    '2.js': '2.js',
    '2.json': '2.json'
  },
  'b.json': 'b.json',
  c: {
    '3': '3.json',
    '3.json': '3.json'
  },
  d: 'd.js',
  'd.js': 'd.js',
  'd.json': 'd.json'
});
console.log('Duplicate tests passed.');
