import { httpClient } from '@/shared/lib'
import {
  User,
  Nickname,
  UserResponse,
  UpdateNicknameResponse
} from '../model/type'
import { APIResponse } from '@/shared/types'

/**
 * 사용자 정보 fetch
 */
export const getUser = async (): Promise<User> => {
  const response = await httpClient.get<UserResponse>('/api/user')
  const { data: user, status } = response

  if (status !== '200' || !user) {
    throw new Error('사용자 정보를 가져올 수 없습니다.')
  }
  return user
}

/**
 * 사용자 닉네임 업데이트
 */
export const updateNickname = async (payload: string): Promise<Nickname> => {
  const response = await httpClient.put<UpdateNicknameResponse>(
    '/api/user/nickname',
    {
      newName: payload
    }
  )
  const { data: updatedNickname, status } = response

  if (status !== '200' || !updatedNickname) {
    throw new Error('닉네임 업데이트 실패')
  }

  return updatedNickname
}

/**
 * 로그아웃
 */
export const deleteCookie = async (): Promise<void> => {
  const response = await httpClient.get<APIResponse<null>>('/api/auth')

  const { status } = response

  if (status !== '200') {
    throw new Error('로그아웃 실패')
  }
}
