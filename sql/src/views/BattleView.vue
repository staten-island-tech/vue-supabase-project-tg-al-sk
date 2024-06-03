<script setup lang="ts">
import { useUserStore } from '@/db/pinia/stores/userStore'
import Card from 'primevue/card';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import { ref, watch } from 'vue';

const userStore = useUserStore()
const gachaPlusStudents = JSON.parse(userStore.getUser.gacha)
const gacha = gachaPlusStudents.filter((unit) => (unit.star > 3))
const gachaSorted = gacha.sort(function (a, b) {
  if (a.power < b.power) {
    return 1;
  }
  if (a.power > b.power) {
    return -1;
  }
  return 0;
})

console.log(gacha)

function getKeyByValue(object: {}, value: String) {
  return Object.keys(object).find((key) => object[key] === value);
}
function capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const selected = ref([])
const isSelectingCards = ref(true)

const difficulty = ref('')
const isSelectingDifficulty = ref(false)

const battleStarted = ref(false)

watch(selected, () => {
    if(selected.value.length == 5) {
        isSelectingCards.value = false
        isSelectingDifficulty.value = true
    }
})

const battle = {}

function startBattle() {
    isSelectingDifficulty.value = false
    battleStarted.value = true

    const boss = new Boss(difficulty.value)

    const units = []
    for(let i in selected.value) {
        const unit = new Unit(selected.value[i])
        units.push(unit)
    }
    console.log(boss, units)

    battle.units = units
    battle.boss = boss
}

class Boss {
    health: Number
    damage: Number
    resistance: Number

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
        this.health = this.generateStat(1000) * difficultyMod
        this.damage = this.generateStat(100) * difficultyMod
        this.resistance = this.generateStat(12) * difficultyMod
    }
    generateStat(max: Number) {
        let num = 0
        for(let i = 0; i < 3; i++) {
            num += (Math.floor(Math.random() * max + 1))
        }
        num /= 3
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
        this.health = obj.power + obj.stats.strength + obj.stats.coolness
        this.damage = obj.power + obj.stats.strength + obj.stats.dexterity
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

</script>

<template>
    <div v-if="isSelectingCards">
        <h1 class="text-center p-5">Select 5 Cards</h1>
        <div class="grid grid-cols-1 gap-5">
            <Card style="width: 10rem; overflow: hidden" v-for="card in gacha">
                <template #header>
                    <img alt="header" :src="card.image" style="width: 100%; height: 100%;" />
                </template>
                <template #title>
                    {{ card.name }}
                    <div>Selected: <input type="checkbox" :value="card" v-model="selected"></div>
                </template>
                <template #subtitle>Power: {{ card.power }}</template>
                <template #content>
                    <li v-for="stat in card.stats">
                        {{ capitalizeFirstLetter(getKeyByValue(card.stats, stat)) }}: {{ stat }}
                    </li>
                </template>
            </Card>
        </div>
    </div>
    <div v-if="isSelectingDifficulty" class="">
        <h1 class="text-center bg-[#999291]">Select a difficulty</h1>

        <form class="">
            <div>
                <label for="easy" class="text-4xl">Easy</label>
                <input type="radio" value="easy" id="easy" class="mx-3" name="input" v-model="difficulty">
            </div>
            <div>
                <label for="medium" class="text-4xl">Medium</label>
                <input type="radio" value="medium" id="medium" class="mx-3" name="input" v-model="difficulty">
            </div>
            <div>
                <label for="hard" class="text-4xl">Hard</label>
                <input type="radio" value="hard" id="hard" class="mx-3" name="input" v-model="difficulty">
            </div>
            <div>
                <label for="extreme" class="text-4xl">Extreme</label>
                <input type="radio" value="extreme" id="extreme" class="mx-3" name="input" v-model="difficulty">
            </div>
            <div>
                <label for="impossible" class="text-4xl">Impossible</label>
                <input type="radio" value="impossible" id="impossible" class="mx-3" name="input" v-model="difficulty">
            </div>
            <Button type="submit" @click="startBattle">Start Battle</Button>
        </form>
    </div> 
    
    <div v-if="battleStarted">
        <div>
            <Card style="width: 10rem; overflow: hidden" v-for="card in selected" class="justify-center">
                <template #header>
                    <img alt="header" :src="card.image" style="width: 100%; height: 100%;" />
                </template>
                <template #title>
                    {{ card.name }}
                </template>
                <template #subtitle>Power: {{ card.power }}</template>
                <template #content>
                    <li v-for="stat in battle.units[gacha.indexOf(card)]">
                        {{ stat }}
                    </li>
                </template>
            </Card>
        </div>
    </div>
</template>