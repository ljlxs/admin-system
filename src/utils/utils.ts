import { ElMessage, ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

const utils = {
  loadingInstance: null as LoadingInstance | null,
  // 开启全局loading
  openLoading(msg?: string) {
    // 如果loading没有开启, 则开启loading
    if (!this.loadingInstance) {
      this.loadingInstance = ElLoading.service({
        body: true,
        fullscreen: true,
        background: 'rgba(0, 0, 0, 0.7)',
        text: msg ? msg : '正在处理中……'
      })
    }
  },
  // 关闭全局loading
  closeLoading() {
    // 如果loading已经开启, 才可以关闭loading加载
    if (this.loadingInstance) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  },
  // 存储数据
  saveData(key: string, value: any) {
    localStorage.setItem(key, value)
  },
  // 获取数据
  getData(key: string) {
    const data = localStorage.getItem(key)
    if (data) {
      return data
    } else {
      return null
    }
  },
  // 获取数据
  removeData(key: string) {
    localStorage.removeItem(key)
  },
  //成功信息提示
  showSuccess(message: string) {
    ElMessage({
      message: message,
      type: 'success'
    })
  },
  //错误信息提示
  showError(message: string) {
    ElMessage({
      message: message,
      type: 'error'
    })
  },
  //警告信息提示
  showWarning(message: string) {
    ElMessage({
      message: message,
      type: 'warning'
    })
  }
}
export default utils
