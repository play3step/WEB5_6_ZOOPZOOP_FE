import { useState } from 'react'
import { deleteAccount } from './auth.service'
import { useModalStore } from '@/shared/lib'

export const useDeleteAccount = () => {
  const closeModal = useModalStore(state => state.closeModal)
  const [confirmText, setConfirmText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const isDeleteEnabled = confirmText === '계정 영구 삭제'

  const handleDeleteAccount = async () => {
    if (!isDeleteEnabled) return

    setIsDeleting(true)
    try {
      await deleteAccount()
    } catch (error) {
      if (Error.isError(error))
        // eslint-disable-next-line no-console
        console.error('계정 삭제 실패', error.message)
    } finally {
      setIsDeleting(false)
    }
  }

  return {
    onDelete: handleDeleteAccount,
    onClose: closeModal,
    isLoading: isDeleting,
    setConfirmText,
    confirmText,
    isDeleteEnabled
  }
}
