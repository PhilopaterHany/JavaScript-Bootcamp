let theName = "Elzero";

console.log(theName.split(""));
console.log([...theName]);
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log(Object.values(theName));
// Needed Output => ["E", "l", "z", "e", "r", "o"]
