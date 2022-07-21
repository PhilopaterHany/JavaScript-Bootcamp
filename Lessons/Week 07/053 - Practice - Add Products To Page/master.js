/*
    Products Practice
*/

const products = ["Keyboard", "Mouse", "Speakers", "Mouse Pad", "Monitor", "iPhone"];
const colors = ["Red", "Green", "Blue"];
const showCount = 5;

document.write(`<h1>Showing ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" || ")}</p>`);
    document.write(`</div>`);
    document.write(`<hr />`);
}
