/*
Implement a function called countUniqueValues which accepts a sorted array, and counts the
unique values in the array. There can be unique numbers in the array but they will always be sorted.
                countUniqueValues([1,1,1,1,2]) //2
                countUniqueValues([1,2,2,4,5,3]) //5
                countUniqueValues([]) //0
*/

function countUniqueValues(arr) {
    let i = 0;

    for(let j = 1; j < arr.length; j++) {
        if( arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}

countUniqueValues([1,2,2,4,5,3])