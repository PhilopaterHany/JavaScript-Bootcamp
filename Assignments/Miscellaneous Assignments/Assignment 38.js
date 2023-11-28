let str = "i lovE elzeRO weB schOOL";

str = str.split(" ");
for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1).toLowerCase();
}
str = str.join(" ");

console.log(str); // "I Love Elzero Web School"
