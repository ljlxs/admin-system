// 获取短信验证码倒计时
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { RuleForm } from '../types/login-type'
import utils from '@/utils/utils'
export function useGetPhoneCode(ruleForm: RuleForm) {
  // 获取验证码
  const currentTime: Ref<number> = ref<number>(0)
  let timer: number
  const PictureText: Ref<string> = ref<string>('获取验证码')
  const getPicture = (): void => {
    if (ruleForm.userCellPhone == '') return utils.showError('请输入用户名')
    currentTime.value = 60
    timer = setInterval((): void => {
      currentTime.value--
      PictureText.value = `${currentTime.value}秒后获取`
      if (currentTime.value <= 0) {
        clearInterval(timer)
        PictureText.value = `获取验证码`
        currentTime.value = 0
      }
    }, 1000)
  }
  return { PictureText, currentTime, getPicture }
}
// 手机号记住用户
export function useHandleSaveUser(ruleForm: RuleForm) {
  const getLocalUser = () => {
    const userCellPhone = utils.getData('userCellPhone')
    if (userCellPhone) {
      ruleForm.userCellPhone = userCellPhone
    }
  }
  return { getLocalUser }
}
