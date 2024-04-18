<template>
        <Card v-for="teacher in teachers" :class="teacher.subject" v-bind:key="teacher.name">
    <template #title>{{ teacher.name }}</template>
    <template #content>
        <div style="display:flex;">
        <img :src="teacher.image" :alt="teacher.name" style="width: 10vw; height: 10vw;">
        <p style="font-size: 12px;">
            {{ teacher.role }}
        </p>
    </div>
    <div style="display: flex;">
            <p v-for="index in teacher.star" :key="index">★</p>
        </div>
    </template>
</Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import {teachers} from '../teachers/teachers.ts';
</script>

<style scoped>

</style>