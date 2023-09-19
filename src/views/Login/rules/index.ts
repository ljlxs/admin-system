import { reactive } from 'vue'
import type { RuleForm } from '../types/login-type'
// 手机校验规则
export const phoneCodeFormRules = reactive<RuleForm>({
  userCellPhone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  smscode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
// 账号密码登录
export const accountFormRules = reactive<RuleForm>({
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  imgcode: [{ required: true, message: '请输入图片验证码', trigger: 'blur' }]
})
