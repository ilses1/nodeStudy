import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3";
import "./utils/aixos.config"


const pinia = createPinia()
const app = createApp(App)

// app.use(createPinia())

app.
    use(router).
    use(ElementPlus).
    use(Particles).
    use(pinia).
    mount('#app')




