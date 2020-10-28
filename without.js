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


const assertEqualArrays = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    return (`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    return (`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

const without = function(source, itemsToRemove) {
  let extractedArray = [];
  //if arrays are equal, return empty array
  if (eqArrays(source, itemsToRemove)) {
    return extractedArray;
  } else {
  //loop through arrays to determine which elements to push
    for (let i = 0; i < source.length; i++) {
      //suppose the elements of the two arrays are not equal, change value if they are
      let elementsAreSame = false;
      for (let j = 0; j < itemsToRemove.length; j++) {
        if ((source[i] === itemsToRemove[j])) {
          elementsAreSame = true;
          break;   //once we found one pair that changes the value there's no need to check further
        }
      }
      if (elementsAreSame === false) {
        extractedArray.push(source[i]);
      }
    }
    return extractedArray;
  }
};

console.log(assertEqualArrays(without([1, 2, 3], [1, 2, 3]), []));

console.log(assertEqualArrays(without([1, 2, 3], [1]), [2, 3]));

console.log(assertEqualArrays(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']));
