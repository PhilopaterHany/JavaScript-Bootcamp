/*
    Regular Expression
        Quantifiers
            $  => End With Something
            ^  => Start With Something
            ?= => Followed By Something
            ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));
