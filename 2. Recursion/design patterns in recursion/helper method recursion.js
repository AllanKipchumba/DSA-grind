/**
 * Helper method encapsulates the recursive logic within the helper function
 * while providing a simpler, more user friendly interface in the primary function.
 *
 * primary function - Is called by the external code and receives the input parameters
 * helper function - Recursive function that solves the problem
 */

/**
 * EXAMPLE #1
 * write a function collectOddValues that takes in an array of numbers and
 * returns the odd values
 */

function collectOddValues(arr) {
  let oddValues = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return; //base case

    if (helperInput[0] % 2 !== 0) {
      oddValues.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return oddValues;
}
