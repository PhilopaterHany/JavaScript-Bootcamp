/*
    Ajax
        - Ready State => Status Of The Request
            [0] Request Not Initialized
            [1] Server Connection Established
            [2] Request Received
            [3] Processing Request
            [4] Request Is Finished And Response Is Ready
        - Status
            [200] Response Is Successful
            [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
    // console.log(myRequest.readyState);
    // console.log(myRequest.status);
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
