/**
 * capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array.
 */

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(array) {
  if (array.length === 0) return [];

  const capitalizeFirstArray = array[0][0].toUpperCase() + array[0].slice(1);

  const capitalizeRestOfArray = capitalizeFirst(array.slice(1));

  return [capitalizeFirstArray, ...capitalizeRestOfArray];
}
