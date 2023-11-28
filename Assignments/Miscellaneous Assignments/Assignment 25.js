let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

// Method 1
myArr.length = 0;
console.log(myArr); // []

// Method 2
myArr = [];
console.log(myArr); // []

// Method 3
myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr.splice(0, myArr.length);
console.log(myArr); // []

// Method 4
while (myArr.length > 0) myArr.pop();
console.log(myArr); // []

// Method 5
while (myArr.length > 0) myArr.shift();
console.log(myArr); // []
