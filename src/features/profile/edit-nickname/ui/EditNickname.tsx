'use client'

import { useRef } from 'react'
import useUpdateNickname from '../model/useEditNickname'

interface Props {
  nickname: string
}

const EditNickname = ({ nickname }: Props) => {
  const nicknameRef = useRef<HTMLInputElement>(null)
  const { mutate: updateNickname, isPending } = useUpdateNickname()

  const handleEditNickname = () => {
    if (!nicknameRef.current) return
    const nickname = nicknameRef.current.value.trim()

    updateNickname(nickname)
  }

  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor="nickname">
        닉네임
      </label>
      <div className="flex gap-3">
        <input
          ref={nicknameRef}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-orange-accent"
          id="nickname"
          placeholder="닉네임을 입력하세요"
          defaultValue={nickname}
        />
        <button
          className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          type="button"
          onClick={handleEditNickname}
          disabled={isPending}>
          변경
        </button>
      </div>
    </div>
  )
}
export default EditNickname
