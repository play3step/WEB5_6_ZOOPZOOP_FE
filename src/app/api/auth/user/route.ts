import { cookies } from 'next/headers'

import { NextResponse } from 'next/server'
import { fetchUser } from '@/entities/user'

export async function GET() {
  const accessToken = (await cookies()).get('accessToken')?.value

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
