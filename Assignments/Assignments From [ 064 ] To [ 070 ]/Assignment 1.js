function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        let i = zName.trim().indexOf(" ");
        return `${zName.slice(0, i)} ${zName
            .slice(i + 1, i + 2)
            .toUpperCase()}.`;
        // Philopater Hany => Philopater H.
        // Osama mohamed => Osama M.
    }
    function ageWithMessage(zAge) {
        // Write Your Code Here
        return `${zAge.slice(0, 2)}`;
        // 16 Is My Age => Your Age Is 16
        // 38 Is My Age => Your Age Is 38
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        return `${zCountry.toUpperCase().slice(0, 2)}`;
        // Egypt => You Live In EG
        // Syria => You live in SY
    }
    function fullDetails() {
        // Write Your Code Here
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Philopater Hany", "16 Is My Age", "Egypt"));
// Output => Hello Philopater H., Your Age Is 16, You Live In EG

console.log(getDetails("Osama mohamed", "38 Is My Age", "Syria"));
// Output => Hello Osama M., Your Age Is 38, You Live In SY
