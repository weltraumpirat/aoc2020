const day6 = require('./day6');

describe('Day6', () => {
  describe('part 1:', () => {
    it( 'should count all groups', ()=>{
      expect(day6.countAnyYes(['abc'], ['a','b','c'], ['ab','ac'], ['a','a','a','a'], ['b'])).toEqual([3,3,3,1,1]);
    })
    it('should count n yes answers', () => {
      expect(day6.sumAnyYes).toEqual(6297)
    })
  });
  describe('part 2:', () => {
      it('should count all groups with unique questions where everyone answered yes in a group', ()=> {
        expect(day6.countAllYes(['abc'], ['a','b','c'], ['ab','ac'], ['a','a','a','a'], ['b'])).toEqual([3,0,1,1,1]);
      })
    it('should count n yes answers', () => {
      expect(day6.sumAllYes).toEqual(3158)
    })
  });
});
