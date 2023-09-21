import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LoginResponseType } from '@/types/user'
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<LoginResponseType>()
    const setUser = (user: LoginResponseType) => {
      userInfo.value = user
    }
    const delUser = () => {
      userInfo.value = undefined
    }
    const token = ref<string>()
    const setToken = (tok: string) => {
      token.value = tok
    }
    const delToken = () => {
      token.value = ''
    }

    return { setUser, userInfo, token, setToken, delToken, delUser }
  },
  {
    persist: true
  }
)
