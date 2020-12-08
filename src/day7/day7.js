const parseRules = rules => {
  const parsed = rules
    .replace(/ no other bags/g, '')
    .replace(/\./g, '')
    .replace(/ bags?/g, '')
    .split(/\n/)
    .filter(l => l.trim() !== '')
    .map(l => l.replace(/^(\w+ \w+)/g, '"$1"'))
    .map(l => l.replace(/ contain ?/g, ':{') + '}')
    .map(l => l.replace(/(\d+) (\w+ \w+)/g, '"$2": $1'))
    .join(',');
  return JSON.parse('{' + parsed + '}');
};

const findOptions = (rules, bag) => [...Object.entries(rules)]
    .filter(entry => Object.keys(entry[1]).indexOf(bag) > -1)
    .flatMap(entry => [entry[0]].concat(findOptions(rules, entry[0])))
const optionalBags = (rules, bag) => [...new Set(findOptions(rules, bag))].sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

const findContained = (rules, bag) => [...Object.entries(rules[bag])]
  .reduce((sum, entry) => sum + (entry[1] * findContained(rules, entry[0])), 1)
const containedBags = (rules, bag) => findContained(rules, bag) - 1

module.exports = { parseRules, optionalBags, containedBags };
