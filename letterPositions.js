//returns indexes at which a certain letter is found inside a string

const letterPositions = function(sentence) {

  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];

    //ignoring spaces
    if (letter !== ' ') {

      //if the key doesn't exist, add it to object
      //its value will be an array containing current index
      if (!results[letter]) {
        results[letter] = [i];

        //if it does exist, push the new index
      } else {
        results[letter].push(i);
      }
    }
  }
  
  return results;
};

module.exports = letterPositions;