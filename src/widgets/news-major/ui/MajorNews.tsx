import { fetchNews } from '@/entities/news'
import { MainNewsCard } from '@/shared/ui/card/newsCard/MainNewsCard'
import { SubNewsCard } from '@/shared/ui/card/newsCard/SubNewsCard'

export const MajorNews = async () => {
  const news = await fetchNews()
  const limitedNews = news?.data?.items?.slice(0, 4) ?? []

  if (limitedNews.length === 0) {
    return null
  }

  const [mainNews, ...subNews] = limitedNews

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800">주요 뉴스</h2>

      <div className="flex gap-6">
        <MainNewsCard
          title={mainNews.title}
          content={mainNews.description}
          imageUrl={`/api/og-image?url=${encodeURIComponent(mainNews.link)}`}
          createdAt={mainNews.pubDate}
          link={mainNews.link}
        />

        <div className="flex flex-col gap-4">
          {subNews.map((item, index) => (
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
      </div>
    </div>
  )
}
