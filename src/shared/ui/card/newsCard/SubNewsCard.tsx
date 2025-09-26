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

export const SubNewsCard = ({
  title,
  content,
  imageUrl,
  category,
  link,
  createdAt
}: Props) => {
  return (
    <div className="w-full h-[120px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100">
      <div className="flex gap-5 h-full">
        <div
          className="w-21 h-21 flex-shrink-0 cursor-pointer rounded-lg overflow-hidden"
          onClick={() => {
            window.open(link, '_blank')
          }}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="news"
              width={84}
              height={84}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              onError={e => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
              <span className="text-xs text-gray-500">이미지</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <div className="flex items-center gap-2">
            {category && <Badge name={category} />}
            <p className="text-xs text-gray-normal">
              {dayjs(createdAt).format('MM.DD HH:mm')}
            </p>
          </div>
          <div>
            <h4
              className="text-sm font-semibold line-clamp-2 leading-tight cursor-pointer hover:text-green-normal transition-colors mb-1"
              onClick={() => window.open(link, '_blank')}>
              {title}
            </h4>
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
