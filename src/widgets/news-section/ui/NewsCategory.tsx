import { fetchNewsByKeywords } from '@/entities/news'
import { SubNewsCard } from '@/shared/ui/card'
import Link from 'next/link'

interface Props {
  category: string
  categoryKor: string // 한글 카테고리명 추가
}

export const NewsCategory = async ({ category, categoryKor }: Props) => {
  const news = await fetchNewsByKeywords(categoryKor)
  const limitedNews = news?.data?.items?.slice(0, 4) ?? []

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">{categoryKor}</h2>
        <Link
          href={`/news/${category}`}
          className="text-green-normal hover:text-green-normal-hover font-medium text-sm transition-colors cursor-pointer">
          자세히 보기 →
        </Link>
      </div>

      {limitedNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {limitedNews.map((item, index) => (
            <SubNewsCard
              key={item.link || `${item.title}-${index}`}
              title={item.title}
              content={item.description}
              imageUrl={`/api/og-image?url=${encodeURIComponent(item.link)}`}
              createdAt={item.pubDate}
              link={item.link}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          해당 카테고리의 뉴스가 없습니다.
        </div>
      )}
    </div>
  )
}
