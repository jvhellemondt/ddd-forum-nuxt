import { defineStore } from 'pinia'
import type { User } from '../../types/auth/User'
import type { Maybe } from '../../types/Maybe'

interface userStore {
  userData: Maybe<User>
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
    setUser(user: User) { 
      this.userData = user
    }
  }
})
