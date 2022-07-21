/*
    To Understand Ajax, Fetch, Promises

    Pyramid Of Doom || Callback Hell

        - What Is Callback
            - A Function That Is Passed Into Another One As An Argument To Be Executed Later
            - Function To Handle Photos
                --- [1] Download Photo From URL
                --- [2] Resize Photo
                --- [3] Add Logo To The Photo
                --- [4] Show The Photo In Website
        - Callback Hell Example
*/

function makeItRed(e) {
    e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
    console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
    console.log("Download Photo From URL");
    setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
            console.log("Add Logo To The Photo");
            setTimeout(() => {
                console.log("Show The Photo In Website");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
