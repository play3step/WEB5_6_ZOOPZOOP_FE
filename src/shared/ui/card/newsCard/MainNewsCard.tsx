'use client'

import Image from 'next/image'
import { Badge } from '../../badge'
import dayjs from 'dayjs'

interface Props {
  title: string
  content: string
  imageUrl?: string
  category?: string
  link?: string
  createdAt: string
}

export const MainNewsCard = ({
  title,
  content,
  imageUrl,
  category,
  link,
  createdAt
}: Props) => {
  return (
    <div className="w-full max-w-[520px] rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
      <div
        className="w-full h-[280px] cursor-pointer rounded-t-lg overflow-hidden"
        onClick={() => {
          if (!link) return
          window.open(link, '_blank', 'noopener,noreferrer')
        }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="news"
            width={520}
            height={280}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            onError={e => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-[280px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">이미지 없음</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge name={category || ''} />
          <p className="text-sm text-gray-normal">
            {dayjs(createdAt).isValid()
              ? dayjs(createdAt).format('YYYY.MM.DD. HH:mm')
              : '발행일 정보 없음'}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3
            className="text-xl font-bold line-clamp-2 leading-tight cursor-pointer hover:text-green-normal transition-colors"
            onClick={() => {
              if (!link) return
              window.open(link, '_blank', 'noopener,noreferrer')
            }}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
