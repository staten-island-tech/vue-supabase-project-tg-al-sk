import statTypes from './statTypes'

export default class Teacher {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
  }
  calculateModifiers(subject) {
    let modifiers
    switch (subject) {
      case 'math':
        modifiers = {
          intelligence: 10,
          knowledge: 5,
          strength: -5,
          charisma: 0,
          dexterity: -5,
          coolness: 0
        }
    }
  }
}

const teacher = new Teacher('sam', 'math')
console.log(teacher)
