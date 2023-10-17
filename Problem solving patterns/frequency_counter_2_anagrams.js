/*
Given 2 strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, 
formed from iceman.
*/
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let lookup = {}

    for (let i in str1) {
        let letter = str1[i]
        // if letter exists, incerement otherwise set to 1
        lookup[letter] = (lookup[letter] || 0) + 1;
    }

    for (let i in str2) {
        let letter = str2[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true

}

validAnagram("cat", "act")
