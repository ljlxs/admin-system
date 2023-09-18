// 引入element-plus全局注册
import registerElementPlus from './register-element-plus'
import registerIcon from './register-icon'
import type { App } from 'vue'
export const globalRegister = {
  install(app: App) {
    app.use(registerElementPlus)
    app.use(registerIcon)
  }
}
