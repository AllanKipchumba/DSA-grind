/**
 * Radix sort is a non-comparative integer sorting algorithm that operates by distributing elements
 *  into buckets according to their individual digits. The algorithm processes the digits from the
 * least significant to the most significant, repeatedly distributing the elements into buckets and
 *  then collecting them back in a specific order. This process is repeated for each digit,
 * resulting in a sorted array. Radix sort has linear time complexity, making it efficient for
 *  sorting integers with a fixed number of digits, and it can outperform comparison-based
 * algorithms in certain situations.
 *
 * Steps
 * 1) Initialization
 * Determine the maximum number of digits in the input elements to establish the number of passes
 * needed.
 * Initiaise 10 buckets (0 through 9) for each digit place
 *
 * 2) Passes
 * Starting from the list significant digit, sort the elements into buckets based on that digit.
 * Reorder the elements based on the order of the buckets
 * Repeat this process for each digit place moving towards the most significant digit
 *
 * 3) Final result
 * After processing all the digits, elements are sorted
 */

//       ########### RADIX SORT HELPER FUNCTIONS ###########

//gets a digit in a specified place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//gets the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//gets the number of digits in the largest number in a list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//RADIX SORT
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); //creates a 2D array of length 10
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
