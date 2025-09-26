'use client'

import { tw } from '@/shared/lib'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const AuthButton = ({
  className,
  children,
  icon,
  onClick,
  ...restProps
}: Props) => {
  return (
    <button
      {...restProps}
      type="button"
      className={tw(
        'flex-center gap-3 border py-3.5 rounded-lg w-full text-base font-bold cursor-pointer active:scale-[0.98] shadow-sm',
        className
      )}
      onClick={onClick}>
      {icon}
      {children}
    </button>
  )
}
export default AuthButton
