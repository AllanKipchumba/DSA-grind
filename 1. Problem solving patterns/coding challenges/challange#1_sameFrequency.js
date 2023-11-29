/**
 * Write a function called sameFrequency. Given two positive integers, find out if 
 * the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  const lookUp = {};

  const num1Arr = String(num1).split('');
  const num2Arr = String(num2).split('');

  for (let i of num1Arr) {
    lookUp[i] = (lookUp[i] || 0) + 1;
  }

  for (let i of num2Arr) {
    if (!lookUp[i]) {
      return false;
    } else {
      lookUp[i] -= 1;
    }
  }

  return true;
}
