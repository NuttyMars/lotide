//determines whether two inputs are equal in value and type
//function implemented in assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

//eturn the first key for which the callback returns a truthy value
const findKey = function(sourceObject, callback) {
  const keys = Object.keys(sourceObject);
  for (const key of keys) {
    if (callback(sourceObject[key])) {
      return key;
    }
  }
};

const myObject = {
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
};

console.log(assertEqual(findKey(myObject, x => x.stars === 2), 'noma'));
console.log(assertEqual(findKey(myObject, x => x.stars === 3), 'Akaleri'));
console.log(assertEqual(findKey(myObject, x => x.stars === 0), undefined));

module.exports = findKey;