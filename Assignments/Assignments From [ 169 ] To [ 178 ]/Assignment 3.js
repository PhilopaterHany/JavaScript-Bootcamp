let myReq = new XMLHttpRequest();
myReq.open("GET", "Assignment 1.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);
        for (let i = 0; i < mainData.length; i++) mainData[i].category = "All";
        console.log(mainData);
        console.log("#".repeat(60)); // Just a separator
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
};
