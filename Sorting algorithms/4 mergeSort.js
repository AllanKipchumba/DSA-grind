/**
 * Created in 1945 by John Von Neumann using divide and conquer.
 * This algorithm is a combination of 3 things, splitting, merging and sorting. 
 * It exploits the fact that arrays of 0 or 1 elements are always sorted
 * It works by decomposing an array into smaller arrays of 0 or 1 elements, then building
 * up a newly sorted array
 * 
Divide and Conquer:
Break the array into two halves recursively until each sub-array has only one element.

Merge:
Combine two sorted sub-arrays into a single sorted array.
Repeat this process until the entire array is sorted.

Merge Function:
Compare elements from two sub-arrays and merge them into a temporary array in sorted order.

Time Complexity:
O(n log n) in the worst, average, and best cases.

Space Complexity:
O(n) additional space is required for the temporary array during the merging process.
 */

//merge function => The merge function merges two sorted arrays into a single sorted array,
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

//the mergeSort function divides the input array recursively and then merges the sorted halves.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

/**
 * CAVEATS
 * When working with large datasets, the above implementation may lead to increased memory usage
 *  and affect the overall performance of the algorithm.
 */
