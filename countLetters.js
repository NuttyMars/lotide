//count all letters in a string ignoring spaces

const countLetters = function(sentence) {
  let letterCount = {};
  for (const letter of sentence) {
    //we ignore spaces
    if (letter !== ' ') {
      //if the key exists increase its count value
      if (letterCount[letter]) {
        letterCount[letter]++;
        //if the key does not exist add it, with a count of one
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;