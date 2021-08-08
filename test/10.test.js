const { getSortedNumberArrayFromInput, getLowestPossible, getDifferences } = require('../src/10')
const exampleInput = '16\n' +
  '10\n' +
  '15\n' +
  '5\n' +
  '1\n' +
  '11\n' +
  '7\n' +
  '19\n' +
  '6\n' +
  '12\n' +
  '4'
const largerExampleInput = '28\n' +
  '33\n' +
  '18\n' +
  '42\n' +
  '31\n' +
  '14\n' +
  '46\n' +
  '20\n' +
  '48\n' +
  '47\n' +
  '24\n' +
  '23\n' +
  '49\n' +
  '45\n' +
  '19\n' +
  '38\n' +
  '39\n' +
  '11\n' +
  '1\n' +
  '32\n' +
  '25\n' +
  '35\n' +
  '8\n' +
  '17\n' +
  '7\n' +
  '9\n' +
  '4\n' +
  '2\n' +
  '34\n' +
  '10\n' +
  '3'
const actualInput = require('./inputs/10')

const example = getSortedNumberArrayFromInput(exampleInput)
const largerExample = getSortedNumberArrayFromInput(largerExampleInput)
const actual = getSortedNumberArrayFromInput(actualInput)

describe('10', () => {

  it('sorts input', () => {
    const result = getSortedNumberArrayFromInput(exampleInput)
    expect(result[0]).toBe(1)
    expect(result[result.length-1]).toBe(19)
  })

  it('chooses lowest rated adapter possible', () => {
    expect(getLowestPossible(example, 0)).toBe(1)
  })

  it('chooses adapter 4 from 1 jolt', () => {
    expect(getLowestPossible(example, 1)).toBe(4)
  })

  it( 'choose adapter 5 from 4 jolt', () => {
    expect(getLowestPossible(example, 4)).toBe(5)
  })

  it('chooses adapter 6 from 5 jolt', () => {
    expect(getLowestPossible(example, 5)).toBe(6)
  })

  it('chooses adapter 10 from 7 jolt', () => {
    expect(getLowestPossible(example, 7)).toBe(10)
  })

  it('chooses adapter 11 from 10 jolt', () => {
    expect(getLowestPossible(example, 10)).toBe(11)
  })

  it('chooses adapter 12 from 11 jolt', () => {
    expect(getLowestPossible(example, 11)).toBe(12)
  })

  it('chooses adapter 15 from 12 jolt', () => {
    expect(getLowestPossible(example, 12)).toBe(15)
  })

  it('calculates differences according to example', () => {
    const differences = getDifferences(example, 0)
    expect(differences[1]).toBe(7)
    expect(differences[3]).toBe(5)
  })

  it('calculates differences according to larger example', () => {
    const differences = getDifferences(largerExample, 0)
    expect(differences[1]).toBe(22)
    expect(differences[3]).toBe(10)
  })

  it('actual part 1', () => {
    const result = getDifferences(actual, 0)
    console.log(result)
    const multiplied = result[1] * result[3]
    console.log(multiplied)
    expect(multiplied).toBe(2112)
  })


})
