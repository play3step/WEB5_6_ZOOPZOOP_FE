const EditNickname = () => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor="nickname">
        닉네임
      </label>
      <div className="flex gap-3">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="nickname"
          placeholder="닉네임을 입력하세요"
        />
        <button
          className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
          type="button">
          변경
        </button>
      </div>
    </div>
  )
}
export default EditNickname
