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
