const input = require("../input")

let newGrid = {
  axisX: 0,
  axisY: 0
};

function verifyCoords(gridX, gridY){
  if ((gridX >= 0 && gridX <= 50)&&((gridY >= 0 && gridY <= 50))){
    newGrid.axisX = Math.floor(gridX);
    newGrid.axisY = Math.floor(gridY);
  } else {
    throw new RangeError("The coordinates value must be between 0 and 50.")
  } 
};


module.exports ={
  verifyCoords: verifyCoords,
  newGrid: newGrid
};