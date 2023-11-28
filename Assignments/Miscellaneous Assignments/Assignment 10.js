String.prototype.elzeroRepeat = function (num) {
    let result = "";

    for (let i = 0; i < num; i++) result += this;

    return result;
};

console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero
