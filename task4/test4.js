const assert = require('assert');
const resolve = require('./task4.js');

assert.deepStrictEqual(resolve([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]), [2,2,2,1,4,3,3,9,6,7,19]);
assert.deepStrictEqual(resolve([56,3,34,3,17,12,6,17,9,2,19],[2,56,9,3,34,17]), [2,56,9,3,3,34,17,17,12,6,19]);
assert.deepStrictEqual(resolve([2,5,4,4,2,2,5,1],[4,2,1]), [4,4,2,2,2,1,5,5]);