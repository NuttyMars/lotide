const middle = require('../middle');
const assertEqualArrays = require('../assertArraysEqual');

//make sure the middle function is returning the good values
console.log(assertEqualArrays(middle([1]), []));
console.log(assertEqualArrays(middle([1, 2]), []));
console.log(assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertEqualArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
console.log(assertEqualArrays(middle([1, 2, '3', 4, 5]), ['3']));
console.log(assertEqualArrays(middle([1, 2, 3, 'four', '5', 6, 7, 8]), ['four', '5']));