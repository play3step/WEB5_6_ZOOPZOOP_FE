import { httpClient } from '@/shared/lib'
import {
  LogoutResponse,
  UpdateNicknameResponse,
  UserResponse
} from '../model/type'
import { NextFetchOptions } from '@/shared/types'

// 사용자 데이터
export const fetchUser = async (
  options: NextFetchOptions
): Promise<UserResponse> => {
  return httpClient.get<UserResponse>('/api/v1/member/me', options)
}

// 업데이트 닉네임
export const updateUserNickname = async (
  payload: { newName: string },
  options: NextFetchOptions
): Promise<UpdateNicknameResponse> => {
  return httpClient.put<UpdateNicknameResponse>(
    '/api/v1/member/edit',
    payload,
    options
  )
}

// 로그아웃
export const deleteCookieApi = async (
  options: NextFetchOptions
): Promise<LogoutResponse> => {
  return httpClient.get('/api/v1/auth/logout', options)
}
