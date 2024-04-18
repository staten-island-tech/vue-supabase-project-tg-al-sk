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
    <Button type="button" label="Got it!" @click="refreshPage()" />
  </div>
  </template>
  </Dialog>
  <Dialog v-model:visible="loginfail">
    <p>Failed to login. Try typing your email or password again. </p>
  </Dialog>
  <Dialog v-model:visible="createaccsuccess">
    <p>Account successfully created. Please go back to log in. </p>
  </Dialog>
  <Dialog v-model:visible="signedout">
    <p>You have signed out. </p>
  </Dialog>
  <TabView>
    <TabPanel header="Login">
  <form>
    <FloatLabel>
      <InputText id="emaillogin" v-model="email" />
      <label for="emaillogin">Email</label>
    </FloatLabel>
    <FloatLabel>
      <Password id="passwordlogin" v-model="password" toggleMask :feedback="false"/>
      <label for="passwordlogin">password</label>
    </FloatLabel>
    <Button @click.prevent="login(email, password)">Submit</Button>
  </form>
  <Button @click.prevent="logout()">Sign Out</Button>
  <Button @click.prevent="getCurrentUser()">Get Current User</Button>
</TabPanel>
  <TabPanel header="Sign Up">
    <form>
    <FloatLabel>
      <InputText id="usernamelogin" v-model="username" />
      <label for="usernamelogin">Username</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="emaillogin" v-model="email" />
      <label for="emaillogin">Email</label>
    </FloatLabel>
    <FloatLabel>
      <Password id="passwordlogin" v-model="password" toggleMask />
      <label for="passwordlogin">password</label>
    </FloatLabel>

    <Button @click.prevent="signUp(username, email, password)">Submit</Button>
  </form>
  </TabPanel>
</TabView>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
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