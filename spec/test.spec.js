const mars = require("../mars");
const grid = require("../grid");
const move = require("../moveRobot");
const placeRobot = require("../placeRobot");

describe("hello world", function(){
  it("hello test", function(){
    let salute = mars.hello();
    expect(salute).toEqual("hello");
  })
})

describe("determine sequences and reports robot position", function(){
  it("should return position", function(){
    let robots = mars.marsRobots("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
    expect(robots).toEqual("1 1 E\n3 3 N LOST\n2 3 S")
  })
})

describe("draw grid", function(){
  let grid = grid.drawGrid(x, y);

  it("if the given x is bigger than 50 throw error", function(){

  });

  it("if the given y is bigger than 50 throw error", function(){

  });

  it("if the given x is smaller than 0 throw error", function(){

  });

  it("if the given y is smaller than 0 throw error", function(){

  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    //Math.floor(1.6);
  });

  it("if the given numbers are negative throw error", function(){

  });

  // it("", function(){

  // });

})

describe("place the robot in the grid", function(){

  it("if the given x is bigger than 50 throw error", function(){

  });

  it("if the given y is bigger than 50 throw error", function(){

  });

  it("if the given x is smaller than 0 throw error", function(){

  });

  it("if the given y is smaller than 0 throw error", function(){

  });

  it("if the given coords are decimal numbers they should be rounded downward", function(){
    //Math.floor(1.6);
  });

  it("if the given numbers are negative throw error", function(){

  });

  it("must have an orientation and must be a string", function(){

  });

  it("if the given orientation is not === N, S, E, or W, thow error", function(){

  });

})
