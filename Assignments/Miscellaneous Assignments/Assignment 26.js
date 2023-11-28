let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Method 1
let arrayOne = [...new Set(myArr)];
console.log(arrayOne); // [10, 20, 30, 50]

// Method 2
let arrayTwo = myArr.filter((num, index) => myArr.indexOf(num) === index);
console.log(arrayTwo); // [10, 20, 30, 50]

// Method 3
let arrayThree = [];
for (item of myArr) if (!arrayThree.includes(item)) arrayTwo.push(item);
console.log(arrayThree); // [10, 20, 30, 50]

// Method 4
let arrayFour = [];
myArr.forEach((num) => (!arrayFour.includes(num) ? arrayFour.push(num) : ""));
console.log(arrayFour); // [10, 20, 30, 50]

// Method 5
let arrayFive = myArr.reduce((unique, num) => {
    return unique.includes(num) ? unique : [...unique, num];
}, []);
console.log(arrayFive); // [10, 20, 30, 50]
