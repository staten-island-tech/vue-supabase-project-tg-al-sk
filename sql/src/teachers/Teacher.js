import calculateStats from './calculateStats.js'

export default class Teacher {
  constructor(name, subject, image, star) {
    this.name = name
    this.subject = subject
    this.image = image
    this.star = star
    this.stats = calculateStats(subject, star)
    // Wow my code is so readable right
    // This is the sum of all stats
    this.power = Math.round(Object.values(this.stats).reduce((acc, cur) => (acc += cur)))
  }
}

// const teacher = new Teacher('sam', 'history', '', 'common')
// console.log(teacher)
