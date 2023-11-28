const textAreaElement = document.querySelector(".form textarea");
const btnElement = document.querySelector(".form button");

const saveTextToFile = () => {
    const textFileAsBlob = new Blob([textAreaElement.value], {
        type: "text/plain",
    });

    const linkElement = document.createElement("a");
    linkElement.download = "saved-file.txt";
    linkElement.href = URL.createObjectURL(textFileAsBlob);
    document.body.appendChild(linkElement);

    linkElement.click();

    document.body.removeChild(linkElement);

    URL.revokeObjectURL(linkElement.href);
};

btnElement.addEventListener("click", saveTextToFile);
