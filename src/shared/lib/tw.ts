import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tw = (...args: any[]) => {
  return twMerge(clsx(...args))
}

// shadcn이 cn으로 사용하기 떄문에 alias 설정
export const cn = tw
