import { fetchNews } from '@/entities/news'
import Pagination from '@/shared/ui/pagination/Pagination'
import { NewsGrid } from '@/widgets/news-section'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '뉴스',
  description: '뉴스'
}

export default async function News() {
  const news = await fetchNews()
  return (
    <div className="w-full flex flex-col p-10 min-h-[calc(100vh-72px)]">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">뉴스</h1>
        <NewsGrid news={news.data.items} />
      </div>
      <div className="flex justify-center mt-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Pagination totalPages={5} />
        </Suspense>
      </div>
    </div>
  )
}
