let userName = "Elzero";

console.log(userName[0].toLowerCase()); // Output => e
console.log(userName.toLowerCase().slice(0, 1)); // Output => e
console.log(userName.toLowerCase().substring(0, 1)); // Output => e
console.log(userName.toLowerCase().substring(-5, 1)); // Output => e
console.log(userName.toLowerCase().substr(0, 1)); // Output => e
console.log(userName.toLowerCase().charAt(0).repeat(3)); // Output => eee
