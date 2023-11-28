function customMerge(...arrays) {
    let result = [];

    for (let array of arrays) {
        for (let item of array) result.push(+item);
    }

    return result.sort((a, b) => a - b); // To sort numbers ascendingly
}

console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10])); // [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
