const parseForm = (input) => {
  let totalYesAll = 0
  let totalUnique = 0
  const answers = {}
  const groups = input.split('\n\n').map(x => x.split('\n').map(x => x.split('')))
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i]
    const unique = new Set()
    const allYes = group[0].filter(x => {
      for (let person of group) {
        if (!person.includes(x)) return false
      }
      return true
    })

    for (let person of group) {
      for (let answer of person) {
        unique.add(answer)
      }
    }
    answers[i] = {
      answers: group,
      unique,
      allYes
    }
    totalUnique += unique.size
    totalYesAll += allYes.length
  }
  return { answers, totalYesAll, totalUnique }
}

const countUniqueAnswers = (input) => {
  const { totalUnique } = parseForm(input)
  return totalUnique
}

const countAllYes = (input) => {
  const { totalYesAll } = parseForm(input)
  return totalYesAll
}

module.exports = { parseForm, countUniqueAnswers, countAllYes }
