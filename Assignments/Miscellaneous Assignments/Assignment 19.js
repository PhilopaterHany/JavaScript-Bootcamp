let st = "Web SchoolElzero ";

// Method 1
console.log(st.slice(-7) + st.slice(-st.length, -7)); // "Elzero Web School"

// Method 2
console.log(st.slice(-7, -1) + st.slice(-1) + st.slice(-st.length, -13) + st.slice(-13, -7)); // "Elzero Web School"
