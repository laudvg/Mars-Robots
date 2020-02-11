let input = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
 
let splitedInput = [];
let grid = [];

splitInput = (input) => {
splitedInput = input.toUpperCase().split("\n");
return splitedInput
}
splitInput(input);
// console.log(splitedInput)

getGridXY = (splitInput) => {
grid = splitInput.shift().split(" ")  
return grid
}
getGridXY(splitedInput);
// console.log(grid)

let gridX = parseInt(grid[0]);
let gridY = parseInt(grid[1]);

module.exports ={
  // input : input,
  splitInput: splitInput,
  getGridXY: getGridXY,
  grid: grid,
  gridX: gridX,
  gridY: gridY,
} 