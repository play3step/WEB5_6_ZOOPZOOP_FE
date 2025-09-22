import { useCallback, useMemo, useState } from 'react'

interface PaginationProps {
  totalPages: number
  initialPage?: number
  maxVisiblePages?: number
  onPageChange?: (page: number) => void
}

export const usePagination = ({
  totalPages,
  initialPage = 1,
  maxVisiblePages = 5,
  onPageChange
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const pages = useMemo(() => {
    // 보여줄 페이지보다 총 페이지 수가 더 적으면 페이지 배열 전부 보여줌
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // 현재 페이지를 중심으로 앞 뒤로 몇 개씩 보여줄지
    const halfVisible = Math.floor(maxVisiblePages / 2)
    // 시작 페이지
    const startPage = Math.max(
      1,
      Math.min(currentPage - halfVisible, totalPages - maxVisiblePages + 1)
    )
    // 끝 페이지
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    // 현재 코어 페이지
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }, [currentPage, totalPages, maxVisiblePages])

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  const goToPage = useCallback(
    (page: number) => {
      const clampedPage = Math.max(1, Math.min(page, totalPages))

      if (clampedPage === currentPage) return

      setCurrentPage(clampedPage)
      onPageChange?.(clampedPage)
    },
    [currentPage, totalPages, onPageChange]
  )

  const goToPrevious = useCallback(() => {
    goToPage(currentPage - 1)
  }, [goToPage, currentPage])

  const goToNext = useCallback(() => {
    goToPage(currentPage + 1)
  }, [goToPage, currentPage])

  const goToFirst = useCallback(() => {
    goToPage(1)
  }, [goToPage])

  const goToLast = useCallback(() => {
    goToPage(totalPages)
  }, [goToPage, totalPages])

  return {
    currentPage,
    totalPages,
    pages,
    canGoNext,
    canGoPrevious,
    goToFirst,
    goToLast,
    goToNext,
    goToPrevious,
    goToPage
  }
}
