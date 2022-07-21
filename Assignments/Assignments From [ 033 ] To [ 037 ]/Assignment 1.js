let numOne = 9; // Condition Output => "009"
if (numOne < 10) {
    console.log(`00${numOne}`);
}
let numTwo = 20; // Condition Output => "020"
if (numTwo < 100 && numTwo > 10) {
    console.log(`0${numTwo}`);
}
let numThree = 110; // Condition Output => "110"
if (numThree > 100) {
    console.log(`${numThree}`);
}
