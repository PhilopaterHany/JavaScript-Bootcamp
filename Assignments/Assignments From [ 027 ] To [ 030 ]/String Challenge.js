/*
    String Challenge
        All Solutions Must Be In One Chain
        You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include These Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Output => Zero

// 8 H
console.log(a.substr(-4, 1).toUpperCase().repeat(8)); // Output => HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Output => Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
    a[0].toLowerCase() +
        a.slice(1, a.length - 1).toUpperCase() +
        a[a.length - 1].toLowerCase()
); // Output => eLZERO WEB SCHOOl
