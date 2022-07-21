// Edit What You Want Here
var num1 = 55;
var num2 = 1;
var num3 = +"55";
var num4 = 130;

/*
    Do Not Edit Below This Line
    Needed Output:
    True 7 Times
*/

// Condition 1
if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
