'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
const jadenCase = (str) => {
  return str
    .split(' ')
    .map(word => {
      return word
        .split('')
        .map((letter, i) => i === 0 ? letter.toUpperCase() : letter.toLowerCase())
        .join('')
    })
    .join(' ')
  }

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase('hello world'), 'Hello World')
assert.strictEqual(jadenCase('hello'), 'Hello')
// assert.fail('You must write your own tests');
// End of tests */
