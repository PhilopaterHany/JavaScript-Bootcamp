function replaceFirstWithLast(word) {
    return `${word.at(-1)}${word.slice(1, -1)}${word[0]}`;
}

console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oellH
