const day4 = require('./day4');

describe('Day 4:', () => {
  describe('Part 1: ', () => {
    it('should deem a card with all fields valid', () => {
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
        'cid': '147',
        'hgt': '183cm'
      })).toBe(true);
    });
    it('should deem a card with all required fields valid', () => {
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(true);
    });
    it('should deem a card with any required field missing invalid', () => {
      expect(day4.isCompleteCard({
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'byr': '1937',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'iyr': '2017',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'hgt': '183cm'
      })).toBe(false);
      expect(day4.isCompleteCard({
        'ecl': 'gry',
        'pid': '860033327',
        'eyr': '2020',
        'hcl': '#fffffd',
        'byr': '1937',
        'iyr': '2017',
      })).toBe(false);
    });
    it('should count 245 valid passports', ()=> {
      expect(day4.countValidCards()).toEqual(245)
    })
  });
  describe('Part 2: ', () => {

    it('should recognize invalid passports', ()=> {
      const input = "eyr:1972 cid:100\n" +
        "hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926\n\n" +
        "iyr:2019\n" +
        "hcl:#602927 eyr:1967 hgt:170cm\n" +
        "ecl:grn pid:012533040 byr:1946\n\n" +
        "hcl:dab227 iyr:2012\n" +
        "ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\n\n" +
        "hgt:59cm ecl:zzz\n" +
        "eyr:2038 hcl:74454a iyr:2023\n" +
        "pid:3556412378 byr:2007";
      const invalids = input.split("\n\n");
      const results = invalids.map(day4.parsePassport).map(day4.isValidIdCard);
      expect(results.reduce((comb, st)=> comb && st, true)).toBe(false);
    })
    it('should recognize valid passports', ()=> {
      const input = "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\n" +
        "hcl:#" +
        "" +
        "623a2f\n" +
        "\n" +
        "eyr:2029 ecl:blu cid:129 byr:1989\n" +
        "iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\n" +
        "\n" +
        "hcl:#888785\n" +
        "hgt:164cm byr:2001 iyr:2015 cid:88\n" +
        "pid:545766238 ecl:hzl\n" +
        "eyr:2022\n" +
        "\n" +
        "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719";
      const valids = input.split("\n\n");
      const results = valids.map(day4.parsePassport).map(day4.isValidIdCard);
      expect(results.reduce(day4.allTrue)).toBe(true);
    })
     it('should count 133 valid passports', () => {
       expect(day4.countValidCards(true)).toEqual(133)
     })
  });
});
