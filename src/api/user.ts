import request from '@/utils/request'
import type { accountLoginType, LoginResponseType } from '@/types/user'
export const accountLogin = (data: accountLoginType) => {
  return request<LoginResponseType>({ url: '/api/login/username', method: 'POST', data })
}
