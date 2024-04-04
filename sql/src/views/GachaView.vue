<template>
    <div>
<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" header="Available Cards">
        <Card v-for="teacher in teachers" style="background-color: blueviolet;">
    <template #title>{{ teacher.name }}</template>
    <template #content>
        <p class="m-0">
            {{ teacher.role }}
        </p>
        <img :src="teacher.image" :alt="teacher.name" style="width: 10vw; height: auto;">
    </template>
</Card>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" />
</div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" class="card flex justify-content-center">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
                <Fieldset :legend="slotProps.item.alt" class="field">
                    <p>{{ slotProps.item.itemImageSrc }}</p>
                </Fieldset>
                <div class="buttons">
                    <button @click="onePull()" class="button">x1 Pull</button>
                    <button @click="tenPull()" class="button">x10 Pull</button>
                </div>
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import { ref, onMounted } from "vue";
import {teachers} from '../stores/teachers.ts';

const pullHist = ref(0) //history/pity for 4*
const pullHist2 = ref(0) //history for 5*
const rate = ref(0.01) //when the pullhist2 reaches 80 this value will slowly increase to give a higehr rate of getting a 5*
//the console logs are placeholders for the cards lmaooooo 
function onePull() {
    if( Math.random() < 0.1 && Math.random() > 0.02) {
    console.log("you got a 4*")
    pullHist.value = 0 //random chance of getting 4* every pull and resets pity if you get it 
    pullHist2.value++ 
    } else if (pullHist.value == 9 ) {
        console.log("you got a 4*")
        pullHist.value = 0
        pullHist2.value++ //if you already did 9 pulls, your next pull must be a 4* and resets pity  
    } else {
        pullHist.value++
        console.log(pullHist.value, "poopy")
        pullHist2.value++ //you got nothing and it increments :skull:
    };
    if( Math.random() < rate.value) {
        console.log("you got a 5*; yay! ")
        pullHist2.value = 0 //resets pity counter 
        rate.value = 0.01
    }
    if (pullHist2.value > 80) {
        rate.value = rate.value + 0.1
    }else if (pullHist2.value == 89) {
        console.log("you got a 5*; yay! ")
        rate.value = 0.01
        pullHist2.value = 0 //you must get a chara every 90 pulls resets pity 
    }
};
function tenPull() {
    let i = 0
    while( i < 10 ) {
        i++
        onePull()
    } 
};

const PhotoService = {
        getData() {
            return [
                {
                    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
                    alt: 'Description for Image 1',
                    title: 'Title 1'
                },
                {
                    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
                    alt: 'Description for Image 2',
                    title: 'Title 2'
                }
            ];
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    
onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
const visible = ref(false);

</script>

<style scoped>

.a {
    width: 100%;
    justify-content: center
}
.field {
    display: float;
    position: absolute;
    margin-bottom: 95%;
}

.buttons {
    position: absolute;
    margin-left: 100%;
    margin-top: 80%;
    margin-right: 2%;
    width: 30vw;
}

.button {
    margin-right: 2%;
    width: 10vw;
    height: 3vw;
}

</style>