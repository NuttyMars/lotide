//determines whether two inputs are equal in value and type
//function built in assertEqual.js file
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

//compares objOne and objTwo
//returns true or false, based on a perfect match
const eqObjects = function(objOne, objTwo) {
  //extract keys of both objects into arrays
  const objOneValues = Object.values(objOne);
  const objTwoValues = Object.values(objTwo);
  //if number of keys is different, no need to check further
  if (objOneValues.length !== objTwoValues.length) {
    return false;
  } else {
    //loop through keys of one object
    for (const key in objOne) {
      //avoid comparing primitives when we have arrays
      if (!(objOne[key] instanceof Array) &&
          !(objTwo[key] instanceof Array)) {
        //if either the key is not included in the other object
        if (!Object.keys(objTwo).includes(key) ||
        //or the key values are different
            objOne[key] !== objTwo[key]) {
          //no need to check further
          return false;
        }
      } else {
        //comparing when the two values are arrays
        return eqArrays(objOne[key], objTwo[key]);
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);