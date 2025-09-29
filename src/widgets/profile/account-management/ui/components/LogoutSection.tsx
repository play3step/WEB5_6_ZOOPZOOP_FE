import { LogoutButton } from '@/features/auth'

const LogoutSection = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-1">로그아웃</h3>
            <p className="text-sm text-gray-600">
              이 기기에서 계정 연결을 해제합니다
            </p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}
export default LogoutSection
