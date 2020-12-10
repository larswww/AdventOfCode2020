const { parseForm, countUniqueAnswers, countAllYes } = require('../src/6')
const fs = require('fs')



const example = 'abc\n' +
  '\n' +
  'a\n' +
  'b\n' +
  'c\n' +
  '\n' +
  'ab\n' +
  'ac\n' +
  '\n' +
  'a\n' +
  'a\n' +
  'a\n' +
  'a\n' +
  '\n' +
  'b'


describe('6', () => {

  test('parseForm example', () => {
    expect(Object.keys(parseForm(example)).length).toBe(5)
  })

  test('countUniqueAnswers example', () => {
    expect(countUniqueAnswers(example)).toBe(11)
  })

  test('countUniqueAnswers actual', () => {
    fs.readFile('/Users/larsw/Documents/code/adventofcode/test/inputs/6.txt','utf8', (err, data) => {
      if (err) throw err
      const res = countUniqueAnswers(data)
      expect(res).toBe(6583)
    })
  })

  test('countAllYes part2 example', () => {
    expect(countAllYes(example)).toBe(6)
  })

  test('countAllYes part2 actual', () => {
    fs.readFile('/Users/larsw/Documents/code/adventofcode/test/inputs/6.txt','utf8', (err, data) => {
      if (err) throw err
      const res = countAllYes(data)
      console.log(res)
      expect(res).toBe(3290)
    })
  })

})
