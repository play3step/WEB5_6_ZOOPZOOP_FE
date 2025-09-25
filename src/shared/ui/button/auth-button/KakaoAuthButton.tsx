import AuthButton from './AuthButton'
import KakaoLogo from './assets/kakaoLogo.svg'

const KakaoAuthButton = () => {
  return (
    <AuthButton
      className="bg-[#F8E078] hover:bg-[#f9dc5a] border-[#F8E078]"
      icon={KakaoLogo}
      socialType="카카오">
      카카오로 시작하기
    </AuthButton>
  )
}
export default KakaoAuthButton
