let last = 30;
let finalSum = 0;
let prevNum = last + 2;

for (let i = last; i > 0; i--) {
    if (i % 2 !== 0 && prevNum - i > 2) {
        prevNum = i;
        finalSum += i;
        console.log(i);
    }
}

console.log("=".repeat(25));
console.log(finalSum);
