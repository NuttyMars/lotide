const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', function() {

  it ('returns correct key when value exists inside object', function() {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it ('returns undefined when value does not exist inside object', function() {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});