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

// takes in two arrays and logs whether they are equal or not
//function built in assertArraysEqual.js
const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

//function that maps over elements of an array
//takes a  callback
const map = function(arrayToMap, callback) {
  const results = [];
  for (let item of arrayToMap) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [5, 8, 12, 9, 13, 45, 6, 1475369854];
const funcs = [
  {
    type: 'declaration',
    dimension: 'long',
    beforeES6: true,
    takesNames: true
  },
  {
    type: 'expression',
    dimension: 'medium',
    beforeES6: true,
    takesNames: true
  },
  {
    type: 'arrow',
    dimension: 'short',
    beforeES6: false,
    takesNames: false
  }
];

//will return first letter of each word
const results1 = map(words, word => word[0]);

//will half each number in the array and return the result rounded down
const results2 = map(numbers, number => Math.floor(number / 2));

//will check if the function type was built before ECMA6 and return a corresponding message
const results3 = map(funcs, (func) => {
  if (func.beforeES6) {
    return 'Learn arrow functions!';
  } else {
    return 'Rockin\' it!';
  }
});

console.log(assertEqualArrays(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertEqualArrays(results2, [2, 4, 6, 4, 6, 22, 3, 737684927]));
console.log(assertEqualArrays(results3, ['Learn arrow functions!', 'Learn arrow functions!', 'Rockin\' it!' ]));


module.exports = map;
