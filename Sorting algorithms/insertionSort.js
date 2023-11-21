/**
 * It builds up a sorted array by gradually creating a larger left half which is always sorted
 *
 * This algorithm builds the final sorted array one element at a time. It iterates through the
 * input array, removing one element at a time and inserting it into its correct position in the
 * sorted part of the array.
 *
 * Inserion sort builds a sorted array by taking one element at a time
 * and inserting it into its correct position with the already sorted part
 * of the array.
 */

//implementation

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    //comparison with the sorted portion of the array and shifting
    while (j >= 0 && arr[j] > currentElement) {
      //shift the larger value to the right
      arr[j + 1] = arr[j];
      j--;
    }

    //insertion => insert current element into its correct sorted position in the array
    //the position just to the right of the last shifted element
    arr[j + 1] = currentElement;
  }
  return arr;
}
/**
 * initial array [5,2,9,1,5]
 * iteration 1: current element = 2
 *              compare 5,2; 5 > 2; shift 5 right
 *              updated array: [2,5,9,1,5]
 *
 * iteration 2: current element = 9
 *              compare 5, 9; 5 !> 9; no shift
 *              updated array: [2,5,9,1,5]]
 *
 * iteration 3: current element = 1
 *              compare 9,1; 9 > 1; shift 9 right
 *              compare 5,1; 5 > 1; shift 5 right
 *              compart 2,1; 2 > 1; shift 2 right
 *              updated array: [1,2,5,9,5]
 *
 * iteration 4: current element 5
 *              compare 9,5; 9 > 5; shift 9 right
 *              updated array: [1,2,5,5,9]
 */
