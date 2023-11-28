function formatName(theName) {
    // Method 1
    let nameSegments = theName.split(" ");
    let resultString = `${nameSegments[0][0].toUpperCase()}`;

    for (let i = 1; i < nameSegments.length; i++) {
        resultString += `.${nameSegments[i][0].toLowerCase()}`;
    }

    return resultString;

    // Method 2
    // return theName
    //     .split(" ")
    //     .map((segment) => segment[0])
    //     .map((letter, index) => (index ? letter.toLowerCase() : letter))
    //     .join(".");
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
