/*
    ====================================================
    ====== Read About Currying Function Technique ======
    ====================================================
/*
/*
    Convert This Function To Arrow Function:
        function checker(zName) {
            return function (status) {
                return function (salary) {
                    return status === "Available"
                        ? `${zName}, My Salary Is ${salary}`
                        : `I am Not Available`;
                };
            };
        }
*/
let checker = (zName) => (status) => (salary) =>
    status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `I am Not Available`;
console.log(checker("Philo")("Available")("40000$")); // Output => Philo, My Salary Is 4000$
console.log(checker("Osama")("Not Available")()); // Output => I am Not Avaialble
