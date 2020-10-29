//determines whether two inputs are equal in value and type
//function built in assertEqual.js file
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

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
}


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);