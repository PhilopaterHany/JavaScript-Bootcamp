let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(Array.from(new Set(myFriends)).sort()));
/*
    Needed Output:
    (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")]
*/
