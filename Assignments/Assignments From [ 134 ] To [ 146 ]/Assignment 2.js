let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bOs\d*O\b/g));
// Output => ['Os10O', 'OsO', 'Os100O']
