
//determines whether two inputs are equal in value and type
// function built in assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

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

// return final elements of an array (exclude the head) without modifying the original array
const tail = function(array) {
  return array.slice(1);
};

const wordsArray = ["Hello", "Lighthouse", "Labs"];
const numbersArray = [1, 2, 3, 4, 5, 6];
const oneElementArray = ['🥦'];
const emptyArray = [];

// call tail function on various arrays
tail(wordsArray);
tail(numbersArray);
tail(oneElementArray);
tail(emptyArray);

//make sure the original array was not modified
assertEqual(wordsArray.length, 3);
assertEqual(numbersArray.length, 6);
assertEqual(oneElementArray.length, 1);
assertEqual(emptyArray.length, 0);

//make sure the tail function is doing its job
assertEqualArrays(tail(wordsArray), ["Lighthouse", "Labs"]);
assertEqualArrays(tail(numbersArray), [2, 3, 4, 5, 6]);
assertEqualArrays(tail(oneElementArray), []);
assertEqualArrays(tail(emptyArray), []);