'use client'

import { useModalStore } from '@/shared/lib'
import { UserX } from 'lucide-react'

const DeleteAccountButton = () => {
  const openModal = useModalStore(state => state.openModal)

  const handleOpenModal = () => {
    openModal('delete-account')
  }

  return (
    <button
      className="ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center gap-2 cursor-pointer"
      type="button"
      onClick={handleOpenModal}>
      <UserX size={16} />
      계정 삭제
    </button>
  )
}
export default DeleteAccountButton
