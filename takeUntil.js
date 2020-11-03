//loops through an array
//takes its elements until callback has truthy value

const takeUntil = function(array, callback) {
  const results = [];
  for (const value of array) {
    if (callback(value) === false) {
      results.push(value);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;