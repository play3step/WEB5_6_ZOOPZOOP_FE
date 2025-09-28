import { NextResponse } from 'next/server'

import {
  clearToken,
  createCookieHeader,
  getAccessToken
} from '@/shared/lib/api-route'
import { deleteAccountApi, logoutUserApi } from '@/shared/api'

// 로그아웃
export async function GET() {
  const token = await getAccessToken()

  if (!token) {
    return NextResponse.json({
      status: 401,
      data: null,
      msg: '인증 토큰이 없습니다'
    })
  }

  const { status, data, msg } = await logoutUserApi({
    headers: createCookieHeader(token)
  })

  if (status !== '200') {
    return NextResponse.json({
      status: 500,
      data: null,
      msg: 'api 통신 실패'
    })
  }

  // cookie 클리어
  await clearToken()

  return NextResponse.json({
    status,
    data,
    msg
  })
}

// 계정 삭제
export async function DELETE() {
  const token = await getAccessToken()

  // cookie 클리어
  await clearToken()

  if (!token) throw Error('토큰 없음')

  const { status, data, msg } = await deleteAccountApi({
    headers: createCookieHeader(token)
  })

  if (status !== '200') {
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
