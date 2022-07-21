/*
    Function
        - Default Function Parameters
        - Function Parameters Default [Undefined]
        - Old Strategies [Condition + Logical Or]
        - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
    // if (age === undefined) {
    //   age = "Unknown";
    // }
    // age = age || "Unknown";
    return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello());
