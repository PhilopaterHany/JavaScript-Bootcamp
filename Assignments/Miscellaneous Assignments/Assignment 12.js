let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
let result = [];

function namesFunction(namesArr) {
    // Method 1
    // for (const index in namesArr) {
    //     if (namesArr[index][0].toLowerCase() === namesArr[index][namesArr[index].length - 1].toLowerCase()) {
    //         result.push(namesArr[index]);
    //     }
    // }

    // Method 2
    let result = namesArr.filter((name) => name[0].toLowerCase() === name[name.length - 1].toLowerCase());

    return result
}

console.log(namesFunction(names)); // ['Osso', 'Aola', 'Daad', 'Roor']
