<script setup lang="ts">
import { useUserStore } from '@/db/pinia/stores/userStore'
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import { ref, watch } from 'vue';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

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

const battle = ref({})
const battleStarted = ref(false)

watch(selected, () => {
    if(selected.value.length == 5) {
        isSelectingCards.value = false
        isSelectingDifficulty.value = true
    }
})

watch(difficulty, () => {
    isSelectingDifficulty.value = false
    battleStarted.value = true

    console.log(isSelectingDifficulty)
})

function generateBoss(difficulty) {

}
</script>

<template>
    <!-- <div v-for="card in gacha">
        <img :src="card.image" style="width: 20%; height: 20%;">
        <h2>{{ card.name}}</h2>
        <h3>Power: {{ card.power }}</h3>
        <ul>
            <li v-for="stat in card.stats">
                {{ capitalizeFirstLetter(getKeyByValue(card.stats, stat)) }}: {{ stat }}
            </li>
        </ul>
        
    </div> -->
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

        <div class="">
            <div>
                <label for="easy" class="text-4xl">Easy</label>
                <input type="radio" value="easy" id="easy" class="mx-3">
            </div>
            <div>
                <label for="medium" class="text-4xl">Medium</label>
                <input type="radio" value="medium" id="medium" class="mx-3">
            </div>
            <div>
                <label for="hard" class="text-4xl">Hard</label>
                <input type="radio" value="hard" id="hard" class="mx-3">
            </div>
            <div>
                <label for="extreme" class="text-4xl">Extreme</label>
                <input type="radio" value="extreme" id="extreme" class="mx-3">
            </div>
            <div>
                <label for="impossible" class="text-4xl">Impossible</label>
                <input type="radio" value="impossible" id="impossible" class="mx-3">
            </div>
        </div>
    </div> 
</template>