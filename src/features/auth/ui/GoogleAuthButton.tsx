'use client'

import Image from 'next/image'
import { AuthButton } from '@/shared/ui/button'
import GoogleLogo from '../assets/googleLogo.svg'
import { redirectToOAuth } from '../model/action'
import { SocialProvider } from '../model/enum'

const GoogleAuthButton = () => {
  const handleOAuthLogin = async () => {
    redirectToOAuth(SocialProvider.GOOGLE)
  }

  return (
    <AuthButton
      onClick={handleOAuthLogin}
      icon={
        <Image
          src={GoogleLogo}
          alt="구글 아이콘"
          width={24}
          height={24}
        />
      }
      aria-label={`구글 소셜 로그인`}>
      구글로 시작하기
    </AuthButton>
  )
}
export default GoogleAuthButton
