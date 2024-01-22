let rangeEnd = 10;
let rangeStart = 1;

// Method 1
let myRange = [];
for (let x = rangeStart; x <= rangeEnd; x++) myRange.push(x);
console.log(myRange);

// Method 2
// let myRange = [...Array(rangeEnd)].map((el) => rangeStart++);
// console.log(myRange);

// Method 3
// let myRange = Array.from({ length: rangeEnd - rangeStart + 1 }, (_, index) => rangeStart + index);
// console.log(myRange);

// Method 4
// let myPromiseRange = new Promise((res) => {
//     let myRange = [];
//     let interval = setInterval(() => {
//         myRange.push(rangeStart);
//         if (rangeStart === rangeEnd) {
//             clearInterval(interval);
//             res(myRange);
//         }
//         rangeStart++;
//     }, 0);
// }).then((myRange) => {
//     console.log(myRange);
//     return myRange;
// });
