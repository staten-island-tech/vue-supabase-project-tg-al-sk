class Boss {
    health: Number
    maxHealth: Number
    damage: Number
    resistance: Number
    name: String

    constructor(difficulty: String) {
        let difficultyMod
        switch (difficulty) {
            case 'easy':
                difficultyMod = 1
                break;
            case 'medium':
                difficultyMod = 1.5
                break;
            case 'hard':
                difficultyMod = 2
                break;
            case 'extreme':
                difficultyMod = 2.5
                break;
            case 'impossible':
                difficultyMod = 3
                break;
            default:
                difficultyMod = 1
        }
        this.health = Math.round(this.generateStat(3000) * difficultyMod)
        this.maxHealth = Math.round(this.health)
        this.damage = Math.round(this.generateStat(1000) * difficultyMod)
        this.resistance = Math.round(this.generateStat(12) * difficultyMod)
        this.name = generateBossName()
    }
    generateStat(max: Number) {
        let num = 0
        for(let i = 0; i < 5; i++) {
            num += (Math.floor(Math.random() * max + 1))
        }
        num /= 5
        num = Math.round(num)
        return num
    }
    heal(hp: Number) {
        this.health += hp
    }
    hurt(hp: Number) {
        this.health -= hp
    }
}
class Unit {
    health: Number
    damage: Number
    resistance: Number
    image: String
    name: String

    constructor(obj) {
        this.health = Math.round(obj.power + obj.stats.strength + obj.stats.coolness)
        this.damage = Math.round((obj.power + obj.stats.strength + obj.stats.dexterity) / 2)
        this.resistance = Math.round((obj.power + obj.stats.dexterity + obj.stats.intelligence) / 40)
        this.image = obj.image
        this.name = obj.name
    }
    heal(hp: Number) {
        this.health += hp
    }
    hurt(hp: Number) {
        this.health -= hp
    }
}

export { Boss, Unit }