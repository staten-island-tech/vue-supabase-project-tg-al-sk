interface Cards {
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string
    }

interface CardWStat { // second type bc theres two version of this object
    subject: string,
    star: number,
    name: string,
    role: string,
    power: number,
    image: string,
    stats: {
      charisma: number,
      coolness: number,
      dexterity: number,
      intelligence: number,
      knowledge: number, 
      strength: number
    }
}

interface CurrencyObj {
    last_updated: String, 
    golden_seagulls: Number, 
    id: String, 
    diamond_seagulls: Number
  }
export type {Cards};
export type {CardWStat};
export type {CurrencyObj};