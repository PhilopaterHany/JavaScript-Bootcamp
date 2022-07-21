/*
    Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a And d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // Output => 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));

// Use Variables b + d To Get The Needed Output
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // Output => 66.67 (String)
console.log(Math.round(parseInt(b) / Math.ceil(d))); // Output => 67 (Number)
