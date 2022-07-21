const userName = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");
const job = document.querySelector("select");

window.onload = () => {
    if (sessionStorage.getItem("userName")) {
        userName.value = sessionStorage.getItem("userName");
    }
    if (sessionStorage.getItem("email")) {
        email.value = sessionStorage.getItem("email");
    }
    if (sessionStorage.getItem("password")) {
        password.value = sessionStorage.getItem("password");
    }
    if (sessionStorage.getItem("job")) {
        job.value = sessionStorage.getItem("job");
    }
};

userName.oninput = () => (sessionStorage.userName = userName.value);
email.oninput = () => (sessionStorage.email = email.value);
password.oninput = () => (sessionStorage.password = password.value);
job.oninput = () => (sessionStorage.job = job.value);
