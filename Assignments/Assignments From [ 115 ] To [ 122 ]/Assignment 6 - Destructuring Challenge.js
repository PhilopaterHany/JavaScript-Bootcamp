let chosen = 2;
let myFriends = [
    {
        title: "Osama",
        age: 39,
        available: true,
        skills: ["JavaScript", "React.js"],
    },
    { title: "Philo", age: 16, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let n, a, ava, skill;
function showDetails(number) {
    ({
        title: n,
        age: a,
        available: ava,
        skills: [, skill],
    } = myFriends[number - 1]);
    console.log(n);
    console.log(a);
    console.log(ava ? "Available For Hiring" : "Not Available For Hiring");
    console.log(skill);
}
showDetails(chosen);

/* 
    If chosen = 1
    "Osama"
    39
    "Available For Hiring"
    "React,js
*/
/* 
    If chosen = 2
    "Philo"
    16
    "Not Available For Hiring"
    "Django"
*/
/* 
    If chosen = 3
    "Sayed"
    33;
    "Available For Hiring"
    "Laravel"
*/
