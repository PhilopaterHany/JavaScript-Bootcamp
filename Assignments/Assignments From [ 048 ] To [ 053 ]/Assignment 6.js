let start = 0;
let swappedName = "elZerO";
// Output => "ELzERo"
let result = [];
for (i = start; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toLowerCase()
    ? result.push(swappedName[i].toUpperCase())
    : result.push(swappedName[i].toLowerCase());
}
let final = result.join("");

console.log(final);
