//takes in two arrays to see if they are equal

const eqArrays = function(arrayOne, arrayTwo) {
  //check if lengths are the same, if not no need to check further
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  //loop through both arrays at the same time (lengths are equal, doesn't matter which one we use for looping)
  //assume elements are equal
  let areEqual = true;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      areEqual = false;
    }
  }
  //if elements are different, areEqual changes to false, else it stays true
  return areEqual;
};

module.exports = eqArrays;