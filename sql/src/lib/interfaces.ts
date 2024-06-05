interface Cards {
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string
    }

interface Stats {
  charisma: number,
      coolness: number,
      dexterity: number,
      intelligence: number,
      knowledge: number, 
      strength: number
}

interface CardWStat { // second type bc theres two version of this object
    subject: string,
    star: number,
    name: string,
    role: string,
    power: number,
    image: string,
    stats: Stats
}

interface CurrencyObj {
    last_updated: string, 
    golden_seagulls: number, 
    id: string, 
    diamond_seagulls: number
  }

interface BossStat {
  damage: number,
  health: number,
  maxHealth: number,
  name: string,
  resistance: number
}

interface UnitStat {
  damage: number,
  health: number,
  image: string,
  name: string,
  resistance: number
}

interface BattleStat {
  battle: {},
  boss: BossStat,
  turn: number,
  units: UnitStat[]
}

export type {Cards, CardWStat, Stats, CurrencyObj, BattleStat};