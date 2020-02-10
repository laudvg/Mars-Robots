const input = require("../input")

let input = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
let splitedInput = input.toUpperCase().split("\n");

class Grid {
  constructor(coordinates){
    const coordinatesSet = coordinates[0].split(" ");
    this.X = parseInt(coordinatesSet[0]);
    this.Y = parseInt(coordinatesSet[1]);
  }
} 

let newGrid = (new Grid(splitedInput));
let drawGrid = false;

function verificator(newGrid){
 if ((newGrid.X >= 0 && newGrid.X <= 50) && ((newGrid.Y >= 0 && newGrid.Y <= 50))){
      return drawGrid = true;
   } else {
      return drawGrid = false;
      throw new RangeError("The coordinates value must be between 0 and 50.");
 }}

verificator(newGrid)

// console.log(newGrid)
// console.log(verificator(newGrid))

module.exports ={
  verifyCoords: verifyCoords,
  newGrid: newGrid,
  drawGrid: drawGrid
};