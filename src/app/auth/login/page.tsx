import { Hero, OAuthButtonGroup } from '@/widgets'

const LoginPage = () => {
  return (
    <section className="h-screen flex-center flex-col gap-6">
      <Hero />
      <OAuthButtonGroup />
    </section>
  )
}
export default LoginPage
