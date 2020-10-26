const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Natalia", "Natalia");
assertEqual("cookies", "cookies:D");
assertEqual(4, 4);
assertEqual(7976653, 897);