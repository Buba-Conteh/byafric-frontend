import './assets/main.css'

import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Button from 'primevue/button'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura
    // options: {
    //   prefix: 'p',
    //   darkModeSelector: 'system',
    //   cssLayer: false
    // }
  }
})

app.component('Button', Button)

app.mount('#app')
