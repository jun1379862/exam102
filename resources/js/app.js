require('./bootstrap');

import { createApp } from 'vue'
import PageOne from './components/PageOne.vue'

const app = createApp({})

app.component('pageone', PageOne)

app.mount('#app')