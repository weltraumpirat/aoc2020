const sorted = jolts => {
  const s = jolts.map(n => parseInt(n)).sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  return s.concat([s[s.length - 1] + 3]);
};

const steps = jolts => jolts.map((n, index) => n - (index > 0 ? jolts[index - 1] : 0));

const distribution = jolts => {
  return steps(sorted(jolts)).reduce((acc, n) => {
    acc[n] = acc[n] > 0 ? acc[n] + 1 : 1;
    return acc;
  }, {});
};

const multiplied = jolts => {
  const dist = distribution(jolts);
  return dist[1] * dist[3];
};

const isNumbersArray = e => Array.isArray(e) && typeof e[0] === 'number';
const flatten = arr => arr.filter(isNumbersArray).concat(arr.filter(e => !isNumbersArray(e)).flatMap(e => flatten(e)));

const countConsecutiveOnes = (search, counts, current) => {
  if (search.length === 0) return counts.concat([current]);
  else if (search[0] === 3) return countConsecutiveOnes(search.slice(1), counts.concat([current]), 0);
  else return countConsecutiveOnes(search.slice(1), counts, current + 1);
};
const findSequences = (sum, parts, seq) => sum < 0 ? [] : sum === 0 ? seq : parts.map(n => findSequences(sum - n, parts, seq.concat([n])));
const countPossibleCombinations = jolts => {
  const s = steps(sorted(jolts));
  const counts = countConsecutiveOnes(s, [], 0).filter(c => c > 1);
  const partialSequences = counts.map(n => findSequences(n, [1, 2, 3], [])).map(flatten);
  return partialSequences.map(seq => seq.length).reduce((total, n) => total * n, 1);
};

module.exports = { distribution, multiplied, countPossibleSequences: countPossibleCombinations };
