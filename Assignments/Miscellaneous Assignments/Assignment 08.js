let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

function closestNumber(numsArr, goalNum) {
    // Method 1
    const numsObj = {};
    for (const num of numsArr) numsObj[goalNum - num] = num;
    return ` Closest Number Is ${numsObj[Math.min(...Object.keys(numsObj))]}`;
    
    // Method 2
    // let remainderArr = [];
    // for (const num in numsArr) remainderArr.push(goalNum - numsArr[num]);
    // return `Closest Number Is ${numsArr[remainderArr.indexOf(Math.min(...remainderArr))]}`;

    // Method 1 is slightly better, because it iterates on the array once, but method 2 iterates twice.
}

console.log(closestNumber(nums, goal));
