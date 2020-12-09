const findSummands = (sum, haystack) => {
  if (haystack === undefined || haystack.length === 0) return [];
  const summand = haystack.slice(1).find(n => haystack[0] + n === sum);
  return summand !== undefined ? [haystack[0]].concat([summand]) : findSummands(sum, haystack.slice(1));
};

const findInvalids = (all, preambleLength, found = []) => {
  if (preambleLength >= all.length) return found;
  const preamble = all.slice(0, preambleLength);
  const needle = all[preambleLength];
  const summands = findSummands(needle, preamble);
  return findInvalids(all.slice(1), preambleLength, summands.length < 2 ? found.concat([needle]) : found);
};

const findSummandSet = (sum, haystack) => {
  const summ = (s, n) => s + n;
  const comb = haystack.reduce((comb, n) => comb.reduce((s, n) => s + n, 0) < sum ? comb.concat([n]) : comb, []);
  return comb.reduce(summ, 0) === sum ? comb : comb.length !== haystack.length ? findSummandSet(sum, haystack.slice(1)) : [];
};

const findWeakness = (sum, haystack) => {
  const summandSet = findSummandSet(sum, haystack).sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  return summandSet[0] + summandSet[summandSet.length - 1];
};

module.exports = { findInvalids, findSummandSet, findWeakness };
