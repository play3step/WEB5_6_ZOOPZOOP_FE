// 'use client'

// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

// interface Props {
//   accessToken: string
//   refreshToken: string
// }

// const AuthCallbackPage = async ({ searchParams }: { searchParams: Props }) => {
//   const router = useRouter()
//   const [message, setMessage] = useState('')

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search)
//     const isSuccess = Boolean(params.get('success'))
//     const accessToken = params.get('accessToken')
//     if (isSuccess) {
//       setMessage('로그인 성공! 잠시간 기다려주세요..')

//       // 유저 정보 전역 상태 저장

//       // 저장 후 리다이랙트
//       setTimeout(() => {
//         router.push('/news')
//       }, 2000)
//     } else {
//       setMessage('로그인 실패..')

//       setTimeout(() => {
//         router.push('/auth/login')
//       }, 2000)
//     }
//   }, [router])

//   return (
//     <section className="h-screen flex-center">
//       <div className="flex-center flex-col gap-4">
//         <div className="size-32 rounded-full border-16 border-gray-400 border-l-green-normal animate-spin"></div>
//         <span className="text-xl font-medium text-center">{message}</span>
//       </div>
//     </section>
//   )
// }
// export default AuthCallbackPage
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const access = url.searchParams.get('accessToken')
  const refresh = url.searchParams.get('refreshToken')

  if (!access) return NextResponse.redirect(new URL('/', url))

  const res = NextResponse.redirect(new URL('/', url))
  res.cookies.set('accessToken', access, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60
  })
  if (refresh) {
    res.cookies.set('refreshToken', refresh, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30
    })
  }
  return res
}
