import { fetchUser } from '@/entities/user/api/user.controller'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const accessToken = (await cookieStore).get('accessToken')?.value

  const { status, data, msg } = await fetchUser({
    headers: {
      Cookie: `accessToken=${accessToken}`
    }
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
