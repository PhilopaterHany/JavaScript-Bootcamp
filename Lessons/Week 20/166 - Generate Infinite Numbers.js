/*
    Generators
        - Generate Infinite Numbers
        - Use Return Inside Generators
*/

function* generateNumbers() {
    // yield 1;
    // yield 2;
    // return "A";
    // yield 3;
    // yield 4;
    let index = 0;

    while (true) {
        yield index++;
    }
}

let generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
