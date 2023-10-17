/**
Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum possible for ‘k’ consecutive 
elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700
*/

//BRUTE FORCE APPROACH: iterate through all windows of size k
function maxSubarraySum_BF(arr, k) {
  if (k > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let temp = 0;
    for (let j = 0; j < k; j++) {
      temp += arr[i + j];
    }
    max = Math.max(max, temp);
  }

  return max;
}

maxSubarraySum_BF([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

/*
Now notice that having computed the sum of 1st window (size k), 
in order to get the sum of the next overlapping window we just need 
to leave out the leftmost item value and add the new (rightmost) item’s 
value, so we are essentially saving the re-computation of the sum for the
non-changing part of the window.
*/

//SLIDING WINDOW APPROACH
function maxSubarraySum_SW(arr, k) {
  if (k > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum_SW([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19
