/*
    Destructuring
        - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// Save Book Value In Stash
// let stash = book; // Video

// Change Book Value
// book = video; // Book

// Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);
