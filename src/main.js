import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import { bootstrap } from 'bootstrap/dist/js/bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.mount('#app')
