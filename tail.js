const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const wordsArray = ["Hello", "Lighthouse", "Labs"];
const numbersArray = [1, 2, 3, 4, 5, 6];
const oneElementArray = ['🥦'];
const emptyArray = [];

tail(wordsArray);
tail(numbersArray);
tail(oneElementArray);
tail(emptyArray);

assertEqual(wordsArray.length, 3);
assertEqual(numbersArray.length, 6);
assertEqual(oneElementArray.length, 1);
assertEqual(emptyArray.length, 0);

assertEqual(tail(wordsArray).length, wordsArray.length - 1);
assertEqual(tail(numbersArray).length, numbersArray.length - 1);
assertEqual(tail(oneElementArray).length, oneElementArray.length - 1);
assertEqual(tail(emptyArray).length, 0);