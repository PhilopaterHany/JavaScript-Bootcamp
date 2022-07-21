let numberOne = 10,
    numberTwo = 20;

console.log(numberOne + "" + numberTwo);
// Normal Concatenate => 1020

console.log(typeof "numberOne + '' + numberTwo");
// Normal Concatenate => string

console.log(`${numberOne}${numberTwo}`);
// Template Literals Way => 1020

console.log(typeof `${numberOne}${numberTwo}`);
// Template Literals Way => string

console.log(numberTwo + "\n" + numberOne);
/*
    Normal Concatenate
    Output:
    20
    10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
    Template Literals Way
    Output:
    20
    10
*/
