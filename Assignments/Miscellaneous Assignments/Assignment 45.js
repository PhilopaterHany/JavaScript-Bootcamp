let rangeEnd = 10;

let myRange1 = [];
for (let i = 1; i <= rangeEnd; i++) {
    myRange1.push(i);
}
console.log(myRange1);

let myRange2 = Array.from({ length: rangeEnd }, (_, i) => i + 1);
console.log(myRange2);

let myRange3 = [...Array(rangeEnd).keys()].map((i) => i + 1);
console.log(myRange3);
