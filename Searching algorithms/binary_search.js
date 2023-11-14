/**
 * 
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and 
returns the index at which the value exists. Otherwise, return -1.

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
 */

function binarySearch(arr, val) {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
}
