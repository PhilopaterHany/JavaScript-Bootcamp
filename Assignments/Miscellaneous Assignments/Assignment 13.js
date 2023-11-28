let theName = "Elzero";

console.log(`${theName[0]}${theName[theName.length - 1]}`); // Output => Eo
// We can use theName.at(-1) as well to access the last letter in the string.

console.log(theName.slice(1, theName.length - 1)); // Output => lzer
console.log(theName.slice(theName.length / 2 - 1, theName.length / 2 + 1)); // Output => ze
