/*
    - Map Data Type
        Syntax: new Map(Iterable With Key/Value)

        -- Map vs Object

        ------ Map => Does Not Contain Key By Default
        ------ Object => Has Default Keys

        ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
        ------ Object => String Or Symbol

        ------ Map => Ordered By Insertion
        ------ Object => Not 100% Till Now

        ------ Map => Get Items By Size
        ------ Object => Need To Do Manually

        ------ Map => Can Be Directly Iterated
        ------ Object => Not Directly And Need To Use Object.keys() And So On

        ------ Map => Better Performance When Add Or Remove Data
        ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);
