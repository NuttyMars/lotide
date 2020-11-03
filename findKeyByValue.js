//value is a string that we look for in sourceObject
//we return the first key inside the object that contains the given value

const findKeyByValue = function(sourceObject, value) {
  
  const keys = Object.keys(sourceObject);
  for (const key of keys) {
    if (sourceObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;