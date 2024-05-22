<template>

</template>

<script setup lang="ts">
import { useUserStore } from '@/db/pinia/stores/userStore'
const userStore = useUserStore()
console.log(userStore.getUser)

</script>

<style scoped>

</style>