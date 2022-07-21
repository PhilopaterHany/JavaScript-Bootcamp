// Write Your Generator Function Here
function* gen() {
    let num1 = 1;
    let num2 = 14;
    while (true) {
        yield `${num1}4`;
        num1 += num2;
        num2 += 20;
    }
}

let generator = gen();
console.log(generator.next()); // Output => {value: 14, done: false}
console.log(generator.next()); // Output => {value: 154, done: false}
console.log(generator.next()); // Output => {value: 494, done: false}
console.log(generator.next()); // Output => {value: 1034, done: false}
console.log(generator.next()); // Output => {value: 1774, done: false}
console.log(generator.next()); // Output => {value: 2714, done: false}
console.log(generator.next()); // Output => {value: 3854, done: false}
console.log(generator.next()); // Output => {value: 5194, done: false}
console.log(generator.next()); // Output => {value: 6734, done: false}
