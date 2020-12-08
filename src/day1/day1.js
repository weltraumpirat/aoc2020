const fs = require('fs');
const INPUT = fs.readFileSync('input_day1.txt', 'UTF-8').split("\n");

const findSummands = (sum, count = 2) => {
  const eligible = INPUT.map(n => parseInt(n)).filter(n => n <= sum);
  const findSummand = (a,sum) => eligible.find(n => a + n === sum)
  for (let i = 0; i < eligible.length; i++){
    const a = eligible[i];
    const summands = count > 2 ? findSummands(sum-a, count -1) : [findSummand(a, sum)];
    if( summands[0] ) {
      return [a].concat(summands).sort((a,b)=> a >= b ? 1 : a === b ? 0 : -1);
    }
  }
  return [];
}

const product = (numbers) => numbers.reduce((prod, n) => prod * n, 1)

module.exports = { findSummands, product };
