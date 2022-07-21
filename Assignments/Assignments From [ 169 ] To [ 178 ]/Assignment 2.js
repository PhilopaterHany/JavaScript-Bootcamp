let myReq = new XMLHttpRequest();
myReq.open("GET", "Assignment 1.json");
myReq.send();
myReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
myReq.onloadend = function () {
    console.log("Data Loaded");
};
