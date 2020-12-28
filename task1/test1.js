const assert = require('assert');
const resolve = require('./task1.js');

assert.strictEqual(resolve('III'), 3);
assert.strictEqual(resolve('VI'), 6);
assert.strictEqual(resolve('XCVII'), 97);
assert.strictEqual(resolve('MCXCIV'), 1194);
assert.strictEqual(resolve('MMMMCCCXCVIII'), 4398);