const { addToInvalidNumber, getInvalidNumbers, isValid, getMinMax } = require('../src/9')
const actual = require('./inputs/9.js')
const example = '35\n' +
  '20\n' +
  '15\n' +
  '25\n' +
  '47\n' +
  '40\n' +
  '62\n' +
  '55\n' +
  '65\n' +
  '95\n' +
  '102\n' +
  '117\n' +
  '150\n' +
  '182\n' +
  '127\n' +
  '219\n' +
  '299\n' +
  '277\n' +
  '309\n' +
  '576'

const firstExamplePreamble = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

describe('9', () => {

  test('example expects 127 to be invalid', () => {
    expect(getInvalidNumbers(example, 5)).toMatchObject([127])
  })

  test('isValid', () => {
    expect(isValid(26, firstExamplePreamble)).toBe(true)
  })

  test('isValid', () => {
    expect(isValid(49, firstExamplePreamble)).toBe(true)
  })

  test('isValid', () => {
    expect(isValid(100, firstExamplePreamble)).toBe(false)
  })

  test('isValid', () => {
    expect(isValid(50, firstExamplePreamble)).toBe(false)
  })

  test('part 1 actual', () => {
    const res = getInvalidNumbers(actual, 25)
    console.log(res)
    expect(res).toBe(15690279)
  })

  test('part 2 example', () => {
    expect(addToInvalidNumber(example, 127)).toMatchObject([15, 25, 47, 40])
  })

  test('part 2 actual', () => {
    const res = addToInvalidNumber(actual, 15690279)
    console.log(res)
    console.log(getMinMax(res))
  })


})
