let dateNow = new Date();

dateNow.setDate(0);
console.log(dateNow);
// Output => "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// It is changed every month so the output isnt fixed/static and the time as well

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
console.log(
    `Previous Month Is ${
        months[dateNow.getMonth()]
    } And Last Day Is ${dateNow.getDate()}`
);
// Output => "Previous Month Is April And Last Day Is 30"
// It is changed every month so the output isnt fixed/static and the time as well
