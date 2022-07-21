const getData = (jsonData) => {
    return new Promise((resolve, reject) => {
        let myReq = new XMLHttpRequest();
        myReq.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("Sorry, No Data Was Found."));
            }
        };
        myReq.open("GET", jsonData);
        myReq.send();
    });
};
getData("../data.json")
    .then((result) => {
        result.length = 5;
        return result;
    })
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            let div = document.createElement("div");

            let title = document.createElement("h3");
            title.appendChild(document.createTextNode(result[i].title));
            div.appendChild(title);

            let desc = document.createElement("p");
            desc.appendChild(document.createTextNode(result[i].description));
            div.appendChild(desc);

            document.body.appendChild(div);
        }
    })
    .catch((rej) => {
        document.body.appendChild(document.createTextNode(rej));
    });
