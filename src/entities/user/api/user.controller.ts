import { httpClient } from '@/shared/lib'
import { UserResponse } from '../model/type'

export const fetchUser = async (
  options: RequestInit
): Promise<UserResponse> => {
  return httpClient.get<UserResponse>('/api/v1/member/me', options)
}
