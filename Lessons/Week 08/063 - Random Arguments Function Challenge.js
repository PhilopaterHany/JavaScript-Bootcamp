/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
        - String => Name
        - Number => Age
        - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
        - Use Ternary Conditional Operator
*/
console.log(checkStatus("Philo", 16, true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(16, "Philo", true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(true, 16, "Philo")); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(false, "Philo", 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
console.log(checkStatus("Philo", false, 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
