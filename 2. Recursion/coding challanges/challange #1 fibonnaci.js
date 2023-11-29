/**
 * fib
Write a recursive function called fib which accepts a number and returns the 
nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is 
the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
 and where every number thereafter is equal to the sum of the previous two 
 numbers
 */

// Recursive solution - high time complexity for large n
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//iterative solution - more efficient
function fib(n) {
  let fib1 = 1;
  let fib2 = 1;
  let fibN = 0;

  for (i = 3; i <= n; i++) {
    fibN = fib1 + fib2;

    fib2 = fibN;
    fib1 = fib2;
  }

  return fibN;
}
