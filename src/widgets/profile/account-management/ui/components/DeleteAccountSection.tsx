import { AlertTriangle, UserX } from 'lucide-react'

const DeleteAccountSection = () => {
  return (
    <div className="bg-white border border-red-200 rounded-lg">
      <div className="px-6 py-4 border-b border-red-200 bg-red-50 rounded-t-lg">
        <h2 className="text-lg font-medium text-red-900 flex items-center gap-2">
          <AlertTriangle size={20} />
          계정 삭제
        </h2>
        <p className="text-sm text-red-700 mt-1">
          신중하게 검토가 필요한 작업입니다
        </p>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-1">
              계정 영구 삭제
            </h3>
            <p className="text-sm text-gray-600">
              계정을 삭제하면 모든 데이터가 영구적으로 사라지며 복구할 수
              없습니다.
            </p>
          </div>
          <button className="ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center gap-2">
            <UserX size={16} />
            계정 삭제
          </button>
        </div>
      </div>
    </div>
  )
}
export default DeleteAccountSection
