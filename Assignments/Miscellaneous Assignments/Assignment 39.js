let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

// Write Your Code Here To Prevent Adding Elements
Object.freeze(myData);

myData.push("Name");
console.log(myData); // ['Osama', 'Mohamed', 'Elsayed', 'Elzero']
