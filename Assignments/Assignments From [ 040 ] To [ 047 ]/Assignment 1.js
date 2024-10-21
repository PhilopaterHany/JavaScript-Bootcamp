let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.slice(num - num, num)); 
// Output => ["Ahmed", "Elham", "Osama"]

// Method 2
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends.pop();
console.log(myFriends); 
// Output => ["Ahmed", "Elham", "Osama"]

// Method 3
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends.length = num;
console.log(myFriends); 
// Output => ["Ahmed", "Elham", "Osama"] 

// Method 4
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.splice(num - num, num)); 
// Output => ["Ahmed", "Elham", "Osama"]

// Method 5
// Thanks to "ahs120" for his effort in providing a better and shorter solution
// https://github.com/PhilopaterHany/JavaScript-Bootcamp/pull/15
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends.reverse().shift();
console.log(myFriends.reverse()); 
// Output => ["Ahmed", "Elham", "Osama"];