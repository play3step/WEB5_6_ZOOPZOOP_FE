'use client'

import { LucideIcon } from 'lucide-react'
import ActionButton from './ActionButton'
import SearchBar from './Search'
import { useCallback, useState } from 'react'

export type Button = {
  label: string
  icon: LucideIcon
  onClick: () => void
}

interface Props {
  title: string
  buttons?: Button[]
  searchBar: {
    placeholder: string
    // TODO: API 응답 타입에 따라 Promise<SearchResult[]> 등으로 변경 예정
    onSearch?: (query: string) => void | Promise<void>
  }
}

function Header({ title, buttons, searchBar }: Props) {
  const [query, setQuery] = useState('')

  const handleSearch = useCallback(() => {
    if (searchBar.onSearch) {
      searchBar.onSearch(query)
    }
    setQuery('')
  }, [searchBar, query])

  const searchHeader = useCallback(() => {
    return (
      <SearchBar
        placeholder={searchBar.placeholder}
        value={query}
        onChange={setQuery}
        onEnter={handleSearch}
      />
    )
  }, [searchBar.placeholder, query, handleSearch])

  const buttonWithSearchHeader = useCallback(() => {
    return (
      <div className="flex justify-between">
        <div className="flex gap-3">
          {buttons &&
            buttons.map(button => (
              <ActionButton
                key={button.label}
                label={button.label}
                icon={button.icon}
                onClick={button.onClick}
              />
            ))}
        </div>
        <SearchBar
          placeholder={searchBar.placeholder}
          value={query}
          onChange={setQuery}
          onEnter={handleSearch}
        />
      </div>
    )
  }, [buttons, searchBar.placeholder, query, handleSearch])

  return (
    <header className="bg-gray-darker p-6">
      <h1 className="text-white font-bold text-2xl mb-7">{title}</h1>
      {buttons ? buttonWithSearchHeader() : searchHeader()}
    </header>
  )
}
export default Header
