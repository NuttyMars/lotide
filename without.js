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
    console.log(`🟩 Assertion Passed: ${arrayOne} === ${arrayTwo} in data types and length\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${arrayOne} !== ${arrayTwo} in data types or length\n`);
  }
};

const without = function(source, itemsToRemove) {
  let extractedArray = [];
  //if arrays are equal, return empty array
  if (eqArrays(source, itemsToRemove)) {
    console.log(`${extractedArray} is empty`);
    return extractedArray;
  } else {
  //loop through arrays
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if ((source[i] !== itemsToRemove[j])) {
          extractedArray.push(source[i]);
        }
      }
    }
    return extractedArray;
  }
}

//console.log(without([1, 2, 3], [1, 2, 3]));
//console.log(without([1, 2, 3], [1]));
console.log(without(['1', '2', '3'], [1, 2, '3']));
//console.log(eqArrays(['1', '2', '3'], [1, 2, '3']));
