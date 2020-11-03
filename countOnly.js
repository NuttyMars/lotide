// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //looping through array with all items
  for (const item of allItems) {
    //itemsToCount[item] will call on the true or false values of the respective keys
    //we only care about the true values
    if (itemsToCount[item]) {
      //at first loop (and at first iteration over a new value)
      //the value will not exist inside results
      //subsequent instances will increase the counter
      if (results[item]) {
        results[item]++;
        //starts the counter for the values
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;