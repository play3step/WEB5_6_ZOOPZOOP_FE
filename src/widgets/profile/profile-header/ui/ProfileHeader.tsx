'use client'

import Image from 'next/image'
import { useUserStore } from '@/entities/user'
import { EditNickname } from '@/features/profile/edit-nickname'
import EmailInfo from '../components/EmailInfo'
import JoinDateInfo from '../components/JoinDateInfo'

const ProfileHeader = () => {
  const user = useUserStore(state => state.user)

  return (
    <section className="flex justify-center flex-col md:flex-row sm:justify-start gap-10 w-full">
      <h3
        id="profile-image"
        className="sr-only">
        프로필 이미지
      </h3>
      <div className="flex justify-center">
        <Image
          src={user ? user.profileUrl : '/profile.jpeg'}
          alt="사용자 프로필 사진"
          width={300}
          height={300}
          priority
          className="object-cover rounded-full overflow-hidden size-64"
        />
      </div>
      <div className="flex-1">
        {user ? (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-6 py-4 space-y-6">
              {/* 유저 닉네임 */}
              <EditNickname nickname={user.name} />
              {/* 유저 이메일 */}
              <EmailInfo email={user.email} />
              {/* 가입일 */}
              <JoinDateInfo />
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-lg p-6">
            사용자 정보를 불러오는 중...
          </div>
        )}
      </div>
    </section>
  )
}
export default ProfileHeader
