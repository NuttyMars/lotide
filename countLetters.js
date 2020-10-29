//determines whether two inputs are equal in value and type
//function built in assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const countLetters = function(sentence) {
  let letterCount = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

assertEqual(countLetters('LHL')['L'], 2);
assertEqual(countLetters('LHL')['j'], undefined);
assertEqual(countLetters('lighthouse in the house')[' '], undefined);
assertEqual(countLetters('lighthouse in the house')['h'], 4);