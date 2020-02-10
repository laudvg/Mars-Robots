const input = require("../input")
const mars = require("../mars");
const grid = require("../grid");
const move = require("../moveRobot");
const placeRobot = require("../placeRobot");

// describe("hello world", function(){
//   it("hello test", function(){
//     let salute = mars.hello();
//     expect(salute).toEqual("hello");
//   })
// })

// describe("determine sequences and reports robot position", function(){
//   it("should return position", function(){
//     let robots = mars.marsRobots("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
//     expect(robots).toEqual("1 1 E\n3 3 N LOST\n2 3 S")
//   })
// })

describe("input process", function(){

  const marsRobotsTest = function (input, expectedResult){
    expect(mars.marsRobots(input)).toEqual(expectedResult);
  }

  it ("turn string into array os strings separated by \n", function(){
    let newInput = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL"
    let expectedResult = ["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"]
    marsRobotsTest(newInput, expectedResult)
  });

  it("turn lowercase into uppercase", function(){
    let input = mars.marsRobots("5 3\n1 1 e\nRFRFRFRf\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
    let expectedResult = ["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"]
    marsRobotsTest(input, expectedResult)
  });
  
  it ("must save first array as grids coords", function(){
    let input = (["5 3", "1 1 E", "RFRFRFRF", "3 2 N", "FRRFLLFFRRFLL", "0 3 W", "LLFFFLFLFL"]);
    let expectedResult= "5 3";
    marsRobotsTest(input, expectedResult)
  })

  it("must save first number as Grid's x", function(){
    let gridX = input (["5 3"]);
    expect(gridX).toEqual("5");
  });

  it("must save second number as Grid's y", function(){
    let gridY = input (["5 3"]);
    expect(gridY).toEqual("3");
  });

})

describe("draw grid", function(){
  let grid = grid.drawGrid(x, y);

  it("if the given x is bigger than 50 throw error", function(){
    let biggerThan50 = function() {verifyCoords([55, 10]); };
    expect(biggerThan50).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given y is bigger than 50 throw error", function(){
    let biggerThan50 = function() {verifyCoords([10, 55]); };
    expect(biggerThan50).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given x is smaller than 0 throw error", function(){
    let smallerThan0 = function() {verifyCoords([-5, 10]); };
    expect(smallerThan0).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given y is smaller than 0 throw error", function(){
    let smallerThan0 = function() {verifyCoords([5, -10]); };
    expect(smallerThan0).toThrowError(RangeError, 'The coordinates value must be between 0 and 50.');
  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    let decimal = function() {verifyCoords([5, 10.5]); };
    expect(decimal).toEqual([5, 10])
  });

})

describe("place the robot in the grid", function(){


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
