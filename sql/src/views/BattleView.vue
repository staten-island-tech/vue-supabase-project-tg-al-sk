<script setup lang="ts">
// @ts-ignore
import { useUserStore } from '@/db/pinia/stores/userStore'
import Card from 'primevue/card';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import type { CardWStat } from '@/lib/interfaces';

import { Boss, Unit } from '../teachers/battleClasses'

const userStore = useUserStore()
const gachaPlusStudents = JSON.parse(userStore.getUser.gacha)
const gacha = gachaPlusStudents.filter((unit:CardWStat) => (unit.star > 3))
const gachaSorted = gacha.sort(function (a:any, b:any) { // not used anywhere so type is any for now
  if (a.power < b.power) {
    return 1;
  }
  if (a.power > b.power) {
    return -1;
  }
  return 0;
})

console.log(gacha)

function getKeyByValue(object: {}, value: Number) {
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

const battle:Ref<{
    battle: {},
    units: []
}> = ref({
    battle: {},
    units: []
})

function generateBossName() {
    var adjectives = [
		"Autumn", "Hidden", "Bitter", "Misty", "Silent", "Empty", "Dry", "Dark", "Summer", "Icy", 
		"Delicate", "Quiet", "White", "Cool", "Spring", "Winter", "Patient", "Twilight", "Dawn", 
		"Crimson", "Wispy", "Weathered", "Blue", "Billowing", "Broken", "Cold", "Damp", "Falling", 
		"Frosty", "Green", "Long", "Late", "Lingering", "Bold", "Little", "Morning", "Muddy", "Old",
		"Red", "Rough", "Still", "Small", "Sparkling", "Wandering", "Withered", "Wild", "Black", 
		"Young", "Holy", "Solitary", "Fragrant", "Aged", "Snowy", "Proud", "Floral", "Restless", 
		"Divine", "Polished", "Ancient", "Purple", "Lively", "Nameless"];
	var nouns = [
		"Waterfall", "River", "Breeze", "Moon", "Rain", "Wind", "Sea", "Morning", "Snow", "Lake", 
		"Sunset", "Pine", "Shadow", "Leaf", "Dawn", "Glitter", "Forest", "Hill", "Cloud", "Meadow", 
		"Sun", "Glade", "Bird", "Brook", "Butterfly", "Bush", "Dew", "Dust", "Field", "Fire", 
		"Flower", "Firefly", "Feather", "Grass", "Haze", "Mountain", "Night", "Pond", "Darkness",
		"Snowflake", "Silence", "Sound", "Sky", "Shape", "Surf", "Thunder", "Violet", "Water", 
		"Wildflower", "Wave", "Water", "Resonance", "Sun", "Wood", "Dream", "Cherry", "Tree", "Fog", 
		"Frost", "Voice", "Paper", "Frog", "Smoke", "Star"];

	var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
	var noun = nouns[Math.floor(Math.random()*nouns.length)];
    return `${adjective} ${noun}`
}

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

    battle.value.units = units
    battle.value.boss = boss
    battle.value.turn = 0


}

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
        <div class="drop-shadow-lg p-1 b-rounded-xl">
            <Card>
                <template #title>
                    <h1 class="text-center text-4xl" >Boss: {{ battle.boss.name }}</h1>
                </template>
                <template #content>
                    <h2 class="text-center text-2xl">Health: {{ battle.boss.health }} / {{ battle.boss.maxHealth }}</h2>
                    <h2 class="text-center text-2xl">Damage: {{ battle.boss.damage }}</h2>
                    <h2 class="text-center text-2xl">Resistance: {{ battle.boss.resistance }}</h2>
                </template>
            </Card>
        </div>
        <div class="flex gap-5 justify-center items-center">
            <Card style="width: 10rem; overflow: hidden" v-for="unit in battle.units" class="flex-grow-1">
                <template #header>
                    <img alt="header" :src="unit.image" style="width: 100%; height: 100%;" />
                </template>
                <template #title>
                    {{ unit.name }}
                </template>
                <template #subtitle>Power: {{ unit.power }}</template>
                <template #content>
                    <li>
                        Health: {{ unit.health }}
                    </li>
                    <li>
                        Damage: {{ unit.damage }}
                    </li>
                    <li>
                        Resistance: {{ unit.resistance }}
                    </li>
                    {{ Number(battle.units.indexOf(unit)), battle.turn }}
                </template>
            </Card>
        </div>
    </div>
</template>