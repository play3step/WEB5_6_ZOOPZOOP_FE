import { fetchNewsByKeywords } from '@/entities/news'
import { NewsGrid } from '@/widgets/news-section'

export default async function NewsSearch({
  searchParams
}: {
  searchParams: { keywords?: string | string[] }
}) {
  const rawKeywords = searchParams.keywords
  const keyword = Array.isArray(rawKeywords)
    ? rawKeywords[0]
    : rawKeywords?.trim()

  if (!keyword) {
    return (
      <div className="w-full flex flex-col p-10 min-h-[calc(100vh-72px)]">
        <div className="text-center text-gray-500">
          검색 키워드를 입력해주세요.
        </div>
      </div>
    )
  }

  const news = await fetchNewsByKeywords(keyword)

  return (
    <div className="w-full flex flex-col p-10 min-h-[calc(100vh-72px)]">
      <h1 className="text-2xl font-bold mb-6">뉴스 키워드: {keyword}</h1>
      {news?.data?.items?.length > 0 ? (
        <NewsGrid news={news.data.items} />
      ) : (
        <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
      )}
    </div>
  )
}
