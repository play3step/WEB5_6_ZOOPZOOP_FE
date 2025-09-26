import { fetchNews } from '@/entities/news'
import { SearchSection } from '@/features/news-search'
import { MajorNews } from '@/widgets/news-major'
import { NewsGrid } from '@/widgets/news-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '뉴스',
  description: '뉴스'
}

export default async function News() {
  const news = await fetchNews()
  return (
    <div className="w-full flex flex-col p-10 min-h-[calc(100vh-72px)]">
      <div className="flex-1 flex flex-col gap-5">
        <MajorNews />
        <div>
          <h1 className="text-2xl font-bold mb-6">뉴스 키워드</h1>
          <SearchSection />
        </div>
        <NewsGrid news={news.data.items} />
      </div>
    </div>
  )
}
