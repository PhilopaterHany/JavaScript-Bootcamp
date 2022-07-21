/*
    Object Meta Data And Descriptor
        - Define Multiple Properties
        - Check Descriptors
*/

const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperties(myObject, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
