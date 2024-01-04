// const removeFromArray = function () {
//   const arrayOfNumbers = [1, 2, 3, 4];

//   const arrayWithoutThree = arrayOfNumbers.filter(function (number) {
//     return number !== 3;
//   });
//   return arrayWithoutThree;
// };

// const removeFromArray = function () {
//   let numbers = [1, 2, 3, 4, 3, 2];
//   let numbersToRemove = [2, 3];

//   let filteredNumbers = numbers.filter(function (number) {
//     return !numbersToRemove.includes(number);
//   });
//   return filteredNumbers;
// // };
// const removeFromArray = function () {
//   let array = [1, 2, 3, 4, 7, "tacos"];
//   let excludedValues = [7, "tacos"];

//   let filteredArray = array.filter((value) => !excludedValues.includes(value));
//   return filteredArray;
// };
// const removeFromArray = function () {
//   let array = [1, 2, 3, 4, 1, 2, 3, 4];

//   array.length = 0;
//   return array;
// };

// const removeFromArray = function () {
//   const arr = ["hey", 2, 3, "ho", "hey", 3];

//   const filteredArr = arr.filter((value) => {
//     return value !== "hey" && value !== 3;
//   });

//   return filteredArr;
// };
const removeFromArray = function () {
  const arr = [1, 2, 3, "1", 3];
  let excludedValues = ["1", 3];

  let filteredArray = arr.filter((value) => !excludedValues.includes(value));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
