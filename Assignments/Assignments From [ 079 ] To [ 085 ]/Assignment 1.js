// Create Your Object Here
let member = {
    name: "Philo",
    age: 16,
    country: "Egypt",
    fullDetails: () => {
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live In ${member.country}`;
    },
};

console.log(member.name); // Output => Philo
console.log(member.age); // Output => 16
console.log(member.country); // Output => Egypt
console.log(member.fullDetails()); // Output => My Name Is Philo, My Age Is 16, I Live In Egypt


// Method 2


let member = new Object({});
member.name = "Elzero";
member["age"] = 38;
member.country = "Egypt";
member.fullDetails = function () {
  return `My Name Is ${member.name}, My Age Is ${this.age}, I Live In ${this.country}`;
};
// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
