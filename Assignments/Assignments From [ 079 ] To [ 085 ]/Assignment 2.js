// Method One
// Create Your Object Here
let objMethodOne = {
    property: "Method One",
};

console.log(objMethodOne.property); // Output => "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
    property: "Method Two",
});

console.log(objMethodOne.property); // Output => "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({
    property: "Method Three",
});

console.log(objMethodThree.property); // Output => "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({
    property: "Method Four",
});

console.log(objMethodFour.property); // Output => "Method Four"
