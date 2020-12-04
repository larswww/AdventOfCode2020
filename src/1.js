const one = (input) => {
  const target = 2020
  for (let i = 0; i < input.length; i++) {
    for (let y = 0; y < input.length; y++) {
      const added = input[i] + input[y]
      if (added === target) {
        const multiplied = input[i] * input[y]
        return multiplied
      }
    }
  }
}

const addUpToTarget = (numbers, target) => {
  let results = []
  const sorted = numbers.sort((a, b) => a - b)
  for (let i = 0; i <= numbers.length; i++) {
    for (let y = 1; y <= numbers.length; y++) {
      for (let x = 2; x <= numbers.length; x++) {
        if (sorted[i] + sorted[y] + sorted[x] === target) {
          results.push([sorted[i], sorted[y], sorted[x]])
        }
      }
    }
  }


  // 124551180
  return results
}

module.exports = { one, addUpToTarget }
