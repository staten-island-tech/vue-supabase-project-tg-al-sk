<template>
  <!-- <TabView> -->
  <form>
    <!-- <TabPanel header="login"> -->
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

    <!-- </TabPanel> -->
    <Button @click.prevent="signUp(username, email, password)">Submit</Button>
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

import signUpUser from '@/db/auth/signUpUser'

const username = ref('')
const email = ref('')
const password = ref('')

function signUp(username: String, email: String, password: String) {
  signUpUser(username, email, password)
}
</script>
  
  <style scoped>
</style>