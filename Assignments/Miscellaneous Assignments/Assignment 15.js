function concatenateWithoutLast(words) {
    return words.map((word) => word.slice(0, -1)).join(" ");
}

console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School
