class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

// Write Tablet Class Here where it inherits from Phone Class
class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "Unknown";
    }
    fullDetails() {
        return `${this.name} serial number is ${this.serial} and size is ${this.size}`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// Output => "iPad serial number is 100200300 and its size Is 12.9"

console.log(`${TabletTwo.fullDetails()}`);
// Output => "Nokia serial number is 350450650 and its size Is 10.5"

console.log(`${TabletThree.fullDetails()}`);
// Output => "LG serial number is 250450650 and its size Is Unknown"
