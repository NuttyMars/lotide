const assert = require('chai').assert;
const findKey = require('../findKey');

const myObject = {
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
};

describe('#findKey', function() {

  it ('returns first key that has 2 stars associated to it', function() {
    assert.strictEqual(findKey(myObject, x => x.stars === 2), 'noma');
  });

  it ('returns first key that has 3 stars associated to it', function() {
    assert.strictEqual(findKey(myObject, x => x.stars === 3), 'Akaleri');
  });

  it ('returns undefined when number of stars cannot be found', function() {
    assert.strictEqual(findKey(myObject, x => x.stars === 0), undefined);
  });

});