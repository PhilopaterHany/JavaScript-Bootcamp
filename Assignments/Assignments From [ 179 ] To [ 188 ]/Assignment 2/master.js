async function getData(jsonLink) {
    try {
        const response = await fetch(jsonLink);
        const data = await response.json();
        data.length = 5;
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");

            let h3 = document.createElement("h3");
            h3.innerHTML = data[i].title;
            div.appendChild(h3);

            let p = document.createElement("p");
            p.innerHTML = data[i].description;
            div.appendChild(p);

            document.body.appendChild(div);
        }
    } catch (error) {
        document.body.appendChild(document.createTextNode(error));
    }
}
getData("../data.json");
