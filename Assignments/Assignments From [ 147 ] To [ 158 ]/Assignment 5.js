const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
    id: {
        enumerable: false, // Will not appear in loop
    },
    score: {
        writable: false, // Value cannot be changed
    },
    country: {
        enumerable: false, // Will not appear in loop
        configurable: true, // Can be deleted, it is true by default because "country" was manually added in object and not by defineProperty so no need to write it
    },
});
delete myObj.country; // Deleting it so it will not appear in object

myObj.score = 500;
for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}
console.log(myObj);

/* 
    Needed Output:
        "username => Elzero"
        "score => 1000"
        {username: 'Elzero', score: 1000, id: 100}
*/
