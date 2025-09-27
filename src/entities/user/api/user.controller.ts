import { httpClient } from '@/shared/lib'
import { UserResponse } from '../model/type'
import { NextFetchOptions } from '@/shared/types'

export const fetchUser = async (
  options: NextFetchOptions
): Promise<UserResponse> => {
  return httpClient.get<UserResponse>('/api/v1/member/me', options)
}
