<template>

</template>

<script setup lang="ts">
import getCurrentUser from '@/db/getCurrentUser'
import getUserByID from '@/db/getUserByID'

const userAuth = await getCurrentUser()
// console.log(userAuth.id)

const user = getUserByID(userAuth.id)
console.log(JSON.parse(JSON.stringify(user)))
</script>

<style scoped>

</style>