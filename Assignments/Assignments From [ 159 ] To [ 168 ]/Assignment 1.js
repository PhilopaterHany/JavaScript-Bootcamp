let dateNow = new Date();
let myBirthday = new Date("Aug 04 2005");
let dateDiff = dateNow - myBirthday;

let seconds = (dateDiff / 1000).toFixed();
let minutes = (seconds / 60).toFixed();
let hours = (minutes / 60).toFixed();
let days = (hours / 24).toFixed();
let months = (days / 30).toFixed(2);
let years = (days / 365.25).toFixed(2);
let decades = (years / 10).toFixed(3);

console.log(`I am ${seconds} seconds old`);
console.log(`I am ${minutes} minutes old`);
console.log(`I am ${days} days old`);
console.log(`I am ${months} months old`);
console.log(`I am ${years} years old`);
console.log(`I am ${decades} decades old`);
