const ftoc = function(fah) {
  const celcius = Math.round(((fah - 32) * (5 / 9)) * 10) / 10;
  return celcius;
};

const ctof = function(cel) {
  const fahrenheit = Math.round(((cel * (9 / 5)) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
