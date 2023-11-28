let st = "elzero";

console.log(st[0].toUpperCase() + st.slice(1)); // Elzero
console.log(st.charAt(0).toUpperCase() + st.substring(1)); // Elzero
console.log(st.at(0).toUpperCase() + st.substr(1)); // Elzero
console.log(st.split("").map((letter, index) => (index === 0 ? letter.toUpperCase() : letter)).join("")); // Elzero
console.log(st.replace(/^./, st[0].toUpperCase())); // Elzero
console.log(st.split("", 1).join().toUpperCase().concat(st.slice(1))); // Elzero
console.log(st.split("").shift().toUpperCase() + st.substring(1)); // Elzero
