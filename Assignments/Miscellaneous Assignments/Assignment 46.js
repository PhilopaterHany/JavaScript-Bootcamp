let nums = [10, -20, 300, 50, 100, -50];

let max1 = Math.max(...nums);
console.log(max1);

let max2 = nums.reduce((a, b) => (a > b ? a : b));
console.log(max2);

let max3 = [...nums].sort((a, b) => b - a)[0];
console.log(max3);

let max4 = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max4) {
        max4 = nums[i];
    }
}
console.log(max4);
