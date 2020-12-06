const { example, actual } = require('./inputs/4')
const { parsePassport, getPassports, validatePassport, getValidPassportsCount, validatorMap } = require('../src/4')

const examplePassport1 = 'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd byr:1937 iyr:2017 cid:147 hgt:183cm'
const examplePassport2 = 'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884 hcl:#cfa07d byr:1929'
const examplePassport3 = 'hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931 hgt:179cm'
const examplePassport4 = 'hcl:#cfa07d eyr:2025 pid:166559648 iyr:2011 ecl:brn hgt:59in'
const exampleParsedPassport1 = {
  ecl: 'gry',
  pid: '860033327',
  eyr: '2020',
  hcl: '#fffffd',
  byr: '1937',
  iyr: '2017',
  cid: '147',
  hgt: '183cm'
}

const part2invalid1 = 'eyr:1972 cid:100 hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926'
const part2invalid2 = 'iyr:2019 hcl:#602927 eyr:1967 hgt:170cm ecl:grn pid:012533040 byr:1946'
const part2invalid3 = 'hcl:dab227 iyr:2012 ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277'
const part2invalid4 = 'hgt:59cm ecl:zzz eyr:2038 hcl:74454a iyr:2023 pid:3556412378 byr:2007'

const part2valid1 = 'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f'
const part2valid2 = 'eyr:2029 ecl:blu cid:129 byr:1989 iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm'
const part2valid3 = 'hcl:#888785 hgt:164cm byr:2001 iyr:2015 cid:88 pid:545766238 ecl:hzl eyr:2022'
const part2valid4 = 'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719'

describe('4', () => {

  test('getPassports returns array of clean passport strings', () => {
    expect(getPassports(example)[0]).toBe(examplePassport1)
  })

  test('getPassports cleans passport 2', () => {
    expect(getPassports(example)[1]).toBe(examplePassport2)
  })

  test('getPassports cleans passport 3', () => {
    expect(getPassports(example)[2]).toBe(examplePassport3)
  })

  test('getPassports cleans passport 4', () => {
    expect(getPassports(example)[3]).toBe(examplePassport4)
  })

  test('parsePassport splits into key:value dict', () => {
    expect(parsePassport(examplePassport1)).toMatchObject(exampleParsedPassport1)
  })

  test('validatePassport 1 valid', () => {
    const passport = parsePassport(examplePassport1)
    expect(validatePassport(passport)).toBe(true)
  })

  test('validatePassport 2 invalid', () => {
    const passport = parsePassport(examplePassport2)
    expect(validatePassport(passport)).toBe(false)
  })

  test('validatePassport 3 valid', () => {
    const passport = parsePassport(examplePassport3)
    expect(validatePassport(passport)).toBe(true)
  })

  test('example counts 2 valid passports', () => {
    expect(getValidPassportsCount(example)).toBe(2)
  })

  test('actual input', () => {
    const result = getValidPassportsCount(actual)
    console.log('Result: ', result)
    // expect(result).toBe(196) part 1
    expect(result).toBe(114)
  })

  describe('part 2', () => {
    test('part2 invalid 1', () => {
      const passport = parsePassport(part2invalid1)
      expect(validatePassport(passport)).toBe(false)
    })

    test('part2 invalid 2', () => {
      const passport = parsePassport(part2invalid2)
      expect(validatePassport(passport)).toBe(false)
    })

    test('part2 invalid 3', () => {
      const passport = parsePassport(part2invalid3)
      expect(validatePassport(passport)).toBe(false)
    })

    test('part2 invalid 4', () => {
      const passport = parsePassport(part2invalid4)
      expect(validatePassport(passport)).toBe(false)
    })

    test('part2 valid 1', () => {
      const passport = parsePassport(part2valid1)
      expect(validatePassport(passport)).toBe(true)
    })

    test('part2 valid 2', () => {
      const passport = parsePassport(part2valid2)
      expect(validatePassport(passport)).toBe(true)
    })

    test('part2 valid 3', () => {
      const passport = parsePassport(part2valid3)
      expect(validatePassport(passport)).toBe(true)
    })

    test('part2 valid 4', () => {
      const passport = parsePassport(part2valid4)
      expect(validatePassport(passport)).toBe(true)
    })

    test('hcl valid', () => {
      expect(validatorMap['hcl']('#123abc')).toBe(true)
    })

    test('hcl invalid', () => {
      expect(validatorMap['hcl']('#123abz')).toBe(false)
      expect(validatorMap['hcl']('123abc')).toBe(false)
    })

    test('pid valid', () => {
      expect(validatorMap['pid']('000000001')).toBe(true)
    })

    test('pid invalid', () => {
      expect(validatorMap['pid']('0123456789')).toBe(false)

    })

  })

})
