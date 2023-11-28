function checkRange(n1, n2, n3, n4, n5) {
    const max = Math.max(n1, n2, n3);
    const min = Math.min(n1, n2, n3);

    if (max >= n4 && min >= n4 && max <= n5 && min <= n5) {
        return "Yes, All Numbers Are In Range.";
    } else {
        return "No, Not All Numbers Are In Range.";
    }
}

console.log(checkRange(5, 10, 15, 5, 50)); // Yes, All Numbers Are Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes, All Numbers Are Range
console.log(checkRange(10, 15, 20, 5, 18)); // No, Not All Numbers Are In Range