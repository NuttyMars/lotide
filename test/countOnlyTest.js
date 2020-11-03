const assert = require('chai').assert;
const countOnly = require('../countOnly')

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', function() {

  it ('returns correct result when searching for existing name through array', function() {
    assert.strictEqual(result1["Jason"], 1);
  });

  it ('returns undefined when searching for non-existing name through array', function() {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it ('returns correct result when searching for existing name through array', function() {
    assert.strictEqual(result1["Fang"], 2);
  });

  it ('returns undefined when input name is flagged false inside search object', function() {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});