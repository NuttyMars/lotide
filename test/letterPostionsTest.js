const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', function() {

  it ('returns array with multiple elements when letter is present multiple times (capital)', function() {
    assert.deepEqual(letterPositions('LHL')['L'], [0, 2]);
  });

  it ('returns array with one element when letter is present one time', function() {
    assert.deepEqual(letterPositions('L HL')['H'], [2]);
  });

  it ('returns array with multiple elements when letter is present multiple times (lower case)', function() {
    assert.deepEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
  });

  it ('returns undefined when letter is " " ', function() {
    assert.deepEqual(letterPositions('lighthouse in the house')[' '], undefined);
  });

  it ('returns undefined when letter is undefined ', function() {
    assert.deepEqual(letterPositions('lighthouse in the house')[''], undefined);
  });

});