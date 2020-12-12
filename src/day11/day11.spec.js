const fs = require('fs');
const day11 = require('./day11');

const floor = fs.readFileSync('input_Day11.txt', 'utf8').split('\n').filter(l => l.trim() !== '');
const testFloor = ('L.LL.LL.LL\n' +
  'LLLLLLL.LL\n' +
  'L.L.L..L..\n' +
  'LLLL.LL.LL\n' +
  'L.LL.LL.LL\n' +
  'L.LLLLL.LL\n' +
  '..L.L.....\n' +
  'LLLLLLLLLL\n' +
  'L.LLLLLL.L\n' +
  'L.LLLLL.LL').split('\n');
const testFloorRound1 = ('#.##.##.##\n' +
  '#######.##\n' +
  '#.#.#..#..\n' +
  '####.##.##\n' +
  '#.##.##.##\n' +
  '#.#####.##\n' +
  '..#.#.....\n' +
  '##########\n' +
  '#.######.#\n' +
  '#.#####.##').split('\n');
const testFloorRound2 = ('#.LL.L#.##\n' +
  '#LLLLLL.L#\n' +
  'L.L.L..L..\n' +
  '#LLL.LL.L#\n' +
  '#.LL.LL.LL\n' +
  '#.LLLL#.##\n' +
  '..L.L.....\n' +
  '#LLLLLLLL#\n' +
  '#.LLLLLL.L\n' +
  '#.#LLLL.##').split('\n');
const testFloorRound3 = ('#.##.L#.##\n' +
  '#L###LL.L#\n' +
  'L.#.#..#..\n' +
  '#L##.##.L#\n' +
  '#.##.LL.LL\n' +
  '#.###L#.##\n' +
  '..#.#.....\n' +
  '#L######L#\n' +
  '#.LL###L.L\n' +
  '#.#L###.##').split('\n');
const testFloorRound4 = ('#.#L.L#.##\n' +
  '#LLL#LL.L#\n' +
  'L.L.L..#..\n' +
  '#LLL.##.L#\n' +
  '#.LL.LL.LL\n' +
  '#.LL#L#.##\n' +
  '..L.L.....\n' +
  '#L#LLLL#L#\n' +
  '#.LLLLLL.L\n' +
  '#.#L#L#.##').split('\n');
const testFloorRound5 = ('#.#L.L#.##\n' +
  '#LLL#LL.L#\n' +
  'L.#.L..#..\n' +
  '#L##.##.L#\n' +
  '#.#L.LL.LL\n' +
  '#.#L#L#.##\n' +
  '..L.L.....\n' +
  '#L#L##L#L#\n' +
  '#.LLLLLL.L\n' +
  '#.#L#L#.##').split('\n');
describe('Day 11:', () => {
  describe('Part 1:', () => {
    it('should mark all seats occupied after first round', () => {
      expect(day11.evolve(testFloor)).toEqual(testFloorRound1);
    });
    it('should evolve test floor as expected', () => {
      expect(day11.evolve(testFloorRound1)).toEqual(testFloorRound2);
      expect(day11.evolve(testFloorRound2)).toEqual(testFloorRound3);
      expect(day11.evolve(testFloorRound3)).toEqual(testFloorRound4);
      expect(day11.evolve(testFloorRound4)).toEqual(testFloorRound5);
    });
    it('should find 37 occupied seats on the test floor', ()=> {
      expect(day11.countOccupied(testFloor)).toEqual(37);
    })
    it('should find 2247 occupied seats on the input floor', ()=> {
      expect(day11.countOccupied(floor)).toEqual(2247);
    })
  });
  describe('Part 2:', () => {
    it('should find 26 occupied seats on the test floor', () => {
      expect(day11.countOccupied2(testFloor)).toEqual(26);
    });
    it('should find 2011 occupied seats on the input floor', ()=> {
      expect(day11.countOccupied2(floor)).toEqual(2011);
    })
  });
});
