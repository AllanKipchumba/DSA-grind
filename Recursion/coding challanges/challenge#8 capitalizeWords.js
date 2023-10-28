/**
 * 
capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, 
return a new array containing each word capitalized.
 */

function capitalizeWords(array) {
  //if array is empty, break out
  //loop through first array
  //capitalize words
  //recursively loop through rest of array
  //return result

  if (array.length === 0) return [];

  let string = '';

  for (let char of array[0]) {
    string = string.concat(char.toUpperCase());
  }

  let capitalizeRestOfArray = capitalizeWords(array.slice(1));

  return [string, ...capitalizeRestOfArray];
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
