import type { AccountFormType } from '@/views/Login/types/login-type'
import utils from '@/utils/utils'

export function useHandleSaveUserOrPass(ruleForm: AccountFormType) {
  const useSaveLocalUserOrPass = () => {
    // 1. 点击登录按钮,判断是否保存用户名,如果保存用户名,则将用户名和保存的状态存储到本地
    if (ruleForm.saveUserName) {
      utils.saveData('username', ruleForm.username)
      utils.saveData('saveUserName', ruleForm.saveUserName)
    } else {
      utils.removeData('username')
      utils.removeData('saveUserName')
    }

    // 如果勾选了记住密码
    if (ruleForm.saveUserPass) {
      utils.saveData('password', ruleForm.password)
      utils.saveData('saveUserPass', ruleForm.saveUserPass)
    } else {
      utils.removeData('password')
      utils.removeData('saveUserPass')
    }
  }
  const useGetLocalUserOrPass = () => {
    const username = utils.getData('username')
    const password = utils.getData('password')
    if (username) {
      ruleForm.username = username
    }
    if (password) {
      ruleForm.password = password
    }
  }
  return { useSaveLocalUserOrPass, useGetLocalUserOrPass }
}
