'use client'

import { Loader2, LogOut } from 'lucide-react'
import { useLogout } from '../model/useLogout'

const LogoutButton = () => {
  const { logout, isLoading } = useLogout()
  return (
    <button
      className="ml-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2 cursor-pointer"
      onClick={logout}
      disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2
            size={16}
            className="animate-spin"
          />
          로그아웃 중...
        </>
      ) : (
        <>
          <LogOut size={16} />
          로그아웃
        </>
      )}
    </button>
  )
}
export default LogoutButton
