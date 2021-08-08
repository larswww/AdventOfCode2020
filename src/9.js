const isValid = (next, preamble) => {
  for (let i = 0; i < preamble.length; i++) {
    const considered = preamble[i]
    for (let y = 0; y < preamble.length; y++) {
      const candidate = preamble[y]
      if (y === i) continue
      const equalsNext = considered + candidate === next
      const notTheSame = considered !== candidate
      if (equalsNext && notTheSame) {
        return true
      }
    }
  }
  return false
}

const parseInput = input => {
  return input.split('\n').map(x => +x)
}

const getInvalidNumbers = (input, preambleLength) => {
  const parsed = parseInput(input)
  const invalid = parsed.slice(preambleLength).filter((x, i) => !isValid(x, parsed.slice(i, i+preambleLength)))
  return invalid
}

const addToInvalidNumber = (input, invalid) => {
  const parsed = parseInput(input)
  for (let i = 0; i < parsed.length; i++) {
    const attempt = []
    let total = 0
    for (let y = i; y < parsed.length; y++) {
      const added = total += parsed[y]
      if (added <= invalid) attempt.push(parsed[y])
      total = added
      if (total > invalid) break
      if (total === invalid) return attempt
    }
  }
}

const getMinMax = array => {
  const min = Math.min(...array)
  const max = Math.max(...array)
  return { min, max }

}

module.exports = { isValid, getInvalidNumbers, addToInvalidNumber, getMinMax }
