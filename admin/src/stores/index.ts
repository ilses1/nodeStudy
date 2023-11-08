import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserType } from '@/types/user'
export const useStore = defineStore('counter', () => {
  const isGetterRouter = ref(false)
  const isCollapsed = ref(false)
  const userInfo = ref({
  } as UserType)

  const changeGetterRouter = (value: boolean) => {
    isGetterRouter.value = value
  }
  const changeCollapsed = () => {
    isCollapsed.value = !isCollapsed.value
  }
  const changeUserInfo = (value: object) => {
    Object.assign(userInfo.value, value)

  }
  const clearUserInfo = () => {
    userInfo.value = {} as UserType
  }


  return {
    isGetterRouter, isCollapsed, userInfo,
    changeCollapsed,
    changeGetterRouter,
    changeUserInfo,
    clearUserInfo
  }
},
  {
    persist: {
      storage: localStorage,
      paths: ['userInfo'],
    },
  })
