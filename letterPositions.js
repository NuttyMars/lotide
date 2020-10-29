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

const letterPositions = function(sentence) {
  const results = {};
  const arrayOfIndexes = [];
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //ignoring spaces
    if (letter !== ' ') {
      //if the key doesn't exist, add it to object
      //its value will be an array containing current index
      if (!results[letter]) {
        results[letter] = [i];
        //if it does exist, push the new index
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

//console.log(letterPositions('LHL'));
assertEqualArrays(letterPositions('LHL')['L'], [0, 2]);
assertEqualArrays(letterPositions('L HL')['H'], [2]);
assertEqualArrays(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
assertEqualArrays(letterPositions('lighthouse in the house')['e'], [9, 16, 22]);