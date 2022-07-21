/*
    BOM [Browser Object Model]
        Local Storage Practice
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (localStorage.getItem("color")) {
    // If There Is Color In Local Storage
    // [1] Add Color To Div
    exp.style.backgroundColor = localStorage.getItem("color");

    // [2] Remove Active Class From All Lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });

    // [3] Add Active Class To Current Color
    document
        .querySelector(`[data-color="${localStorage.getItem("color")}"]`)
        .classList.add("active");
}

lis.forEach((li) => {
    // Adding Their Color
    li.style.backgroundColor = li.dataset.color;

    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        // Remove Active Class From all Lis
        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");

        // Add Current Color To Local Storage
        localStorage.setItem("color", e.currentTarget.dataset.color);

        // Change Div Background Color
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
