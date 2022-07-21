// Declaring Variables
const currEle = document.querySelector("div[title=Current]");
const classesDiv = document.querySelector(".classes-list div");
const addClass = document.querySelector(".classes-to-add");
const remClass = document.querySelector(".classes-to-remove");

// Function To Print All Element Classes
function classL(element, result) {
  if (element.classList.value === "") {
    result.innerHTML = "No Classes To Show";
  } else {
    element.classList.value
      .split(" ")
      .sort()
      .map((c) => {
        let myClass = document.createElement("span");
        myClass.innerHTML = c;
        result.append(myClass);
      });
  }
}

// Printing The Main Classes Before Adding Or Removing
classL(currEle, classesDiv);

// Scripting Add Class Input Field
addClass.onblur = () => {
  const wordsAdd = addClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsAdd.length; i++) {
    currEle.classList.add(wordsAdd[i]);
  }
  addClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};

// Scripting Remove Class Input Field
remClass.onblur = () => {
  const wordsRem = remClass.value.trim().toLowerCase().split(" ");
  for (let i = 0; i < wordsRem.length; i++) {
    currEle.classList.remove(wordsRem[i]);
  }
  remClass.value = "";
  classesDiv.innerHTML = "";
  classL(currEle, classesDiv);
};
