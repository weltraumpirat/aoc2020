const fs = require('fs');
const day2 = require('./day2');

describe('Day 2:', () => {
  describe('with old rule', () => {
    it('should be invalid if count is greater than range', () => {
      expect(day2.isValidPassword('1-3 t: ttttttpttltt', day2.hasMatchesWithinPositionRange)).toBe(false);
    });
    it('should be invalid if count is less than range', () => {
      expect(day2.isValidPassword('4-5 p: ppprzr', day2.hasMatchesWithinPositionRange)).toBe(false);
    });
    it('should be valid if count is within range', () => {
      expect(day2.isValidPassword('4-5 x: hxxxxq', day2.hasMatchesWithinPositionRange)).toBe(true);
    });
    it('should contain a total of 622 valid passwords', () => {
      const input = fs.readFileSync('input_day2.txt', 'UTF-8').split('\n');
      const count = input.reduce((total, p) => day2.isValidPassword(p, day2.hasMatchesWithinPositionRange) ? total + 1 : total, 0);
      expect(count).toEqual(622);
    });
  });
  describe('with new rule', () => {
    it('should be invalid if index is greater than range', () => {
      expect(day2.isValidPassword('1-3 t: ppptttpttltt', day2.hasExactlyOneMatchingPosition)).toBe(false);
    });
    it('should be invalid if index is less than range', () => {
      expect(day2.isValidPassword('4-5 p: ppprzr', day2.hasExactlyOneMatchingPosition)).toBe(false);
    });
    it('should be invalid if index matches both low and high position', () => {
      expect(day2.isValidPassword('4-5 x: hxxxxq', day2.hasExactlyOneMatchingPosition)).toBe(false);
    });
    it('should be valid if index matches either low or high position', () => {
      expect(day2.isValidPassword('4-5 x: hxxxqq', day2.hasExactlyOneMatchingPosition)).toBe(true);
      expect(day2.isValidPassword('4-5 x: hxxqxq', day2.hasExactlyOneMatchingPosition)).toBe(true);
    });
    it('should contain a total of 263 valid passwords', () => {
      const input = fs.readFileSync('input_day2.txt', 'UTF-8').split('\n');
      const count = input.reduce((total, p) => day2.isValidPassword(p, day2.hasExactlyOneMatchingPosition) ? total + 1 : total, 0);
      expect(count).toEqual(263);
    });
  });
});
