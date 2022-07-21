const font = document.getElementById("font");
const color = document.getElementById("color");
const size = document.getElementById("size");
const text = document.querySelector("section .text");

window.onload = () => {
    if (window.localStorage.getItem("fontFamily")) {
        font.value = window.localStorage.getItem("fontFamily");
    }
    if (window.localStorage.getItem("color")) {
        color.value = window.localStorage.getItem("color");
    }
    if (window.localStorage.getItem("fontSize")) {
        size.value = window.localStorage.getItem("fontSize");
    }
    styleText();
};
font.onchange = () => {
    window.localStorage.fontFamily = font.value;
    styleText();
};
color.onchange = () => {
    window.localStorage.color = color.value;
    styleText();
};
size.onchange = () => {
    window.localStorage.fontSize = size.value;
    styleText();
};

function styleText() {
    window.localStorage.getItem("fontFamily")
        ? (text.style.fontFamily = window.localStorage.fontFamily)
        : (text.style.fontFamily = "unset");
    window.localStorage.getItem("color")
        ? (text.style.color = window.localStorage.color)
        : (text.style.color = "#FFF");
    window.localStorage.getItem("fontSize")
        ? (text.style.fontSize = window.localStorage.fontSize)
        : (text.style.fontSize = "unset");
}
