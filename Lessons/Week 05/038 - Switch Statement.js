/*
    Switch Statement
        switch(expression) {
            case 1:
                Code Block
                break;

            case 2:
                Code Block
                break;

            default:
                Code Block
        }
    - Default Ordering
    - Multiple Match
    - ===
*/

let day = "A";

switch (day) {
    default:
        console.log("Unknown Day");
        break;
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
}
