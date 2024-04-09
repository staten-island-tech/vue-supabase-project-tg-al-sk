<template>
  <!-- <TabView> -->
  <form>
    <!-- <TabPanel header="login"> -->
    <FloatLabel>
      <InputText id="emaillogin" v-model="email" />
      <label for="emaillogin">Email</label>
    </FloatLabel>
    <FloatLabel>
      <Password id="passwordlogin" v-model="password" toggleMask />
      <label for="passwordlogin">password</label>
    </FloatLabel>
    <!-- </TabPanel> -->
    <Button @click.prevent="login(email, password)">Submit</Button>
  </form>
  <Button @click.prevent="logout()">Sign Out</Button>
  <Button @click.prevent="getCurrentUser()">Get Current User</Button>
  <!-- <TabPanel header="create account">
    <FloatLabel>
    <InputText id="usernamecreate" v-model="username"/>
    <label for="usernamecreate">Username</label>
    </FloatLabel>
    <FloatLabel>
        <Password id="passwordcreate" v-model="password" toggleMask/>
        <label for="passwordcreate">password</label>
    </FloatLabel>
</TabPanel> -->
  <!-- </TabView> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Password from 'primevue/password'
import Button from 'primevue/button'

// @ts-ignore
import signInUser from '../db/auth/signInUser'
import signOutUser from '../db/auth/signOutUser'
import getCurrentUser from '../db/getCurrentUser'

const email = ref('')
const password = ref('')

function login(email: String, password: String) {
  signInUser(email, password)
}
function logout() {
  signOutUser()
}
</script>

<style scoped>
</style>