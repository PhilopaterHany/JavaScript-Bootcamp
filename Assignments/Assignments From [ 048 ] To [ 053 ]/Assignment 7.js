let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
/*
    Output:
        2
        3
        4
*/
for (let i = start; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i] !== mix[start]) console.log(mix[i]);
}
