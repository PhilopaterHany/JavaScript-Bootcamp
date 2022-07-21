/*
    Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Iam The Good Promise");
    }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
    console.log("Before Fetch");
    try {
        let myData = await fetch(
            "https://api.github.com/users/elzerowebschool/repos"
        );
        console.log(await myData.json());
    } catch (reason) {
        console.log(`Reason: ${reason}`);
    } finally {
        console.log("After Fetch");
    }
}

fetchData();
