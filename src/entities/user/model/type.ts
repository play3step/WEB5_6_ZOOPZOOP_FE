import { APIResponse } from '@/shared/types'

export interface User {
  name: string
  email: string
  profileUrl: string
}

// 사용자 정보 response
export type UserResponse = APIResponse<User>

export interface Nickname {
  name: string
}

// 사용자 닉네임 변경
export type UpdateNicknameResponse = APIResponse<Nickname>

//로그아웃
export type LogoutResponse = APIResponse<null>
