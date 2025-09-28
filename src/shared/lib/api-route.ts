import { cookies } from 'next/headers'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'
import { NextResponse } from 'next/server'

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

// 네트워크 통신에 쿠키 체크
export const withAuth = <T>(handler: (token: string) => Promise<T>) => {
  return async () => {
    const token = await getAccessToken()
    if (!token) {
      return NextResponse.json({
        status: 401,
        data: null,
        msg: '토큰 없음. 인증 필요'
      })
    }

    try {
      return handler(token)
    } catch (error) {
      if (Error.isError(error))
        // eslint-disable-next-line no-console
        console.error('withAuth Error', error.message)

      return NextResponse.json({
        status: 500,
        data: null,
        msg: '서버 오류 발생'
      })
    }
  }
}
