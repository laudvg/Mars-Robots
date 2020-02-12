const inputParser = require('./inputValue')

const simulation = (input) => {
  const mars = inputParser(input);
  
  mars.robots.forEach( (robot) => {
    robot.moveRobot();
  });
  
  return mars.robots.map((robot => {
    let output = `${robot.robotX} ${robot.robotY} ${robot.robotOrientation}`; 
    if (robot.lost){
      output += " LOST" //in translation
    }
    return output;
  })).join("\n");
  
}

module.exports = simulation;





