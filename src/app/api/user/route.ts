import { NextResponse } from 'next/server'

import { fetchUser } from '@/entities/user'
import { createCookieHeader, getAccessToken } from '@/shared/lib/api-route'

// 사용자 정보 조회
export async function GET() {
  const token = await getAccessToken()

  // TODO: 지금은 일단 에러 던져서 표시 x
  if (!token) {
    return NextResponse.json({
      status: 401,
      data: null,
      msg: '인증 토큰이 없습니다'
    })
  }

  const { status, data, msg } = await fetchUser({
    headers: createCookieHeader(token)
  })

  if (status !== '200' || !data) {
    return NextResponse.json({
      status: 500,
      data: null,
      msg: 'api 통신 실패'
    })
  }

  return NextResponse.json({
    status,
    data,
    msg
  })
}
