import { GoogleAuthButton, KakaoAuthButton } from '@/features/auth'

const ButtonGroup = () => {
  return (
    <div className="flex flex-col w-[340px] gap-3.5">
      <KakaoAuthButton />
      <GoogleAuthButton />
    </div>
  )
}
export default ButtonGroup
