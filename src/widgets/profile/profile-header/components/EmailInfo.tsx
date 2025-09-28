interface Props {
  email: string
}

const EmailInfo = ({ email }: Props) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 mb-2"
        htmlFor="email">
        이메일
      </label>
      <div className="flex gap-3">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 cursor-not-allowed"
          id="email"
          placeholder="user@example.com"
          disabled
          value={email}
        />
        <span className="px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-md border border-yellow-200">
          KAKAO
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        소셜 로그인으로 연결된 이메일은 변경할 수 없습니다
      </p>
    </div>
  )
}
export default EmailInfo
