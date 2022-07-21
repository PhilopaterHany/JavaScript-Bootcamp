function ageInTime(theAge) {
    // Your Code Here
    if (theAge < 10 || theAge > 100) {
        return `Sorry, Your Age Is Out Of Range`;
    }

    let years = theAge;
    let months = theAge * 12;
    let weeks = Math.round(theAge * (365.25 / 7));
    let days = theAge * 365.25;
    let hours = theAge * 365.25 * 24;
    let minutes = theAge * 365.25 * 24 * 60;
    let seconds = theAge * 365.25 * 24 * 60 * 60;

    console.log(`Your Age Is ${years} Years`);
    console.log(`Your Age Is ${months} Months`);
    console.log(`Your Age Is ${weeks} Weeks`);
    console.log(`Your Age Is ${days} Days`);
    console.log(`Your Age Is ${hours} Hours`);
    console.log(`Your Age Is ${minutes} Minutes`);
    console.log(`Your Age Is ${seconds} Seconds`);
}
ageInTime(7); // Output => Sorry, Your Age Is Out Of Range
ageInTime(110); // Output => Sorry, Your Age Is Out Of Range
ageInTime(16);
/*
    Output:
        Your Age Is 16 Years
        Your Age Is 192 Months
        Your Age Is 835 Weeks
        Your Age Is 5844 Days
        Your Age Is 140256 Hours
        Your Age Is 8415360 Minutes
        Your Age Is 504921600 Seconds
*/
