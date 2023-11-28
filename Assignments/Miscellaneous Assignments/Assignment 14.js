function repeatWithRules(word) {
    let resultString = "";

    for (let i = 0; i < word.length; i++) {
        resultString += word[i].repeat(i + 1);
    }

    return resultString;
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
