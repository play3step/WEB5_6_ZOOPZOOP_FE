import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { logoutUser } from './clientApi'

export const useLogoutMutation = (options: UseMutationOptions) => {
  return useMutation({
    mutationFn: logoutUser,
    ...options
  })
}
