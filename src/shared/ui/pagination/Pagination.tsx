'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { usePagination } from '@/shared/hooks'
import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '../shadcn/pagination'

interface Props {
  totalPages: number
  maxVisiblePages?: number
}

const Pagination = ({ totalPages, maxVisiblePages = 5 }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 쿼리 스트링에서 현재 페이지 추출
  const currentPage = Number(searchParams.get('page')) || 1

  // 쿼리 스트링 기반으로 페이지 이동
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`?${params.toString()}`) // 실제 적용할 땐 수정이 필요할수도?
  }

  const {
    canGoNext,
    canGoPrevious,
    goToNext,
    goToPage,
    goToPrevious,
    pages,
    goToFirst,
    goToLast
  } = usePagination({
    totalPages,
    initialPage: currentPage,
    onPageChange: handlePageChange,
    maxVisiblePages
  })

  return (
    <PaginationContainer>
      <PaginationContent>
        {/* 맨 첫번째 페이지로 이동 */}
        <PaginationItem>
          <PaginationFirst onClick={goToFirst} />
        </PaginationItem>
        {/* 이전 페이지 이동 */}
        <PaginationItem>
          <PaginationPrevious
            onClick={canGoPrevious ? goToPrevious : undefined}
          />
        </PaginationItem>
        {/* 코어 패아자  */}
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => goToPage(page)}
              isActive={currentPage === page}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* 다음 페이지 이동 */}
        <PaginationItem>
          <PaginationNext onClick={canGoNext ? goToNext : undefined} />
        </PaginationItem>
        {/* 맨 마지막 페이지로 이동 */}
        <PaginationItem>
          <PaginationLast onClick={goToLast} />
        </PaginationItem>
      </PaginationContent>
    </PaginationContainer>
  )
}
export default Pagination
