const sumAll = function(numOne, numTwo) {
    // Declare variable to store sum
    let sum = 0;
    // If one or both of args are negative, then return 'ERROR'
    if (numOne < 0 || numTwo < 0) {
        return 'ERROR'
    }
    // If one or both of args are non a number, then return 'ERROR'
    else if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
        return 'ERROR'
    }
    else {
        // If numTwo less than numOne, then start fron numTwo
        if (numTwo < numOne) {
            // Loop to increment the sum by i until it's reach numTwo
            for (let i = numTwo; i <= numOne; i++) {
                sum += i;
            }
        }
        // Else, loop to increment the sum by i until it's reach numTwo
        for (let i = numOne; i <= numTwo; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
