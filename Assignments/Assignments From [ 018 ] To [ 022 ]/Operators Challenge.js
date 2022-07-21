/*
    Operator Challenge
*/

// Part 1
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    Code 1 => [++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++]
        [++a]
            - Value: 11
            - Explain: pre-increment
        [+]
            - Explain: add (plus) operator
        [+b++]
            - Value: 20
            - Explain: unary plus operator & post-increment
        [+]
            - Explain: add (plus) operator
        [+c++]
            - Value: 80
            - Explain: unary plus operator & post-increment
        [-]
            - Explain: subtract (minus) operator
        [+a++]
            - Value: 11
            - Explain: unary plus operator & post-increment
    Code 2 => [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
        [++a]
            - Value: 13
            - Explain: pre-increment
        [+]
            - Explain: add (plus) operator
        [-b]
            - Value: -21
            - Explain: unary negation operator
        [+]
            - Explain: add (plus) operator
        [+c++]
            - Value: 81
            - Explain: unary plus operator & post-increment
        [-]
            - Explain: subtract (minus) operator
        [-a++]
            - Value: -13
            - Explain: unary negation operator & post-increment
        [+]
            - Explain: add (plus) operator
        [+a]
            - Value: 14
            - Explain: unary plus operator
    Code 3 => [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+] [b] [*] [a] [+] [--a] [-] [+] [true]
        [--c]
            - Value: 81
            - Explain: pre decrement
        [+]
            - Explain: add (plus) operator
        [+b]
            - Value: 21
            - Explain: unary plus operator
        [+]
            - Explain: add (plus) operator
        [--a]
            - Value: 13
            - Explain: pre decrement
        [*]
            - Explain: multiply operator
        [+b++]
            - Value: 21
            - Explain: unary plus operator & post-increment
        [-]
            - Explain: subtract (minus) operator
        [+b]
            - Value: 22
            - Explain: unary plus operator
        [*]
            - Explain: multiply operator
        [a]
            - Value: 13
        [+]
            - Explain: add (plus) operator
        [--a]
            - Value: 12
            - Explain: pre-decrement
        [-]
            - Explain: subtract (minus) operator
        [+true]
            - Value: 1
            - Explain: Boolean value with unary plus before it so it is changed to number (true = 1, false = 0)
*/

// Part 2
// Only Use Variables Value
// Do Not Use Variable Twice
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log((d / -g) * e); // Output => 2000
console.log(++e * ++g + -d + ++f); // Output => 173