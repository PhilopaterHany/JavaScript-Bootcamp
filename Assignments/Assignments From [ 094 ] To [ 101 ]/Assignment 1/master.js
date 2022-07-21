window.onload = () => {
    for (let i = 0; i < document.links.length; i++) {
        if (
            document.links[i].classList.contains("open") &&
            document.links[i].innerHTML === "Elzero"
        ) {
            document.links[i].click();
        }
    }
};
