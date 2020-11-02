const middle = require('../middle');
const assert = require('chai').assert;

describe ('#middle', function() {

  it('returns empty array when given a single element array', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('returns empty array when passed an array with two elements', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns an array with one element for arrays with odd number of elements', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns an array with two elements for arrays with even number of elements', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it('returns array with same type of value and one element(odd length)', function() {
    assert.deepEqual(middle([1, 2, '3', 4, 5]), ['3']);
  });

  it('returns array with same type of value and two elements(even length)', function() {
    assert.deepEqual(middle([1, 2, 3, 'four', '5', 6, 7, 8]), ['four', '5']);
  });
});
