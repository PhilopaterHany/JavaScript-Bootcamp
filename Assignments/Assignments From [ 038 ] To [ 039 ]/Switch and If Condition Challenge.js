/*
    Part 1
        - Convert If Condition => Switch Statement
            if (job === "Manager") {
                salary = 8000;
            } else if (job === "IT" || job === "Support") {
                salary = 6000;
            } else if (job === "Developer" || job === "Designer") {
                salary = 7000;
            } else { 
                salary = 4000;
            }
*/
let job = "Manager";
let salary = 0;
// Start Of Your Code
switch (job) {
    case "Manager":
        salary = 8000;
        break;
    case "IT":
    case "Supoort":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;
    default:
        salary = 4000;
}
// End Of Your Code
console.log(`Your Salary Is ${salary}$`); // Output => Your Salary Is 8000$

/*
    Part 2
        - Convert Switch Statement => If Condition
            switch (holidays) {
                case 0:
                    money = 5000;
                    break;
                case 1:
                case 2:
                    money = 3000;
                    break;
                case 3:
                    money = 2000;
                    break;
                case 4:
                    money = 1000;
                    break;
                case 5:
                    money = 0;
                    break;
                default:
                    money = 0;
            }
*/
let holidays = 0;
let money = 0;
// Start Of Your Code
if (holidays === 0) {
    money = 5000;
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
} else if (holidays === 3) {
    money = 2000;
} else if (holidays === 4) {
    money = 1000;
} else {
    money = 0;
}
// End Of Your Code
console.log(`Your Money Is ${money}$`); // Output => Your Salary Is 8000$
