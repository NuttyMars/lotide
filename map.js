//function that maps over elements of an array
//takes a  callback

const map = function(arrayToMap, callback) {
  
  const results = [];
  for (let item of arrayToMap) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;