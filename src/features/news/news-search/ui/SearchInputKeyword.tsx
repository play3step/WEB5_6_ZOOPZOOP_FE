import { Button } from '@/shared/ui/shadcn/button'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onAdd: () => void
  placeholder?: string
}

export const SearchInputKeyword = ({
  value,
  onChange,
  onAdd,
  placeholder = '키워드를 입력하세요'
}: SearchInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd()
    }
  }

  return (
    <div className="flex gap-2 flex-1 items-center">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-normal bg-white"
      />
      <Button
        onClick={onAdd}
        className="px-4 py-5 text-base bg-green-normal hover:bg-green-normal-hover text-white transition-all shadow-sm whitespace-nowrap">
        추가
      </Button>
    </div>
  )
}
