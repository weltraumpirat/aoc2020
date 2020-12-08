const fs = require('fs');
const day8 = require('./day8')

const testInstructions = day8.parseInstructions('nop +0\n' +
  'acc +1\n' +
  'jmp +4\n' +
  'acc +3\n' +
  'jmp -3\n' +
  'acc -99\n' +
  'acc +1\n' +
  'jmp -4\n' +
  'acc +6')
const instructions = day8.parseInstructions(fs.readFileSync('input_day8.txt', 'UTF-8'))
describe('Day8:', () => {
  describe('Part 1:', () => {
    it('should read the instruction set', ()=> {
      expect(testInstructions).toEqual([
          ["nop", 0],
          ["acc", 1],
          ["jmp", 4],
          ["acc", 3],
          ["jmp", -3],
          ["acc", -99],
          ["acc", 1],
          ["jmp", -4],
          ["acc", 6]
      ])
    })
    it('should terminate test code at 5', () => {
      expect(day8.runUntilLoop(testInstructions).acc).toEqual(5);
    });
    it('should terminate input code at 5', () => {
      expect(day8.runUntilLoop(instructions).acc).toEqual(1134);
    });
  });
  describe('Part 2:', () => {
    it('should return execution result', () => {
      expect(day8.runUntilLoop(instructions).result).toEqual("loop");
    });

    it('should repeat test util result is term', () => {
      const output = day8.runUntilTerm(testInstructions);
      expect(output.result).toEqual("term");
      expect(output.acc).toEqual(8);
    });
    it('should repeat input util result is term', () => {
      const output = day8.runUntilTerm(instructions);
      expect(output.result).toEqual("term");
      expect(output.acc).toEqual(1205);
    });
  });
});
