let msg = document.createElement("div");
msg.innerHTML = "10";
document.body.append(msg);

let counter = setInterval(() => {
    msg.innerHTML -= 1;
    if (msg.innerHTML === "0") location.href = "https://elzero.org/";
}, 1000);
