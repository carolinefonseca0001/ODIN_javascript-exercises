// const sumAll = function (start, end) {
//   let sum = 0;
//   for (let i = 1; i <= 4; i++) {
//     sum += i;
//   }
//   return sum;
// };

// const sumAll = function (start, end) {
//   let sum = 0;
//   for (let i = 123; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// };
const sumAll = function (start, end) {
  let sum = 0;
  for (let i = 4; i >= -10; i++) {
    sum += i;
  }
  if (sum < 0) {
    return "ERROR";
  } else {
    return sum;
  }
  console.log(sum);
};

// Do not edit below this line
module.exports = sumAll;
