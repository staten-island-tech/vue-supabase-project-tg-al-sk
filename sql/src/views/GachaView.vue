<template>
    <div>
<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" header="Available Cards">
        <Card v-for="teacher in teachers">
    <template #title>{{ teacher.name }}</template>
    <template #content>
        <p class="m-0">
            {{ teacher.role }}
        </p>
        <img :src="teacher.image" :alt="teacher.name" style="width: 10vw; height: auto;">
    </template>
</Card>
    </Sidebar>
    <Button icon="pi pi-bars" @click="visible = true" />
</div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" class="card flex justify-content-center">
            <template #item="slotProps" class="a">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%"/>
                <Fieldset :legend="slotProps.item.alt">
                    <p>{{ slotProps.item.itemImageSrc }}</p>
                </Fieldset>
                
                <div>
                    <button>x1 Pull</button>
                    <button>x10 Pull</button>
                </div>
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup lang="ts">
import Galleria from 'primevue/galleria';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Card from 'primevue/card';
import { ref, onMounted } from "vue";
import {teachers} from '../stores/teachers.ts';
const PhotoService = {
        getData() {
            return [
                {
                    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
                    alt: 'Description for Image 1',
                    title: 'Title 1'
                },
                {
                    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg',
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
                    alt: 'Description for Image 2',
                    title: 'Title 2'
                }
            ];
        },

        getImages() {
            return Promise.resolve(this.getData());
        }
    };

    
onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
const visible = ref(false);
</script>

<style scoped>
.b {
    display: float;
    position: relative;
    margin-bottom: 90%
}

</style>