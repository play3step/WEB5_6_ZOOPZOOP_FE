'use client'

import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'

import { useSearchKeywords } from '../model/useSearchKeywords'
import { validateKeyword } from '../lib/validation'

import { KeywordList } from './KeywordList'
import { SearchButton } from './SearchButton'
import { SearchInputKeyword } from './SearchInputKeyword'
import { useRouter } from 'next/navigation'

export const SearchSection = () => {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()

  const { searchKeywords, addSearchKeyword, removeSearchKeyword } =
    useSearchKeywords()

  const handleAddSearchKeyword = () => {
    const validation = validateKeyword(keyword, searchKeywords)

    if (!validation.isValid) {
      alert(validation.message)
      return
    }
    addSearchKeyword(keyword)
    setKeyword('')
  }

  const handleSearch = () => {
    if (searchKeywords.length === 0) {
      alert('최소 1개의 키워드를 입력해주세요.')
      return
    }
    router.push(`/news/search?keywords=${searchKeywords.join(',')}`)
  }

  return (
    <div className="col-span-1 bg-white rounded-xl p-4  shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-green-light to-green-light-hover rounded-lg flex items-center justify-center shadow-sm">
            <FiSearch className="text-green-normal text-lg" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            키워드 검색{' '}
            <span className="text-base text-gray-normal">(최대 4개)</span>
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <SearchInputKeyword
              value={keyword}
              onChange={setKeyword}
              onAdd={handleAddSearchKeyword}
            />
          </div>

          <KeywordList
            keywords={searchKeywords}
            onRemove={removeSearchKeyword}
          />

          <SearchButton onClick={handleSearch}>키워드 검색하기</SearchButton>
        </div>
      </div>
    </div>
  )
}
