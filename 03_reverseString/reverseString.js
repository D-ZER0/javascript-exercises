function reverseString(string) {
    let characters = string.split("")
    let n = characters.length
    let result = ""
    for (let i = n-1; i >= 0; i--) {
         result = result.concat(characters[i])
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
