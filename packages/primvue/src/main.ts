import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
// @ts-ignore
import wind from '@/presets/wind/';

createApp(App).use(PrimeVue, {
    unstyled: true,
    pt: wind
}).mount('#app')
