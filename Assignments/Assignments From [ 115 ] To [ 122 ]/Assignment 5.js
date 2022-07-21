const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
        "Oath In Felghana": ["USA", "Japan"],
        "Ark Of Napishtim": {
            US: "20 USD",
            JAP: "10 USD",
        },
        Origin: "30 USD",
    },
};

// Write Your Destructuring Assignment/s Here
const {
    title: t,
    developer: d,
    releases: { Origin: or },
} = game;
const [o, a] = Object.keys(game.releases);
const [u, j] = game.releases["Oath In Felghana"];
const { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];

console.log(`My Favourite Games Style is ${t} Style`);
// Output => My Favourite Games Style is YS Style

console.log(`And I Love ${d} Games`);
// Output => And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// Output => My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Output => Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Output => Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Output => Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Output => Origin Price Is 30 USD
