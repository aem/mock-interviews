const { assert } = require('./test-utils');

/**
 * This function will return a boolean, true if the given string is a palindrome, false otherwise
 * @param {string} str  the string to validate
 */
function isPalindrome(str) {}

assert(isPalindrome(''), true, 'empty string validates');
assert(isPalindrome('adam'), false, '"adam" is not a palindrome');
assert(isPalindrome('abccba'), true, '"abccba" is a palindrome');
assert(isPalindrome('abcba'), true, '"abcba" is a palindrome');
