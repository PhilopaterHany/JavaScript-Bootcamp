let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); 
// Output => ["Ahmed", "Elham", "Osama"]

// Method 2
myFriends.pop();
console.log(myFriends); 
// Output => ["Ahmed", "Elham", "Osama"]

// Method 3
myFriends.length = num;
console.log(myFriends); 
// Output => ["Ahmed", "Elham", "Osama"] 

// Method 4
console.log(myFriends.splice(num - num, num)); 
// Output => ["Ahmed", "Elham", "Osama"]
