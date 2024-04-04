import sumObjectsByKey from '../utils/sumObjectsByKey.js'

function calculateSubjectModifiers(subject) {
  let modifiers
  switch (subject) {
    case 'math':
      modifiers = {
        intelligence: 20,
        knowledge: 10,
        strength: -10,
        charisma: 0,
        dexterity: -10,
        coolness: 0
      }
      break
    case 'english':
      modifiers = {
        intelligence: 0,
        knowledge: 10,
        strength: 0,
        charisma: 20,
        dexterity: 10,
        coolness: 10
      }
      break
    case 'science':
      modifiers = {
        intelligence: 20,
        knowledge: 20,
        strength: -10,
        charisma: 10,
        dexterity: 0,
        coolness: 0
      }
      break
    case 'history':
      modifiers = {
        intelligence: 10,
        knowledge: 20,
        strength: 10,
        charisma: 20,
        dexterity: 0,
        coolness: 20
      }
      break
    case 'russian':
      modifiers = {
        intelligence: 10,
        knowledge: 10,
        strength: 0,
        charisma: 10,
        dexterity: 0,
        coolness: 0
      }
      break
      case 'physed':
        modifiers = {
          intelligence: 5,
          knowledge: 10,
          strength: 20,
          charisma: 10,
          dexterity: 0,
          coolness: 0
        }
        break
      case 'tech':
        modifiers = {
          intelligence: 20,
          knowledge: 20,
          strength: 0,
          charisma: 10,
          dexterity: 0,
          coolness: 10
        }
        break
      case 'principal':
        modifiers = {
          intelligence: 20,
          knowledge: 10,
          strength: 8,
          charisma: 20,
          dexterity: 0,
          coolness: 15
        }
        break
    default:
      modifiers = {
        intelligence: 5,
        knowledge: 5,
        strength: 5,
        charisma: 5,
        dexterity: 5,
        coolness: 5
      }
      break
  }
  return modifiers
}

function calculateRarityModifiers(rarity) {
  let modifiers
  switch (rarity) {
    case 1: // star numbers; higher the more rare
      modifiers = {
        intelligence: 0,
        knowledge: 0,
        strength: 0,
        charisma: 0,
        dexterity: 0,
        coolness: 0
      }
      break
    case 2:
      modifiers = {
        intelligence: 5,
        knowledge: 5,
        strength: 5,
        charisma: 5,
        dexterity: 5,
        coolness: 5
      }
      break
    case 3:
      modifiers = {
        intelligence: 10,
        knowledge: 10,
        strength: 10,
        charisma: 10,
        dexterity: 10,
        coolness: 10
      }
      break
    case 4:
      modifiers = {
        intelligence: 15,
        knowledge: 15,
        strength: 15,
        charisma: 15,
        dexterity: 15,
        coolness: 15
      }
      break
    case 5:
      modifiers = {
        intelligence: 20,
        knowledge: 20,
        strength: 20,
        charisma: 20,
        dexterity: 20,
        coolness: 20
      }
      break
    case 6:
      modifiers = {
        intelligence: 25,
        knowledge: 25,
        strength: 25,
        charisma: 25,
        dexterity: 25,
        coolness: 25
      }
      break
  }
  return modifiers
}

export default function calculateModifiers(subject, rarity) {
  const subjectModifiers = calculateSubjectModifiers(subject)
  const rarityModifiers = calculateRarityModifiers(rarity)

  const finalModifiers = sumObjectsByKey(subjectModifiers, rarityModifiers)
  return finalModifiers
}
