let nums = [20, 100, 50, 10, 15, -20, 30];

function getBiggestTwo(numsArr) {
    // Method 1
    // const biggestNumber = Math.max(...numsArr);
    // numsArr.splice(numsArr.indexOf(biggestNumber), 1);
    // return [biggestNumber, Math.max(...nums)];

    // Method 2
    return numsArr.sort((a, b) => b - a).slice(0, 2);
}

console.log(getBiggestTwo(nums)); // [100, 50]
