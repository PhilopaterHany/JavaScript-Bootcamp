let fileName = "Elzero.php";

function fileNameSplitter(name) {
    // Method 1
    return `${name.split(".")[0]}\n${name.split(".")[1]}`;

    // Method 2
    // return `${name.slice(0, name.indexOf("."))}\n${name.slice(name.indexOf(".") + 1, name.length)}`;

    // Method 3
    // return `${name.match(/\w+(?=\.)/)}\n${name.match(/(?<=\.)\w+/)}`;

    // Method 4
    // return `${/\w+(?=\.)/.exec(name)[0]}\n${/(?<=\.)\w+/.exec(name)[0]}`;
}

console.log(fileNameSplitter(fileName));
// Elzero
// php
