let start = new Date();
for (let i = 0; i <= 99999; i++) document.write(`${i}<br />`);
let end = new Date();
console.log(`Loop Took ${end - start} Milliseconds`); // Output => "Loop Took 1921 Milliseconds" (Number may change)
