/*
    Convert This Normal Fuction To Arrow Function:
        function itsMe() {
            return `I am A Normal Function`
        }
        console.log(itsMe()); => Output => I am A Normal Function
*/
let itsMe = () => `I am An Arrow Function`;
console.log(itsMe()); // Output => I am An Arrow Function

/*
    Convert This Normal Fuction To Arrow Function:
        function urlCreate(protocol, web, tld) {
            return `${protocol}://www.${web}.${tld}`
        }
        console.log(urlCreate("https", "elzero", "org")); => Output => https://www.elzero.org
*/
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org"));