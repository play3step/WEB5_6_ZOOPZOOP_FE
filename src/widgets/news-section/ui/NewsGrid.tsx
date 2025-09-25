import { fetchNews } from '@/entities/news'
import { NewsCard } from '@/shared/ui/card'

export const NewsGrid = async () => {
  const news = await fetchNews()
  return (
    <div className="flex flex-wrap gap-4">
      {news.data.items.map(item => (
        <NewsCard
          key={item.title}
          title={item.title}
          content={item.description}
          createdAt={item.pubDate}
        />
      ))}
    </div>
  )
}
