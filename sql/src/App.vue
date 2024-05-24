<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// @ts-ignore
import isSignedIn from '../db/auth/isSignedIn'
// @ts-ignore
import ifNotSignedInGoToPage from './lib/ifNotSignedInGoToPage'
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import TeachersSidebar from './components/TeachersSidebar.vue'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Sidebar from 'primevue/sidebar';
// @ts-ignore
import getCurrentUser from '../db/getCurrentUser'

// @ts-ignore
import checkIfHasCurrency from '../db/currency/checkIfHasCurrency'
// @ts-ignore
import { useUserStore } from '../db/pinia/stores/userStore';
// @ts-ignore
import getCurrency from '../db/currency/getCurrency'
const currentUser = getCurrentUser()
const userStore = useUserStore()
// userStore.setUser(currentUser) 
console.log(userStore.getUser)
checkIfHasCurrency({ golden_seagulls: 0 })
userStore.setPity(0, 'add');
// @ts-ignore
import { pushPiniaValues } from '../db/pinia/pushPiniaValues'

pushPiniaValues()

const route = useRoute()
isSignedIn().then((signedIn:boolean) => {
        if(signedIn) {
            loggedin.value = true;
        }
    })
const loggedin = ref(false)
watch(route, () => ifNotSignedInGoToPage(route)) 
const sidebarVisible = ref(false);
// isSignedIn().then((signedIn: Boolean) => console.log(signedIn))

onMounted(()=>{
  
  getCurrency().then(function(item:{
    last_updated: String, 
    golden_seagulls: Number, 
    id: String, 
    diamond_seagulls: Number
  }){
    userStore.setCurrency(item.golden_seagulls)
  });
});
</script>

<template>
  <RouterView />
  <div class="currency" v-if="loggedin">
<InputGroup>
    <InputText :placeholder="userStore.user.currency" disabled :aria-label="`user has ${ userStore.user.currency } golden seagulls. `"/>
    <InputGroupAddon><RouterLink to="/currency" class="pi pi-plus" aria-label="get more currency"> </RouterLink></InputGroupAddon>
</InputGroup>
</div>
  <div style="width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;">

  <nav style=" width: fit-content; position: fixed; bottom: 0;"><Toolbar v-if="loggedin">
    <template #center>
      <div style="display: flex;">
        <RouterLink to="/user" aria-label="user" >
        <Button aria-label="user" v-tooltip.top="'User'" icon="pi pi-user-edit" severity="secondary" rounded />
      </RouterLink>
      <RouterLink to="" aria-label="view available cards" >
        <Button aria-label="view available cards" v-tooltip.top="'View Available Cards'" icon="pi pi-book" severity="secondary" rounded @click="sidebarVisible = true"/>
      </RouterLink>
        <RouterLink to="/currency" aria-label="currency" >
        <Button aria-label="do math for golden seagulls" v-tooltip.top="'Do math for Golden Seagulls'" icon="pi pi-calculator" severity="secondary" rounded/>
      </RouterLink>
      <RouterLink to="/battle" aria-label="battle" >
          <Button aria-label="battle" v-tooltip.top="'Battle for Golden Seagulls'" icon="pi pi-hammer" severity="secondary" rounded/>
        </RouterLink>
        <RouterLink to="/gacha" aria-label="gacha" >
          <Button aria-label="gacha" v-tooltip.top="'Gacha >:)'" icon="pi pi-money-bill" severity="secondary" rounded/>
        </RouterLink>
        <RouterLink to="/inventory" aria-label="inventory" >
          <Button aria-label="inventory" v-tooltip.top="'Inventory'" icon="pi pi-trophy" severity="secondary" rounded/>
        </RouterLink>
        <RouterLink to="/" aria-label="help" >
          <Button aria-label="help page" v-tooltip.top="'Help'" icon="pi pi-question-circle" severity="secondary" rounded/>
        </RouterLink>
      </div>
    </template>
</Toolbar></nav>
<Sidebar v-model:visible="sidebarVisible" header="Available Cards">
        <TeachersSidebar/>
    </Sidebar>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
/*
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
*/
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
/* 
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}

.currency {
  height: 5%;
  margin-left: 70%;
  position: fixed;
  right: 0;
  top: 10px;
  width: 7rem;
}
</style>
../db/pinia/stores/userStore