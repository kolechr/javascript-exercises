const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	const totalSum = nums.reduce((total, num) => {
    return total += num;
  }, 0);
  return totalSum;
};

const multiply = function(nums) {
  const totalProduct = nums.reduce((total, num) => {
    return total *= num;
  }, 1);
  return totalProduct;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  let factorial = 1;
  if (num !== 0) {
    for (let i = num; i > 0; i--) {
      factorial *= i;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
