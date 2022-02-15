import { createApp } from 'vue'

import router from './router'
import store from './store'
import App from './App.vue'

import './assets/css/index.css'


const app = createApp(App)

app.config.globalProperties.$assets = '/src/assets';
app.use(router)
app.use(store)
app.mount('#app')
