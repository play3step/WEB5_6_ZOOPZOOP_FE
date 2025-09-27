import { useUserStore } from '@/entities/user'
import { deleteCookie } from '@/entities/user'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useLogout = () => {
  const router = useRouter()
  const clearUser = useUserStore(state => state.clearUser)
  const [isLoading, setIsLoading] = useState(false)

  const logout = async () => {
    setIsLoading(true)
    try {
      clearUser()

      await deleteCookie()
    } catch (error) {
      if (Error.isError(error)) {
        // eslint-disable-next-line no-console
        console.error('쿠키 삭제 실패', error.message)
      }
    } finally {
      setIsLoading(false)
      router.push('/auth/login')
    }
  }

  return { logout, isLoading }
}
