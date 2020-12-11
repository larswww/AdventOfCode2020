const parseInstructions = input => {
  return input.split('\n').map(x => {
    const [type, valueOp] = x.split(' ')
    const op = valueOp.charAt(0)
    const value = +valueOp.split(op)[1]
    return { type, value, op }
  })
}

const runLoop = instructions => {
  let accumulator = 0
  for (let i = 0; i < instructions.length; i++) {
    const { type, value, op, visited } = instructions[i]
    if (visited) return { error: true, type: 'INFINITE_LOOP', value: accumulator }
    instructions[i].visited = true
    if (type === 'acc') {
      op === '+' ? accumulator += value : accumulator -= value
    } else if (type === 'jmp') {
      op === '+' ? i += (value-1) : i -= value+1
    }
  }
  return { accumulator }
}

const runGame = input => {
  const instructions = parseInstructions(input)
  return runLoop(instructions)
}

const reLoop = input => {
  const instructions = parseInstructions(input)
  let stillErrors = true
  let lastModified = 0
  let acc
  while (stillErrors) {
    let deepClone = JSON.parse(JSON.stringify(instructions))
    for (let i = lastModified; i < instructions.length; i++) {
      const { type } = instructions[i]
      if (['nop', 'jmp'].includes(type)) {
        deepClone[i].type = type === 'nop' ? 'jmp' : 'nop'
        lastModified = (i+1)
        break
      }
    }
    let { error, accumulator } = runLoop(deepClone)
    stillErrors = error
    acc = accumulator
  }
  return acc
}

module.exports = { parseInstructions, runLoop, runGame, reLoop }
