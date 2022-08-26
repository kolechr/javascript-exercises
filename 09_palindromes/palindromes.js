const palindromes = function (str) {
    const newStr = str.toLowerCase().replace(/[^a-z]/g, "");
    const reversedChar = newStr.split("").reverse().join("");
    if (newStr === reversedChar) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
