//function built in eqArrays.js file
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

//logs if two arrays are equal or not
//function built in assertEqualArrays.js file
const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return (`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    return (`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

const middle = function(array) {
  // arrays with one or two elements have no middle
  if (array.length <= 2) {
    return [];
  }
  // arrays with odd number of elements will return one element
  else if (array.length % 2 === 1) {
    // find index of middle element:
    // half of length rounded down, since array index starts at 0
    const indexOfMiddleElement = Math.floor(array.length / 2);
    // return element inside its own array
    return [array[indexOfMiddleElement]];
  }
  // arrays with even number of elements will return two elements
  else if (array.length % 2 === 0) {
    // index of middle elements will be at half length and one below
    const indexAtHalfLength = array.length / 2;
    // return the two elements inside and array
    return [array[indexAtHalfLength - 1], array[indexAtHalfLength]];
  }
}

//make sure the middle function is returning the good values
console.log(assertEqualArrays(middle([1]), []));
console.log(assertEqualArrays(middle([1, 2]), []));
console.log(assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertEqualArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));
console.log(assertEqualArrays(middle([1, 2, '3', 4, 5]), ['3']));
console.log(assertEqualArrays(middle([1, 2, 3, 'four', '5', 6, 7, 8]), ['four', '5']));