import { defineStore } from 'pinia'
import type { UserData } from '../../types/auth/User'
import type { Maybe } from '../../types/Maybe'

interface userStore {
  userData: Maybe<UserData>
}

export const useUsers = defineStore("users", {
  state: (): userStore => ({ 
    userData: null
  }),
  getters: {
    user(state) {
      return state.userData
    }
  },
  actions: {
    setUser(user: UserData) { 
      this.userData = user
    }
  }
})
