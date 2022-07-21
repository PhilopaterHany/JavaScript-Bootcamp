let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a <= b); // Output => true
console.log(a < b && a > c); // Output => true
console.log(!(a > b) && !(a >= b) && !(a <= c) && !(a < c)); // Output => true
