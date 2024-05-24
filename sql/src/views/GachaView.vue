<template>
    <h1>Gacha</h1>
    <div>
<p class="words">Pity Counter: {{ userStore.user.pityCount }}</p>
    <div class="card flex">
        <Button icon="pi pi-info-circle" @click="dialogVisible = true" aria-label="info on gacha" />
        <Dialog v-model:visible="dialogVisible" modal header="Gacha Rates" :style="{ width: '50rem' }">
            <p>Standard Pity: You are guaranteed to get at least one 5* Teacher within 90 pulls and at least one 4* Teacher every 10 pulls.</p>
            <br>
            <p>4★ Teacher drop rate : 10%</p>
            <p>5★ Teacher drop rate : 1%</p>
            <br>
            <p>Soft Pity: Once you reach 80 pulls, your drop rates for a 5* Teacher will be increased by 10% every increment.</p>
        </Dialog>
    </div>
    <Dialog v-model:visible="cannotPull" modal header="Gacha Rates" :style="{ width: '50vw', backgroundColor: 'red'}">
        <template #container="{closeCallback}">
        <div class="flex flex-column px-5 py-5 gap-4" style="background-color: rgb(70, 0, 0);">   
        <p>You do not have enough Golden Seagulls to pull. </p>
        <RouterLink to="/currency">
            <Button label="Get more Golden Seagulls" severity="secondary" icon="pi pi-plus"/>
        </RouterLink>
        <Button label="close" @click="closeCallback" severity="danger"/>
    </div>
</template>
    </Dialog>
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
<Dialog v-model:visible="pullvisible" style="width: 100vw; height: 100vh;" modal
    :pt="{
        mask: {
            style: 'backdrop-filter: blur(2px);padding: 2rem;'
        }
    }">
    <template #container="{ closeCallback }">
        <div style="padding: 2rem; align-items: center; height: 100%;" :class="winlose">
            <Button type="button" label="Close" icon="pi pi-times" severity="danger" @click="()=>{closeCallback(); winlose='lose'}"/>
    <Carousel :value="currentpulls" :numVisible="1" :numScroll="1">
            <template #item="slotProps">
                    <p>{{ slotProps.data.text }}</p>
                    <Card :class="slotProps.data.subject" class="border-1 surface-border border-round m-2  p-3" style="height: 30vh;">
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
    </div>
  </template>
    </Dialog>
    </div>
    <!-- <Button icon="pi pi-info-circle" @click="dialogVisible2 = true" />
        <Dialog v-model:visible="dialogVisible" modal header="Gacha Rates" :style="{ width: '50rem' }">
            <p>pull history</p>
            
        </Dialog> -->
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import { ref } from "vue";
import type { Ref } from 'vue'
// @ts-ignore
import { useUserStore } from "@/db/pinia/stores/userStore"
import { pools } from '../teachers/teacherPools.ts';
import { poolInfo } from '../teachers/teacherPools.ts';
import Dialog from 'primevue/dialog';
import Carousel from 'primevue/carousel';
// @ts-ignore
import Teacher from '../teachers/Teacher'
// @ts-ignore
import insertGacha from '../../db/gacha/insertGacha'
// @ts-ignore
import increaseCurrency from '../../db/currency/increaseCurrency'
// @ts-ignore
import getCurrency from '../../db/currency/getCurrency'

import type { Cards, CurrencyObj } from '@/lib/interfaces.ts';
console.log(pools)

//<img :src="loadBanner(pools[slotProps.data.index])">
//<img :src="slotProps.data.image">

/* /* function loadBanner(pool:{
    subject: string,
    star: number,
    name: string,
    role: string,
    image: string,
}[]) { 
    let img = pool.filter((teacher) => teacher.star === 5)
    //let fivestar = pool.filter((teacher) => teacher.star === 5);
    //console.log(fivestar)
    // let main = pool.filter((teacher) => teacher.star === 5)
    // console.log(main)
} */
const userStore = useUserStore();
const dialogVisible = ref(false); //differentiates the visibilies of the dialog components 
// const dialogVisible2 = ref(false);  //differentiates the visibilies of the sidebar and dialog components 
let pullvisible = ref(false)
const cannotPull = ref(false)
const currentpulls: Ref<Cards[]> = ref([]);
const pullHist = ref(0) //history/pity for 4*
userStore.setPity(0, 'add');
// const pullHist2 = userStore.user.pityCount //history for 5*
const rate = ref(0.01) //when the pullhist2 reaches 80 this value will slowly increase to give a higehr rate of getting a 5*
//the console logs are placeholders for the cards lmaooooo 
const winlose:Ref<'lose'|'win'|'winwin'> = ref('lose');
const studentCard = {subject: 'nothing', 
            star: 3, 
            "stats": {
                "intelligence": 0,
                "knowledge": 0,
                "strength": 0,
                "charisma": 0,
                "dexterity": 0,
                "coolness": 0
            },
            "power": 10,
            name: 'student', 
            role: 'useless', 
            image: 'https://assets-global.website-files.com/646218c67da47160c64a84d5/64faebcc5b9290da561ec21f_93.png'
        };

