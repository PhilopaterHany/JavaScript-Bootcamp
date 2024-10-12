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

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
    console.log(
        `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
    );
    console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

    if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
        console.log("- Game Has Releases");
        console.log(
            `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
        );
        console.log(
            `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
        );
        console.log(
            `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
        );
    }
    console.log("#".repeat(20));
}


//  method 2


let keys = Object.keys(myFavGames);
let objectLength = keys.length;
for (let i = 0; i < objectLength; i++) {
  let gameName = keys[i];
  let game = myFavGames[gameName];
  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);
  if (game.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// method 3

for (let gameName of Object.keys(myFavGames)) {
  let game = myFavGames[gameName];

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  if (game.hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${game.bestThree.one}`);
    console.log(`Second => ${game.bestThree.two}`);
    console.log(`Third => ${game.bestThree.three}`);
  }

  console.log("#".repeat(20));
}

// method -4

for (let gameName of Object.keys(myFavGames)) {
  let game = myFavGames[gameName];

  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${game.publisher}`);
  console.log(`The Price Is ${game.price}`);

  if (game.bestThree) {
    console.log("- Game Has Releases");
    for (let key in game.bestThree) {
      console.log(
        `${key.charAt(0).toUpperCase() + key.slice(1)} => ${
          game.bestThree[key]
        }`
      );
    }
  }

/*
    Ouput:
        "The Game Name Is Trinity Universe"
        "The Publisher Is NIS America"
        "The Price Is 40"
        "####################"
        "The Game Name Is Titan Quest"
        "The Publisher Is THQ"
        "The Price Is 50"
        "- Game Has Releases"
        "First => Immortal Throne"
        "Second => Ragnarök"
        "Third => Atlantis"
        "####################"
        "The Game Name Is YS"
        "The Publisher Is Falcom"
        "The Price Is 40"
        "- Game Has Releases"
        "First => Oath in Felghana"
        "Second => Ark Of Napishtim"
        "Third => origin"
        "####################"
*/
