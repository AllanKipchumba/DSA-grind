/** SELECTION SORT
 * Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum
 * element from the unsorted part of the array and putting it at the beginning. The algorithm
 *  divides the array into a sorted and an unsorted region. In each iteration, it selects the
 *  smallest element from the unsorted region and swaps it with the first element of the
 * unsorted region. This process is repeated until the entire array is sorted.
 *
 * Big O: O(n^2)
 * not very efficient for large datasets.
 */

//Implementation

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
    }
  }
  return arr;
}
