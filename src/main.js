import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap"
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia()).use(router)
app.mount('#app')
