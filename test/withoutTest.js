const assert = require('chai').assert;
const without = require('../without')

describe('#without', function() {

  it ('returns empty array when arrays are equal', function() {
    assert.deepEqual(without([1, 2, 3], [1, 2, 3]), [])
  });

  it ('returns difference when arrays are not equal (same type values)', function() {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3])
  });
  
  it ('returns difference when arrays are not equal (different type values)', function() {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2'])
  });
});