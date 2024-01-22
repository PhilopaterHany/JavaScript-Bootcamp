let nums = [10, -20, 300, 50, 100, -50];
console.log(Math.max(...nums));
const maxNumber = +nums
  .filter((ele) => (ele >= Math.max(...nums) ? ele : ""))
  .join("");
console.log(maxNumber); // 300
const maxNumber2 = nums.sort((a, b) => a - b)[nums.length - 1];
console.log(maxNumber2); // 300
const maxNumber3 = nums.reduce((acc, curr) => curr);
console.log(maxNumber3); // 300
const maxNumber4 = nums.sort((a, b) => b - a)[0];
console.log(maxNumber4); // 300
