const repeatString = function(word, num) {
    let repeatedString = '';
    let i = 0;

    if (num < 0) {
        return 'ERROR'
    }
    while (i < num) {
        repeatedString += word;
        i += 1;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
