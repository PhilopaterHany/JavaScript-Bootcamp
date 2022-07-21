// Use Filter And Map and Anything You Want To Get The Output

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invNums = numsAndStrings
  .filter((el) => (typeof el === "number"))
  .map((el) => (-el));

console.log(invNums); // Output => [-1, -10, 10, 20, -5, -3]
