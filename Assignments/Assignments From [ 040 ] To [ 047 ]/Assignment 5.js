let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
/*
    Needed Output:
    Found 3 Times
*/
// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found");
}
