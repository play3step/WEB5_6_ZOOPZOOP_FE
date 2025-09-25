import { GoogleAuthButton, KakaoAuthButton } from '@/shared/ui/button'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <section className="h-screen flex-center flex-col gap-6">
      <h1 className="sr-only">로그인 페이지</h1>
      <div className="flex-center flex-col gap-2">
        <Image
          src={'/logoWithTitle.webp'}
          alt="ZOOPZOOP logo"
          width={300}
          height={200}
        />
        <span className="text-xl font-bold">
          마음에 드는 페이지, 놓치지 말고 줍줍하세요!
        </span>
      </div>
      <div className="flex flex-col w-[340px] gap-3.5">
        <KakaoAuthButton />
        <GoogleAuthButton />
      </div>
    </section>
  )
}
export default LoginPage
