const convertToCelsius = function (temp) {
  let a = (temp - 32) * 0.55555555555;
  let b = a.toFixed(1);
  let roundedBAsNumber = parseFloat(b);
  return roundedBAsNumber;
};

const convertToFahrenheit = function (fahrenheit) {
  let c = fahrenheit * 1.8 + 32;
  let d = c.toFixed(1);
  let roundedCAsNumber = parseFloat(d);
  return roundedCAsNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
