setTimeout(() => {
    let popup = document.createElement("div");
    popup.className = "welc";
    popup.style.cssText =
        "position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);background-color: #ddd;padding: 25px 100px;text-align: center;font-family: sans-serif;";
    document.body.prepend(popup);

    let button = document.createElement("button");
    button.innerHTML = "x";
    button.style.cssText =
        "position: absolute;top: -10px;right: -10px;border: none;outline: none;width: 30px;height: 30px;border-radius: 50%;background-color: #f00;color: #fff;cursor: pointer;";
    popup.append(button);
    button.addEventListener("click", () => popup.remove());

    let heading = document.createElement("h1");
    heading.innerHTML = "Welcome";
    popup.append(heading);

    let para = document.createElement("p");
    para.innerHTML = "Welcome To Elzero Web School";
    popup.append(para);
}, 5000);
