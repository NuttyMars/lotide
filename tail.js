
// return final elements of an array (exclude the head) without modifying the original array

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;