const fs = require('fs');
const isMatch = match => match != null && match.length === 1;
const isYear = value => isMatch(value.match(/^\d{4}$/));
const isMetricHeight = value => isMatch(value.match(/^\d{3}cm$/));
const isAmericanHeight = value => isMatch(value.match(/^\d{2}in$/));
const isYearInRange = (value, low, high) => isYear(value) && parseInt(value) >= low && parseInt(value) <= high;
const RULES = {
  byr: value => isYearInRange(value, 1920, 2002),
  iyr: value => isYearInRange(value, 2010, 2020),
  eyr: value => isYearInRange(value, 2020, 2030),
  hgt: value => isMetricHeight(value) && parseInt(value) >= 150 && parseInt(value) <= 193
    || isAmericanHeight(value) && parseInt(value) >= 59 && parseInt(value) <= 76,
  hcl: value => isMatch(value.match(/^#[0-9a-f]{6}$/)),
  ecl: value => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(value) >= 0,
  pid: value => isMatch(value.match(/^\d{9}$/)),
  cid: () => true
};
const contains = (arr, str) => arr.indexOf(str) !== -1;
const allTrue = (comb = true, stat) => comb && stat;
const matchesRules = (card, field) => RULES[field] !== undefined ? RULES[field](card[field]) : false;
const defined = (card, field) => card.hasOwnProperty(field) && card[field] !== undefined;
const REQUIRED_FIELDS = [...Object.keys(RULES)].filter(n => n !== 'cid');
const isValidIdCard = card => REQUIRED_FIELDS.map(field => defined(card, field) && matchesRules(card, field)).reduce(allTrue);
const isCompleteCard = card => REQUIRED_FIELDS.filter(f => !contains(Object.keys(card), f)).length === 0;

const parsePassport = card => card.split(new RegExp('\\s+', 'g'))
  .filter(kv => kv.trim() !== '')
  .map(kv => kv.split(':'))
  .map(([key, value]) => ({ [key]: value }))
  .reduce((comb, kv) => Object.assign(comb, kv), {});
const CARDS = fs.readFileSync('input_day4.txt', 'UTF-8').split('\n\n').map(parsePassport);
const countValidCards = withRules => CARDS.map(withRules ? isValidIdCard : isCompleteCard).filter(s => s === true).length;

module.exports = { isValidIdCard, isCompleteCard, countValidCards, allTrue, parsePassport };
