const add = function (a, b) {
  let c = a + b;

  return c;
};

const subtract = function (d, e) {
  let f = d - e;

  return f;
};

const sum = function (array) {
  const sumOfArrays = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (j, k) {
  let n = j;
  let power = k;

  return n ** power;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
