function customCalc(...values) {
    // Method 1
    let result = 0;

    for (let element of values) {
        if (parseInt(element)) result += parseInt(element);
    }

    result *= values[0] * values[values.length - 1];

    return result;

    // Method 2
    // let resultSum = items.reduce(
    //     (acc, el) => (isNaN(parseInt(el)) ? acc : acc + +el),
    //     0
    //     );
    // let result = resultSum * +items[0] * +items.at(-1);
    // return result;
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
