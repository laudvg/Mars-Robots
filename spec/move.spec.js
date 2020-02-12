const Grid = require("../grid");
const Robot = require("../placeRobot");

const verifyRotation = function(actual, expected, direction) {
  const grid = new Grid("5 3")
  const robot = new Robot("1 1 " + actual, direction, grid)
  robot.moveRobot();
  expect(robot.robotOrientation).toBe(expected);
}

describe("move robot in the grid", function(){

  describe("turn the robot 90º Left", function(){
    it("Given the input L, rotate 90º to the Left", function(){
      let currentOrientation = "N";
      let expectedResult = "W";
      verifyRotation(currentOrientation, expectedResult, "L");
    });

    it("Given the input L, rotate 90º to the Left", function(){
      let currentOrientation = "W";
      let expectedResult = "S";
      verifyRotation(currentOrientation, expectedResult, "L");
    });

    it("Given the input L, rotate 90º to the Left", function(){
      let currentOrientation = "S";
      let expectedResult = "E";
      verifyRotation(currentOrientation, expectedResult, "L");
    });

    it("Given the input L, rotate 90º to the Left", function(){
      let currentOrientation = "E";
      let expectedResult = "N";
      verifyRotation(currentOrientation, expectedResult, "L");
    });

  });

  describe("turn the robot 90º right", function(){

    it("given robot is facing north it should turn to east", function(){
      let currentOrientation = "N"; 
      let expectedResult = "E";
      verifyRotation(currentOrientation, expectedResult, "R");
    });

    it("Given robot is facing east it should turn to the south", function(){
      let currentOrientation = "E";
      let expectedResult = "S";
      verifyRotation(currentOrientation, expectedResult, "R");
    });

    it("Given robot is facing south it should turn to the west", function(){
      let currentOrientation = "S";
      let expectedResult = "W";
      verifyRotation(currentOrientation, expectedResult, "R");
    });

    it("Given robot is facing west it should turn to the south", function(){
      let currentOrientation = "W";
      let expectedResult = "N";
      verifyRotation(currentOrientation, expectedResult, "R");
    });

  })

  describe("instruction is move forward F", function(){

    const grid = new Grid("5 3");

    function verifyMovementX(robot, expected) {
      robot.moveRobot()
      expect(robot.robotX).toBe(expected);
    }

    function verifyMovementY(robot, expected) {
      robot.moveRobot()
      expect(robot.robotY).toBe(expected);
    }

    it("Given orientation === N and the instruction F should add 1 to y", function(){
      const robot = new Robot("1 1 N", "F", grid);
      let expectedPosition = robot.robotY + 1;
      verifyMovementY(robot, expectedPosition);
    });
  
    it("Given orientation === S  and the instruction F should substract 1 to y", function(){
      const robot = new Robot("1 1 S", "F", grid);
      let expectedPosition = robot.robotY - 1;
      verifyMovementY(robot, expectedPosition);
    });
    
    it("Given orientation === E  and the instruction F should add 1 to X  ", function(){
      const robot = new Robot("1 1 E", "F", grid);
      let expectedPosition = robot.robotX + 1;
      verifyMovementX(robot, expectedPosition);
    });
  
    it("Given orientation === W  and the instruction F substract 1 to X", function(){
      const robot = new Robot("1 1 W", "F", grid);
      let expectedPosition = robot.robotX - 1;
      verifyMovementX(robot, expectedPosition);
    });
  
  });

  const verifyRobotsCoords = function(coords) {
    const grid = new Grid("50 50");
    new Robot(coords + " N", "LR", grid);
  }

  describe("To place the robot in the grid", function(){

    it("if the given x is bigger than 50 throw error", function(){
      let biggerThan50 = function() { verifyRobotsCoords("55 10"); };
      expect(biggerThan50).toThrowError(RangeError, 'The robot must be placed inside the grid');
    });
  
    it("if the given y is bigger than 50 throw error", function(){
      let biggerThan50 = function() { verifyRobotsCoords("10 55"); };
      expect(biggerThan50).toThrowError(RangeError, 'The robot must be placed inside the grid');
    });
  
    it("if the given x is smaller than 0 throw error", function(){
      let smallerThan0 = function() { verifyRobotsCoords("-10 40"); };
      expect(smallerThan0).toThrowError(RangeError, 'The robot must be placed inside the grid');
    });
  
    it("if the given y is smaller than 0 throw error", function(){
      let smallerThan0 = function() { verifyRobotsCoords("10 -40"); };
      expect(smallerThan0).toThrowError(RangeError, 'The robot must be placed inside the grid');
    });
  
    it("if the given coords are decimal numbers they should be rounded downward", function(){
      const grid = new Grid("50 50");
      const robot = new Robot("10 40.5 N", "LR", grid);
      expect(robot.robotX).toEqual(10);
      expect(robot.robotY).toEqual(40);
    });
  
    it("must have an orientation and must be a string", function(){
      const grid = new Grid("50 50");
      const robot = new Robot("10 40 E", "LR", grid);
      expect(robot.robotOrientation).toBeDefined();
    });
  
    it("if the given orientation is not === N, S, E, or W, thow error", function(){
      const grid = new Grid("50 50");

      expect(() => {
        new Robot("10 40 A", "LR", grid);
      }).toThrowError(Error, 'The orientation must be N, S, E, or W');
    });
  
  })

})