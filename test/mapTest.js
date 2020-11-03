const assert = require('chai').assert;
const map = require('../map');

describe('#map', function() {

  context ('returns the correct output', function() {

    it ('when callback = word => word[0], returns first letter of each word', function() {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = word => word[0];

    assert.deepEqual(map(input, callback), ['g', 'c', 't', 'm', 't']);
    });

    it ('when callback = number => Math.floor(number / 2), will half each number in the array and return the result rounded down', function() {
      const input = [5, 8, 12, 9, 13, 45, 6, 1475369854];
      const callback = number => Math.floor(number / 2);

      assert.deepEqual(map(input, callback), [2, 4, 6, 4, 6, 22, 3, 737684927]);
    });
  
    it ('returns expected message according to conditions inside callback function', function() {
      const input = [
        {
          type: 'declaration',
          dimension: 'long',
          beforeES6: true,
          takesNames: true
        },
        {
          type: 'expression',
          dimension: 'medium',
          beforeES6: true,
          takesNames: true
        },
        {
          type: 'arrow',
          dimension: 'short',
          beforeES6: false,
          takesNames: false
        }
      ];;
      const callback = (func) => {
        if (func.beforeES6) {
          return 'Learn arrow functions!';
        } else {
          return 'Rockin\' it!';
        }
      };

      assert.deepEqual(map(input, callback), ['Learn arrow functions!', 'Learn arrow functions!', 'Rockin\' it!' ]);
    });

  });

  context ('returns [] when input is falsy, no matter the callback', function() {

    it('returns [] when input is ""', function() {
      const input = '';
      const callback = () => console.log('I want this message printed');

      assert.deepEqual(map(input, callback), []);
    });

    it('returns [] when input is []', function() {
      const input = [];
      const callback = () => console.log('I want this message printed');

      assert.deepEqual(map(input, callback), []);
    });
  });
});