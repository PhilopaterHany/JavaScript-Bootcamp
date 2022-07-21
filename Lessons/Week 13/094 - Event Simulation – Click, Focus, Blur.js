/*
    DOM [Events Simulation]
        - click
        - focus
        - blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
    two.focus();
};

one.onblur = function () {
    document.links[0].click();
};
