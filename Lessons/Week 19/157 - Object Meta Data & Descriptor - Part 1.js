/*
    Object Meta Data And Descriptor
        - writable
        - enumerable
        - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}

console.log(myObject);
