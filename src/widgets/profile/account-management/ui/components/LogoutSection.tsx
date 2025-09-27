import { LogOut } from 'lucide-react'

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
          <button className="ml-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2">
            <LogOut size={16} />
            로그아웃
          </button>
        </div>
      </div>
    </div>
  )
}
export default LogoutSection
