const { parseBoardingPass, binarySearch, getHighestSeatId, getSeatMap } = require('../src/5')
const { actual } = require('./inputs/5')

const examplePass1 = 'FBFBBFFRLR'
const examplePass2 = 'BFFFBBFRRR'
const examplePass3 = 'FFFBBBFRRR'
const examplePass4 = 'BBFFBBFRLL'
const arrayOfBoardingPasses = [examplePass1, examplePass2, examplePass3, examplePass4]

describe('5', () => {

  test('binary search row', () => {
    expect(binarySearch(['F', 'B', 'F', 'B', 'B', 'F', 'F'], 'F', 128)).toBe(44)
  })

  test('binary search seat', () => {
    expect(binarySearch(['R', 'L', 'R'], 'L', 8)).toBe(5)
  })

  test('parseBoardingPass', () => {
    expect(parseBoardingPass(examplePass1)).toMatchObject({ row: 44, column: 5, ID: 357})
  })

  test('parseBoardingPass BFFFBBFRRR: row 70, column 7, seat ID 567', () => {
    expect(parseBoardingPass(examplePass2)).toMatchObject({ row: 70, column: 7, ID: 567})
  })

  test('parseBoardingPass FFFBBBFRRR: row 14, column 7, seat ID 119.', () => {
    expect(parseBoardingPass(examplePass3)).toMatchObject({ row: 14, column: 7, ID: 119})

  })

  test('parseBoardingPass BBFFBBFRLL: row 102, column 4, seat ID 820', () => {
    expect(parseBoardingPass(examplePass4)).toMatchObject({ row: 102, column: 4, ID: 820})
  })

  test('getHighestSeatID', () => {
    expect(getHighestSeatId(arrayOfBoardingPasses)).toBe(820)
  })

  test('actual', () => {
    const boardingpasses = actual.split('\n')
    const res = getHighestSeatId(boardingpasses)
    console.log(res)
    expect(res).toBe(842)
  })

  test('example seatMap', () => {
    const bps = arrayOfBoardingPasses.map(x => parseBoardingPass(x))
    const res = getSeatMap(bps)
  })

  test('actual seatmap', () => {
    const bps = actual.split('\n').map(x => parseBoardingPass(x))
    const res = getSeatMap(bps)

  })

})
