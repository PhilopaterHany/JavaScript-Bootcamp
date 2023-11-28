let numOne = 100;
let numTwo = 200;

// Convert to ternary operator
if (numOne > numTwo) {
    console.log("1st > 2nd");
} else if (numOne < numTwo) {
    console.log("1st < 2nd");
} else {
    console.log("1st = 2nd");
}

// Output: 1st < 2nd

// Solution
numOne > numTwo
    ? console.log("1st > 2nd")
    : numOne < numTwo
    ? console.log("1st < 2nd")
    : console.log("1st = 2nd");
