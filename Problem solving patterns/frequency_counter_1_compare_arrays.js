/*
Write a function which accepts 2 arrays. The function should return true if every value in 
the first array has its corresponding value squared in the second array. The frequency of 
values must be the same.
*/

function compare(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let counter1 = {}
    let counter2 = {}

    for(i in arr1) {
        let value = arr1[i]
        counter1[value] = (counter1[value] || 0) + 1;
    }

    for (j in arr2) {
        let value = arr2[j]
        counter2[value] = (counter2[value] || 0) + 1
    }

    for (key in counter1) {
        if(!counter2[key ** 2]) return false
        if(counter1[key] !== counter2[key ** 2]) return false
    }
    return true;
}

compare([2,3,4],[4,9,16])