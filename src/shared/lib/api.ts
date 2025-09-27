import { cookies } from 'next/headers'

// 쿠키 추출
export const getAccessToken = async () => {
  return (await cookies()).get('accessToken')?.value
}

// 쿠키가 포함된 헤더
export const createCookieHeader = (accessToken: string) => ({
  Cookie: `accessToken=${accessToken}`
})
