import { httpClient } from '@/shared/lib'
import { DeleteAccountResponse, NextFetchOptions } from '@/shared/types'
import { LogoutResponse } from '../types/auth'

// 계정 삭제
export const deleteAccountApi = async (
  options: NextFetchOptions
): Promise<DeleteAccountResponse> => {
  return httpClient.delete<DeleteAccountResponse>('/api/v1/member', options)
}

// 로그아웃
export const logoutUserApi = async (
  options: NextFetchOptions
): Promise<LogoutResponse> => {
  return httpClient.get('/api/v1/auth/logout', options)
}
