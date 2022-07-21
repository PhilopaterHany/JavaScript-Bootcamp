/*
    Generators
        - Delegate Generator
*/

function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
}

function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Z"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
