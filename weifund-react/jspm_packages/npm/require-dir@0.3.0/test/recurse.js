/* */ 
var assert = require('assert');
var requireDir = require('../index');
assert.deepEqual(requireDir('./recurse'), {a: 'a'});
assert.deepEqual(requireDir('./recurse', {recurse: true}), {
  a: 'a',
  b: {
    '1': {
      foo: 'foo',
      bar: 'bar'
    },
    '2': {}
  },
  c: {'3': 3}
});
assert.deepEqual(requireDir('./recurse/node_modules'), {fake: 'fake'});
console.log('Recurse tests passed.');
