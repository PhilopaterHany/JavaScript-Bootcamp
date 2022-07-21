/*
    Scope
        - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
    let x = 50;
    console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);
