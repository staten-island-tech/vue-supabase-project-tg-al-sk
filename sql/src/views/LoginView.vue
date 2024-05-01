<template>
  <Dialog v-model:visible="loginsuccess" modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }">
    <template #container>
      <div class="inline-flex flex-column gap-2" style="border-radius: 12px; padding: 0 0 0 0;">
    <p>Successfully logged in. </p>
    <RouterLink to="/">
    <Button type="button" label="Got it!"  />
  </RouterLink>
  </div>
  </template>
  </Dialog>
  <Dialog v-model:visible="loginfail">
    <p>Failed to login. Try typing your email or password again. </p>
  </Dialog>
  <Dialog v-model:visible="createaccsuccess">
    <p>Account successfully created. Please go back to log in. </p>
  </Dialog>
  <Dialog v-model:visible="signedout" modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }">
    <template #container>
      <div class="inline-flex flex-column gap-2" style="border-radius: 12px; padding: 0 0 0 0;">
    <p>Signed out. </p>
    <Button type="button" label="Got it!"  @click="refreshPage()"/>
  </div>
  </template></Dialog>
  <Button label="Sign Out" icon="pi pi-sign-out" @click.prevent="logout()"/>
  <Button label="Get Current User" @click.prevent="getCurrentUser()"/>
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
import { RouterLink } from 'vue-router'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

// @ts-ignore
import signInUser from '@/db/auth/signInUser'
// @ts-ignore
import signOutUser from '@/db/auth/signOutUser'
// @ts-ignore
import getCurrentUser from '@/db/getCurrentUser'
// @ts-ignore
import signUpUser from '@/db/auth/signUpUser'
import checkIfHasCurrency from '@/db/currency/checkIfHasCurrency'

const loginsuccess = ref(false);
const loginfail = ref(false);
const createaccsuccess = ref(false);
const signedout = ref(false);

const username = ref('')
const email = ref('')
const password = ref('')
function signUp(username: String, email: String, password: String) {
  signUpUser(username, email, password)
  createaccsuccess.value = true;
}

function login(email: String, password: String) {
  signInUser(email, password)
  loginsuccess.value = true;
}
function logout() {
  signOutUser()
  signedout.value = true;
}
function refreshPage(){
  location.reload();
}
</script>

<style scoped>

</style>