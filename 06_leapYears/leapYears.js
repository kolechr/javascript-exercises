const leapYears = function(year) {
    // Check if the year is divisible by 4 && only 400
    if (year % 4 !== 0 && year % 400 !== 0) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;
