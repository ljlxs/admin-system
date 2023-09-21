import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import type { App } from 'vue'
export default function (app: App) {
  app.use(createPinia().use(persist))
}
