const input = require("../input")

class Robot {
  constructor (positionX, positionY, orientation, directions){
    this.positionX = positionX,
    this.positionY = positionY,
    this.orientation = orientation
    this.directions = directions
  }
}

function verifyInput(posX, posY, orientation, directions){
  if ((posX >= 0 && posX <= 50) && ((posY >= 0 && posY <= 50) && 
  (orientation === "N" || orientation === "S"  || orientation === "E"  || orientation === "w"))){
    new Robot(posX, posY, orientation, directions)
  } else {
    throw new RangeError('The robot must be placed inside the grid')
  }
};


module.exports ={
  verifyInput: verifyInput,
};