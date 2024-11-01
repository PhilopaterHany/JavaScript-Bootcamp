let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
const [a, b, c] = arr3.concat(arr1).slice(1, 4);
// -- Another Solution --
// arr3[0] = arr1[0];
// const [c, b, a] = arr3.sort();

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// Output => My Best Friends: Shady, Mahmoud, Ahmed

// method 2

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

arr1 = arr1.concat(arr3); // concat arr1 + arr3
let [c, , , , a, b] = arr1;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed
 
