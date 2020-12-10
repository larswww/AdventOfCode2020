const parseForm = (input) => {
  const answers = {}
  const groups = input.split('\n\n').map(x => x.split('\n').map(x => x.split('')))
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i]
    const unique = new Set()
    const allYes = group[0].filter(x => {
      for (let answer of x) {
        for (let person of group) {
          if (!person.includes(answer)) return false
        }
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
  }
  return answers
}

const countUniqueAnswers = (input) => {
  const answers = parseForm(input)
  return Object.values(answers).map(({unique}) => unique.size).reduce((acc, curr) => acc + curr)
}

const countAllYes = (input) => {
  const answers = parseForm(input)
  return Object.values(answers).map(({allYes}) => allYes.length).reduce((acc, curr) => acc + curr)
}

module.exports = { parseForm, countUniqueAnswers, countAllYes }
