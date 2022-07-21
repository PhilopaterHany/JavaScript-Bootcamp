for (let i = 0; i < document.images.length; i++) {
    document.images[i].hasAttribute("alt")
        ? document.images[i].setAttribute("alt", "Old")
        : document.images[i].setAttribute("alt", "Elzero New");
}
