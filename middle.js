//function that returns the middle element/elements of an array

const middle = function(array) {
  // arrays with one or two elements have no middle
  // arrays with odd number of elements will return one element
  // arrays with even number of elements will return two elements

  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 1) {
    const indexOfMiddleElement = Math.floor(array.length / 2);
    return [array[indexOfMiddleElement]];

  } else if (array.length % 2 === 0) {
    const indexAtHalfLength = array.length / 2;
    return [array[indexAtHalfLength - 1], array[indexAtHalfLength]];
  }
};

module.exports = middle;