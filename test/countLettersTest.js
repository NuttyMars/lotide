const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', function() {

  it ('returns number of letters when letter exists in string (capital)', function() {
    assert.strictEqual(countLetters('LHL')['L'], 2);
  });

  it ('returns undefined when letter does not exist in string', function() {
    assert.strictEqual(countLetters('LHL')['j'], undefined);
  });

  it ('returns undefined when passed a space string', function() {
    assert.strictEqual(countLetters('lighthouse in the house')[' '], undefined);
  });

  it ('returns number of letters when letter exists in string (lower case)', function() {
    assert.strictEqual(countLetters('lighthouse in the house')['h'], 4);
  });

});