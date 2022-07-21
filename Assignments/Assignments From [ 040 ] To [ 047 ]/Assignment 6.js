let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
// Start Of Your Code
let allArrs = [];
allArrs = allArrs
    .concat(arr1, arr2)
    .sort()
    .slice(arr2.length)
    .join("")
    .toLowerCase();
// End Of Your Code
console.log(allArrs); // Output => fxy
