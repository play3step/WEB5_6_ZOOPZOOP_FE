import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useUserStore } from '@/entities/user'
import { useModalStore } from '@/shared/lib'
import { useDeleteAccountMutation } from '../../api/useDeleteAccountMutation'
import { useQueryClient } from '@tanstack/react-query'

export const useDeleteAccount = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const closeModal = useModalStore(state => state.closeModal)
  const clearUser = useUserStore(state => state.clearUser)
  const [confirmText, setConfirmText] = useState('')

  const isDeleteEnabled = confirmText === '계정 영구 삭제'

  const { mutate, isPending } = useDeleteAccountMutation({
    onSuccess: () => {
      clearUser()
      queryClient.invalidateQueries({ queryKey: ['user'] })
      queryClient.removeQueries({ queryKey: ['user'] })
      setTimeout(() => {
        router.push('/auth/login')
        closeModal()
      }, 0)
    },
    onError: () => {
      closeModal()
    }
  })

  return {
    onDelete: () => mutate(),
    onClose: closeModal,
    isLoading: isPending,
    setConfirmText,
    confirmText,
    isDeleteEnabled
  }
}
