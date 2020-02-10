const input = require("../input")

var input = "5 3\n1 1 E\nRFRFRFRf\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
var splitedInput = input.toUpperCase().split("\n"); // only robots
var grid = splitedInput.shift().split(" ") // grid coordinates
var gridX= parseInt(grid[0]) // grid X
var gridY= parseInt(grid[1])  // grid Y

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

let drawRobot = false;

function verifyRobot(robots){
  for(let i = 0; i < robots.length; i++){
      if ((robots[i].robotX >= 0 && robots[i].robotX <= 50) && ((robots[i].robotY >= 0 && robots[i].robotY <= 50) && 
  (robots[i].robotOrientation === "N" || robots[i].robotOrientation === "S"  || robots[i].robotOrientation === "E"  || robots[i].robotOrientation === "w"))){
    return drawRobot = true;
  } else {
    return drawRobot = false;
    throw new RangeError('The robot must be placed inside the grid')
  }
  }
};

// console.log(drawRobot)
// console.log(robots)
// console.log(verifyRobot(robots))