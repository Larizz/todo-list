import './assets/main.css'
import './assets/fonts.css'
import '@quasar/extras'
import { MotionPlugin } from '@vueuse/motion'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'quasar/src/css/index.sass'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

const pinia = createPinia()
const app = createApp(App)

// O create Pinia não deve ser apenas chamado, mas sim executado, pois ele é uma função

app.use(Quasar, { plugins: {} })

app.use(router)
app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
