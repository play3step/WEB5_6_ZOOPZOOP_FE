'use client'

const ExtensionCallbackPage = () => {
  return (
    <section className="h-screen flex-center flex-col gap-5">
      <h1 className="sr-only">크롬 확장 프로그램 callback 전용 페이지</h1>
      <h2 className="text-2xl font-semibold">
        크롬 확장 프로그램으로 로그인 성공
      </h2>
      <span className="text-lg">새 탭을 닫아주세요.</span>
    </section>
  )
}
export default ExtensionCallbackPage
