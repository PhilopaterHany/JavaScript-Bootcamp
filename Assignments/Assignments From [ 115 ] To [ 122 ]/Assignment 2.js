let mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// Output => My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
