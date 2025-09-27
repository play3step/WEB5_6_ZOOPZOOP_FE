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

export const BaseNewsCard = ({
  title,
  content,
  imageUrl,
  category,
  link,
  createdAt
}: Props) => {
  return (
    <div className="w-[320px] h-[371px] rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
      <div
        className={`w-full h-[200px] rounded-t-lg overflow-hidden ${link ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={() => {
          if (!link) return
          window.open(link, '_blank', 'noopener,noreferrer')
        }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="news"
            width={360}
            height={200}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            onError={e => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">이미지 없음</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge name={category || ''} />
          <p className="text-xs text-gray-normal">
            {dayjs(createdAt).format('YYYY.MM.DD. HH:mm') ||
              '2025.01.01. 00:00'}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold line-clamp-1 leading-tight cursor-pointer hover:text-green-normal transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-3">{content}</p>
        </div>
      </div>
    </div>
  )
}
