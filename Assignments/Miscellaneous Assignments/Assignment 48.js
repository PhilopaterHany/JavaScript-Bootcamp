function createStars(num) {
    let stars = "";
    let counter = 0;

    for (let i = 1; i <= num; i++) {
        stars += `${"*".repeat(i + counter)}\n`;
        counter++;
    }

    return stars;
}

console.log(createStars(8));
