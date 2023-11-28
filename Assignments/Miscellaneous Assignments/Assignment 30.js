for (let i = 1; i < 100; i += 5) {
    // Your Code Here (Do NOT edit the for loop header)

    // Method 1
    // if (i.toString().endsWith("1")) console.log(i);

    // Method 2
    if (i % 2 !== 0) console.log(i);

    // Method 3
    // if (i % 2 === 0) continue;
    // console.log(i);
}

// Output Needed:
// 1
// 11
// 21
// 31
// 41
// 51
// 61
// 71
// 81
// 91
