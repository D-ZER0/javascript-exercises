const removeFromArray = function(array, ...args) {
    let result = array
    // const args = Array.from(arguments);
    for (arg of arguments) {
        if (result.includes(arg)) {
            let i = result.indexOf(arg);
            result.splice(i, 1);
        }
    }
return result;


};

// removeFromArray([1,2,3,4], 3)

// Do not edit below this line
module.exports = removeFromArray;
