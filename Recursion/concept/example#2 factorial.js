/**
 * Write a function factorial that returns the factorial of a number
 */

/**
 * ####################################
 * solution 1 - iterative solution
 * ####################################
 */
function factorial(num) {
  let total = 1;

  for (i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

/**
 * ####################################
 * solution 2 - Recursive solution
 * ####################################
 */

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
