import { EditNickname } from '@/features/profile/edit-nickname'
import Image from 'next/image'
import EmailInfo from '../components/EmailInfo'
import JoinDateInfo from '../components/JoinDateInfo'

const ProfileHeader = () => {
  return (
    <section className="flex justify-center flex-col md:flex-row sm:justify-start gap-10 w-full">
      <h3
        id="profile-image"
        className="sr-only">
        프로필 이미지
      </h3>
      <div className="flex justify-center">
        <Image
          src="/profile.jpeg"
          alt="사용자 프로필 사진"
          width={300}
          height={300}
          priority
          className="object-cover rounded-full overflow-hidden size-64"
        />
      </div>
      <div className="flex-1">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="px-6 py-4 space-y-6">
            {/* 닉네임 */}
            <EditNickname />
            {/* 이메일 */}
            <EmailInfo />
            {/* 가입일 */}
            <JoinDateInfo />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProfileHeader
