/*
    Scope
        - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();
