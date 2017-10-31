const { assert } = require('./test-utils');

/**
 * @param {string} str  the string to validate
 * @returns {boolean} whether or not the given string is a palindrome
 */
function isPalindrome(str) {}

assert(isPalindrome(''), true, 'empty string validates');
assert(isPalindrome('adam'), false, '"adam" is not a palindrome');
assert(isPalindrome('abccba'), true, '"abccba" is a palindrome');
assert(isPalindrome('abcba'), true, '"abcba" is a palindrome');
