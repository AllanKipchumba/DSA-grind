/**
 * With pure recursion, a function calls itself to solve a
 * problem without relying on any additional helper function
 * or using data structures as arrays or lists to keep track
 * of intermediate results.
 */

/**
 * EXAMPLE #1
 * write a function collectOddValues that takes in an array of numbers and
 * returns the odd values
 */

function collectOddValues(arr) {
  let oddValues = [];

  if (arr.length === 0) return oddValues; //base case

  if (arr[0] % 2 !== 0) {
    oddValues.push(arr[0]);
  }

  oddValues = oddValues.concat(collectOddValues(arr.slice(1)));
  return oddValues;
}
