let msg = document.createElement("div");
msg.innerHTML = "10";
document.body.append(msg);

let counter = setInterval(() => {
    msg.innerHTML -= 1;
    if (msg.innerHTML === "5")
        window.open(
            "https://elzero.org/",
            "_blank",
            "width=500,height=500,left=500"
        );
    if (msg.innerHTML === "0") clearInterval(counter);
}, 1000);
