const assert = require('assert');
const escapeChars = require('.');

describe('escapeChars', function () {
  it('should escape a single character', function () {
    const specialChars = ['+', '-', '=', '>', '<', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':', '/',]
    const escapedString = escapeChars('$2a$10$KNgGQwxmjyEa4aQTdsOJwO7HUd6FfiFQ2e/2F6XJQh1PeZjWlEbmK', specialChars);
    assert(escapedString, '$2a$10$KNgGQwxmjyEa4aQTdsOJwO7HUd6FfiFQ2e\/2F6XJQh1PeZjWlEbmK')
  })
  it('should escape two consecutive special characters', function () {
    const specialChars = ['+', '-', '=', '>', '.', '!', '(', ')', '{', '}', '[', ']', '^', '"', '~', '*', '?', ':', '\\', '/',]
    const escapedString = escapeChars('$2a$10$!NgGQwxmjy..4aQTdsOJw\\O7HUd6FfiFQ2e/2F6XJQh1PeZjWlEbmK', specialChars);
    assert(escapedString, '$2a$10$\!NgGQwxmjy\.\.4aQTdsOJw\\O7HUd6FfiFQ2e\/2F6XJQh1PeZjWlEbmK')
  })
});
