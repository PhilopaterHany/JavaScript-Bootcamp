const currInp = document.querySelector("form input[type=number]");
const usCurr = document.querySelector("form .us-dollar");
const egCurr = document.querySelector("form .eg-pound");

currInp.oninput = () => {
    usCurr.innerHTML = currInp.value;
    egCurr.innerHTML = (currInp.value * 15.6).toFixed(2);
};

document.forms[0].onsubmit = (e) => e.preventDefault();

// Extra Work To Prevent Writing " - e + " in input
currInp.onkeydown = (e) => {
    if (["-", "+", "e"].includes(e.key)) e.preventDefault();
};
