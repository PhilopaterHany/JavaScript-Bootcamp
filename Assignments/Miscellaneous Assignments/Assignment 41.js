const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
};

// Method 1
const cloned = { ...myData };

// Method 2
// const cloned = Object.assign({}, myData);

// Method 3
// const cloned = {};
// Object.keys(myData).forEach((el, inx) => (cloned[el] = Object.values(myData)[inx]));

// Method 4
// const cloned = {};
// for (let prop in myData) cloned[prop] = myData[prop];

// Method 5
// const cloned = JSON.parse(JSON.stringify(myData));

console.log(cloned); // {user: 'Elzero', age: 41, country: 'Egypt'}
console.log(cloned === myData); // false
