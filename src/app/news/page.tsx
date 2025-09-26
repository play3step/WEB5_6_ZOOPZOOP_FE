import { SearchSection } from '@/features/news-search'
import { MajorNews } from '@/widgets/news-major'
import { NewsCategory } from '@/widgets/news-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '뉴스',
  description: '뉴스'
}

export default async function News() {
  return (
    <div className="w-full flex flex-col p-6 lg:p-10 min-h-[calc(100vh-72px)]">
      <div className="flex-1 flex flex-col gap-8">
        <MajorNews />

        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">뉴스 키워드</h2>
          <SearchSection />
        </div>

        <div className="flex flex-col gap-10">
          <NewsCategory
            category="politics"
            categoryKor="정치"
          />
          <NewsCategory
            category="economy"
            categoryKor="경제"
          />
          <NewsCategory
            category="society"
            categoryKor="사회"
          />
          <NewsCategory
            category="it"
            categoryKor="IT"
          />
          <NewsCategory
            category="sports"
            categoryKor="스포츠"
          />
        </div>
      </div>
    </div>
  )
}
