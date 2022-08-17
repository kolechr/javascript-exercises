const reverseString = function(str) {
    // Split string into an array
    const charArray = str.split('');
    // Reverse the array
    const reversedChar = charArray.reverse();
    // Join the elements
    const reversedString = reversedChar.join('');
    // Return the reversed string
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
