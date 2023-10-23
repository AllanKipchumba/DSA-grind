/** 
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed
to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(string) {
  function helper(helperInput) {
    if (helperInput.length <= 1) return helperInput;
    return helper(helperInput.slice(1)) + helperInput[0];
  }

  let stringReverse = helper(string);

  return stringReverse === string ? true : false;
}
