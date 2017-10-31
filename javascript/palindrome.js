const { assert } = require('./test-utils');

/**
 * @param {string} str  the string to validate
 * @returns {boolean} whether or not the given string is a palindrome
 */
function isPalindrome(str) {
  let start = 0, end = str.length - 1;
  for (; start > end; ) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

assert(isPalindrome(''), true, 'empty string validates');
assert(isPalindrome('adam'), false, '"adam" is not a palindrome');
assert(isPalindrome('abccba'), true, '"abccba" is a palindrome');
assert(isPalindrome('abcba'), true, '"abcba" is a palindrome');
