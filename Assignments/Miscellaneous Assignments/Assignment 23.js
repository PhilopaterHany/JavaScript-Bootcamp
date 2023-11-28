function reversing(str) {
    return str.replace(/\w+/g, (el) => el.split("").reverse("").join(""));
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
