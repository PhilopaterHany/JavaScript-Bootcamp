function createStars(num) {
    let stars = "";
    let counter = 0;

    for (let i = 1; i <= num; i++) {
        stars += `${"*".repeat(i + counter)}\n`;
        counter++;
    }

    for (let i = 1; i <= num; i++) {
        stars += `${"*".repeat(counter - i)}\n`;
    }

    return stars;
}

console.log(createStars(3));
// Output Needed:
// *
// ***
// *****
// ***
// *

console.log(createStars(7));
// Output Needed:
// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***********
// *********
// *******
// *****
// ***
// *
