const Grid = require("./grid");
const Robot = require("./placeRobot");

const inputParser = (input) => {
  input = input.replace(/\r/g, "");
  if (input.endsWith("\n")){
    input = input.substring(0, input.length - 1);
  }
  const inputSplitted = input.toUpperCase().split("\n");
  const gridInput = inputSplitted.shift();
  const grid = new Grid(gridInput);
  
  let robots = [];
  for (let i = 0; i < inputSplitted.length; i = i + 2){
    robots.push(new Robot(inputSplitted[i], inputSplitted[i + 1], grid));
  }

  return {
    grid: grid,
    robots: robots
  }

}

module.exports = inputParser;