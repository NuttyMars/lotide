const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', function() {

  context ('returns the correct output', function() {

    it ('when callback = (input, x) => x < 0, returns correct array', function() {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback =  x => x < 0;;

    assert.deepEqual(takeUntil(input, callback), [ 1, 2, 5, 7, 2 ]);
    });

    it ('when callback = x => x === ",", returns correct array', function() {
      const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
      const callback = x => x === ',';

      assert.deepEqual(takeUntil(input, callback), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
    });
  });

  context ('returns [] when input is falsy, no matter the callback', function() {

    it('returns [] when input is ""', function() {
      const input = '';
      const callback = () => console.log('I want this message printed');

      assert.deepEqual(takeUntil(input, callback), []);
    });

    it('returns [] when input is []', function() {
      const input = [];
      const callback = () => console.log('I want this message printed');

      assert.deepEqual(takeUntil(input, callback), []);
    });
  });
});