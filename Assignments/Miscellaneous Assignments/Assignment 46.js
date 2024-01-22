let nums = [10, -20, 300, 50, 100, -50];

// Method 1
// let maxNumber = Math.max(...nums);

// Method 2
let maxNumber = nums.sort((a, b) => b - a)[0];

// Method 3
// let maxNumber = nums.reduce((acc, el) => (el > acc ? el : acc));

// Method 4
// let maxNumber = nums[0];
// for (let num of nums) if (maxNumber < num) maxNumber = num;

console.log(maxNumber); // 300
