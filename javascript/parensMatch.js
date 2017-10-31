const { assert } = require('./test-utils');

/**
 * @param {string} str  the string to validate
 * @returns {boolean} whether or not the given string has only matching parentheses
 */
function parensMatch(str) {}

assert(parensMatch(''), true, 'empty string validates');
assert(parensMatch('['), false, 'single bracket doesnt match');
assert(parensMatch('[()]'), true, '[()] works');
assert(parensMatch('[()[]]'), true, '[()[]] works');
assert(parensMatch('[()[]]]'), true, '[()[]]] doesnt work');
