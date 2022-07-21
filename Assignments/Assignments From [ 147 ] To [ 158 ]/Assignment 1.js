class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car Is Running Now`;
    }
    stop() {
        return `Car Is Stopping Now`;
    }
}

let carOne = new Car("MG", "2022", "426983");
let carTwo = new Car("Opel", "2021", "445861");
let carThree = new Car("BMW", "2020", "987904");

console.log(
    `Car One name is ${carOne.n} and its model is ${carOne.m} edition and its price is ${carOne.p} EGP`
); // Output => "Car One name is MG and its model is 2022 edition and irs price is 426983 EGP"

console.log(carOne.run()); // Output => "Car Is Running Now"
