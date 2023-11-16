/** NAIVE STRING SEARCH ALGORITH FOR PATTERN SEARCHING
 * Naive string search is a simple pattern searching algorithm that systematically
 * compares a pattern with substrings of a longer text, character by character.
 * It checks for a match at each position in the text and increments a counter
 * for each occurence of the pattern.
 *
 * String matching involves finding all occurences of a pattern in a given text
 */

function NaiveStringSearch(text, pattern) {
  let count = 0;
  //print all occurences of `pattern` in `text`
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== text[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}
