class Grid {
  constructor(coordinates){
    const coordinatesSet = coordinates.split(" ");
    this.X = Math.floor(parseInt(coordinatesSet[0]));
    this.Y = Math.floor(parseInt(coordinatesSet[1]));
    if (this.X <= 0 || this.X > 50 || this.Y <= 0 || this.Y > 50){
      throw new RangeError("The coordinates value must be between 0 and 50.");
    }
    this.terrain = new Array(this.X);
    for (let i = 0; i < this.X; i++){
      let row = new Array(this.Y);
      row.fill(false)
      this.terrain[i] = row;
    }
  }
} 

module.exports = Grid;