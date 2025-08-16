let last = 30;
let sum = 0;

for (let i = last - 1; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
        sum += i;
        i--;
    }
}

console.log("=====");
console.log(sum);
