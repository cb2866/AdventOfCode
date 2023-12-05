// link: https://adventofcode.com/2023/day/2

/* Plan of Attack 

--> Question <--
- Determine which games would be possible based on having 12 red, 13 green, 14 blue
- Return the SUM of the IDS of those games which are possible

--> Input <-- 
- Convert the input into an object where the Id is the key and the value is represented by an array
{Game ID: [results]}


*/

const dataset = [];

const formattedData = dataset.map((game, index) => {
  const [gameNumber, roundsData] = game.split(":");
  const rounds = roundsData.split(";").map((round) => {
    const colors = round
      .trim()
      .split(",")
      .map((color) => {
        const [count, colorName] = color.trim().split(" ");
        return { [colorName]: parseInt(count) };
      });
    return Object.assign(...colors);
  });

  return {
    gameNumber: parseInt(gameNumber.trim().replace("Game", "")),
    rounds,
  };
});
