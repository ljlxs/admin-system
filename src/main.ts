import { createApp } from 'vue'
import './styles/default.css'

import App from './App.vue'
import router from './router'

import { globalRegister } from './global'
// 引入mockjs
import './mock'
// 页面权限
import './permission'

const app = createApp(App)
app.use(router)
app.use(globalRegister)

app.mount('#app')
