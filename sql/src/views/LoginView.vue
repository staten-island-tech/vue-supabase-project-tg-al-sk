<template>
  <!-- <TabView> -->
  <form @click.prevent="login(username, password)">
    <!-- <TabPanel header="login"> -->
    <FloatLabel>
      <InputText id="usernamelogin" v-model="username" />
      <label for="usernamelogin">Username</label>
    </FloatLabel>
    <FloatLabel>
      <Password id="passwordlogin" v-model="password" toggleMask />
      <label for="passwordlogin">password</label>
    </FloatLabel>
    <!-- </TabPanel> -->
    <Button>Submit</Button>
  </form>
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

const username = ref('')
const password = ref('')

function login(username: String, password: String) {
  signInUser(username, password)
}
</script>

<style scoped>
</style>