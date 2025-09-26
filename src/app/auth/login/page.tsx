import { Hero, OAuthButtonGroup } from '@/widgets'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '로그인',
  description: 'ZOOPZOOP 로그인 페이지'
}

const LoginPage = () => {
  return (
    <section className="h-screen flex-center flex-col gap-6">
      <Hero />
      <OAuthButtonGroup />
    </section>
  )
}
export default LoginPage
