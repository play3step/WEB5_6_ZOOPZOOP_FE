import { httpClient } from '@/shared/lib'
import { NextFetchOptions } from '@/shared/types'
import { UpdateNicknameResponse, UserResponse } from '../model/type'

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
