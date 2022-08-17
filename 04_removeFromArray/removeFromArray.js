const removeFromArray = function(numArr, ...targets) {
    // Convert target values into array-like
    const targetArr = [...targets];
    // Loop through the target array to remove matched value
    for (const target of targets) {
        // Loop through the number array to compare both values
        for (let i = 0; i < numArr.length; i++) {
            // If both values are the same then remove from the list
            if (numArr[i] === target) {
                numArr.splice(i, 1);
            }
        }
    }
    return numArr;
};

// Do not edit below this line
module.exports = removeFromArray;
