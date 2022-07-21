let start = 10;
let end = 0;
let stop = 3;
/*
    Output:
        10
        09
        08
        07
        06
        05
        04
        03
*/
for (let i = start; i >= end; i--) {
  i === start ? console.log(`${i}`) : console.log(`${end}${i}`);
  if (i === stop) break;
}
