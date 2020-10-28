//takes in two arrays to see if they are equal
//function built in eqArrays.js file (with comments)
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  let areEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

// takes in two arrays and logs whether they are equal or not using the eqArrays function
const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

assertEqualArrays([1, 2], [1, 2]);
assertEqualArrays([1, 2, 3], [1, 2]);
assertEqualArrays([1, '2'], [1, 2]);