const repeatString = function(string, number) {
    if (number > -1) {
        let result = "";
        for (let i = 0; i < number; i++) {
            result = result.concat(string)
        }
        return result
    } else {
        return "ERROR"
    }

};

// repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
