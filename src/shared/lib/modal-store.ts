import { create } from 'zustand'

type ModalType =
  | 'url-upload'
  | 'archive-select'
  | 'alarm'
  | 'create-space'
  | 'create-folder'
  | 'delete-account'

interface ModalStore {
  type: ModalType | null
  isOpen: boolean
  openModal: (type: ModalType) => void
  closeModal: () => void
}

export const useModalStore = create<ModalStore>(set => ({
  type: null,
  isOpen: false,
  openModal: type => set({ type, isOpen: true }),
  closeModal: () => set({ type: null, isOpen: false })
}))
