<template>
    <div class="card flex justify-content-center">
        <FloatLabel>
            <InputText id="username" v-model="value" />
            <label for="filter">Filter</label>
        </FloatLabel>
    </div>
        <Card v-for="staff in staffs" :class="staff.subject" v-bind:key="staff.name" style="margin-top: 5%;">
    <template #title>{{ staff.name }}</template>
    <template #content>
        <div style="display:flex;">
        <img :src="staff.image" :alt="staff.name" style="width: 10vw; height: 10vw;">
        <p style="font-size: 12px;">
            {{ staff.role }}
        </p>
    </div>
    <div style="display: flex;">
            <p v-for="index in staff.star" :key="index">★</p>
        </div>
    </template>
</Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from 'primevue/card';
import {teachers} from '../teachers/teachers.ts';

import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

let staffs = ref()

staffs.value = teachers

const value = ref('');

watch(value, async() => {
    staffs.value = teachers.filter((teacher) => (teacher.name).toLowerCase().includes(value.value.toLowerCase()))
})

</script>

<style scoped>

</style>