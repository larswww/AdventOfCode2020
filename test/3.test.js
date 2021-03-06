const { getNoRequiredSlopeRepeatRight, slopeToArray, getRepeatedSlope, countTrees, traverseMultipleAndMultiply } = require('../src/3')

const exampleInput = '..##.......\n' +
  '#...#...#..\n' +
  '.#....#..#.\n' +
  '..#.#...#.#\n' +
  '.#...##..#.\n' +
  '..#.##.....\n' +
  '.#.#.#....#\n' +
  '.#........#\n' +
  '#.##...#...\n' +
  '#...##....#\n' +
  '.#..#...#.#'

const input = '.#....#..##.#..####....#.......\n' +
  '......#..#....#....###......#.#\n' +
  '#..#.....#..............##.#.#.\n' +
  '#.#...#....#...#......##..#..#.\n' +
  '...#..#.##..#..#........###.#.#\n' +
  '...#.#..........#.........##...\n' +
  '...#.#....#.#....#..#......#...\n' +
  '..##.#.....#.......#.###..#..##\n' +
  '..#.......#.......#....##......\n' +
  '....##........##.##...#.###.##.\n' +
  '#.......#.......##..#......#...\n' +
  '..##.............##.#......#...\n' +
  '...#.####....#.....#...##......\n' +
  '.............##.#......#.......\n' +
  '..#...#....#......#....#.......\n' +
  '..#....#..#............#.......\n' +
  '##...#..#........##..#......#..\n' +
  '##........##........#.#.......#\n' +
  '#.......#........#.#..#....###.\n' +
  '.....#..#.#..........##...#....\n' +
  '..##...#......#.#...#..#...#...\n' +
  '##.##...#......#....#....#...#.\n' +
  '#.......#..#.#..#....#..###.#.#\n' +
  '#.............#.#....#..#.#....\n' +
  '...#.......###.#.##.##.#...#..#\n' +
  '.##.......##..##...#..###......\n' +
  '.......#.#.#.#..####..#..#..#..\n' +
  '...##......#.#.##.###....#.###.\n' +
  '###......###......#.#####..#...\n' +
  '..#........##..#..##.##..#...#.\n' +
  '.....##..#...#..#.##.....#.#...\n' +
  '#......#.##....#..##.#....#.#..\n' +
  '##.#.##..#................#....\n' +
  '......#.#....#......##.....#...\n' +
  '..#...##..#..#...#..#.#..#.....\n' +
  '........#.#.#.##...#.#.....#.#.\n' +
  '#.#......#.....##..#...#.......\n' +
  '..#.#......#...........###.....\n' +
  '......##....#....##..#..#.#.#.#\n' +
  '##....#.###...#......#..#...#..\n' +
  '#.#.##....###...####.......#..#\n' +
  '##...........#.....#........#.#\n' +
  '.##.#..#.....#......#.......#..\n' +
  '##..##..###....#.........##....\n' +
  '..#..#..#.##...#.#...#........#\n' +
  '#.##.###...#.......#...........\n' +
  '.........#.................#...\n' +
  '#.##...#.....#..##........#....\n' +
  '....#.#...##...#...........#...\n' +
  '.#.....#.#..#...##..##.....#...\n' +
  '.#.....####....#..##..#........\n' +
  '...#..#......##.#..##.#.#.#..#.\n' +
  '.##.#.....#.....#...#.......##.\n' +
  '......#..#..#......#...####....\n' +
  '.......#......##..#..##.....#..\n' +
  '......#.#..#...#..#.#..........\n' +
  '....##.........#...............\n' +
  '.#....#..##.....#....##.##.....\n' +
  '#.#.....#...#....####....#.#...\n' +
  '#.....#....#.#...#.............\n' +
  '...#..#.....#....##..#..#......\n' +
  '...#.#............#...........#\n' +
  '###.#..#.#......#.....##.....#.\n' +
  '####....#....###.....#..#.#####\n' +
  '.###..#...#.#..#......##.#.#.#.\n' +
  '.....#.##.#....#..##....#..#..#\n' +
  '...#....#...##.....#......#.#..\n' +
  '....#...#....#...#....#.....#.#\n' +
  '.#.....#.....#.#..#......#..#..\n' +
  '..#..##....##.##....#.....##...\n' +
  '#..##...#.##...#..#.#.#.....#..\n' +
  '...#..##.#..#....#.#....######.\n' +
  '..........#..#.....#....#...##.\n' +
  '#.#####.#.###..#.....#.........\n' +
  '#....#......#..#.#.##.##..###..\n' +
  '..#...###.#.#....##.##...##....\n' +
  '.......#....#..#...##......#...\n' +
  '...#.#...#..#.....#..##.#......\n' +
  '###..##...........#............\n' +
  '..#....#.##....#.#..##...#.....\n' +
  '##....#...#....#.....#.#..##...\n' +
  '..............#.##.#..#..##.###\n' +
  '......#..#..#..#.#....###...##.\n' +
  '.#...#..#.#.#....#..........#..\n' +
  '..#.#.....#..#...........#.##..\n' +
  '...#.#......#......#..#..#.#...\n' +
  '...#....#.#.#.....#...#.##..#..\n' +
  '.#.#..#...#........##.......#..\n' +
  '##..........#..#...#....###.#..\n' +
  '#.....###......#..#.#.#....#.#.\n' +
  '..###.......#.#...............#\n' +
  '#....#.....#.#......#..##.##...\n' +
  '#.##.#.#....#..#.#...#.#...#..#\n' +
  '#....#..#...........#.......#..\n' +
  '...#.####.....#.........###.##.\n' +
  '......#..#.....#..........#..#.\n' +
  '#...#.#..####...#...#.#.##...##\n' +
  '.##.........#......#.#.#.......\n' +
  '.......##...##.##....###...##..\n' +
  '...#..#....#..#.#.#.....#.#....\n' +
  '#....#.#.#.......##..###..##...\n' +
  '......#............#.#...#..#..\n' +
  '#.#.....#......#...#.......###.\n' +
  '...#.#................#...#....\n' +
  '.....#......#.#..#...##.#.#...#\n' +
  '#....#.#..#..#..##..#.##..#....\n' +
  '#.................#..#....#....\n' +
  '..#....#.......####....###.....\n' +
  '.#..#.#.#...###..#...#..###....\n' +
  '..#..#.#......#.###..........#.\n' +
  '.....#......#.......##....##.#.\n' +
  '.#....#........#.#.##.#........\n' +
  '#.#..##..#..#.#...####....##...\n' +
  '...#....#.#..#...#..........#..\n' +
  '.#.....#.##....#...##..........\n' +
  '....##....#.....#.....#...#.###\n' +
  '.#...##.#.#..##..#...#.#..#..#.\n' +
  '..#.......#.##.....#.#........#\n' +
  '...#...#.....##..#.#.#....#....\n' +
  '...#.....#.......##.........#.#\n' +
  '.##.....#..#.#...#.#...#.#...#.\n' +
  '...........#...#.###..#...#..#.\n' +
  '#.##........#..###.##...####...\n' +
  '.#.....#.#...##...#..#..#...##.\n' +
  '..#....#..#...#.....#.....##...\n' +
  '..###..#.#.....##........#.##..\n' +
  '.#.#..##........#.##....#..#.##\n' +
  '.####.#..##..#.#..#....##....#.\n' +
  '.##....##...#.#........#.......\n' +
  '....#..#..#...#..#..#..#.#.....\n' +
  '...#......................#....\n' +
  '#.....#.#....#..#..#.#..#....#.\n' +
  '##.....#.....##..........###...\n' +
  '.#..#..............#...##.#.#.#\n' +
  '...#...#.#.............#.#..#.#\n' +
  '..#.....#.......#......#.#.....\n' +
  '.###.#..#..#..#.#..#.....#.....\n' +
  '.....##..##...##.......#....###\n' +
  '.#........###...##..#....##....\n' +
  '#....#.#......##..#....#.##..#.\n' +
  '#....#.#...#........##...###...\n' +
  '.#.....#...#.###....#.##.#.####\n' +
  '###......#....#...#....##..#..#\n' +
  '##....#..###......#...#.#.#....\n' +
  '..........#......##.#..#.......\n' +
  '.#..#......###.........##...#..\n' +
  '....#......#....#.........#.#.#\n' +
  '##.#.#...#.#...#...#..#......#.\n' +
  '....#.##.........#..#.....##.#.\n' +
  '........#...#..#.#.#.#.....##..\n' +
  '..#......#.#.#..#.....##.......\n' +
  '..............#....#....##.#..#\n' +
  '....#.#.....#....#.#.###.#....#\n' +
  '..#..........#..#......#.##..#.\n' +
  '...#...#.#.............#..#....\n' +
  '#.......#..#..##.........##..#.\n' +
  '..##..#............#.....#.....\n' +
  '....#.#..##...#.#..#.........#.\n' +
  '........#.......#.##....#....#.\n' +
  '...#.....#.#.....#.#....#......\n' +
  '..#......##.#.............#.#.#\n' +
  '#.#.............#.#.....#......\n' +
  '.##....##.#.....#....#...##....\n' +
  '.#.#....##....#.....##.........\n' +
  '...#.....#.....#.....#..#.###..\n' +
  '.......#....#...##.#...#...#..#\n' +
  '..#.#.......#...###.#...#....#.\n' +
  '.....###..##....###.#.##.......\n' +
  '....#..................##.#.##.\n' +
  '.#.......###.##...#.#.....#....\n' +
  '....#....##...##.....#.#...#..#\n' +
  '#..#.....#......##...#....#....\n' +
  '#..##.........#.....#...#......\n' +
  '...#..##.......##......#..#####\n' +
  '.#..###.###.#.##........#......\n' +
  '.#...#....#....#.#....#...##...\n' +
  '##........#....#.........##..#.\n' +
  '.#.....##............#.#.......\n' +
  '....#....#...........###.....##\n' +
  '.#......#.#.#..#....#.#.....##.\n' +
  '......#.##.#..##....#.#.#..#...\n' +
  '#....#......#...#..####........\n' +
  '......#..#..##..#.......#.#..#.\n' +
  '##....##.###.#...#.##.#..#.###.\n' +
  '.#.........#...##...#.#......#.\n' +
  '..#.#...........####.#....##.##\n' +
  '.....#.#..##.#...###...#..#.#..\n' +
  '...#..#..##.#...#.....#.##...##\n' +
  '..##......##..........#..###...\n' +
  '.#......##.....#.##....#.#.##.#\n' +
  '...#.......##..##.....#....#...\n' +
  '.##...#...#....#..#............\n' +
  '#..#....#...........#..........\n' +
  '......#...#.#.......#...#.##..#\n' +
  '..#.###..#.....#.....#..#.....#\n' +
  '....#....#..........##....#..#.\n' +
  '.......##.#.#.#......#....#...#\n' +
  '####..#.###........#..#......#.\n' +
  '#........##.#.#.#.............#\n' +
  '.#......#......#..#.##.....#...\n' +
  '.....##.##......##.#.....#.#.#.\n' +
  '.......##.#.....##.......#.#.#.\n' +
  '.#.#..#.#..#.##...#.#....#.#..#\n' +
  '.#..##....#..#...##.......#..#.\n' +
  '.#.#..#.......#................\n' +
  '#........#.#.#......#.#.#.#....\n' +
  '##......#...#..##.#...##.##....\n' +
  '##.#..#...........##...#..###..\n' +
  '......#.####...#........#.#.#..\n' +
  '...#........##..###.#.#...#...#\n' +
  '.#.....##..#......##......###..\n' +
  '..#.#...#......#..#..##.#.....#\n' +
  '#....#..#.#..........#...#.....\n' +
  '.#......#.##..###..#.#....#..##\n' +
  '.......#.......#..#..#......#..\n' +
  '..##.....##.#..#..#.....##.....\n' +
  '........#.##...#.#.#..#..#..#..\n' +
  '...#.######.........#.....#..##\n' +
  '.#.#............#....#.........\n' +
  '#...#....###.#......#.#........\n' +
  '#.........#....#...##..........\n' +
  '....#...........#.###.#...###..\n' +
  '.........#........#.#.#..#...#.\n' +
  '.#.......#.#.....#.#.....#.##..\n' +
  '.....#.......#.....#.#.#.......\n' +
  '#.##..#..##.......#...#......#.\n' +
  '.###.....##...##.#...##.##.#.#.\n' +
  '...#......##..##............#.#\n' +
  '...#......................#..##\n' +
  '#..#..#................#...#...\n' +
  '#..#....#.#.#...##.......#..#..\n' +
  '....#.#..###.##...#..#.###..#..\n' +
  '..#...#....####.#............#.\n' +
  '......#....#.#...#.#.#.........\n' +
  '#...#........#.....##..###.#..#\n' +
  '#....#...#...##...#..#....##...\n' +
  '#..#...#..#.......#.#..##.#..#.\n' +
  '#.#..........#...........##....\n' +
  '.#...###...#......#.......#.#.#\n' +
  '.........#.........#...#...##..\n' +
  '##.#..###......##..#.....#..#..\n' +
  '....##...............#.....#...\n' +
  '.....#.....###.#.....#.#.......\n' +
  '....#..#......###..#..##..#....\n' +
  '......................#.....#..\n' +
  '..#..#...##....##....#........#\n' +
  '..#....#...#...#.......#.....#.\n' +
  '...##.#.#.##......#.#.#.#.####.\n' +
  '.###...#..#......#.#..#........\n' +
  '#..#...##.#..#..##..##....#...#\n' +
  '...#...#..#..#..#........#..##.\n' +
  '.##....#.##.#....#...#.#.#....#\n' +
  '#..#....#..#....#.......##..#.#\n' +
  '...#.#....####...........#...#.\n' +
  '#...#####...#.#..#......#...#.#\n' +
  '.##....#.#.#..#......#..##.....\n' +
  '..........#..#.#.#.....##......\n' +
  '.....#....#..................#.\n' +
  '.........#...#...#....#..###...\n' +
  '.#.#.#....#....................\n' +
  '......##............##.###..#..\n' +
  '#.#...#........####.##..#.#.##.\n' +
  '#........#.#.#.#..#.##.....#...\n' +
  '......####..#.##.......#....#..\n' +
  '.........#...#...#.....#.......\n' +
  '..##.....#...#...#.....##.....#\n' +
  '....#...##....#.....#..#..##.##\n' +
  '..#.........##...##..###..#....\n' +
  '#....#.#.........##.###.#...##.\n' +
  '.##...#....#..#..#.#....##.....\n' +
  '##..#..#..#...........#.##....#\n' +
  '....#..........#...#..#.....#..\n' +
  '........###..#..#.#.#.....##...\n' +
  '#...#...#..###............###..\n' +
  '..#.....#.#.#..#..#.#..#......#\n' +
  '..#...##..#....#...#......#....\n' +
  '#....#........##.....#..##....#\n' +
  '#.....#.#.#..#.......##.#.#.##.\n' +
  '..##...#...#.....#..........#..\n' +
  '##.....#....#......#..........#\n' +
  '......#..#..........#.#..####..\n' +
  '......#...#............##...##.\n' +
  '..#.......##.......#...###.###.\n' +
  '.#..#.#.#...#..##.#......#.#...\n' +
  '.##.....##.#.#...#.##.........#\n' +
  '#.#.######...........#.#####.#.\n' +
  '........#.##...##....##.#.##.#.\n' +
  '....#......#.....#.....###...##\n' +
  '#..............#.#....#.#....#.\n' +
  '....#..###.#.........##.#.#....\n' +
  '..#.#.#..##....####..........#.\n' +
  '...#..#.......#................\n' +
  '...#....#..............#....#..\n' +
  '.....#...#...#....#.#.#..#...#.\n' +
  '......##.............###.##..##\n' +
  '.#...#.#..#......#..#.##.......\n' +
  '##.....#.....#.##...#....#.....\n' +
  '..#..#.#.#.#.#..........#..###.\n' +
  '##..........#........#....#.#..\n' +
  '.....#...#........#.#..###....#\n' +
  '.###.#........#.##......#.#...#\n' +
  '#...##....#....#....##.#.#.....\n' +
  '.....#.#............#..........\n' +
  '..#.##....................#....\n' +
  '.....#..#..#.#..#.##.......#...\n' +
  '.....###......#......##......##\n' +
  '#.....#.#.......##.......#...#.\n' +
  '.#.#...#......#..###...#.....#.\n' +
  '#.#..#...#..##.....#...#.#..#..\n' +
  '.....#.#..........#..#.........\n' +
  '.###..##..##.....#...#...#..##.\n' +
  '#...#.#....#.......##..#.......\n' +
  '###...#.#.#..#.......#......#..\n' +
  '....##........#..........##....\n' +
  '............#....#...........#.\n' +
  '#..#.#....##..#.#..#......##...\n' +
  '.###....##...#....##..........#\n' +
  '.###........#........###.....#.\n' +
  '...#...#.#......#...#....#.....\n' +
  '.###.......#.........#.........\n' +
  '....##.#......#...###......##.#\n' +
  '.###...#..##.....##.......#....\n' +
  '.#.#...#..#.##....#........#...'

