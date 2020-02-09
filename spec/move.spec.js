const mars = require("../mars");
const grid = require("../grid");
const move = require("../moveRobot");
const placeRobot = require("../placeRobot");

describe("move robot in the grid", function(){

  describe("if move forward F", function(){

    it("Given orientation === N, should add +1 to y", function(){

    });
  
    it("Given orientation === N, should add 0 to x", function(){
  
    });
  
    
    it("Given orientation === S, should add -1 to y", function(){
  
    });
  
    it("Given orientation === S, should add 0 to x", function(){
  
    });
  
    it("Given orientation === E, should add -1 to x", function(){
  
    });
  
    it("Given orientation === E, should add 0 to y", function(){
  
    });
  
    it("Given orientation === W, should add -1 to x", function(){
  
    });
  
    it("Given orientation === W, should add 0 to y", function(){
  
    });
  })

  describe("check the robot remains in the grid", function(){
    
    it ("if x is bigger than the grids x the robot is LOST", function(){

    });

    it ("if y is bigger than grids y the robot is LOST", function(){

    });

    it ("if y is smaller than 0 the robot is LOST", function(){

    });

    it ("if x is smaller than 0 the robot is LOST", function(){

    });
  })


  
})