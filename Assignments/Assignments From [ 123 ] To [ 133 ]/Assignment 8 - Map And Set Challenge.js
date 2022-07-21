/*
    Map And Set + What You Learn => Challenge
        - Requirements
            - You Cant Use Numbers Or True Or False
            - Don't Use Array Indexes
            - You Cant Use Loop
            - You Cant Use Any Higher Order Function
            - Only One Line Solution Inside Console
            - If You Use Length => Then Only Time Only
        - Hints
            - You Can Use * Operator Only In Calculation
            - Set
            - Spread Operator
            - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Solution One
console.log(
    Array.from(
        new Set([
            ...Array.from(
                Math.min(...Array.from(new Set(n1)))
                    .toString()
                    .split("")
            ),
            ...Array.from(n1[n2.length].toString().split("")),
        ])
    )
        .sort()
        .reverse()
        .join("")
); // Output => 210

// Solution Two
console.log([...n1, ...n2].length * Math.max(...n2)); // Output => 210

// Solution Three
console.log(parseInt(`${n2.indexOf(Math.min(...n1))}${Math.min(...n1)}`)); // Output => 210
