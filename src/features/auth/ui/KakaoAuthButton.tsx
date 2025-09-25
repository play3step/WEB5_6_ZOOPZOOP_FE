'use client'

import Image from 'next/image'
import { AuthButton } from '@/shared/ui/button'
import KakaoLogo from '../assets/kakaoLogo.svg'
import { redirectToOAuth } from '../model/action'
import { SocialProvider } from '../model/enum'

const KakaoAuthButton = () => {
  const handleOAuthLogin = async () => {
    redirectToOAuth(SocialProvider.KAKAO)
  }

  return (
    <AuthButton
      className="bg-[#F8E078] hover:bg-[#f9dc5a] border-[#F8E078]"
      onClick={handleOAuthLogin}
      icon={
        <Image
          src={KakaoLogo}
          alt="카카오 아이콘"
          width={24}
          height={24}
        />
      }
      aria-label={`카카오 소셜 로그인`}>
      카카오로 시작하기
    </AuthButton>
  )
}
export default KakaoAuthButton
