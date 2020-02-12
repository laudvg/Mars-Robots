const inputParser = require("../inputValue")
const mars = require("../mars");
const Grid = require("../grid");

describe("input processing", function(){
  const splitInputTest = function (input, expectedResult){
    expect(inputValue.splitInput(input)).toEqual(expectedResult);
  }
  
  const input = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";
  const mars = inputParser(input);

  it("should return a which of the given input", function(){
     
    expect(mars.grid.terrain.length).toEqual(5);
    mars.grid.terrain.forEach((row) => {
      expect(row.length).toEqual(3);
      row.forEach((cell) => {
        expect(cell).toBeFalse();
      })
    })
  });

  const checkRobot = function(robot, x, y, orientation){
    expect(robot.robotX).toEqual(x);
    expect(robot.robotY).toEqual(y);
    expect(robot.robotOrientation).toEqual(orientation);
  }

  it("should give as many robots as received", function(){
    expect(mars.robots.length).toEqual(3)
    checkRobot(mars.robots[0], 1, 1, "E");
    checkRobot(mars.robots[1], 3, 2, "N");
    checkRobot(mars.robots[2], 0, 3, "W");
  });

});

const verifyGrid = function (coordCheck, expected) {
  const grid = 
  expect(() => {
    new Grid(coordCheck)
  }).toThrow(expected);
} 

describe("To draw grid", function(){

  it("if the given x is bigger than 50 throw error", function(){
    const coordCheck = "55 3";
    const expectedResult = new RangeError('The coordinates value must be between 0 and 50.');
    verifyGrid(coordCheck, expectedResult)
  });

  it("if the given y is bigger than 50 throw error", function(){
    const coordCheck = "10 55";
    const expectedResult = new RangeError('The coordinates value must be between 0 and 50.');
    verifyGrid(coordCheck, expectedResult)
  });

  it("if the given x is smaller than 0 throw error", function(){
    const coordCheck = "-10 5";
    const expectedResult = new RangeError('The coordinates value must be between 0 and 50.');
    verifyGrid(coordCheck, expectedResult)
  });

  it("if the given Y is smaller than 0 throw error", function(){
    const coordCheck ="10 -5";
    const expectedResult = new RangeError('The coordinates value must be between 0 and 50.')
    verifyGrid(coordCheck, expectedResult)
  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    const coordCheck ="10.5 5";
    const grid = new Grid(coordCheck);
    expect(grid.X).toEqual(10);
    expect(grid.Y).toEqual(5);
  });

})

