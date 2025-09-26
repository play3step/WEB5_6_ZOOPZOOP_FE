'use client'

import { useState } from 'react'

export const useSearchKeywords = () => {
  const [searchKeywords, setSearchKeywords] = useState<string[]>([])

  const addSearchKeyword = (keyword: string) => {
    setSearchKeywords(prev => [...prev, keyword])
  }

  const removeSearchKeyword = (keyword: string) => {
    setSearchKeywords(prev => prev.filter(k => k !== keyword))
  }

  return {
    searchKeywords,
    addSearchKeyword,
    removeSearchKeyword
  }
}
