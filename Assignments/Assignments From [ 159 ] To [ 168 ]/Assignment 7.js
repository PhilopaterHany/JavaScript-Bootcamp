// Do Not Edit genNumbers and genLetters
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}

let generator = genAll();
console.log(generator.next()); // Output => {value: 1, done: false}
console.log(generator.next()); // Output => {value: 2, done: false}
console.log(generator.next()); // Output => {value: 3, done: false}
console.log(generator.next()); // Output => {value: 4, done: false}
console.log(generator.next()); // Output => {value: 5, done: false}
console.log(generator.next()); // Output => {value: "A", done: false}
console.log(generator.next()); // Output => {value: "B", done: false}
console.log(generator.next()); // Output => {value: "C", done: false}
console.log(generator.next()); // Output => {value: "D", done: false}
