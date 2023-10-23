/**
 * 
flatten
Write a recursive function called flatten which accepts an array of arrays and
 returns a new array with all values flattened
 */

function flatten(oldArray) {
  let newArray = [];

  for (let i = 0; i < oldArray.length; i++) {
    if (Array.isArray(oldArray[i])) {
      newArray = newArray.concat(flatten(oldArray[i]));
    } else {
      newArray.push(oldArray[i]);
    }
  }
  return newArray;
}
