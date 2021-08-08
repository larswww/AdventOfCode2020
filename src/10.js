const getSortedNumberArrayFromInput = input => input.split('\n').map(x => +x).sort((a, b) => a-b)

let differences = {}
let maxJoltageDifference = [1, 2, 3]

const getLowestPossible = (adapters, currentJoltage) => {
  for (let difference of maxJoltageDifference) {
    if (!differences[difference]) differences[difference] = 0
    for (let adapter of adapters) {
      if ((adapter - difference) === currentJoltage) {
        differences[difference]++
        return adapter
      }
    }
  }
}

const getDifferences = (input, start) => {
  differences = {}
  let current = start
  let adapters = [...input]
  for (let i = 0; i < input.length; i++) {
    const lowest = getLowestPossible(adapters, current)
    current = lowest
    const index = adapters.indexOf(lowest)
    adapters.splice(index, 1)
  }
  differences[3]++
  return differences
}

module.exports = { getSortedNumberArrayFromInput, getLowestPossible, getDifferences }
