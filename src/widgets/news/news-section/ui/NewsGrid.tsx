import { News } from '@/entities/news'
import { NewsCard } from '@/shared/ui/card'

interface Props {
  news: News[]
}
export const NewsGrid = ({ news }: Props) => {
  const limitedNews = news.slice(0, 20)

  return (
    <div className="flex flex-wrap gap-4">
      {limitedNews.map((item, index) => (
        <NewsCard
          key={item.link || `${item.title}-${index}`}
          title={item.title}
          content={item.description}
          createdAt={item.pubDate}
          link={item.link}
          imageUrl={`/api/og-image?url=${encodeURIComponent(item.link)}`}
        />
      ))}
    </div>
  )
}
