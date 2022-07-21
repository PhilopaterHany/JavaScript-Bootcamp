// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    fullData() {
        this.#c = this.#c
            .toString()
            .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
        // $1 stands for group number 1 and $2 for group number 2 and so on...

        // Another Way to Change to the number to credit card format
        // this.#c = this.#c.toString().match(/\d{4}/g).join("-");

        return `Hello ${this.u}, Your Credit Card Number is ${this.#c}`;
    }
    get showData() {
        // Getter is used to get the value of the method [fullData()] and use it as a property
        // To read more about getters and setters, check this link
        // https://www.programiz.com/javascript/getter-setter
        return this.fullData();
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "8371573962052855");
let userThree = new User("Ghareeb", 6432143805876582);
let userFour = new User("Philopater", 4805110405236578);

console.log(userOne.showData);
// Output => Hello Osama, Your Credit Card Number is 1234-5678-1234-5678

console.log(userTwo.showData);
// Output => Hello Ahmed, Your Credit Card Number is 8371-5739-6205-2855

console.log(userThree.showData);
// Output => Hello Ghareeb, Your Credit Card Number is 6432-1438-0587-6582

console.log(userFour.showData);
// Output => Hello Philopater, Your Credit Card Number is 4805-1145-8523-6578

console.log(userOne.c); // TIP: Prevent Accessing To Card Property
// Output => undefined