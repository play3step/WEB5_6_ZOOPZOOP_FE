import { NextResponse } from 'next/server'

import { fetchUser } from '@/entities/user'
import { createCookieHeader, getAccessToken } from '@/shared/lib/api-route'

// 사용자 정보 조회
export async function GET() {
  const token = await getAccessToken()

  if (!token) throw Error('토큰 없음')

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
