import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { deleteAccount } from './clientApi'

export const useDeleteAccountMutation = (options: UseMutationOptions) => {
  return useMutation({
    mutationFn: deleteAccount,
    ...options
  })
}
