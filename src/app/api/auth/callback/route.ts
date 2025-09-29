import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const access = url.searchParams.get('accessToken')
  const refresh = url.searchParams.get('refreshToken')

  if (!access) return NextResponse.redirect(new URL('/auth/login', url))

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
