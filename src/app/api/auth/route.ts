import { NextResponse } from 'next/server'

import {
  clearToken,
  createCookieHeader,
  getAccessToken
} from '@/shared/lib/api-route'
import { deleteCookieApi } from '@/entities/user'

export async function GET() {
  const token = await getAccessToken()

  // cookie 클리어
  await clearToken()

  if (!token) throw Error('토큰 없음')

  const { status, data, msg } = await deleteCookieApi({
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
