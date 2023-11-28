function dashBetweenOdd(num) {
    num = num.toString();

    // Method 1
    result = "";

    for (let i = 0; i < num.length; i++) {
        result += num[i];

        if (i + 1 < num.length && num[i + 1] % 2 !== 0) {
            result += "-";
        }
    }

    return result;

    // Method 2
    // const numStr = num.split("");

    // for (let i = 0; i < numStr.length - 1; i++) {
    //     if (parseInt(numStr[i]) % 2 !== 0 && parseInt(numStr[i + 1]) % 2 !== 0) {
    //         numStr.splice(i + 1, 0, "-");
    //         i++; // To Skip the next character since we've added a dash
    //     }
    // }

    // return numStr.join("");

    // Method 3
    // return num
    //     .split("")
    //     .reduce((acc, el) => {
    //         if (acc.at(-1) % 2 !== 0 && el % 2 !== 0) {
    //             return acc + "-" + el;
    //         }
    //         return acc + el;
    //     });
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
