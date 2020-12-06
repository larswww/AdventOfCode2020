
const parsePassport = (passportString) => {
  const obj = {}
  for (let passportData of passportString.split(' ')) {
    const data = passportData.split(':')
    obj[data[0]] = data[1]
  }
  return obj
}

const getPassports = (rawInput) => {
  const splitted = rawInput.split('\n\n')
  const cleaned = splitted.map(x => x.replace(/\n/g, ' '))
  return cleaned
}


const isWithinNumberRange = (min, max, value) => {
  const number = +value
  return number >= min && number <= max
}

const isValidHeight = (value) => {

  if (value.endsWith('cm')) {
    return isWithinNumberRange(150, 193, value.split('cm')[0])
  } else if (value.endsWith('in')) {
    return isWithinNumberRange(59, 76, value.split('in')[0])
  } else {
    return false
  }
}

const isValidHairColor = (value) => {
  return !!value.match(/#[0-9a-f]{6}/g)
}

const isValidEyeColor = (value) => {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
}

const isValidPassportId = (value) => {
  return !!value.match(/[0-9]{9}/g) && value.length === 9
}


const validatorMap = {
  byr: value => isWithinNumberRange(1920, 2002, value),
  iyr: value => isWithinNumberRange(2010, 2020, value),
  eyr: value => isWithinNumberRange(2020, 2030, value),
  hgt: isValidHeight,
  hcl: isValidHairColor,
  ecl: isValidEyeColor,
  pid: isValidPassportId

}


const validatePassport = (passport) => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  for (let field of requiredFields) {
    const value = passport[field]
    if (!value) return false
    const isValid = validatorMap[field](value)
    if (!isValid) return false
  }
  return true
}

const getValidPassportsCount = (rawInput) => {
  const passports = getPassports(rawInput)
  const parsed = passports.map(x => parsePassport(x))
  let count = 0
  for (let passport of parsed) {
    if (validatePassport(passport)) count++
  }
  return count
}

module.exports = { parsePassport, getPassports, validatePassport, getValidPassportsCount, validatorMap }
