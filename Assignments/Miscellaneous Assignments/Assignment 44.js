let last = 30;
let array = [];
for (let i = last; i > 0; i--) {
  if (i % 2 !== 0) {
    array.push(i);
  }
}
const result = array
  .filter((ele, index) => {
    if (index % 2 == 0) {
      // logs the output :
      console.log(ele);
      return ele;
    }
  })
  //   sum the result :
  .reduce((acc, curr) => acc + curr);
console.log(result);

// First Request Output Needed
// 29;
// 25;
// 21;
// 17;
// 13;
// 9;
// 5;
// 1;

// Second Request Output Needed
// 120;
