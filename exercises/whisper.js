'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (str) => {
  let lowerStr = str
    .split('')
    .map(letter => letter.toLowerCase())
    .join('')
  let result = `*${lowerStr}*`
  return result
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper('HELLO'), '*hello*')
// assert.fail('You must write your own tests');
// End of tests */
