const getNoRequiredSlopeRepeatRight = (right, down, slopeSectionArray) => {
  const slopeHeight = slopeSectionArray.length
  const widthToGetDown = (slopeHeight * down) * right
  const slopeWidth = slopeSectionArray[0].length
  const requiredWith = widthToGetDown / slopeWidth
  const requiredSlopeWidth = Math.ceil(requiredWith)
  return requiredSlopeWidth
}

const slopeToArray = (input) => {
  return input.split('\n')
}

const getRepeatedSlope = (slopeSectionArray, width) => {
  const repeated = []
  for (let i = 0; i < slopeSectionArray.length; i++) {
    const section = slopeSectionArray[i]
    repeated[i] = section
    for (let y = 1; y < width; y++) {
      repeated[i] += section
    }
  }
  return repeated
}

const countTrees = (right, down, slope) => {
  let x = 0
  let y = 0
  let trees = 0
  while (x < slope.length) {
    if (slope[x].charAt(y) === '#') trees++
    y += right
    x += down
  }

  return trees
}


const traverseMultipleAndMultiply = (input, tobogans) => {
  const array = slopeToArray(input)
  const treeCounts = []
  for (let { r, d } of tobogans) {
    const requiredRepeat = getNoRequiredSlopeRepeatRight(r, d, array)
    const repeated = getRepeatedSlope(array, requiredRepeat)
    const trees = countTrees(r, d, repeated)
    treeCounts.push(trees)
  }
  const multiplied = treeCounts.reduce((curr, acc) => curr * acc)
  return multiplied
}


module.exports = { getNoRequiredSlopeRepeatRight, slopeToArray, getRepeatedSlope, countTrees, traverseMultipleAndMultiply }