describe('3', () => {

  test('slopeToArray returns correct length for each level', () => {
    const array = slopeToArray(exampleInput)
    expect(array[0].length).toBe(11)
    expect(array.slice(-1)[0].length).toBe(11)
  })

  test('example requires slope to repeat 4 times', () => {
    const array = slopeToArray(exampleInput)
    expect(getNoRequiredSlopeRepeatRight(3, 1, array)).toBe(3)
  })

  test('repeates slope specified times', () => {
    const array = slopeToArray(exampleInput)
    const repeated = getRepeatedSlope(array, 3)
    expect(repeated[4].length).toBe(33)
  })

  test('7 trees in example', () => {
    const array = slopeToArray(exampleInput)
    const repeated = getRepeatedSlope(array, 3)
    expect(countTrees(3, 1, repeated)).toBe(7)
  })

  test('actual input', () => {
    const array = slopeToArray(input)
    const requiredRepeat = getNoRequiredSlopeRepeatRight(3, 1, array)
    const repeated = getRepeatedSlope(array, requiredRepeat)
    console.log(countTrees(3, 1, repeated))
  })

  test('traverse multiple and multiply example', () => {
    const tobogans = [
      {r: 1, d: 1},
      {r: 3, d: 1},
      {r: 5, d: 1},
      {r: 7, d: 1},
      {r: 1, d: 2}
    ]
    expect(traverseMultipleAndMultiply(exampleInput, tobogans)).toBe(336)
    console.log(traverseMultipleAndMultiply(input, tobogans))

  })

})
