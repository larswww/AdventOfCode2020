
const { getParsedBagPolicy, getBagPolicyDict, countBagPossibilities, countContainingBags } = require('../src/7')
const example = 'light red bags contain 1 bright white bag, 2 muted yellow bags.\n' +
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.\n' +
  'bright white bags contain 1 shiny gold bag.\n' +
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\n' +
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\n' +
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.\n' +
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\n' +
  'faded blue bags contain no other bags.\n' +
  'dotted black bags contain no other bags.'
const examplePart2 = 'shiny gold bags contain 2 dark red bags.\n' +
  'dark red bags contain 2 dark orange bags.\n' +
  'dark orange bags contain 2 dark yellow bags.\n' +
  'dark yellow bags contain 2 dark green bags.\n' +
  'dark green bags contain 2 dark blue bags.\n' +
  'dark blue bags contain 2 dark violet bags.\n' +
  'dark violet bags contain no other bags.'

const actual = require('./inputs/7')
const exampleBagPolicy1 = 'light red bags contain 1 bright white bag, 2 muted yellow bags.'
const parsedExampleBagPolicy1 = {
  name: 'light red',
  children: [{ name: 'bright white', qty: 1 }, { name: 'muted yellow', qty: 2 }]
}

describe('7', () => {

  test('parses input into object', () => {
    expect(getParsedBagPolicy(exampleBagPolicy1)).toMatchObject(parsedExampleBagPolicy1)
  })

  test('getBagPolicyDict', () => {
    expect(getBagPolicyDict(example)['light red']).toEqual(parsedExampleBagPolicy1.children)
  })

  test('example', () => {
    expect(countBagPossibilities('shiny gold', example)).toBe(4)
  })

  test('actual', () => {
    const result = countBagPossibilities('shiny gold', actual)
    console.log(result)
    expect(result).toBe(300)
  })

  test('part2 example1', () => {
    expect(countContainingBags('shiny gold', example)).toBe(32)
  })

  test('part2 example2', () => {
    expect(countContainingBags('shiny gold', examplePart2)).toBe(126)
  })

  test('part 2 actual', () => {
    const res = countContainingBags('shiny gold', actual)
    console.log(res)
    expect(res).toBe(8030)
  })


})
