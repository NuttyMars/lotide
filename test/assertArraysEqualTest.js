const assertEqualArrays = require('../assertArraysEqual');

assertEqualArrays([1, 2], [1, 2]);
assertEqualArrays([1, 2, 3], [1, 2]);
assertEqualArrays([1, '2'], [1, 2]);