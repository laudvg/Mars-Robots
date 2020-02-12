class Robot {
  constructor(coordinates, directions, grid){
    const initialPosition = coordinates.split(" ");
    this.robotX = parseInt(initialPosition[0]);
    this.robotY = parseInt(initialPosition[1]);
    this.robotOrientation = initialPosition[2];
    this.grid = grid;
    this.lost = false;
    this.robotDirections = directions;
    switch(this.robotOrientation){
      case "N":
      case "W":
      case "S":
      case "E":
        break;
      default:
       console.error("Invalid orientation " + this.robotOrientation);
       throw Error('The orientation must be N, S, E, or W')
    }
    if (this.robotX < 0 || this.robotX > grid.terrain.length || this.robotY < 0 || this.robotY > grid.terrain[0].length){
      throw new RangeError("The robot must be placed inside the grid");
    }
  };
  turnLeft = () => {
    switch(this.robotOrientation){
      case "N":
        this.robotOrientation = "W";
        break;
      case "W":
        this.robotOrientation = "S";
        break;
      case "S":
        this.robotOrientation = "E";
        break;
      case "E":
        this.robotOrientation = "N";
        break;
    }
  };
  turnRight = () => {
    switch(this.robotOrientation){
      case "N":
        this.robotOrientation = "E";
        break;
      case "E":
        this.robotOrientation = "S";
        break;
      case "S":
        this.robotOrientation = "W";
        break;
      case "W":
        this.robotOrientation = "N";
        break;
    }
  };
  moveForward = () => {    
    if (this.lost){
      return;
    }
    const previousPosition = {
      x : this.robotX,
      y : this.robotY 
    }
    const nextPosition = {
      x: 0,
      y: 0
    }
    switch(this.robotOrientation){
      case "N":
        nextPosition.y = this.robotY + 1;
        nextPosition.x = this.robotX;
        break;
      case "E":
        nextPosition.x = this.robotX + 1;
        nextPosition.y = this.robotY;
        break;
      case "S":
        nextPosition.y = this.robotY - 1;
        nextPosition.x = this.robotX;
        break;
      case "W":
        nextPosition.x = this.robotX - 1;
        nextPosition.y = this.robotY;
        break;
    }
    
    if (this.isLost(nextPosition)){
      if (!this.grid.terrain[previousPosition.x][previousPosition.y]){
        this.grid.terrain[previousPosition.x][previousPosition.y] = true;
        this.lost = true;
        this.robotX = nextPosition.x;
        this.robotY = nextPosition.y;
      }
    } else {  
      this.robotX = nextPosition.x;
      this.robotY = nextPosition.y;
    } 
    
  };
  isLost = (position) => {
    return (position.x < 0 
      || position.y < 0 
      || position.x >= this.grid.terrain.length
      || position.y >= this.grid.terrain[position.x].length)
  }
  moveRobot = () => {
    
    this.robotDirections.split("").forEach(direction => {
      if(direction === "L"){
        this.turnLeft();   
      } else if (direction === "R"){
        this.turnRight();   
      } else if (direction === "F") {
           this.moveForward();
      } else {
        console.log("Directions must be L, R, or F")
      }
    });
  };
}

module.exports = Robot;