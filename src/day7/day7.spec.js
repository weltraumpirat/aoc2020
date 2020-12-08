const fs = require('fs');
const day7 = require('./day7');

const RULES = 'light red bags contain 1 bright white bag, 2 muted yellow bags.\n' +
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.\n' +
  'bright white bags contain 1 shiny gold bag.\n' +
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\n' +
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\n' +
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.\n' +
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\n' +
  'faded blue bags contain no other bags.\n' +
  'dotted black bags contain no other bags.';
const parsedTestRules = day7.parseRules(RULES);
const fullRules = fs.readFileSync('input_day7.txt', 'UTF-8');
const parsedFullRules = day7.parseRules(fullRules);

describe('Day 7:', () => {
  describe('Part 1:', () => {
    it('should parse all rules', () => {
      expect(parsedTestRules).toEqual({
        'light red': { 'bright white': 1, 'muted yellow': 2 },
        'dark orange': { 'bright white': 3, 'muted yellow': 4 },
        'bright white': { 'shiny gold': 1 },
        'muted yellow': { 'shiny gold': 2, 'faded blue': 9 },
        'shiny gold': { 'dark olive': 1, 'vibrant plum': 2 },
        'dark olive': { 'faded blue': 3, 'dotted black': 4 },
        'vibrant plum': { 'faded blue': 5, 'dotted black': 6 },
        'faded blue': {},
        'dotted black': {}
      });
    });
    it('should find 4 options for shiny gold bags', () => {
      expect(day7.optionalBags(parsedTestRules, 'shiny gold')).toEqual(
        [
          'bright white',
          'dark orange',
          'light red',
          'muted yellow'
        ]
      );
    });
    it('should find 121 options for shiny gold bags in full input', () => {
      expect(day7.optionalBags(parsedFullRules, 'shiny gold').length).toEqual(121);
    });
  });
  describe('Part 2:', () => {
    it('should return 32 bags within shiny gold for test', () => {
      expect(day7.containedBags(parsedTestRules, 'shiny gold')).toEqual(32);
    });
    it('should return 3805 bags within shiny gold for full input', () => {
      expect(day7.containedBags(parsedFullRules, 'shiny gold')).toEqual(3805);
    });
  });
});
