const numberOfCorrectPasswords = (inputString, policy) => {
  const arr = inputString.split('\n')
  let numberOfValid = 0
  for (let password of arr) {
    const parsedPassword = getParsedPassword(password)
    if (policy(parsedPassword)) numberOfValid++
  }
  return numberOfValid
}

const getParsedPassword = (password) => {
  try {
    const parts = password.split(' ')
    const min = +parts[0].split('-')[0]
    const max = +parts[0].split('-')[1]
    const char = parts[1].charAt(0)
    const pass = parts[2]
    return { min, max, char, pass }
  } catch (e) {
    console.error(e)
  }

}

const sledRentalPlacePasswordPolicy = ({ min, max, char, pass }) => {
  let counts = 0
  for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) === char) counts++
    if (counts > max) return false
  }
  return counts >= min && counts <= max
}

const tobogganPasswordPolicy = ({ min, max, char, pass }) => {
  min = min -= 1
  max = max -= 1
  if (pass.charAt(min) === char || pass.charAt(max) === char) {
    return pass.charAt(min) !== pass.charAt(max)
  }
  return false
}


module.exports = { numberOfCorrectPasswords, getParsedPassword, sledRentalPlacePasswordPolicy, tobogganPasswordPolicy }
