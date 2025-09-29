import { updateUserNickname } from '@/entities/user'
import { createCookieHeader, getAccessToken } from '@/shared/lib/api-route'
import { NextResponse } from 'next/server'

export async function PUT(request: Request) {
  const payload = await request.json()
  const token = await getAccessToken()

  if (!token) {
    return NextResponse.json({
      status: 401,
      data: null,
      msg: '인증 토큰이 없습니다'
    })
  }
  const { status, data, msg } = await updateUserNickname(payload, {
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
