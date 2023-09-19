import { ElMessage } from 'element-plus'

const utils = {
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
