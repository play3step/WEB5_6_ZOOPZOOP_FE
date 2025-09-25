import { News } from '@/entities/news'
import { NewsCard } from '@/shared/ui/card'

interface Props {
  news: News[]
}

export const NewsGrid = async ({ news }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {news.map(item => (
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
