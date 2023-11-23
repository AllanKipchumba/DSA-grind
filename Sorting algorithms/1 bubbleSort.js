/**BUBBLE SORT
 * Bubble sort is a simple sorting algorithm that repeatedly steps through a
 * list, compares adjacent elements and swaps them if they are in the wrong
 * order. The pass through the list is repeated untill the list is sorted.
 *
 * This algo gets its name because the largest element bubbles up to the top
 *
 * Bubble Sort is not the most efficient sorting algorithm, especially for
 * large datasets, as its average and worst-case time complexity is O(n^2)
 */

//IMPLEMENTATION
function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

/**
 * The variable noSwap is used to keep track of whether any swaps were made in
 * the inner loop. If no swaps are made during a pass through the array, it
 * means the array is already sorted and the sorting process can be terminated
 * early
 *
 * The outer loop is used to keep track of the number of elements left to be
 * sorted in each pass through the array. The loop continues unitll i is no
 * longer greater than 0 meaning that the entire array is sorted.
 *
 * Each iteration of the outer loop represents one pass through the array. In
 * each pass, the largest unsorted element "bubbles up" to its correct position,
 *  which is at the end of the array. After the first pass, the largest element
 * is guaranteed to be in its correct position. After the second pass, the
 * second largest element is in its correct position, and so on.
 */
