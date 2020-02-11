class Grid {
  constructor(coordinates){
    const coordinatesSet = coordinates[0].split(" ");
    this.X = parseInt(coordinatesSet[0]);
    this.Y = parseInt(coordinatesSet[1]);
    if (this.X <= 0 || this.X > 50 || this.Y <= 0 || this.Y > 50){
      throw new RangeError("The coordinates value must be between 0 and 50.");
    }
  }
} 
// console.log(newGrid)
// console.log(verificator(newGrid))

module.exports = Grid;