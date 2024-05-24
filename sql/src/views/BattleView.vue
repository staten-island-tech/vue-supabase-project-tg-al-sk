<script setup lang="ts">
import { useUserStore } from '@/db/pinia/stores/userStore'
import Card from 'primevue/card';

const userStore = useUserStore()
const gachaPlusStudents = JSON.parse(userStore.getUser.gacha)
const gacha = gachaPlusStudents.filter((unit) => (unit.star > 3))

console.log(gacha)

function getKeyByValue(object: {}, value: String) {
  return Object.keys(object).find((key) => object[key] === value);
}
function capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    <div class="grid grid-cols-1 gap-5">
        <Card style="width: 10rem; overflow: hidden" v-for="card in gacha">
            <template #header>
                <img alt="header" :src="card.image" style="width: 100%; height: 100%;" />
            </template>
            <template #title>{{ card.name }}</template>
            <template #subtitle>Power: {{ card.power }}</template>
            <template #content>
                <li v-for="stat in card.stats">
                    {{ capitalizeFirstLetter(getKeyByValue(card.stats, stat)) }}: {{ stat }}
                </li>
            </template>
        </Card>
    </div>
</template>