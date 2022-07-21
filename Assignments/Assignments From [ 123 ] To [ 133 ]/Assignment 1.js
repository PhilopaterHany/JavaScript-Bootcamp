let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers); // Output => Set(3) {10, 20, 2}
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]); // Output => 2
