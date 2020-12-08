const getParsedBagPolicy = policyString => {
  const name = policyString.split(' bags')[0]
  const contains = policyString.split('contain ')[1].split(',')
  const children = contains.filter(x => x !== 'no other bags.').map(x => {
    const policy = x.split(' bag')[0].trim()
    const qty = parseInt(policy.split(' ')[0])
    const name = policy.split(`${qty} `)[1]
    if (!qty || !name) throw new Error(`contains parsing error: ${x}`)
    return { qty, name }
  })
  return { name, children }
}

const getBagPolicyDict = policies => {
  const arr = policies.split('\n')
  const parsed = arr.map(x => getParsedBagPolicy(x))
  const dict = {}
  for (let policy of parsed) dict[policy.name] = policy.children
  return dict
}

const getKeysOfPossible = (target, dict) => {
  console.time('1337_depth_recursion')
  const possible = new Set()
  const search = (target, dict) => {
    for (let key of Object.keys(dict)) {
      for (let { name } of dict[key]) {
        if (name === target) {
          possible.add(key)
          search(key, dict)
        }
      }
    }
  }
  search(target, dict)
  console.timeEnd('1337_depth_recursion')

  return possible
}

const countBagPossibilities = (target, input) => {
  const dict = getBagPolicyDict(input)
  const possibleBags = getKeysOfPossible(target, dict)
  return possibleBags.size
}

const countContainingBags = (target, input) => {
  const dict = getBagPolicyDict(input)

  const getContaining = containingBags => {
    if (!containingBags.length) return 0
    return containingBags.map(bag => bag.qty + bag.qty * getContaining(dict[bag.name])).reduce((acc, current) => acc + current)
  }
  const count = getContaining(dict[target])
  return count
}


module.exports = { getParsedBagPolicy, getBagPolicyDict, countBagPossibilities, countContainingBags }
