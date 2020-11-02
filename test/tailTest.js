const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// const assertEqualArrays = require('../assertArraysEqual');
const assert = require('chai').assert;

const wordsArray = ["Hello", "Lighthouse", "Labs"];
const numbersArray = [1, 2, 3, 4, 5, 6];
const oneElementArray = ['🥦'];
const emptyArray = [];

describe ('#tail', function() {
  context ('does not modify the original array\n' , function() {

    it ('returns 3 when wordsArray is input', function() {
      assert.strictEqual(wordsArray.length, 3);
    });

    it ('returns 6 when numbersArray is input', function() {
      assert.strictEqual(numbersArray.length, 6);
    });

    it ('returns 1 when oneElementArray is input', function() {
      assert.strictEqual(oneElementArray.length, 1);
    });

    it ('returns 0 when emptyArray is input\n', function() {
      assert.strictEqual(emptyArray.length, 0);
    });
  });

  context('function works as expected (returns what it should)\n', function() {

    it('returns ["Lighthouse", "Labs"] when wordsArray is input', function() {
      assert.deepEqual(tail(wordsArray), ["Lighthouse", "Labs"]);
    });

    it('returns [2, 3, 4, 5, 6] when numbersArray is input', function() {
      assert.deepEqual(tail(numbersArray), [2, 3, 4, 5, 6]);
    });
  
    it('returns empty array when oneElementArray is input', function() {
      assert.deepEqual(tail(oneElementArray), []);
    });
  
    it('returns empty array when emptyArray is input', function() {
      assert.deepEqual(tail(emptyArray), []);
    });
  })
});
