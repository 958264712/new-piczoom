import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PicZoom from 'vue3-piczoom'

createApp(App).use(PicZoom).mount('#app')
