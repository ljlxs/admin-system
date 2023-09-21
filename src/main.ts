import { createApp } from 'vue'
import './styles/default.css'

import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { globalRegister } from './global'
// 引入mockjs
import './mock'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(globalRegister)

app.mount('#app')
