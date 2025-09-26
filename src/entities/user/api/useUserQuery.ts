import { useQuery } from '@tanstack/react-query'
import { useUserStore } from '../model/store'
import { User } from '../model/type'

interface UserQuery {
  enabled?: boolean
}

export const useUserQuery = ({ enabled = true }: UserQuery) => {
  const setUser = useUserStore(state => state.setUser)

  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('/api/auth/user')

      const { data: user, status } = await res.json()

      if (status !== '200' || !user)
        throw new Error('사용자 정보를 가져올 수 없습니다.')

      setUser(user)
      return user
    },
    refetchOnWindowFocus: false,
    enabled
  })
}
