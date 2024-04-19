<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// @ts-ignore
import isSignedIn from '../db/auth/isSignedIn'
// @ts-ignore
import ifNotSignedInGoToPage from './lib/ifNotSignedInGoToPage'
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import checkIfHasCurrency from '../db/currency/checkIfHasCurrency'

checkIfHasCurrency({ golden_seagulls: 0 })

const route = useRoute()
// @ts-ignore
isSignedIn().then((signedIn) => {
        if(signedIn) {
            loggedin.value = true;
        }
    })
watch(route, ifNotSignedInGoToPage) 
const loggedin = ref(false)
watch(route, () => ifNotSignedInGoToPage(route)) 

// isSignedIn().then((signedIn: Boolean) => console.log(signedIn))
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/login">Log In</RouterLink>
        <RouterLink to="/currency" v-if="loggedin">Get Currency</RouterLink>
        <RouterLink to="/gacha" v-if="loggedin">Gacha Pulls</RouterLink>
      </nav>
  </header>
  <Card id="card">
        <template #content>
          <div style="display: flex;">
            <p>currency</p>
            <RouterLink to="/currency" class="pi pi-plus"> </RouterLink>
          </div>
        </template>
    </Card>
  <RouterView />
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
[class='p-card p-component']{
  position: absolute;
  top: 0;
  right: 0;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

#card {
  width: 20%;
  height: 5%;
  margin-left: 70%;
}
</style>
