//return the first key for which the callback returns a truthy value
const findKey = function(sourceObject, callback) {

  const keys = Object.keys(sourceObject);
  
  for (const key of keys) {
    if (callback(sourceObject[key])) {
      return key;
    }
  }
};

module.exports = findKey;