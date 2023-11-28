function getCharacters(word, num) {
    return word.slice(0, num) + word.slice(-num);
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
