let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Part 1
console.log(my.slice(zero, counter + zero.toString().length).reverse()); // Output => ["Osama", "Elham", "Mazero", "Ahmed"]

// Part 2
console.log(my.slice(zero.toString().length, counter).reverse()); // Output => ["Elham", "Mazero"]

// Part 3
console.log(
    my[counter - zero.toString().length].slice(
        zero,
        counter - zero.toString().length
    ) + my[zero.toString().length].slice(counter - zero.toString().length)
); // Output => "Elzero"

// Part 4
console.log(
    my[zero.toString().length][counter + zero.toString().length] +
        my[counter][zero]
); // Output > "rO"
