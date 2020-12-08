const day3 = require('./day3');

describe('Day 3:', () => {
  describe('Part 1:', () => {
    describe('when checking positions', () => {
      it('should set an O for empty field', () => {
        expect(day3.checkPosition(0, 0)).toBe(false);
      });
      it('should set an X for tree', () => {
        expect(day3.checkPosition(1, 0)).toBe(true);
      });
      it('should extend the playing field when moving to the right, beyond the line length', () => {
        expect(day3.checkPosition(31, 0)).toBe(false);
        expect(day3.checkPosition(32, 0)).toBe(true);
      });
      it('should stop checking at the end of the field', () => {
        expect(day3.checkPositions(3, 1)).toHaveLength(323);
      });
      it('should count 247 trees', () => {
        expect(day3.treesEncountered(3, 1)).toEqual([247]);
      });
    });

  });

  describe('Part 2:', () => {
    it('should return results for a set of slopes', () => {
      let enc = day3.treesEncountered([1, 1], [3, 1], [5, 1], [7, 1], [1, 2]);
      expect(enc).toEqual([78,247,68,69,33])
      expect(enc.reduce((total, n) => total * n, 1)).toEqual(2983070376)
    });
  });
});
