let index = 10;
let end = 6;
let jump = 2;
/* 
    Output:
        10
        8
        6
        4
*/
for (;;) {
    console.log(`${index}`);
    index -= jump;
    if (index <= jump) break;
}
