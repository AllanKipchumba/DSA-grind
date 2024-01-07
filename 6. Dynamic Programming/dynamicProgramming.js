/**
 *      --------------------------------------------
 *                  DYNAMIC PROGRAMMING
 *      --------------------------------------------
 *  - Dynamic programming is a method for solving complex problems by breaking them down
 *    into simpler overlapping subproblems and solving each subproblem only once, storing
 *    the solutions to subproblems to avois redundant computations.
 *
 *  - The key idea behind dynamic programming is to solve a problem by solving its smaller
 *    subproblems first and then combining their solutions to solve the original problem.
 *
 *  - The method is applicable to problems that exhibit the following two properties:
 *
 *             (1) Optimal Substructure
 *            --------------------------
 *   - An optimal solution to the problem can be constructed from optimal solutions of
 *     its subproblems. In other words, if you have the solution to the subproblems,
 *     you can easily combine them to get the solution to the original problem.
 *
 *             (2) Overlapping Subproblems
 *             ---------------------------
 *   - The problem can be broken down into subproblems which are reused several times.
 *     The solutions to these subproblems are often reused rather than recomputed.
 *
 *    -------------------------------------------------------
 *      Dynamic programming can be applied in two main ways:
 *    -------------------------------------------------------
 *           (1) Top-down approach (Memoization)
 *           -----------------------------------
 *   - This approach starts with the original problem and breaks it down into smaller
 *     subproblems. It solves each subproblem only once and stores the solutions in a
 *     table (usually a memoization table or cache) to avoid redundant computations.
 *     This approach is also known as memoization because it involves memorizing the
 *     solutions to subproblems.
 *
 *           (2) Bottom-up approach (Tabulation):
 *           ------------------------------------
 *   - This approach starts by solving the smallest subproblems and iteratively builds up
 *     to the original problem. The solutions to subproblems are stored in a table, and
 *     the table is filled in a bottom-up fashion. This is often more efficient in terms
 *     of both time and space complexity compared to the top-down approach.
 */

//Example - THE FIBONACCI SEQUENCE
//(1) Naive solution - Time complexity of O(2^n)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//(2) Memoized soln - Time complexity of O(n)
function fib_memo(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  const res = fib(n - 1, memo) + fib(n - 1, memo);
  memo[n] = res;
  return res;
}

//(3) Tabualation - Better space complexity than memoization
function fib_table(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
