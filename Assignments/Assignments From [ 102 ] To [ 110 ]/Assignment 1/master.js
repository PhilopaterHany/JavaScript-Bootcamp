let data = prompt("Print Number From – To", "5-20")
    .split("-")
    .sort((a, b) => a - b);

let counter = setInterval(() => {
    let num = document.createElement("div");
    num.innerHTML = data[0]++;
    if (num.innerHTML === data[1]) clearInterval(counter);
    document.body.append(num);
}, 0);
