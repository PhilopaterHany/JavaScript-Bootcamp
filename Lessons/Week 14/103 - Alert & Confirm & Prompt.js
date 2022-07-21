/*
    BOM [Browser Object Model]
        - alert(Message) => Need No Response Only Ok Available
        - confirm(Message) => Need Response And Return A Boolean
        - prompt(Message, Default Message) => Collect Data

        TIP: https://sweetalert2.github.io
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
console.log(promptMsg);
