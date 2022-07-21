/*
    Class
        - Inheritance
*/

// Parent Class
class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
}

// Derived Class
class Admin extends User {
    constructor(id, username, permissions) {
        super(id, username);
        this.p = permissions;
    }
}

class Superman extends Admin {
    constructor(id, username, permissions, ability) {
        super(id, username, permissions);
        this.a = ability;
    }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne.u);
console.log(userOne.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());
