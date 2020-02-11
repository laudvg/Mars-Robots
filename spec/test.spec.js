const inputValue = require("../inputValue")
const mars = require("../mars");
const Grid = require("../grid");

describe("input process", function(){
  const splitInputTest = function (input, expectedResult){
    expect(inputValue.splitInput(input)).toEqual(expectedResult);
  }

  it ("turn string into array os strings separated by new line", function(){
    let newInput = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"
    let expectedResult = ["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"]
    splitInputTest(newInput, expectedResult)
  });

  it("turn lowercase into uppercase", function(){
    let newInput = ("f");
    let expectedResult = ["F"]
    splitInputTest(newInput, expectedResult)
  });
  
  const getGridXYTest = function (input, expectedResult){
    expect(inputValue.getGridXY(input)).toEqual(expectedResult);
  }

  it ("must save first array as grids coords", function(){
    let newInput = (["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"]);
    let expectedResult= ["5", "3"];
    getGridXYTest(newInput, expectedResult)
  })

})

describe("draw grid", function(){
  
  const verifyGrid = (coords) => {
    new Grid(coords)
  } 

  it("if the given x is bigger than 50 throw error", function(){
    let biggerThan50 = function() {verifyGrid("55 10"); };
    expect(biggerThan50).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given y is bigger than 50 throw error", function(){
    let biggerThan50 = function() {verifyCoords("10 55"); };
    expect(biggerThan50).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given x is smaller than 0 throw error", function(){
    let smallerThan0 = function() {verifyCoords("-5 10"); };
    expect(smallerThan0).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given y is smaller than 0 throw error", function(){
    let smallerThan0 = function() {verifyCoords("5 -10"); };
    expect(smallerThan0).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    let decimal = function() {verifyCoords("5 10.5"); };
    expect(decimal).toEqual("5 10")
  });

})

fdescribe("place the robot in the grid", function(){


  it("if the given x is bigger than 50 throw error", function(){
    let biggerThan50 = function() { verifyRobot([55, 10]); };
    expect(biggerThan50).toThrowError(RangeError, 'The robot must be placed inside the grid');
  });

  it("if the given y is bigger than 50 throw error", function(){
    let biggerThan50 = function() { verifyRobot([10, 55]); };
    expect(biggerThan50).toThrowError(RangeError, 'The robot must be placed inside the grid');
  });

  it("if the given x is smaller than 0 throw error", function(){
    let smallerThan0 = function() { verifyRobot([-10, 40]); };
    expect(smallerThan0).toThrowError(RangeError, 'The robot must be placed inside the grid');
  });

  it("if the given y is smaller than 0 throw error", function(){
    let smallerThan0 = function() { verifyRobot([10, -40]); };
    expect(smallerThan0).toThrowError(RangeError, 'The robot must be placed inside the grid');
  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    let decimals = function() { verifyRobot([10, 40.5]); };
    expect(decimals).toEqual([5, 10])  });

  it("must have an orientation and must be a string", function(){
    let orientation = function() { verifyRobot(["E"]); };
    expect(orientation).toBeDefined();
  });

  it("if the given orientation is not === N, S, E, or W, thow error", function(){
    let orientation = function() { verifyRobot(["A"]); };
    expect(orientation).toThrowError(Error, 'The orientation must be N, S, E, or W');
  });

})
