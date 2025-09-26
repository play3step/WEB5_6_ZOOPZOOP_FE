import { NewsHeader } from '@/widgets/news/news-header'
import { Suspense } from 'react'

export default function NewsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex-1">
      <Suspense fallback={<div>Loading...</div>}>
        <NewsHeader />
      </Suspense>
      <div className="w-[1200px] mx-auto">{children}</div>
    </div>
  )
}
