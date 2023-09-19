import { type DefineComponent } from 'vue'
// 定义组件名称和组件类型的映射关系
export type ComponentMap = {
  name: string
  componentName: DefineComponent<{}, {}, any>
}
export interface RuleForm {
  userCellPhone: string
  smscode: string
  imgcode: string
  saveUserName: boolean
}
// 定义账号密码登录的表单数据类型
export type AccountFormType = Pick<RuleForm, 'imgcode'> & {
  password: string
  username: string
  saveUserName?: boolean
  saveUserPass?: boolean
}
