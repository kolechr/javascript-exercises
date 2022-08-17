const removeFromArray = function(numArr, target) {
    // Convert target values into array-like
    // Loop through the target array
    for (let i = 0; i < numArr.length; i++) {
        // If both values are the same then remove from the list
        if (numArr[i] === target) {
                numArr.splice(i, 1);
        }
    }
    return numArr;
};

// Do not edit below this line
module.exports = removeFromArray;
