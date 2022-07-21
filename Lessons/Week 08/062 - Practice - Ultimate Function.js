/*
    Function Advanced Practice
        - Parameters
        - Default
        - Rest
        - Loop
        - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
        } else {
            document.write(`<p>Skills: No Skills</p>`);
        }
    } else {
        document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");
