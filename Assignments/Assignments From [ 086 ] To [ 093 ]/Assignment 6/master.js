const myNum = document.querySelector("form input.number");
const myText = document.querySelector("form input.text");
const myType = document.querySelector("form select.type");
const myColor = document.querySelector("form input.bg-col");
const myTxtColor = document.querySelector("form input.txt-col");
const mySub = document.querySelector("form input.submit");
const myResult = document.querySelector("form div.results");
let eleNum, eleTxt, eleType, eleCol, eleTeCol;

document.forms[0].onsubmit = (e) => e.preventDefault();
myNum.oninput = () => (eleNum = myNum.value);
myText.oninput = () => (eleTxt = myText.value.trim());
myColor.oninput = () => (eleCol = myColor.value);
myTxtColor.oninput = () => (eleTeCol = myTxtColor.value);

mySub.onclick = () => {
    document.querySelectorAll(".results .box").forEach((box) => box.remove());
    myType.value === "Div" ? (eleType = "div") : (eleType = "section");
    for (let i = 0; i < eleNum; i++) {
        let myElem = document.createElement(eleType);
        myElem.className = "box";
        myElem.id = `id-${i + 1}`;
        myElem.setAttribute("title", "Element");
        myElem.setAttribute("style", `background-color: ${eleCol ? eleCol : "#000"};color: ${eleTeCol ? eleTeCol : "#fff"}`);

        let myText = document.createTextNode(eleTxt ? eleTxt : "No Text Was Written")
        myElem.appendChild(myText);
        myResult.appendChild(myElem);
    }
};

// Extra Work To Prevent Writing " - e + " in input[type=number]
myNum.onkeydown = (e) => {
    if ((invalidChars = ["-", "+", "e"].includes(e.key))) e.preventDefault();
};
