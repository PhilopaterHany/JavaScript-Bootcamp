// Write Your Generator Function Here
function* gen() {
    let i = 1;
    while (true) {
        yield 100 * i * i - 160 * i + 74;
        i++;
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