function pull(pool:Cards[]){
    let fourstar = pool.filter((teacher) => teacher.star === 4);
    let fivestar = pool.filter((teacher) => teacher.star === 5);
    let obtained:Cards;
    if(pool.length === 1){ // accomodate for whalen only pool
        if(Math.random() < 0.009){ // up rate for whalen
            obtained = pool[0];
            rate.value = 0.01
            // pullHist2.value = 0
            userStore.setPity(0, 'clear')
        }else if(userStore.user.pityCount == 89){ // full pity
            obtained = pool[0];
            rate.value = 0.01
            // pullHist2.value = 0
            userStore.setPity(0, 'clear')
        } else {
            // pullHist.value++
            userStore.setPity(1, 'add')
        obtained = studentCard;
        // pullHist2.value++
        userStore.setPity(1, 'add')
        }
    }
    else{
    if( Math.random() < 0.1 && Math.random() > 0.02) {
    obtained = fourstar[Math.floor(Math.random() * fourstar.length)];
    pullHist.value = 0 //random chance of getting 4* every pull and resets pity if you get it 
    // pullHist2.value++ 
    userStore.setPity(1, 'add')
    } else if (pullHist.value == 9 ) {
        obtained = fourstar[Math.floor(Math.random() * fourstar.length)];
        pullHist.value = 0
        // pullHist2.value++ //if you already did 9 pulls, your next pull must be a 4* and resets pity  
        userStore.setPity(1, 'add')
    } else {
        pullHist.value++
        obtained = studentCard;
        // pullHist2.value++ //you got nothing and it increments :skull:
        userStore.setPity(1, 'add')
    };
    if( Math.random() < rate.value) {
        obtained = fivestar[Math.floor(Math.random() * fivestar.length)];
        // pullHist2.value = 0 //resets pity counter 
        userStore.setPity(0, 'clear')
        rate.value = 0.01
    }
    if (userStore.user.pityCount > 80) {
        rate.value = rate.value + 0.1
    }else if (userStore.user.pityCount == 89) {
        obtained = fivestar[Math.floor(Math.random() * fivestar.length)];
        rate.value = 0.01
        // pullHist2.value = 0 //you must get a chara every 90 pulls resets pity 
        userStore.setPity(0, 'clear')
    }
}
    return obtained
}

async function onePull(pool:Cards[]) {
    currentpulls.value = []
    const userCurrency = await getCurrency()
    if (userCurrency.golden_seagulls < 10) {
        cannotPull.value = true;
        return
    }
    increaseCurrency({ golden_seagulls: -10 })
    getCurrency().then(function(item:CurrencyObj){
    userStore.setCurrency(item.golden_seagulls)
  });

    const obtained = pull(pool)
    currentpulls.value = [obtained];
    pullvisible.value = true;
    if(obtained.star > 3) {
        const teacher = new Teacher(obtained.name, obtained.subject, obtained.image, obtained.star)
        insertGacha(teacher)
        if(obtained.star === 4){
        winlose.value = 'win';
        }else{
            winlose.value = 'winwin';
        }
    }else{
            insertGacha(studentCard)
        }
    return obtained;
};
async function tenPull(pool:Cards[]) {
    let winlosses:string[] = []; // track if there was a win
    currentpulls.value = []

    const userCurrency = await getCurrency()
    if (userCurrency.golden_seagulls < 100) {
        cannotPull.value = true;
        return
    }
    increaseCurrency({ golden_seagulls: -100 })
    getCurrency().then(function(item:CurrencyObj){
    userStore.setCurrency(item.golden_seagulls)
  });
    // currentpulls.value = []

    let arr:Cards[] = [];
    let i = 0
    while( i < 10 ) {
        i++

    currentpulls.value = arr;
        const obtained = pull(pool)
        currentpulls.value.push(obtained)
        if(obtained.star > 3) {
            const teacher = new Teacher(obtained.name, obtained.subject, obtained.image, obtained.star)
            insertGacha(teacher)
            if(obtained.star === 4){
                winlosses.push('win');
            }else{
                winlosses.push('winwin');;
        }
        }else{
            insertGacha(studentCard)
        }
    }
    pullvisible.value = true;
    if(winlosses.includes('winwin') === true){
        winlose.value = 'winwin';
    }else if(winlosses.length > 0){
        winlose.value = 'win';
    }
};

const PhotoService = {
        getData() {
            return poolInfo;
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    
    PhotoService.getImages().then((data) => (images.value = data));

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
    margin-top: 200px;
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
.winwin{
    background-color: rgb(224, 193, 101);
}
.win{
    background-color: rgb(154, 58, 213);
}
.lose{
    background-color: #181818;
}
</style>