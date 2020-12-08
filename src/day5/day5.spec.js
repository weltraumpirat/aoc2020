const day5 = require('./day5');

describe("Day 5:", ()=>{
  describe('Part 1:', () => {
    it('should translate binary input to number', () => {
      expect(day5.parseBinary('FBFBBFF')).toEqual(44);
      expect(day5.parseBinary('RLR')).toEqual(5);
    })

    it('should translate binary space partitioning FBFBBFFRLR to seat id 357', ()=> {
      expect(day5.parseBinary('FBFBBFFRLR')).toEqual(357);
    })
    it('should return list of seats sorted by ID', () => {
      expect(day5.takenSeats[0]).toEqual( 6);
      expect(day5.takenSeats[day5.takenSeats.length-1]).toEqual( 813);
    })
  });
  describe('Part 2:', () => {
    it('should return empty seat 612', ()=> {
      expect(day5.emptySeats).toEqual([612]);
    })
  });
})
