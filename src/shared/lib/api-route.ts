import { cookies } from 'next/headers'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

// 엑세스 토큰 추출
export const getAccessToken = async () => {
  return (await cookies()).get(ACCESS_TOKEN)?.value
}

// 리프레시 토큰 추출
export const getRefreshToken = async () => {
  return (await cookies()).get(REFRESH_TOKEN)?.value
}

export const clearToken = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(ACCESS_TOKEN)
  cookieStore.delete(REFRESH_TOKEN)
}

// 쿠키가 포함된 헤더
export const createCookieHeader = (accessToken: string) => ({
  Cookie: `accessToken=${accessToken}`
})
