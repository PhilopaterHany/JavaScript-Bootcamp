/*
    - forEach
        => method executes a provided function once for each array element.

    Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
        - Element => The current element being processed in the array.
        - Index => The index of the current element being processed in the array.
        - Array - The Current Array

    Note
        - Doesnt Return Anything [Undefined]
        - Break Will Not Break The Loop
*/
/*
    The HTML Code:
    <ul>
        <li class="active">One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
    <div class="content">
        <div>Div One</div>
        <div>Div Two</div>
        <div>Div Three</div>
    </div>
*/
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
    ele.onclick = function () {
        // Remove Active Class From All Elements
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        });
        // Add Active Class To This Element
        this.classList.add("active");
        // Hide All Divs
        allDivs.forEach(function (ele) {
            ele.style.display = "none";
        });
    };
});
