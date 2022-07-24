/*
    Ajax
        Loop On Data

        Search
            - Cross Origin API [CORS]
            - API Authentication

        Advanced Example & Training
            - https://github.com/PhilopaterHany/GitHub-Stats-App/
*/

let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.open("GET", "https://api.github.com/users/philopaterhany/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let jsData = JSON.parse(this.responseText);
        // console.log(jsData);
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    }
};
