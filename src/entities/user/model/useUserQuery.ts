import { useQuery } from '@tanstack/react-query'

import { User } from '../model/type'
import { getUser } from '../api/user.service'

interface UserQuery {
  enabled?: boolean
}

export const useUserQuery = ({ enabled = true }: UserQuery) => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    enabled
  })
}
