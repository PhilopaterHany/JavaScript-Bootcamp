let strNumber = "10";

// Method 1
console.log(strNumber * 1); // 10
console.log(strNumber - 0); // 10 <= Same Solution

// Method 2
console.log(parseInt(strNumber)); // 10
console.log(typeof parseInt(strNumber)); // number

// Method 3
console.log(+strNumber); // 10
console.log(typeof +strNumber); // number

// Method 4
console.log(Number(strNumber)); // 10
console.log(typeof Number(strNumber)); // number

// Method 5
console.log(Math.abs(strNumber)); // 10
console.log(typeof Math.abs(strNumber)); // number

// Method 6
console.log(eval(strNumber)); // 10
console.log(typeof eval(strNumber)); // number

// Method 7
console.log(Function(`return ${strNumber}`)()); // 10
console.log(typeof Function(`return ${strNumber}`)()); // number

// Method 8
console.log(strNumber++); // 10
console.log(typeof strNumber++); // number
