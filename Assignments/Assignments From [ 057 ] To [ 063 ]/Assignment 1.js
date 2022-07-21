function sayHello(theName, theGender) {
    // Write Your Code Here
    switch (theGender) {
        case "Male":
            console.log(`Hello Mr ${theName}`);
            break;
        case "Female":
            console.log(`Hello Miss ${theName}`);
            break;
        default:
            console.log(`Hello ${theName}`);
    }
}
sayHello("Osama", "Male"); // Output => "Hello Mr Osama"
sayHello("Eman", "Female"); // Output => "Hello Miss Eman"
sayHello("Sameh"); // Output => "Hello Sameh"
