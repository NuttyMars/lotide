//function that returns the middle element/elements of an array

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

module.exports = middle;