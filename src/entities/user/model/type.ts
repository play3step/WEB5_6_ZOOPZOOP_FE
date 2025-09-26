import { APIResponse } from '@/shared/types'

export interface User {
  name: string
  email: string
  profileUrl: string
}

export type UserResponse = APIResponse<User>
