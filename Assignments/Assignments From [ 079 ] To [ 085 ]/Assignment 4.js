// TIP: Search About: Object.keys() & .hasOwnProperty()
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Thanks to "ahs120" for his effort in providing a better and shorter solution
// https://github.com/PhilopaterHany/JavaScript-Bootcamp/pull/20

for (let gameName of Object.keys(myFavGames)) {
    let game = myFavGames[gameName];
    console.log(`The Game Name is ${gameName}`);
    console.log(`The Publisher is ${game.publisher}`);
    console.log(`The Price is ${game.price} USD`);
    if (game.hasOwnProperty("bestThree")) {
        console.log(`- ${gameName} has releases:`);
        console.log(`   First => ${game.bestThree.one}`);
        console.log(`   Second => ${game.bestThree.two}`);
        console.log(`   Third => ${game.bestThree.three}`);
    }
    console.log("#".repeat(50));
}

/*
    Ouput:
        "The Game Name is Trinity Universe"
        "The Publisher is NIS America"
        "The Price is 40 USD"
        "##################################################"
        "The Game Name is Titan Quest"
        "The Publisher is THQ"
        "The Price is 50 USD"
        "- Titan Quest has releases:"
            "First => Immortal Throne"
            "Second => Ragnarök"
            "Third => Atlantis"
        "##################################################"
        "The Game Name is YS"
        "The Publisher is Falcom"
        "The Price is 40 USD"
        "- YS has releases:"
            "First => Oath in Felghana"
            "Second => Ark Of Napishtim"
            "Third => Origin"
        "##################################################"
*/
