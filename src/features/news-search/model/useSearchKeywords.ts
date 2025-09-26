'use client'

import { useState } from 'react'

export const useSearchKeywords = () => {
  const [searchKeywords, setSearchKeywords] = useState<string[]>([])

  const addSearchKeyword = (keyword: string) => {
    setSearchKeywords([...searchKeywords, keyword])
  }

  const removeSearchKeyword = (keyword: string) => {
    setSearchKeywords(searchKeywords.filter(k => k !== keyword))
  }

  return { searchKeywords, addSearchKeyword, removeSearchKeyword }
}
