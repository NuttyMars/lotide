//determines whether two inputs are equal in value and type
//function built in assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

//value is a string that we look for in sourceObject
//we return the first key inside the object that contains the given value
const findKeyByValue = function(sourceObject, value) {
  const keys = Object.keys(sourceObject);
  for (const key of keys) {
    if (sourceObject[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);