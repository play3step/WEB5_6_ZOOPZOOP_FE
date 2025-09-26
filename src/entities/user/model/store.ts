import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from './type'

interface UserStore {
  // store
  user: User | null
  isAuthenticated: boolean
  // action
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      isAuthenticated: false,
      setUser: user => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false })
    }),
    {
      name: 'user-storage',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
)
