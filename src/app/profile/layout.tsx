export default function ProfileLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex-1">
      <header className="w-full h-18 py-4 px-8 bg-gray-dark-active text-white flex items-center justify-between">
        <h2 className="text-xl font-bold">계정 관리</h2>
      </header>
      {children}
    </div>
  )
}
