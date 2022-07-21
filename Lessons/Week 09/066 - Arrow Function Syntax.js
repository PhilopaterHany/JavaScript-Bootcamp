/*
    Function
        - Arrow Function
        -- Regular vs Arrow [Param + No Param]
        -- Multiple Lines
*/

let print = function () {
    return 10;
};

let print = () => 10;

let print = function (num) {
    return num;
};

let print = (num) => num;

let print = function (num1, num2) {
    return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
