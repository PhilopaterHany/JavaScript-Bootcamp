function calculate(firstNum, secondNum, operation) {
    // Write Your Code Here
    if (secondNum === undefined) {
        return `Second Number Is Not Found`;
    }
    switch (operation) {
        case "add":
        default:
            return `${firstNum + secondNum}`;
            break;
        case "subtract":
            return `${firstNum - secondNum}`;
            break;
        case "multiply":
            return `${firstNum * secondNum}`;
            break;
    }
}
console.log(calculate(20)); // Output => Second Number Is Not Found
console.log(calculate(20, 30)); // Output => 50
console.log(calculate(20, 30, "add")); // Output => 50
console.log(calculate(20, 30, "subtract")); // Output => -10
console.log(calculate(20, 30, "multiply")); // Output => 600
