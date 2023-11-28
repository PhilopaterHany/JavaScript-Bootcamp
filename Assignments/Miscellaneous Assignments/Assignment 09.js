function swapEveryTwoChars(word) {
    let result = "";

    for (let i = 0; i < word.length; i += 2) {
        if (word[i] === word[i].toLowerCase()) {
            result += word[i].toUpperCase();
        } else {
            result += word[i].toLowerCase();
        }
        if (word[i + 1]) result += word[i + 1];
    }

    return result;
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello