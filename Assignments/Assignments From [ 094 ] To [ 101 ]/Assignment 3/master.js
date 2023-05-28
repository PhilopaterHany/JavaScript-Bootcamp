document.getElementsByTagName("p")[0].remove();

let myElem = document.querySelector(".our-element");
let myFirst = myElem.cloneNode(true);
let myLast = myElem.cloneNode(true);

function elemAttr(ele, word) {
    ele.className = word.toLowerCase();
    ele.title = `${word} Element`;
    ele.setAttribute("data-value", word);
    ele.innerHTML = word;
}

elemAttr(myFirst, "Start");
elemAttr(myLast, "End");

myElem.before(myFirst);
myElem.after(myLast);
