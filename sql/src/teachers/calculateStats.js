import calculateModifiers from './calculateModifiers.js'
import statTypes from './statTypes.js'
import randNum from '../utils/randNum.js'

export default function calculateStats(subject, star) {
  const modifiers = calculateModifiers(subject, star)

  const stats = {}
  statTypes.forEach((statType) => {
    const statBaseValue = randNum(0, 100)
    let statValue = statBaseValue + modifiers[statType]

    if (statValue > 100) statValue = 100
    if (statValue < 0) statValue = 0

    stats[statType] = statValue
  })

  return stats
}
