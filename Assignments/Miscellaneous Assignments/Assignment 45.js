let rangeEnd = 10;
let rangeStart = 1;
// needs to store the rangeStart because while loop change the original variable :
let current = rangeStart;

// Methods 1 :
let myRange = [];
for (let i = rangeStart; i <= rangeEnd; i++) {
  myRange.push(i);
}

// Methods 2 :
let myRange2 = [];
while (rangeStart <= rangeEnd) {
  myRange2.push(rangeStart);
  rangeStart++;
}

// Methods 3 :
let myRange3 = [];
do {
  myRange3.push(current);
  current++;
} while (current <= rangeEnd);
// Output Needed
console.log(myRange); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRange2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRange3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
