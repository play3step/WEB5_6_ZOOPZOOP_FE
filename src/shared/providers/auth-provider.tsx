'use client'

import { useUserQuery, useUserStore } from '@/entities/user'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

// 사용자가 웹서비스에 접근 시 사용자 인증 후 적용
const AuthProvider = ({ children }: Props) => {
  // const user = useUserStore(state => state.user)
  // const setUser = useUserStore(state => state.setUser)
  // const { data, isPending } = useUserQuery({ enabled: !user })

  // useEffect(() => {
  //   if (data && !user) setUser(data)
  // }, [data, user, setUser])

  // if (isPending) {
  //   return (
  //     <section className="h-screen flex-center">
  //       <div className="size-32 rounded-full border-16 border-gray-400 border-l-green-normal animate-spin"></div>
  //     </section>
  //   )
  // }

  return <>{children}</>
}

export default AuthProvider
