// My Solution With Conditions
function checkStatus(a, b, c) {
    let myInps = [a, b, c];
    let name, age, hire;
    for (i = 0; i < myInps.length; i++) {
        typeof myInps[i] === "string"
            ? (name = myInps[i])
            : typeof myInps[i] === "number"
            ? (age = myInps[i])
            : typeof myInps[i] === "boolean" && myInps[i] === true
            ? (hire = "You Are Available For Hire")
            : typeof myInps[i] === "boolean" && myInps[i] === false
            ? (hire = "You Are Not Available For Hire")
            : console.log("Invalid data Input");
    }
    return `Hello ${name}, Your Age Is ${age}, ${hire}`;
}

// Solution By Osama Elzero (Without Conditions)
function checkStatus(a, b, c) {
    const params = [a, b, c];
    const name = params.find((item) => typeof item === "string");
    const age = params.find((item) => typeof item === "number");
    const status = params.find((item) => typeof item === "boolean");
    return `Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`
}

console.log(checkStatus("Philo", 16, true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(16, "Philo", true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(true, 16, "Philo")); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(false, "Philo", 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
console.log(checkStatus("Philo", false, 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
