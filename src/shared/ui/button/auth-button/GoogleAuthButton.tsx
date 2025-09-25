import AuthButton from './AuthButton'
import GoogleLogo from './assets/googleLogo.svg'

const GoogleAuthButton = () => {
  return (
    <AuthButton
      icon={GoogleLogo}
      socialType="구글">
      구글로 시작하기
    </AuthButton>
  )
}
export default GoogleAuthButton
