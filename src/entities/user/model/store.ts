import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from './type'

interface UserStore {
  // store
  user: User | null
  isAuthenticated: boolean
  // action
  setUser: (user: User) => void
  updateUser: (updates: Partial<User>) => void
  clearUser: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, _, api) => ({
      user: null,
      isAuthenticated: false,
      setUser: user => set({ user, isAuthenticated: true }),
      updateUser: updates =>
        set(state => ({
          user: state.user ? { ...state.user, ...updates } : null
        })),
      clearUser: () => {
        set({ user: null, isAuthenticated: false })
        api.persist.clearStorage()
      }
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
