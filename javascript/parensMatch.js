const { assert } = require('./test-utils');

function parensMatch(str) {}

assert(isPalindrome(''), true, 'empty string validates');
assert(isPalindrome('['), false, 'single bracket doesnt match');
assert(isPalindrome('[()]'), true, '[()] works');
assert(isPalindrome('[()[]]'), true, '[()[]] works');
assert(isPalindrome('[()[]]]'), true, '[()[]]] doesnt work');
