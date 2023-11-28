document.addEventListener("keydown", (e) => {
    if (e.key === "Alt" && e.ctrlKey && e.shiftKey) {
        console.log("You Pressed Ctrl + Alt + Shift");
    }
});
