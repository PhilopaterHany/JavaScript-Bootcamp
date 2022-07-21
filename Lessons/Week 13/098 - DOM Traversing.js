/*
    DOM [Traversing]
        - nextSibling
        - previousSibling
        - nextElementSibling
        - previousElementSibling
        - parentElement
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function () {
    span.parentElement.remove();
};
