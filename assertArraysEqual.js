const eqArrays  = require('./eqArrays');

// takes in two arrays and logs whether they are equal or not using the eqArrays function

const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

module.exports = assertEqualArrays;