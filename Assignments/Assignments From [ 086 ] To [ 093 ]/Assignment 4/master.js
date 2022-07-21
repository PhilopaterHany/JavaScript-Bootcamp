// Creating Variables
let firstDiv = document.querySelector(".one");
let secDiv = document.querySelector(".two");
let secTitle = secDiv.title;
let secTxt = secDiv.innerHTML;

// Switching Attributes
secDiv.title = firstDiv.title;
firstDiv.title = secTitle;

// Switching Content
secDiv.innerHTML = `${firstDiv.innerHTML} ${
    document.getElementsByTagName("div").length
}`;
firstDiv.innerHTML = secTxt;
