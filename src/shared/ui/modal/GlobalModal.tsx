'use client'

import { useModalStore } from '@/shared/lib'
import { useShallow } from 'zustand/shallow'
import { UrlUploadModal } from './archive/url-upload/UrlUploadModal'
import { ArchiveSelectModal } from './archive/archive-select/ArchiveSelectModal'
import { AlarmModal } from './alarm/AlarmModal'
import { CreateSpaceModal } from './create-space/CreateSpaceModal'
import { CreateFolderModal } from './create-folder/CreateFolderModal'
import { DeleteAccountModal } from '@/features/auth/ui/DeleteAccountModal'

export const GlobalModal = () => {
  const [type, isOpen] = useModalStore(useShallow(s => [s.type, s.isOpen]))

  if (!isOpen) return null

  switch (type) {
    case 'url-upload':
      return <UrlUploadModal />
    case 'archive-select':
      return <ArchiveSelectModal />
    case 'alarm':
      return <AlarmModal />
    case 'create-space':
      return <CreateSpaceModal />
    case 'create-folder':
      return <CreateFolderModal />
    case 'delete-account':
      return <DeleteAccountModal />
    default:
      return null
  }
}
