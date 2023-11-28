let myMoney = 5301503206;

function moneyFormatter(money) {
    // Method 1
    // return money.toString().replace(/\B(?=(\d{3})+\b)/g, ",");
    
    // Method 2
    moneyArr = money.toString().split("");
    for (let i = moneyArr.length - 3; i > 0; i -= 3) moneyArr.splice(i, 0, ",");
    return moneyArr.join("");

    // Method 3
    // return money.toLocaleString();
}

console.log(moneyFormatter(myMoney));
