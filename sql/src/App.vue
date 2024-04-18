<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// @ts-ignore
import isSignedIn from '../db/auth/isSignedIn'
// @ts-ignore
import ifNotSignedInGoToPage from './lib/ifNotSignedInGoToPage'
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import TeachersSidebar from './components/TeachersSidebar.vue'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';
// import { useCounterStore } from './stores/counter';

const route = useRoute()
// @ts-ignore
isSignedIn().then((signedIn) => {
        if(signedIn) {
            loggedin.value = true;
        }
    })
const loggedin = ref(false)
watch(route, () => ifNotSignedInGoToPage(route)) 
const sidebarVisible = ref(false);
// isSignedIn().then((signedIn: Boolean) => console.log(signedIn))
</script>

<template>
  <!--<header>
      <nav>
        <RouterLink to="/login">Log In</RouterLink>
        <RouterLink to="/currency" v-if="loggedin">Get Currency</RouterLink>
        <RouterLink to="/gacha" v-if="loggedin">Gacha Pulls</RouterLink>
      </nav>
  </header>-->
  <div class="currency" v-if="loggedin">
  <IconField>
    <InputText disabled placeholder="currency" style="width: 15vw;"/>
    <RouterLink to="/currency" class="pi pi-plus"> </RouterLink>
</IconField>
</div>
  <RouterView />
  <div style="width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;">

  <nav style=" width: fit-content; position: fixed; bottom: 0;"><Toolbar v-if="loggedin">
    <template #center>
      <div style="display: flex;">
        <RouterLink to="/login">
        <Button icon="pi pi-user-edit" severity="secondary" rounded/>
      </RouterLink>
      <RouterLink to="">
        <Button icon="pi pi-th-large" severity="secondary" rounded @click="sidebarVisible = true"/>
      </RouterLink>
        <RouterLink to="/currency">
        <Button icon="pi pi-dollar" severity="secondary" rounded/>
      </RouterLink>
        <RouterLink to="/gacha" >
          <Button icon="pi pi-money-bill" severity="secondary" rounded/>
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
}
</style>
