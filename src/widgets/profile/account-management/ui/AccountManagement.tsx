import DeleteAccountSection from './components/DeleteAccountSection'
import LogoutSection from './components/LogoutSection'

const AccountManagement = () => {
  return (
    <section
      aria-labelledby="profile-info"
      className="mt-8">
      <h3
        id="profile-info"
        className="text-lg font-semibold mb-4">
        DANGER ZONE
      </h3>
      {/* 로그아웃 섹션 */}
      <LogoutSection />
      {/* 계정 삭제 섹션 */}
      <DeleteAccountSection />
    </section>
  )
}
export default AccountManagement
