// let string = "hey";
// const repeatString = function (string, num) {
//     i = 0; i++;
//   if (i===3) {
// return ${string}*num
//   }

const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
// Do not edit below this line
module.exports = repeatString;
