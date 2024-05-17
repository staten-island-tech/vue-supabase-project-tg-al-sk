import './assets/main.css'
import 'primevue/resources/themes/aura-dark-green/theme.css'
import 'primeicons/primeicons.css'
import "primeflex/primeflex.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import App from './App.vue'
import router from './router'

const app = createApp(App)


const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip);
app.mount('#app')
