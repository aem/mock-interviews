'''
@param {string} str  the string to validate
@returns {boolean} whether or not the given string has only matching parentheses
 '''
def parensMatch(candidate):
    return False

assert parensMatch(''), 'empty string validates'
assert not parensMatch('['), 'single bracket doesnt match'
assert parensMatch('[()]'), '[()] works'
assert parensMatch('[()[]]'), '[()[]] works'
assert not parensMatch('[()[]]]'), '[()[]]] doesnt work'
