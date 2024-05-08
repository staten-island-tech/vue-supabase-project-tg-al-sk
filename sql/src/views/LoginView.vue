<template>
  <Dialog v-model:visible="loginsuccess" modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }">
    <template #container>
      <div class="flex flex-column px-5 py-5 gap-4">
    <p>Successfully logged in. </p>
    <Button type="button" label="Got it!" @click="refreshPage(true)" />
  </div>
  </template>
  </Dialog>
  <Dialog v-model:visible="loginfail">
    <p>Failed to login. Try typing your email or password again. </p>
  </Dialog>
  <Dialog v-model:visible="createaccsuccess">
    <p>Account successfully created. Please go back to log in. </p>
  </Dialog>
  <TabView>
    <TabPanel header="Login">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6" style="min-width: 100%;">
    <div class="text-center mb-5">
        <img src="https://blocks.primevue.org/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Log In</div>
    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-3" v-model="email" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password1" type="password" placeholder="Password" class="w-full mb-3" v-model="password" />
        <Button label="Sign In" icon="pi pi-user" class="w-full" @click.prevent="login(email, password)"></Button>
    </div>
</div>
</div>
  
</TabPanel>
  <TabPanel header="Sign Up">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6" style="min-width: 100%;">
    <div class="text-center mb-5">
        <img src="https://blocks.primevue.org/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Sign Up</div>
    <div>
      <label for="username" class="block font-medium mb-2">Username</label>
        <InputText id="username" type="text" placeholder="Username" class="w-full mb-3" v-model="username" />
        <label for="email2" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email2" type="text" placeholder="Email address" class="w-full mb-3" v-model="email" />
        <label for="password2" class="block text-900 font-medium mb-2">Password</label>
        <InputText id="password2" type="password" placeholder="Password" class="w-full mb-3" v-model="password" />
        <Button label="Sign In" icon="pi pi-user" class="w-full" @click.prevent="signUp(username, email, password)"></Button>
    </div>
</div>
</div>
  </TabPanel>
</TabView>
  

</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
// @ts-ignore
import signInUser from '@/db/auth/signInUser'
// @ts-ignore
// import getCurrentUser from '@/db/getCurrentUser' // for testing
// @ts-ignore
import signUpUser from '@/db/auth/signUpUser'
// @ts-ignore
import checkIfHasCurrency from '@/db/currency/checkIfHasCurrency'
// @ts-ignore
import refreshPage from '../lib/refreshPage'

const loginsuccess = ref(false);
const loginfail = ref(false);
const createaccsuccess = ref(false);

const username = ref('')
const email = ref('')
const password = ref('')

function signUp(username: String, email: String, password: String) {
  signUpUser(username, email, password)
  createaccsuccess.value = true;
}

function login(email: String, password: String) {
  // @ts-ignore
  signInUser(email, password).then((signedIn) => {
        if(signedIn === true){
          loginfail.value = false;
          loginsuccess.value = true;
        }else if (signedIn === false){
          loginfail.value = true;
          loginsuccess.value = false;
        }
        console.log(signedIn, 'testing')
    })
}

</script>

<style scoped>

</style>