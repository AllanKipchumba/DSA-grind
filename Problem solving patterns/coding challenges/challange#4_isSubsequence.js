/**
 * 
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second 
string. In other words, the function should check whether the characters in the first 
string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

/*
##########################
       solution 1
#########################
*/

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

/*
##########################
       solution 2
#########################
*/
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  return i === str1.length; // If all characters in str1 were found, return true; otherwise, return false.
}
