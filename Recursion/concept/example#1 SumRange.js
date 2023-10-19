/**
 * write a function sumRange that finds the sum of numbers within a range
 *
 * for example
 * range 4 ; sum is 4+3+2+1
 * range 3 ; sum is 3+2+1
 */

/**
 * ####################################
 * solution 1 - iterative solution
 * ####################################
 */
function sumRange(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total += i;
  }
  return total;
}

/**
 * ####################################
 * solution 2 - Recursive solution
 * ####################################
 */

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
