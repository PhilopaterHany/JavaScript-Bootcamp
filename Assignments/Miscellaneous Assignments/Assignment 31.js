let myArray = [100, 200, 300, 400];

// Method 1
let clonedArray = [...myArray];

// Method 2
// let clonedArray = Array.from(myArray);

// Method 3
// let clonedArray = myArray.map(el => el);

// Method 4
// let clonedArray = myArray.filter(el => el);

// Method 5
// let clonedArray = myArray.flat();

// Method 6
// let clonedArray = myArray.concat([]);

// Method 7
// let clonedArray = Object.values(myArray);

// Method 8
// let clonedArray = myArray.toString().split(",");

// Method 9
// let clonedArray = [];
// for (let item of myArray) clonedArray.push(item);

console.log(clonedArray); // [100, 200, 300, 400]
