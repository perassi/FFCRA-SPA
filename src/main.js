// import { createApp } from 'vue'
import App from './App.vue'
import { createSSRApp } from 'vue'
import { createWebHistory } from 'vue-router'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import './index.css'
import createRouter from './router.js'

const router = createRouter(createWebHistory())

const app = createSSRApp(App)

app.use(router)

app.component('VueDatePicker', VueDatePicker);


router.isReady().then(() => {
  app.mount('#app')
})

