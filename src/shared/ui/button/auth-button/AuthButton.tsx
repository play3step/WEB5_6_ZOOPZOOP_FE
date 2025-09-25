import { tw } from '@/shared/lib'
import Image from 'next/image'

interface Props {
  socialType: string
  icon: string
  children: React.ReactNode
  className?: string
}

const AuthButton = ({ className, children, icon, socialType }: Props) => {
  return (
    <button
      type="button"
      aria-label={`${socialType} 소셜 로그인 버튼`}
      className={tw(
        'flex-center gap-3 border py-3.5 rounded-lg w-full text-base font-bold cursor-pointer active:scale-[0.98] shadow-sm',
        className
      )}>
      <Image
        src={icon}
        alt={socialType}
        width={24}
        height={24}
      />
      {children}
    </button>
  )
}
export default AuthButton
