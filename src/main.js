import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import { createPinia } from "pinia"

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Nprogress
import NProgress from 'nprogress'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(createPinia()).use(router).use(vuetify).use(NProgress).mount('#app')
