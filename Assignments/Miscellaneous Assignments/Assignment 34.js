let arr = [1, 1, 1, 2, 3, 4, 3];

// Method 1
let arrayOne = [...new Set(arr)];
console.log(arrayOne); // [1, 2, 3, 4]

// Method 2
let arrayTwo = arr.filter((num, index) => arr.indexOf(num) === index);
console.log(arrayTwo); // [1, 2, 3, 4]

// Method 3
let arrayThree = [];
for (item of arr) if (!arrayThree.includes(item)) arrayTwo.push(item);
console.log(arrayThree); // [1, 2, 3, 4]

// Method 4
let arrayFour = [];
arr.forEach((num) => (!arrayFour.includes(num) ? arrayFour.push(num) : ""));
console.log(arrayFour); // [1, 2, 3, 4]

// Method 5
let arrayFive = arr.reduce((unique, num) => {
    return unique.includes(num) ? unique : [...unique, num];
}, []);
console.log(arrayFive); // [1, 2, 3, 4]
