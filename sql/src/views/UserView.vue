<template>
  <Dialog v-model:visible="signedout" modal
    :pt="{
        root: 'border-none',
        mask: {
            style: 'backdrop-filter: blur(2px)'
        }
    }">
    <template #container>
      <div class="flex flex-column px-5 py-5 gap-4" style="border-radius: 12px; padding: 0 0 0 0;">
    <p>Signed out. </p>
    <Button type="button" label="Got it!"  @click="refreshPage(false)"/>
  </div>
  </template></Dialog>
  <Button label="Sign Out" icon="pi pi-sign-out" @click.prevent="logout()"/>
  <div class="border-round border-1 surface-border p-4 surface-card">
    <div class="flex mb-3">
        <Skeleton shape="circle" size="4rem" class="mr-2" v-if="useremail === ''"></Skeleton>
      <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" v-if="useremail != ''"/>
        <div>
            <Skeleton width="10rem" class="mb-2" v-if="useremail === ''"></Skeleton>
            <p v-if="useremail != ''">{{ useremail }}</p>
            <Skeleton width="10rem" class="mb-2" v-if="usercreated === ''"></Skeleton>
            <p style="font-size: 0.8rem;" v-if="usercreated != ''">Account created at {{ usercreated }}</p>
            <Skeleton width="10rem" class="mb-2" v-if="usercreated === ''"></Skeleton>
            <p style="font-size: 0.8rem;" v-if="usercreated != ''">Last logged in at {{ userlastlogin }}</p>
        </div>
    </div>
    <Skeleton width="100%" height="150px" v-if="useremail === ''"></Skeleton>
    <div style="width:100%;height:150px;background-color: rgb(40,40,40);" v-if="useremail != ''">
      <p>cards collected:</p>
      <p>golden seagulls:</p>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Skeleton from 'primevue/skeleton'
import Avatar from 'primevue/avatar'
// @ts-ignore
import signOutUser from '@/db/auth/signOutUser'
// @ts-ignore
import getCurrentUser from '@/db/getCurrentUser'
// @ts-ignore
import refreshPage from '../lib/refreshPage'

const signedout = ref(false);

function logout() {
  signOutUser()
  signedout.value = true;
}

const useremail = ref('');
const usercreated = ref('');
const userlastlogin = ref('');
// @ts-ignore
getCurrentUser().then((item) => {
  useremail.value = item.email;
  usercreated.value = item.created_at;
  userlastlogin.value = item.last_sign_in_at;
  console.log(item)
  })
</script>

<style scoped>

</style>