let input = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
let splited = input.toUpperCase().split("\n");
let grid = splited[0].split(" ")
let gridX= parseInt(grid[0])
let gridY= parseInt(grid[1])

module.exports ={
  // input : input,
  grid: grid,
  gridX: gridX,
  gridY: gridY,
  splited : splited,
  marsRobots : marsRobots
} 