/**
 *Like merge sort, quick sort exploits the fact that arrays of 0 aor 1 element are always sorted
  - It works by selecting one element called the pivot and finding the index where the pivot should
    end up in the sorted array by moving all values less than the pivot to its left and greater
    values to its right.
  - Once the pivot is positioned appropriately, quick sort can be applied on either side of the
    pivot

    Summary:
    Quicksort is a widely used sorting algorithm that follows the divide-and-conquer paradigm. 
    Here's a brief explanation:

    Divide:
    Choose a pivot element from the array. The choice of pivot can be arbitrary, but a common 
    strategy is to select the middle element.
    Partition the array into two sub-arrays: elements less than the pivot and elements greater
    than the pivot.
    
    Conquer:
    Recursively apply the same process to the two sub-arrays. Each sub-array is treated 
    independently as a new instance of the quicksort algorithm.
    
    Combine:
    The sorted sub-arrays are combined, resulting in a fully sorted array.
    
    In-Place Sorting:
    Quicksort is often implemented in-place, meaning it doesn't require additional memory for 
    temporary arrays during the sorting process.
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  // swap the pivot from the start to the swap point
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left partition
    quickSort(arr, left, pivotIndex - 1);
    // right partition
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
