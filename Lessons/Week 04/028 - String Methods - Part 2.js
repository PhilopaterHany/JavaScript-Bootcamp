/*
    String Methods
        - indexOf(Value [Mand], Start [Opt] 0)
        - lastIndexOf(Value [Mand], Start [Opt] Length)
        - slice(Start [Mand], End [Opt] Not Include End)
        - repeat(Times) [ES6]
        - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6));
