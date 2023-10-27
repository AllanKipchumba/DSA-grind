/** 
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(string) {
  function reverseString(inputString) {
    if (inputString.length <= 1) return inputString;
    return reverseString(inputString.slice(1)) + inputString[0];
  }

  let stringReverse = reverseString(string);

  return stringReverse === string ? true : false;
}
