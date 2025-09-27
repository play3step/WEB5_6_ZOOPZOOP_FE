'use client'

import { ModalLayout } from '@/shared/ui'
import { useDeleteAccount } from '../model/useDeleteAccount'

export const DeleteAccountModal = () => {
  const {
    confirmText,
    isLoading,
    isDeleteEnabled,
    onDelete,
    onClose,
    setConfirmText
  } = useDeleteAccount()

  return (
    <ModalLayout>
      <div className="relative bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          계정을 삭제하시겠습니까?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          모든 데이터가 영구적으로 삭제되며 복구할 수 없습니다.
        </p>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">
            <span className="font-medium text-red-600">
              &quot;계정 영구 삭제&quot;
            </span>
            를 입력하세요
          </label>
          <input
            type="text"
            value={confirmText}
            onChange={e => setConfirmText(e.target.value)}
            disabled={isLoading}
            placeholder="삭제"
            className="w-full px-3 py-2 border rounded-md focus-visible:border-red-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            type="button"
            className="flex-1 py-2 text-gray-700 border rounded-md hover:bg-gray-50 cursor-pointer">
            취소
          </button>
          <button
            onClick={onDelete}
            disabled={!isDeleteEnabled || isLoading}
            type="button"
            className="flex-1 py-2 text-white bg-red-600 rounded-md disabled-hover:bg-red-700 disabled:opacity-50 cursor-pointer">
            {isLoading ? '삭제 중...' : '삭제'}
          </button>
        </div>
      </div>
    </ModalLayout>
  )
}
