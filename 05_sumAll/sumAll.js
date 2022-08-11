const sumAll = function(low, high) {
    if (typeof(low) != "number") {
        return "ERROR"
    } else if (typeof(high) != "number") {
        return "ERROR"
    } else if (low < 0) {
        return "ERROR"
    } else if (high < 0) {
        return "ERROR"
    } else if (low > high) {
        let array = [];
        for (let i = high; i <= low; i++) {
            array.push(i)
        }
        sum = array.reduce((a, b) => a + b, 0)
    } else {
        let array = [];
        for (let i = low; i <= high; i++) {
            array.push(i)
        }
        sum = array.reduce((a, b) => a + b, 0)

    } 
    return sum
};

// Do not edit below this line
module.exports = sumAll;
