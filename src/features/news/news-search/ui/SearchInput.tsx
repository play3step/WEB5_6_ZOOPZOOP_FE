'use client'

import { SearchBar } from '@/shared/ui/header'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export const SearchInput = () => {
  const [search, setSearch] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('keywords') || ''
    setSearch(query)
  }, [searchParams])

  const handleChange = (value: string) => {
    setSearch(value)
  }

  const handleEnter = () => {
    const params = new URLSearchParams(searchParams)
    if (search.trim()) {
      params.set('keywords', search.trim())
    } else {
      params.delete('keywords')
    }

    router.push(`/news/search?${params.toString()}`)
  }

  return (
    <SearchBar
      placeholder="뉴스 검색..."
      value={search}
      onChange={handleChange}
      onEnter={handleEnter}
    />
  )
}
