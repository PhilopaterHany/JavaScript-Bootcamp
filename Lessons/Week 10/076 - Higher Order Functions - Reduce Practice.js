/*
    Reduce
        - Longest Word
        - Remove Characters + Use Reduce
*/

let theBiggest = [
    "Bla",
    "Propaganda",
    "Other",
    "AAA",
    "Battery",
    "Test",
    "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log(`#############`);
    return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
    .filter(function (ele) {
        return ele !== "@";
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    });

console.log(finalString);
