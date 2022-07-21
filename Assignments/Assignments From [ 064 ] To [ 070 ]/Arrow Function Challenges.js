/*
    Function Arrow Challenges
*/

/*
    Part 1
        [1] Write The Function Parameter [Arguments May Change]
        [2] One Statement In Function To Output This:
                "String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !"
        [3] Convert To Arrow Function
        [4] Print The Output

*/

// let names = function (...inps) {
//     return `String [${inps.join("], [")}] => Done !`;
// };
let names = (...inps) => `String [${inps.join("], [")}] => Done !`;
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

/*
    Part 2
        [1] Replace ??? In Return Statement To Get The Output
        [2] Create The Same Function With Regular Syntax
        [3] Use Array Inside The Arguments To Get The Output
*/

let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + +two + +nums;
function calc(one, two, ...nums) {
    return one + +two + +nums;
}
console.log(calc(10, [myNumbers[+false]], [myNumbers[+true]])); // Output => 80
