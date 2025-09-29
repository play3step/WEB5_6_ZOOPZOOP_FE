import { httpClient } from '@/shared/lib'
import { DeleteAccountResponse, LogoutResponse } from '@/shared/types'

/**
 * 계정 삭제
 */
export const deleteAccount = async (): Promise<void> => {
  const response = await httpClient.delete<DeleteAccountResponse>('/api/auth')
  const { status } = response

  if (status !== '200') {
    throw new Error('계정 삭제 실패')
  }
}

/**
 * 로그아웃
 */
export const logoutUser = async (): Promise<void> => {
  const response = await httpClient.get<LogoutResponse>('/api/auth')

  const { status } = response

  if (status !== '200') {
    throw new Error('로그아웃 실패')
  }
}
