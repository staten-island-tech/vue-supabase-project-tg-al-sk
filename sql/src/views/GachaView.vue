<template>
    <div>
<p class="words">Pity Counter: {{ pullHist2 }}</p>
    <div class="card flex">
        <Button icon="pi pi-info-circle" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" modal header="Gacha Rates" :style="{ width: '50rem' }">
            <p>Standard Pity: You are guaranteed to get at least one 5* Teacher within 90 pulls and at least one 4* Teacher every 10 pulls.</p>
            <br>
            <p>4★ Teacher drop rate : 10%</p>
            <p>5★ Teacher drop rate : 1%</p>
            <br>
            <p>Soft Pity: Once you reach 80 pulls, your drop rates for a 5* Teacher will be increased by 10% every increment.</p>
        </Dialog>
    </div>
        
        <Carousel :value="images" :numVisible="1" :numScroll="1" circular>
            <template #item="slotProps">
                    <Fieldset :legend="slotProps.data.alt" class="border-1 surface-border border-round m-2  p-3" style="height: 50vh;">
                    <p>{{ slotProps.data.text }}</p>
                    <div class="buttons">
                    <Button @click="onePull(pools[slotProps.data.index])" class="button" label="x1 Pull"/>
                    <Button @click="tenPull(pools[slotProps.data.index])" class="button" label="x10 Pull"/>
                </div>
            </Fieldset>
    </template>
        </Carousel>
<Dialog v-model:visible="pullvisible" style="width: 100vw; height: 100vh;">
    <Carousel :value="currentpulls" :numVisible="1" :numScroll="1">
            <template #item="slotProps">
                    <p>{{ slotProps.data.text }}</p>
                    <Card :class="slotProps.data.subject" class="border-1 surface-border border-round m-2  p-3">
            <template #title>{{slotProps.data.name}}</template>
            <template #content>
                <div style="display:flex;">
            <img :src="slotProps.data.image" :alt="slotProps.data.name" style="width: 10vw; height: 10vw;">
            <p style="font-size: 12px;">
                {{ slotProps.data.role }}
            </p>
        </div>
                <div style="display: flex;">
                <p v-for="index in slotProps.data.star" :key="index">★</p>
                </div>
            </template>
            </Card>
    </template>
        </Carousel>
            </Dialog>
    </div>
</template>

<script setup lang="ts">
// import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import { ref, onMounted, reactive } from "vue";

import { pools } from '../teachers/teacherPools.ts';
import { poolInfo } from '../teachers/teacherPools.ts';
import Dialog from 'primevue/dialog';
import Carousel from 'primevue/carousel';
console.log(pools)
const dialogVisible = ref(false); //differentiates the visibilies of the sidebar and dialog components 
let pullvisible = ref(false)
let currentpulls:{
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string
}[] = reactive([]);
const pullHist = ref(0) //history/pity for 4*
const pullHist2 = ref(0) //history for 5*
const rate = ref(0.01) //when the pullhist2 reaches 80 this value will slowly increase to give a higehr rate of getting a 5*
//the console logs are placeholders for the cards lmaooooo 
function onePull(pool:{
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string
}[]) {
    let fourstar = pool.filter((teacher) => teacher.star === 4);
    let fivestar = pool.filter((teacher) => teacher.star === 5);
    let sixstar = pool;
    let obtained = {
    subject: '',
    star: 0,
    name: '',
    role: '',
    image: ''
    };
    if(pool.length === 1){
        if(Math.random() < 0.05){ // up rate for whalen but no guarantee-???
        obtained = sixstar[0];
        rate.value = 0.01
        pullHist2.value = 0
        }else{
            pullHist.value++
        obtained = {subject: 'nothing', 
            star: 3, 
            name: 'student', 
            role: 'useless', 
            image: ''
        };
        // console.log(pullHist.value, "poopy")
        pullHist2.value++
        }
    }
    else if( Math.random() < 0.1 && Math.random() > 0.02) {
    obtained = fourstar[Math.floor(Math.random() * fourstar.length)];
    pullHist.value = 0 //random chance of getting 4* every pull and resets pity if you get it 
    pullHist2.value++ 
    } else if (pullHist.value == 9 ) {
        obtained = fourstar[Math.floor(Math.random() * fourstar.length)];
        pullHist.value = 0
        pullHist2.value++ //if you already did 9 pulls, your next pull must be a 4* and resets pity  
    } else {
        pullHist.value++
        obtained = {subject: 'nothing', 
            star: 3, 
            name: 'student', 
            role: 'useless', 
            image: ''
        };
        // console.log(pullHist.value, "poopy")
        pullHist2.value++ //you got nothing and it increments :skull:
    };
    if( Math.random() < rate.value) {
        obtained = fivestar[Math.floor(Math.random() * fivestar.length)];
        pullHist2.value = 0 //resets pity counter 
        rate.value = 0.01
    }
    if (pullHist2.value > 80) {
        rate.value = rate.value + 0.1
    }else if (pullHist2.value == 89) {
        obtained = fivestar[Math.floor(Math.random() * fivestar.length)];
        rate.value = 0.01
        pullHist2.value = 0 //you must get a chara every 90 pulls resets pity 
    }
    currentpulls = [obtained];
    pullvisible.value = true;
    return obtained;
};
function tenPull(pool:{
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string
}[]) {
    let arr = [];
    let i = 0
    while( i < 10 ) {
        i++
        arr.push(onePull(pool))
    } 
    currentpulls = arr;
    pullvisible.value = true;
    console.log(currentpulls);
};

const PhotoService = {
        getData() {
            return poolInfo;
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    
onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();


</script>

<style scoped>

.a {
    width: 100%;
    justify-content: center
}
.field {
    display: float;
    margin-bottom: 95%;
}

.buttons {
    position: relative;
    margin: auto auto 1rem auto;
    width: 40vw;
    height: fit-content;
}

.button {
    width: 20vw;
    height: fit-content;
}
.words {
    margin-left: 55%;
    position: fixed;
  right: 10px;
  top: 50px;
}
</style>
