let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";

function textBeforeSecondAt(str) {
    return str.slice(0, str.indexOf("@", str.indexOf("@") + 1));
}

console.log(textBeforeSecondAt(myString)); // Hello Elzero Web School @ We Love Programming
