//takes in two arrays to see if they are equal
//function implemented in eqArrays.js file (with comments)
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

//compares objOne and objTwo => true/false
//function implemented in eqObects.js file (with comments)
const eqObjects = function(objOne, objTwo) {
  const objOneValues = Object.values(objOne);
  const objTwoValues = Object.values(objTwo);
  if (objOneValues.length !== objTwoValues.length) {
    return false;
  } else {
    for (const key in objOne) {
      if (!(objOne[key] instanceof Array) &&
          !(objTwo[key] instanceof Array)) {
        if (!Object.keys(objTwo).includes(key) ||
            objOne[key] !== objTwo[key]) {
          return false;
        }
      } else {
        return eqArrays(objOne[key], objTwo[key]);
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟩 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}\n`);
  }
};

console.log(assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1}));
console.log(assertObjectsEqual({a: 2, b: 1}, {a: 1, b: 2}));