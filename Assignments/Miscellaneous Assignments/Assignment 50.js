function createStars(num) {
    const maxWidth = 2 * num - 1;
    let result = "";

    for (let i = num; i >= 1; i--) {
        let stars = "*".repeat(i * 2 - 1);
        let spaces = " ".repeat((maxWidth - (i * 2 - 1)) / 2);
        result += spaces + stars + spaces + "\n";
    }
    for (let i = 1; i <= num; i++) {
        let stars = "*".repeat(i * 2 - 1);
        let spaces = " ".repeat((maxWidth - (i * 2 - 1)) / 2);
        result += spaces + stars + spaces + "\n";
    }

    return result;
}

console.log(createStars(6));
// Output Needed:
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
