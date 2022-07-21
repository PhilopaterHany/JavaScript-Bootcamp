/*
    Regular Expression
        Quantifiers
            n{x}   => Number of
            n{x,y} => Range
            n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Digits]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Digits]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four Digits]S
