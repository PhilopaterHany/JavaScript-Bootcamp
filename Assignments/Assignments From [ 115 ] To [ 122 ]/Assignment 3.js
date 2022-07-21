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
