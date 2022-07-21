// First Solution
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
/*
    Output:
        "1 => Sayed"
        "2 => Eman"
        "3 => Mahmoud"
        "4 => Osama"
        "5 => Sameh"
*/
let counter = +false;
for (let i = counter; i < friends.length; i++) {
  if (!friends[i].toLowerCase().startsWith(letter)) {
    console.log(`${++counter} => ${friends[i]}`);
  }
}

// Second Solution
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
/*
    Output:
        "1 => Sayed"
        "2 => Eman"
        "3 => Mahmoud"
        "4 => Osama"
        "5 => Sameh"
*/
let finalFriends = [];
for (let i = finalFriends.length; i < friends.length; i++) {
    if (!friends[i].startsWith(letter.toUpperCase())) {
        finalFriends.push(friends[i]);
    }
}
for (let i = +false; i < finalFriends.length; i++) {
    console.log(`${i + letter.length} => ${finalFriends[i]}`);
}
