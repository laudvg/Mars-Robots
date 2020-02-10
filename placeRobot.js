const input = require("../input")

var input = "5 3\n1 1 E\nRFRFRFRf\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
var splitedInput = input.toUpperCase().split("\n"); // only robots
var grid = splitedInput.shift().split(" ") // grid coordinates
var gridX= parseInt(grid[0]) // grid X
var gridY= parseInt(grid[1])  // grid Y

function verifyInput(posX, posY, orientation, directions){
  if ((posX >= 0 && posX <= 50) && ((posY >= 0 && posY <= 50) && 
  (orientation === "N" || orientation === "S"  || orientation === "E"  || orientation === "w"))){
    new Robot(posX, posY, orientation, directions)
  } else {
    throw new RangeError('The robot must be placed inside the grid')
  }
};

class Robot {
  constructor(coordinates, directions){
    const initialPosition = coordinates.split(" ");
    this.robotX = initialPosition[0];
    this.robotY = initialPosition[1];
    this.robotOrientation = initialPosition[2];
    this.robotDirections = directions;
  }
}

let robots = [];
for (let i = 0; i < splitedInput.length; i = i + 2){
  robots.push(new Robot(splitedInput[i], splitedInput[i + 1]))
}


module.exports ={
  verifyInput: verifyInput,
};