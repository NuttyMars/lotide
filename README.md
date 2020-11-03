# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nataliama/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the head (first element) of an arry
* `tail`: returns the tail (all elements except the first) of an array
* `middle`: returns middle element(s) of an array
* `countLetters`: counts the number of letters in a string (ignores spaces)
* `countOnly`: counts how many of certain elements exist in an array based on requirement passed as argument
* `findKey`: returns the first key for which the callback returns a truthy value
* `findKeyByValue`: returns the first key inside an object that contains a given value passed as argument
* `letterPositions`: returns an array of indexes at which a given letter can be found inside a string
* `map`: maps over the elements of an array; takes callback as argument
* `takeUntil`: extracts elements of an array until callback reaches a truthy value
* `without`: takes in two arrays and returns a new one containing elements from the first array that are not in the second one