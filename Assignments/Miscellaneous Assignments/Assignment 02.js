function addEl(str) {
    if (str === "") return "";
    if (str.startsWith("El")) return str;
    return `El${str}`;
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero