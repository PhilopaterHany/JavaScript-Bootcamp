let st = "Elzero";

console.log(st.at(-1)); // o
console.log(st.charAt(st.length - 1)); // o
console.log(st[st.length - 1]); // o
console.log(st.slice(-1)); // o
console.log(st.slice(st.length - 1)); // o
console.log(st.split("").pop()); // o
console.log(st.split("").reverse().shift()); // o
console.log(/.$/.exec(st)[0]); // o
