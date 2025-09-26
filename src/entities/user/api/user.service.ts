import { User, UserResponse } from '../model/type'

/**
 * 사용자 정보 fetch
 */
export const getUser = async (): Promise<User> => {
  const response = await fetch('/api/auth/user')
  const { data: user, status } = (await response.json()) as UserResponse

  if (status !== '200' || !user)
    throw new Error('사용자 정보를 가져올 수 없습니다.')

  return user
}
