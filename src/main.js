import { createApp } from 'vue'

import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(Vue3VideoPlayer).mount('#app')
