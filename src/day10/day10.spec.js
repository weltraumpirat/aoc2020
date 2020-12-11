const fs = require('fs');
const day10 = require('./day10');

const numbers = fs.readFileSync('input_day10.txt', 'utf8').split('\n').filter(l => l.trim() !== '');
describe('Day 10:', () => {
  describe('Part 1:', () => {
    it('should find the distribution', () => {
      expect(day10.distribution(numbers)).toEqual({ 1: 69, 3: 34 });
    });
    it('should multiply thedistribution results', () => {
      expect(day10.multiplied(numbers)).toEqual(2346);
    });
  });
  describe('Part 2:', () => {
    it('should find 8 possible combinations that connect from testInput', () => {
      const testNumbers = [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19];
      expect(day10.countPossibleSequences(testNumbers)).toEqual(8);
    });
    it('should find 19208 possible combinations that connect from testInput', () => {
      const testNumbers = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3];
      expect(day10.countPossibleSequences(testNumbers)).toEqual(19208);
    });
    it('should find n possible combinations that connect from testInput', () => {
      expect(day10.countPossibleSequences(numbers)).toEqual(6044831973376);
    });
  });
});
