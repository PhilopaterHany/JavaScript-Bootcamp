let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
/*
    Output:
        "1 => Sayed"
        "2 => Mahmoud"
*/
while (index < friends.length) {
    if (typeof friends[index] !== "number" && !friends[index].startsWith("A")) {
        console.log(`${counter + true} => ${friends[index]}`);
        counter++;
    }
    index++;
}
