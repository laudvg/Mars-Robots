const mars = require("../mars");
const grid = require("../grid");
const moveRobot = require("../moveRobot");
const Robot = require("../placeRobot");

const verifyRotation = function(actual, expected, direction) {
  const robot = new Robot("1 1 " + actual, direction)
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

    function verifyMovementX(robot, expected) {
      robot.moveRobot()
      expect(robot.robotX).toBe(expected);
    }

    function verifyMovementY(robot, expected) {
      robot.moveRobot()
      expect(robot.robotY).toBe(expected);
    }

    it("Given orientation === N and the instruction F should add 1 to y", function(){
      const robot = new Robot("1 1 N", "F");
      let expectedPosition = robot.robotY + 1;
      verifyMovementY(robot, expectedPosition);
    });
  
    it("Given orientation === S  and the instruction F should substract 1 to y", function(){
      const robot = new Robot("1 1 S", "F");
      let expectedPosition = robot.robotY - 1;
      verifyMovementY(robot, expectedPosition);
    });
    
    it("Given orientation === E  and the instruction F should add 1 to X  ", function(){
      const robot = new Robot("1 1 E", "F");
      let expectedPosition = robot.robotX + 1;
      verifyMovementX(robot, expectedPosition);
    });
  
    it("Given orientation === W  and the instruction F substract 1 to X", function(){
      const robot = new Robot("1 1 W", "F");
      let expectedPosition = robot.robotX - 1;
      verifyMovementX(robot, expectedPosition);
    });
  
  });

  // describe("check the robot remains in the grid", function(){
    
  //   it ("if the future position in x is bigger than the grids x the robot is LOST", function(){

  //   });

  //   it ("if the future position in y is bigger than the grids y the robot is LOST", function(){

  //   });

  //   it ("if the future position in y is smaller than 0 the robot is LOST", function(){

  //   });

  //   it ("if the future position in x is smaller than 0 the robot is LOST", function(){

  //   });
  // })

  // describe("returns the current position", function(){
    
  //   it ("must return position in x", function(){

  //   });

  //   it ("must return position in y", function(){

  //   });

  //   it ("if the current position in x is bigger than the grid's x return coords + LOST", function(){

  //   });

  //   it ("if the current position in y is bigger than the grid's y return coords + LOST", function(){

  //   });

  // })

  
})