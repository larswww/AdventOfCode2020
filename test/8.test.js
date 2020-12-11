const { parseInstructions, runLoop, runGame, reLoop } = require('../src/8')
const actual = require('./inputs/8')
const example = 'nop +0\n' +
  'acc +1\n' +
  'jmp +4\n' +
  'acc +3\n' +
  'jmp -3\n' +
  'acc -99\n' +
  'acc +1\n' +
  'jmp -4\n' +
  'acc +6'

describe('8', () => {

  test('parse instructions', () => {
    expect(parseInstructions(example)).toEqual(expect.arrayContaining([{type: 'nop', value: 0, op: '+'}, {type: 'acc', value: 1, op: '+'}]))
  })

  test('example', () => {
    expect(runGame(example)).toMatchObject({error: true, type: 'INFINITE_LOOP', value: 5})
  })

  test('actual', () => {
    const res = runGame(actual)
    console.log(res)
  })

  test('reLoop example', () => {
    expect(reLoop(example)).toBe(8)
  })

  test('reLoop actual', () => {
    const res = reLoop(actual)
    console.log(res)
    expect(res).toBe(1532)
  })

})
