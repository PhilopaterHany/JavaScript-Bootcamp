const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And I'm ${w ? "" : "Not"} Working`); // Output => My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`); // Output => I Live in Egypt
console.log(`My Hobbies Are ${h1} And ${h3}`); // Output => My Hobbies Are Reading And Programming
