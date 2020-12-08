const day1 = require('./day1')
describe("Day 1:", ()=>{
  it('should return the numbers that add up to 2020', ()=>{
    expect(day1.findSummands(2020)).toEqual([933,1087]);
    expect(day1.findSummands(2020, 3)).toEqual([59,566,1395]);
  })
  it('should return the product', () => {
    expect (day1.product([1,5])).toEqual(5);
    expect (day1.product([933,1087])).toEqual(1014171)
    expect (day1.product([59,566,1395])).toEqual(46584630)
    }
  )
})
