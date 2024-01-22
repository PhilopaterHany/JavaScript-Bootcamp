// dom event :
document.addEventListener(
  "keydown",
  function (event) {
    // console.log(event.altKey, event.ctrlKey, event.shiftKey);
    if (event.altKey && event.ctrlKey && event.shiftKey) {
      console.log("You Pressed Ctrl + Alt + Shift");
    }
    // return false;
  }
  // triggers only once :
  // { once: true }
);
