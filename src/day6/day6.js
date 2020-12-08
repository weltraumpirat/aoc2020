const { readLines } = require('../util');
const anyYesReducer = (all, i) => {
  const common = new Set(all);
  [...i].forEach(j => common.add(j));
  return common;
};
const allYesReducer = (all, i) => {
  if(all === undefined) return new Set(i);
  const common = new Set(all);
  all.forEach(j => { if (i.indexOf(j) === -1) common.delete(j);});
  return common;
};

const yes = (reducer, ...input) => input.map(i => i.length > 0 ? [...i] : i).reduce(reducer, undefined).size;
const count = (reducer, ...inputs) => inputs.map(i => yes(reducer, ...i))
const countAnyYes = (...inputs) => count(anyYesReducer, ...inputs)
const countAllYes = (...inputs) => count(allYesReducer, ...inputs)
const sumReducer = (sum= 0, [n]) => sum+n;
const sumYes = (reducer) => readLines('input_day6.txt')
    .map(l => l.split('\n').filter(l => l.length > 0))
    .map(arr => count(reducer, arr))
    .reduce(sumReducer,0 );
const sumAllYes = sumYes(allYesReducer);
const sumAnyYes = sumYes(anyYesReducer);

module.exports = { countAnyYes, sumAnyYes, countAllYes, sumAllYes };
