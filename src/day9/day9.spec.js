const fs = require('fs');
const day9 = require('./day9');
const readNumbers = (input) => input.split('\n').map(n=> parseInt(n));
const testInput = readNumbers('35\n' +
  '20\n' +
  '15\n' +
  '25\n' +
  '47\n' +
  '40\n' +
  '62\n' +
  '55\n' +
  '65\n' +
  '95\n' +
  '102\n' +
  '117\n' +
  '150\n' +
  '182\n' +
  '127\n' +
  '219\n' +
  '299\n' +
  '277\n' +
  '309\n' +
  '576');
const input = readNumbers(fs.readFileSync('input_day9.txt', 'utf8'));
describe('Day 9:', () => {
  describe('Part 1:', () => {
    it('should find the first invalid 127 in test input', () => {
      expect(day9.findInvalids(testInput, 5)[0]).toEqual(127);
    });
    it('should find the first invalid 21711108 in game input', () => {
      expect(day9.findInvalids(input, 25)[0]).toEqual(27911108);
    });
  });
  describe('Part 2:', () => {
    it('should add 15,25,47 and 40 to get 127', () => {
      expect(day9.findSummandSet(127, testInput)).toEqual([15,25,47,40]);
    });
    it('should add 17 numbers to get 27911108', ()=> {
      expect(day9.findSummandSet(27911108, input).length).toEqual(17);
    })
    it('should calculate encryption weakness of 62 for test input', () => {
      expect(day9.findWeakness(127, testInput)).toEqual(62)
    });
    it('should calculate encryption weakness of 4023754 for game input', () => {
      expect(day9.findWeakness(27911108, input)).toEqual(4023754)
    });

  });
});
