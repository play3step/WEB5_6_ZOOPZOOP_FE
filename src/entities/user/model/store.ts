import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from './type'

interface UserStore {
  // store
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  // action
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      setUser: user => set({ user, isLoading: false, isAuthenticated: true }),
      clearUser: () =>
        set({ user: null, isAuthenticated: false, isLoading: false })
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
