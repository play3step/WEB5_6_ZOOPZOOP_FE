import { User } from '@/entities/user/model/type'
import Image from 'next/image'

interface Props {
  user: User | null
}

export default function NavHeader({ user }: Props) {
  return (
    <header className="mb-2">
      <Image
        src="/zoopzoop.png"
        alt="logo"
        width={100}
        height={40}
        className="mb-4 hidden lg:block"
      />
      <h1 className="text-green-normal font-bold text-2xl text-center p-1 w-10 h-10 rounded-md border lg:hidden">
        쯉
      </h1>
      <div className="flex items-center gap-2 px-1 py-1 lg:rounded-md lg:bg-green-light lg:px-3 lg:py-2 ">
        <div className="w-7 h-7 overflow-hidden rounded-full border-1">
          <Image
            src={user ? user.profileUrl : '/zoopzoop.png'}
            alt="user image"
            width={30}
            height={30}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-base hidden lg:block">
          {user ? user.name : '사용자'}
        </p>
      </div>
    </header>
  )
}
