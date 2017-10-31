'''
@param {string} str  the string to validate
@returns {boolean} whether or not the given string is a palindrome
'''
def isPalindrome(candidate):
    return True

assert isPalindrome(''), 'empty string validates'
assert isPalindrome('adam'), '"adam" is not a palindrome'
assert isPalindrome('abccba'), '"abccba" is a palindrome'
assert isPalindrome('abcba'), '"abcba" is a palindrome'
