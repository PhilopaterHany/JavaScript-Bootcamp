let arrayOne = ["A", "B", "C", "D", "E", 10, 15, 6];
assignmentSix(arrayOne);
// Output => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let arrayTwo = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
assignmentSix(arrayTwo);
// Output => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let arrayThree = ["Z", "Y", "A", "D", "E", 10, 1];
assignmentSix(arrayThree);
// Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]

function assignmentSix(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arr.unshift(...arr.splice(i, 1));
        }
    }
    console.log(arr);
    const firstLetterIndex = arr.findIndex((ele) => typeof ele === "string");
    arr = arr.copyWithin(0, firstLetterIndex, firstLetterIndex * 2);
    console.log(arr);
    console.log("#".repeat(50));
}
