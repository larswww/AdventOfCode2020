const binarySearch = (nodes, lower, start) => {
  let max = start
  let min = 0

  for (let node of nodes) {

    if (node === lower) {
      max = (max / 2) + (min / 2)
    } else {
      min = (max / 2) + (min / 2)
    }
  }
  const finalNode = nodes[nodes.length-1]
  return (finalNode === lower) ? min : max -1
}

const parseBoardingPass = boardingpass => {
  const rowCode = boardingpass.split('').slice(0, 7)
  const seatCode = boardingpass.split('').slice(-3)
  const row = binarySearch(rowCode, 'F', 128)
  const column = binarySearch(seatCode, 'L', 8)
  const ID = (row * 8) + column
  return { row, column, ID}
}

const getHighestSeatId = arrayOfBoardingpasses => {
  const res = arrayOfBoardingpasses.map(x => parseBoardingPass(x))
  return res.sort((a, b) => a.ID - b.ID).pop().ID
}

const getSeatMap = arrayOfParsedBoardingpasses => {
  const seatMap = {}
  for (let bp of arrayOfParsedBoardingpasses) {
    if (!seatMap[bp.row]) seatMap[bp.row] = {}
    seatMap[bp.row][bp.column] = bp.ID
  }
  console.log(JSON.stringify(seatMap, null, '\t'))
  return seatMap
}

module.exports = { binarySearch, parseBoardingPass, getHighestSeatId, getSeatMap }
