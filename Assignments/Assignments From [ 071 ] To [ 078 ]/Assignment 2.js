// Use Filter Function To Remove The Duplicated Letters

let myString = "EElllzzzzzzzeroo";

let word = myString
    .split("")
    .filter((el, index) => (myString.indexOf(el) === index))
    .join("");

console.log(word); // Output => "Elzero"
