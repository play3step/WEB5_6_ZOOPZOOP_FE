import { UpdateNicknameResponse, updateUserNickname } from '@/entities/user'
import { createCookieHeader, withAuth } from '@/shared/lib/api-route'

export async function PUT(request: Request) {
  const payload = await request.json()

  return withAuth<UpdateNicknameResponse>(
    async token =>
      await updateUserNickname(payload, {
        headers: createCookieHeader(token)
      })
  )
  // const { status, data, msg } = await updateUserNickname(payload, {
  //   headers: createCookieHeader(token)
  // })

  // if (status !== '200' || !data) {
  //   return NextResponse.json({
  //     status: 500,
  //     data: null,
  //     msg: 'api 통신 실패'
  //   })
  // }

  // return NextResponse.json({
  //   status,
  //   data,
  //   msg
  // })
}
