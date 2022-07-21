function specialMix(...data) {
  // Write Your Code Here
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
    if (isNaN(data[i])) continue;
    else result += data[i];
  }
  if (result === 0) return "All Inputs Are String";
  return result;
}

console.log(specialMix(1, 20, 300, 4000)); // Output => 4321
console.log(specialMix("30Test", "Testing", "70Cool")); // Output => 100
console.log(specialMix("Testing", "5Testing", "250Cool")); // Output => 255
console.log(specialMix("Test", "Cool", "Test")); // Output => All Inputs Are String
