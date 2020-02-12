const simulation = require("../mars");

describe('mars simulation', function(){

  it('given the sample input it should return the correct output', function(){
    const input = "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n3 1 N\nFFLLF";
    const output = simulation(input)

    const expectedOutput = "1 1 E\n3 3 N LOST\n3 1 S";

    expect(output).toEqual(expectedOutput);
  });

  it('a robot that goes in circles should stay in the same place', function(){
    const input = "5 3\n1 1 E\nRFRFRFRF";
    const output = simulation(input)

    const expectedOutput = "1 1 E";
    expect(output).toEqual(expectedOutput);
  });

  it('a robot preserve the position when it got lost', function(){
    const input = "5 3\n3 2 N\nFRRFLLFFRRFLL";
    const output = simulation(input)

    const expectedOutput = "3 3 N LOST";
    expect(output).toEqual(expectedOutput);
  });

});