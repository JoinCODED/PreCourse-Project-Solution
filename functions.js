/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node assessment.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
function sumOdds(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    if (num % 2 !== 0) sum += num;
  });
  return sum;
}

/**
 * characterCount(string, c):
 * - receives a string and a character
 * - returns the number of times `c` occurs in the string
 * - note: this has to be case-insensitive
 *
 * e.g.
 * characterCount("Michael Stephenson", "e") -> 3
 * characterCount("Character Count is clever", "c") -> 4
 *
 * Hint: Use string methods to make it case-insensitive
 */
function characterCount(string, c) {
  const counter = [...string].filter(
    (char) => char.toLowerCase() === c.toLowerCase()
  ).length;
  return counter;
}

/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 *
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {
  let largest = 0;
  numbers.forEach((number, idx) => {
    const diff = numbers[idx + 1] - number;
    if (diff > largest) largest = diff;
  });
  return largest;
}

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  const index = numbers.indexOf(x);
  return numbers.slice(index + 1);
  // return numbers.slice(numbers.indexOf(x) + 1);
}

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
}

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  return string === string.toUpperCase();
}

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 * Hint: Use string method .toUpperCase()
 */
function elementInArray(numbers, x) {
  return numbers.includes(x);
}

// console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));
// console.log(characterCount("Character Count is clever", "c"));
// console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));
// console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(abbreviate("misds", "Sfss"));
// console.log(isUpperCase("JCREW"));
// console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
