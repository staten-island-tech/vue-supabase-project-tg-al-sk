import {defineStore} from 'pinia'
import { useLocalStorage} from '@vueuse/core'

export const useUserStore = defineStore('user', {
    state: () => {
      return {
        user: useLocalStorage('user', {})
      };
    },
    getters: {
      getUser: (state) => (state.user)
    },
    actions: {
      setUser(user) {
        this.user.user = user
      },
      setUserData(data) {
        this.user.userData = data
      },
      setSession(session) {
        this.user.session = session
      },
      setCurrency(currency) {
        this.user.currency = currency
      },
      setGacha(gacha) {
        this.user.gacha = gacha
      },
      clearUser() {
        this.user = {}
      }
    },
  }, 
)