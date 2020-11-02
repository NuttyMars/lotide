const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assertEqualArrays = require('../assertArraysEqual');

const wordsArray = ["Hello", "Lighthouse", "Labs"];
const numbersArray = [1, 2, 3, 4, 5, 6];
const oneElementArray = ['🥦'];
const emptyArray = [];

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