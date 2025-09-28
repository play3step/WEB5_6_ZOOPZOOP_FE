import { useQuery } from '@tanstack/react-query'
import { User } from '../type'
import { getUser } from '../../api/clientApi'

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
