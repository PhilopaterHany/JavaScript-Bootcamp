/*
    BOM [Browser Object Model]
        - stop()
        - print()
        - focus()
        - scrollTo(x, y || Options)
        - scroll(x, y || Options)
        - scrollBy(x, y || Options)
*/

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

window.scrollTo({
    left: 500,
    top: 200,
    behavior: "smooth",
});
