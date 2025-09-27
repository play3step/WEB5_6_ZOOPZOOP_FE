import { AccountManagement, ProfileHeader } from '@/widgets'

const ProfilePage = () => {
  return (
    <article className="px-10 py-20 max-w-[1200px]">
      <h2 className="sr-only">계정 관리</h2>
      {/* 프로필 섹션 */}
      <ProfileHeader />
      {/* 로그아웃, 회원 탈퇴  */}
      <AccountManagement />
    </article>
  )
}
export default ProfilePage
